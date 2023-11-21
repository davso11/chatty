import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const reqHeaders = new Headers(req.headers);
  reqHeaders.set("x-path", url.pathname);
  return NextResponse.next({
    request: {
      headers: reqHeaders,
    },
  });
}
