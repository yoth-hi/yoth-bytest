
export default function ({ text }) {
  if(!text) return;
  text=text
    .replace(/\<|\>/g,"")
    .replace(/\n/g," <br/>")
  text=parceLink("",text)
  return (
    <div className="description-text">
      <div
        className="string-text"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </div>
  );
}


// # utils.js
function parceLink(a="",b=""){
  return b.replace(/https?\:\/\/([\w\.]+)(\/?[\S\?\=]+)?/g,function(a,b,c,d,e){
    return`<a target="_blank" class="description-link" aria-label="${b}" href="${a}">${a}</a>`
  })
}