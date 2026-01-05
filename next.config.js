/** @type {import('next').NextConfig} */
const nextConfig = {
    // Optimize for production
    poweredByHeader: false,

    // Compress responses
    compress: true,

    // Optimize images
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000, // 1 year cache
    },
}

module.exports = nextConfig
