/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // ✅ Firebase Storage
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      // ✅ Unsplash (기본 샘플 이미지)
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // ✅ PhotoAC (일본 무료 이미지 사이트)
      {
        protocol: "https",
        hostname: "thumb.photo-ac.com",
      },
      // ✅ YomiDog (너가 지금 쓴 이미지 출처)
      {
        protocol: "https",
        hostname: "yomidog.com",
      },
      // ✅ 추가로 Pixabay/Pexels 같은 상용 출처도 미리 대비
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
