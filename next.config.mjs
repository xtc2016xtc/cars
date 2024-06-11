/** @type {import('next').NextConfig} */
const nextConfig = {
  // images:{
  //   // remotePatterns:['cdn.imagin.studio']
  //   domains:['']
  // }
  images: {
    domains:['cdn.imagin.studio']
  },
  typescript:{
    ignoreBuildErrors:true
  }
};

export default nextConfig;
