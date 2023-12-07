import { NextResponse } from "next/server";

import { getTraslate, req_btn } from "../_service";

var Y  = [];
export async function POST(req) {
  const startTime = Date.now();
  const { context } = await req.json();
  const data = { content: {} };
  data.time = `${(Date.now() - startTime) / 1000}ms`;
  return Response.json(data);
}

export const revalidate = 0;
