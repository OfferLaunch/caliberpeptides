<?php
/**
 * Caliber Labs – custom order endpoint (bypasses REST API "create" permission).
 *
 * INSTALL: Add this as a Must-Use plugin so it loads automatically.
 * 1. On your WordPress server, go to wp-content/mu-plugins/ (create the folder if it doesn’t exist).
 * 2. Create a file named caliber-order-endpoint.php and paste this entire file into it.
 * 3. In wp-config.php (before "That's all, stop editing!"), add:
 *    define( 'CALIBER_ORDER_SECRET', 'your-long-random-secret-here' );
 * 4. In your Next.js .env.local, set:
 *    WOOCOMMERCE_ORDER_SECRET=your-long-random-secret-here
 *    (Same value as in wp-config.php. You can leave WOOCOMMERCE_CONSUMER_KEY and WOOCOMMERCE_CONSUMER_SECRET unset.)
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'caliber/v1', '/create-order', array(
		'methods'             => 'POST',
		'permission_callback' => '__return_true',
		'callback'            => 'caliber_create_order',
		'args'                => array(
			'secret' => array( 'required' => true ),
			'email'  => array( 'required' => true ),
			'cart'   => array( 'required' => true, 'type' => 'array' ),
		),
	) );
} );

function caliber_create_order( $request ) {
	if ( ! defined( 'CALIBER_ORDER_SECRET' ) || CALIBER_ORDER_SECRET === '' ) {
		return new WP_Error( 'config', 'CALIBER_ORDER_SECRET is not set in wp-config.php.', array( 'status' => 500 ) );
	}

	$secret = $request->get_param( 'secret' );
	if ( ! is_string( $secret ) || $secret !== CALIBER_ORDER_SECRET ) {
		return new WP_Error( 'auth', 'Invalid secret.', array( 'status' => 401 ) );
	}

	$email = $request->get_param( 'email' );
	$cart  = $request->get_param( 'cart' );
	if ( ! is_string( $email ) || $email === '' || ! is_array( $cart ) || empty( $cart ) ) {
		return new WP_Error( 'params', 'email and cart are required.', array( 'status' => 400 ) );
	}

	if ( ! function_exists( 'wc_create_order' ) ) {
		return new WP_Error( 'woo', 'WooCommerce is not active.', array( 'status' => 503 ) );
	}

	$order = wc_create_order();
	if ( ! $order ) {
		return new WP_Error( 'create', 'Could not create order.', array( 'status' => 500 ) );
	}

	$order->set_billing_email( $email );

	foreach ( $cart as $item ) {
		$product_id = isset( $item['id'] ) ? absint( $item['id'] ) : 0;
		$quantity   = isset( $item['quantity'] ) ? max( 1, absint( $item['quantity'] ) ) : 1;
		if ( $product_id < 1 ) {
			continue;
		}
		$product = wc_get_product( $product_id );
		if ( ! $product ) {
			return new WP_Error( 'product', 'Invalid product ID: ' . $product_id, array( 'status' => 400 ) );
		}
		$order->add_product( $product, $quantity );
	}

	$order->calculate_totals();
	$order->save();

	$order_id   = $order->get_id();
	$order_key  = $order->get_order_key();
	$payment_url = wc_get_checkout_url() . 'order-pay/' . $order_id . '/?pay_for_order=true&key=' . $order_key;

	return rest_ensure_response( array( 'payment_url' => $payment_url, 'order_id' => $order_id ) );
}
