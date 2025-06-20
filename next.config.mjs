/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  rewrites: async () => {
    return [
      {
        source: "/bulk-email-sender",
        destination: "https://bulk-email-sender-psi.vercel.app",
      },
      {
        source: "/bulk-email-sender/:path*",
        destination: "https://bulk-email-sender-psi.vercel.app/:path*",
      },
      {
        source: "/easy-visual-scraper",
        destination: "https://easy-visual-scraper.vercel.app",
      },
      {
        source: "/easy-visual-scraper/:path*",
        destination: "https://easy-visual-scraper.vercel.app/:path*",
      },
      {
        source: "/not-just",
        destination: "https://not-just-theta.vercel.app",
      },
      {
        source: "/not-just/:path*",
        destination: "https://not-just-theta.vercel.app/:path*",
      },
      {
        source: "/github-blog-automator",
        destination: "https://github-blog-automator.vercel.app",
      },
      {
        source: "/github-blog-automator/:path*",
        destination: "https://github-blog-automator.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
