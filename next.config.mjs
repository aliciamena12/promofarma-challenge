/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["media.docmorris.de", "s3-alpha-sig.figma.com"],
        formats: ["image/avif", "image/webp"],
    },
};

export default nextConfig;
