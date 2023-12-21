/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  output: "export",
  async headers() {
    return [
      {
        source: "*",
        headers: [
          {
            key: "Access-Control-Allow-Methods",
            value: "*",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
