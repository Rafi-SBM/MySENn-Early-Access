import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/our-story", permanent: true },
      { source: "/about", destination: "/our-story", permanent: true },
      {
        source: "/how-it-helps.html",
        destination: "/how-it-helps",
        permanent: true,
      },
      { source: "/community.html", destination: "/community", permanent: true },
      { source: "/faq.html", destination: "/faq", permanent: true },
      {
        source: "/cookie-policy.html",
        destination: "/cookie-policy",
        permanent: true,
      },
      {
        source: "/clinics.html",
        destination: "/how-it-helps#professionals",
        permanent: true,
      },
      {
        source: "/schools.html",
        destination: "/how-it-helps#professionals",
        permanent: true,
      },
      {
        source: "/parents.html",
        destination: "/how-it-helps#parents",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

