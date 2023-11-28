"use client"; /*var aaa = function (a) {
  var c = this;
  this.ra = function (a) {
    if (a) {
      if (((c.status = a.status), a.ok && a.body && 204 !== c.status)) {
        c.status = c.status || 242;
        c.render_body = a.body.getReader();
        //djt(a)
      } else c.onDone();
    } else c.onError(Error("null"));
  };
  this.Y = {
    method:"POST",
    body: new Uint8Array([0,120])
  }
  this.D = window.AbortController ? new AbortController : void 0;
  this.start(a)
};
function f() {
  aaa.call(this, arguments);
}
var t = f.prototype;
t.start = function (a) {
  var b = {
    credentials: "include",
    cache: "no-store",
  };
  Object.assign(b, this.Y);
  this.D && (b.signal = this.D.signal);
  a = new Request(a, b);
 var Cpa = (a)=> console.log (a)
  fetch(a)
    .then(this.ra, this.onError)
    .then(void 0, Cpa);
};
//export default function (src = "", finished = () => void 0) {}
*/
export default function () {
  const mediaSource = new MediaSource();
  var a;
  var t =
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    r;

  const start = function () {
    var signal = window.AbortController ? new AbortController() : void 0;
    if (!t || !r) return;
    const sourceBuffer = mediaSource.addSourceBuffer(r);
    a = new Request(`/yothpi/stream?q=${encodeURIComponent(t)}`, {
      credentials: "include",
      cache: "no-store",
    //  method: "POST",
      signal: signal.signal,
      //body: new Uint8Array([120, 0]),
    });
    fetch(a)
      .then((a) => a.body.getReader())
      .then((reader) => {
        const stream = new ReadableStream({
          start(controller) {
            // The following function handles each data chunk
            function push() {
              // "done" is a Boolean and value a "Uint8Array"
              return reader.read().then(({ done, value }) => {
                // Is there no more data to read?
                if (done) {
                  // Tell the browser that we have finished sending data
                  controller.close();
                  return;
                }
                console.log(value);
                // Get the data and send it to the browser via the controller
                controller.enqueue(value);
                push();
              });
            }

            push();
          },
        });
        return new Response(stream);
      })
      .then((response) => response.arrayBuffer())
      .then((blob) => {
        sourceBuffer.appendBuffer(data);
      })
      .catch((a) => {
        throw new Error(a);
      });
  };
  const src = URL.createObjectURL(mediaSource);
  return {
    change(a, j) {
      ///     if (a === t) return;
      // t = a;
      r = j;
      start(a);
    },
    start,
    src,
  };
}
