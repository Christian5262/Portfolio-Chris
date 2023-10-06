/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    images: {
        domains: ['imgur.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imgur.com',
                port: '',
                pathname: 'https://imgur.com/a/vj2U8yK',
            },
        ],
    },
}



module.exports = nextConfig
