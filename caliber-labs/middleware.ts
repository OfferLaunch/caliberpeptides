import { NextRequest, NextResponse } from 'next/server'
import { createMiddlewareSupabaseClient } from './lib/supabase-middleware'

const publicRoutes = ['/access', '/api/auth', '/privacy', '/terms']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createMiddlewareSupabaseClient(request, response)

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    const hasPurposeCookie = request.cookies.has('caliber_research_purpose')
    const accessOverlay =
      request.nextUrl.searchParams.get('access') === 'true'

    const fullyGated = Boolean(user && hasPurposeCookie)

    // Logged-in users hitting the gate overlay → continue to intended page
    if (pathname === '/' && accessOverlay && fullyGated) {
      const rawNext = request.nextUrl.searchParams.get('next') || '/'
      const safeNext =
        rawNext.startsWith('/') && !rawNext.startsWith('//')
          ? rawNext
          : '/'
      return NextResponse.redirect(new URL(safeNext, request.url))
    }

    // Home with access overlay: render homepage + modal (no redirect loop)
    if (pathname === '/' && accessOverlay) {
      return response
    }

    if (publicRoutes.some((route) => pathname.startsWith(route))) {
      if (user && pathname === '/access') {
        return NextResponse.redirect(new URL('/', request.url))
      }
      return response
    }

    if (!fullyGated) {
      const gateUrl = new URL('/', request.url)
      gateUrl.searchParams.set('access', 'true')
      const returnTo =
        pathname + (request.nextUrl.search || '')
      gateUrl.searchParams.set(
        'next',
        returnTo.startsWith('/') ? returnTo : '/'
      )
      return NextResponse.redirect(gateUrl)
    }

    return response
  } catch {
    const gateUrl = new URL('/', request.url)
    gateUrl.searchParams.set('access', 'true')
    gateUrl.searchParams.set('next', pathname)
    return NextResponse.redirect(gateUrl)
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|logos|images|.*\\.png$|.*\\.svg$).*)',
  ],
}
