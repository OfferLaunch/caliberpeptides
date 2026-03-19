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
    // Check if user is authenticated
    const {
      data: { user },
    } = await supabase.auth.getUser()

    // Check for research purpose cookie
    const hasPurposeCookie = request.cookies.has('caliber_research_purpose')

    // If on public route, allow access
    if (publicRoutes.some((route) => pathname.startsWith(route))) {
      // If authenticated and visiting /access, redirect to home
      if (user && pathname === '/access') {
        return NextResponse.redirect(new URL('/', request.url))
      }
      return response
    }

    // If not authenticated OR missing purpose cookie, redirect to /access
    if (!user || !hasPurposeCookie) {
      const accessUrl = new URL('/access', request.url)
      accessUrl.searchParams.set('next', pathname)
      return NextResponse.redirect(accessUrl)
    }

    return response
  } catch (error) {
    // On error, redirect to /access to be safe
    const accessUrl = new URL('/access', request.url)
    accessUrl.searchParams.set('next', pathname)
    return NextResponse.redirect(accessUrl)
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|logos|images|.*\\.png$|.*\\.svg$).*)',
  ],
}
