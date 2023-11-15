var aaa = function (a) {
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
