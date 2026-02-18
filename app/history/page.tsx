"use client";

import { useEffect, useState } from "react";

interface LoveResult {
  id: number;
  your_name: string;
  crush_name: string;
  percent: number;
  message: string;
  created_at: string;
}

export default function HistoryPage() {
  const [data, setData] = useState<LoveResult[]>([]);

  useEffect(() => {
    fetch("/api/history")
      .then((res) => res.json())
      .then((data: LoveResult[]) => setData(data));
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        📜 Lịch Sử Bói Tình Yêu
      </h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {data.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-xl shadow">
            <p>
              💕 <b>{item.your_name}</b> ❤️ <b>{item.crush_name}</b>
            </p>
            <p>💘 {item.percent}%</p>
            <p className="text-gray-600">{item.message}</p>
            <p className="text-xs text-gray-400">
              {new Date(item.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
