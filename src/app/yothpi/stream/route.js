import { NextResponse } from "next/server";

export async function GET(req) {
  const url = new URL(req.url);

  const qurl = decodeURIComponent(url.searchParams.get("q"));
  var m =null//decodeURIComponent(url.searchParams.get("m"));
  if (m) {
    m = JSON.parse(m);
  } else m = {};

  const blob = await  fetch(qurl, m)
    .then((response) => response.body)
    .then((body) => {
      console.log(body); //** print a streamable object

      const reader = body.getReader();
      return new ReadableStream({
        start(controller) {
          return pump();
          function pump() {
            return reader.read().then(({ done, value }) => {
              // When no more data needs to be consumed, close the stream
              if (done) {
                controller.close();
                return;
              }
              // Enqueue the next data chunk into our target stream
              controller.enqueue(value);
              return pump();
            });
          }
        },
      });
    })
    .then((stream) => new Response(stream))
    .then((response) => response.blob());
  var _ = new NextResponse(blob, {});
  return _;
}
