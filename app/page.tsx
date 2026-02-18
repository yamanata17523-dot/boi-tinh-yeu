"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 brightness-110 contrast-125"
        style={{ backgroundImage: "url('/images/cupid1-bg.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-pink-600/80 via-rose-500/70 to-purple-700/80 backdrop-blur-sm" />

      {/* Glow Effects */}
      <div className="absolute w-80 h-80 bg-pink-400/30 rounded-full blur-3xl top-20 left-10 animate-pulse" />
      <div className="absolute w-80 h-80 bg-purple-400/30 rounded-full blur-3xl bottom-20 right-10 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold mb-5 leading-snug drop-shadow-2xl"
        >
          <motion.span
            animate={{ opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="block"
          >
            🔮 Bói Tình Yêu Online
          </motion.span>

          <span className="block text-pink-200">Miễn Phí & Chính Xác 2026</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-base md:text-lg mb-10 text-white/95 leading-relaxed"
        >
          Khám phá mức độ hợp nhau giữa{" "}
          <span className="font-semibold">bạn và người ấy</span>. Công cụ bói
          tình yêu theo tên & ngày sinh được nhiều người tin dùng.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Link
            href="/boi-theo-ten"
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold text-base shadow-xl hover:scale-105 transition-all duration-300"
          >
            💘 Bói Theo Tên
          </Link>

          <Link
            href="/blog"
            className="bg-purple-800 px-8 py-3 rounded-full text-base shadow-xl hover:bg-purple-900 transition-all duration-300"
          >
            📖 Xem Blog
          </Link>
        </motion.div>

        {/* Heart with blink */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-5xl mt-10"
        >
          💖
        </motion.div>

        {/* Ad Area */}
        {/* <div className="mt-14 bg-white/15 backdrop-blur-md p-4 rounded-xl border border-white/20">
          <p className="text-xs text-white/80">
            Khu vực hiển thị quảng cáo Google AdSense
          </p>
        </div> */}
      </div>
    </main>
  );
}
