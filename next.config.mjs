/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn2.rcstatic.com'
            },
            {
                protocol: 'https',
                hostname: 'www.booking.com'
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn1.gstatic.com'
            },
            {
                protocol: 'https',
                hostname: 'lh5.googleusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn3.gstatic.com'
            },
           
            {
                protocol: 'https',
                hostname: 't-cf.bstatic.com'
            }
        ]
    }
};

export default nextConfig;
