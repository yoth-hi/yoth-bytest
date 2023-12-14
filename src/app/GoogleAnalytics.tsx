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
    </>
  );
}
