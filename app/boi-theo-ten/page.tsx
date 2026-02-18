"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LovePage() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const calculateLove = async () => {
    if (!name1.trim() || !name2.trim()) {
      setError("⚠️ Vui lòng nhập đầy đủ tên của cả hai người.");
      setScore(null);
      setMessage("");
      return;
    }

    setError("");

    const percent = (name1.length * name2.length * 7) % 100;
    setScore(percent);

    let resultMessage = "";

    if (percent > 80) {
      resultMessage =
        "Hai bạn sinh ra là dành cho nhau 💖 Tình yêu cực kỳ bền vững!";
    } else if (percent > 60) {
      resultMessage =
        "Mức độ hợp khá cao 💕 Nếu cùng cố gắng sẽ rất hạnh phúc.";
    } else if (percent > 40) {
      resultMessage = "Tình cảm ở mức trung bình 💌 Cần thấu hiểu nhau hơn.";
    } else {
      resultMessage =
        "Có nhiều thử thách phía trước 💔 Nhưng tình yêu luôn cần cố gắng.";
    }

    setMessage(resultMessage);

    try {
      await fetch("/api/love", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          yourName: name1,
          crushName: name2,
          percent,
          message: resultMessage,
        }),
      });
    } catch (err) {
      console.error("Lỗi lưu DB:", err);
    }
  };

  const handleReset = () => {
    setName1("");
    setName2("");
    setScore(null);
    setMessage("");
    setError("");
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-pink-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-6">
          💘 Bói Tình Yêu
        </h1>

        <input
          type="text"
          placeholder="Tên của bạn"
          className="w-full border p-3 rounded-lg mb-4"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />

        <input
          type="text"
          placeholder="Tên người ấy"
          className="w-full border p-3 rounded-lg mb-4"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Nút Xem Bói với hover + click animation */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={calculateLove}
          className="bg-pink-500 text-white px-6 py-3 rounded-lg w-full mb-3 shadow-md transition"
        >
          🔮 Xem Kết Quả
        </motion.button>

        {/* Nút Xóa */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReset}
          className="bg-gray-400 text-white px-6 py-3 rounded-lg w-full mb-3 shadow-md"
        >
          🗑️ Xóa Tất Cả
        </motion.button>

        {score !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6"
          >
            <h2 className="text-2xl font-bold text-pink-600">
              ❤️ {score}% Hợp Nhau
            </h2>
            <p className="mt-4">{message}</p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
