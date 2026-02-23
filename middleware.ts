import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const maintenanceMode =
    process.env.MAINTENANCE_MODE === "true" ? true : false;

  if (maintenanceMode && req.nextUrl.pathname !== "/maintenance") {
    const redirectUrl = new URL("/maintenance", req.url).toString();
    return NextResponse.redirect(redirectUrl);
  }
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
