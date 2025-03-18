/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        CLIENT_ID: process.env.CLIENT_ID,
        NEXT_PUBLIC_USER_CLAIMS_ADMIN: process.env.NEXT_PUBLIC_USER_CLAIMS_ADMIN,
        TENANT_ID: process.env.TENANT_ID,
        API_URL: process.env.API_URL,
        NEXT_PUBLIC_USER_CLAIMS_ADMIN: process.env.NEXT_PUBLIC_USER_CLAIMS_ADMIN,
        REDIRECT_URL: process.env.REDIRECT_URL,
        DOMAIN_NAME: process.env.DOMAIN_NAME,
    }
  }

module.exports = nextConfig
