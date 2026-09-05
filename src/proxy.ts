import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
 const path= request.nextUrl.pathname;

 const isPublicPath = path==='/login' || 
                    path==='/signup' ||
                    path==='/verifyemail';

 const token = request.cookies.get("token")?.value || '';

 if(isPublicPath && token) { 
  return NextResponse.redirect(new URL('/', request.nextUrl));
}

if(!isPublicPath && !token) {
  return NextResponse.redirect(new URL('/login', request.nextUrl));
 }

}

 
//matcher is used to match the route that we want to apply the middleware to
export const config = {
  matcher:[
    '/',
    '/profile',
    '/login',
    '/signup',
    '/verifyemail'
  ]
}