import Script from "next/script";
export default function () {
  return (
    <>
      <script
        nonce="httpswwwgoogletagmanagercomgtagjs"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WN77FWC13V"
      ></script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','G-WN77FWC13V');`,
        }}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5PJXX4Z4');`
        }}
      />
    </>
  );
}
