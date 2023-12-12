/** @type {import('next').NextConfig} */


const nextConfig = {
  /** async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: "Strict-Transport-Security",
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {  
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {  
            key: "Expires",
            value: "max-age=31536000",
          },
          {  
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {  
            key: "Pragma",
            value: "public",
          },
          {  
            key: "Accept-Encoding",
            value: "gzip, deflate",
          },
          {  
            key: "Content-Encoding",
            value: "gzip",
          },
       ],
      },
    ]
  },*/
};

module.exports = nextConfig;
