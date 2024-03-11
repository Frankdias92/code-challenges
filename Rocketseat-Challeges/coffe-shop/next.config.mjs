
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['github.com', 'files.stripe.com'],
    },
    experimental: {
        clientRouterFilter: false,
    }

};

export default nextConfig;
