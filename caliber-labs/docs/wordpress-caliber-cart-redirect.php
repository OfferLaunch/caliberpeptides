<?php
/**
 * Caliber Labs – cart redirect for full checkout (order bumps).
 *
 * When WOOCOMMERCE_CHECKOUT_MODE=checkout, the Next.js app redirects users here with a signed
 * cart payload. This script adds the items to the WooCommerce cart and redirects to /checkout/
 * so order-bump and checkout plugins work.
 *
 * INSTALL:
 * 1. On your WordPress server, go to wp-content/mu-plugins/ (create if needed).
 * 2. Create a file named caliber-cart-redirect.php and paste this entire file.
 * 3. In wp-config.php (before "That's all, stop editing!"), add:
 *    define( 'CALIBER_CART_SECRET', 'your-long-random-secret-here' );
 * 4. In your Next.js .env.local (and production env), set:
 *    WOOCOMMERCE_CHECKOUT_MODE=checkout
 *    WOOCOMMERCE_CART_SECRET=your-long-random-secret-here
 *    (Same value as CALIBER_CART_SECRET in wp-config.php.)
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'caliber/v1', '/cart-redirect', array(
		'methods'             => 'GET',
		'permission_callback' => '__return_true',
		'callback'            => 'caliber_cart_redirect',
		'args'                => array(
			'p' => array( 'required' => true, 'type' => 'string' ),
			's' => array( 'required' => true, 'type' => 'string' ),
		),
	) );
} );

function caliber_cart_redirect( $request ) {
	if ( ! defined( 'CALIBER_CART_SECRET' ) || CALIBER_CART_SECRET === '' ) {
		return new WP_Error( 'config', 'CALIBER_CART_SECRET is not set in wp-config.php.', array( 'status' => 500 ) );
	}

	$payload_b64 = $request->get_param( 'p' );
	$sig         = $request->get_param( 's' );
	if ( ! is_string( $payload_b64 ) || ! is_string( $sig ) ) {
		return new WP_Error( 'params', 'p and s are required.', array( 'status' => 400 ) );
	}

	$expected_sig = hash_hmac( 'sha256', $payload_b64, CALIBER_CART_SECRET );
	if ( ! hash_equals( $expected_sig, $sig ) ) {
		return new WP_Error( 'auth', 'Invalid signature.', array( 'status' => 401 ) );
	}

	$payload_json = base64_decode( strtr( $payload_b64, '-_', '+/' ), true );
	if ( $payload_json === false ) {
		return new WP_Error( 'params', 'Invalid payload.', array( 'status' => 400 ) );
	}

	$data = json_decode( $payload_json, true );
	if ( ! is_array( $data ) || ! isset( $data['cart'] ) || ! is_array( $data['cart'] ) ) {
		return new WP_Error( 'params', 'Invalid payload structure.', array( 'status' => 400 ) );
	}

	if ( ! function_exists( 'WC' ) || ! WC()->cart ) {
		return new WP_Error( 'woo', 'WooCommerce is not active.', array( 'status' => 503 ) );
	}

	WC()->cart->empty_cart();

	foreach ( $data['cart'] as $item ) {
		$product_id = isset( $item['id'] ) ? absint( $item['id'] ) : 0;
		$quantity   = isset( $item['quantity'] ) ? max( 1, absint( $item['quantity'] ) ) : 1;
		if ( $product_id < 1 ) {
			continue;
		}
		$product = wc_get_product( $product_id );
		if ( ! $product ) {
			continue;
		}
		WC()->cart->add_to_cart( $product_id, $quantity );
	}

	$checkout_url = wc_get_checkout_url();
	wp_safe_redirect( $checkout_url, 302 );
	exit;
}
