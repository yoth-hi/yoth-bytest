import { NextResponse } from 'next/server'




export async function GET(req) {
  
  const url = new URL(req.url)
  const qurl = decodeURIComponent(url.searchParams.get("q"))
  const res_ = await fetch(qurl);
  const blob = await res_.blob();
  return new NextResponse(blob,{})


}
