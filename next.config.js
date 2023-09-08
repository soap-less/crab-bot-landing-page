/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.wikimg.net",
            }
        ]
    }
}

module.exports = nextConfig
