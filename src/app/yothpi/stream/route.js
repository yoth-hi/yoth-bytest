import { NextResponse } from 'next/server'




export async function GET(req) {
  
  const url = new URL(req.url)
  const qurl = decodeURIComponent(url.searchParams.get("q"))
  const res_ = await fetch(qurl);
  const blob = await res_.blob();
  const response = new NextResponse(blob,{ })
  response.headers.set('Content-Type', 'application/octet-stream')
  response.headers.set('Content-Disposition', 'attachment')
  return response;


}
