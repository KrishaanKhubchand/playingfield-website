import { withPlausibleProxy } from "next-plausible"

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
}

// Proxies the Plausible script first-party (/js/script.js + /api/event) to dodge adblockers.
// Site-specific script URL for playingfield.group (from the Plausible dashboard).
export default withPlausibleProxy({
  src: "https://plausible.io/js/pa-hH8Of0rOY5XiakBXLGxdJ.js",
})(nextConfig)
