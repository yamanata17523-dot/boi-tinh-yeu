import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Bói Tình Yêu Online Chính Xác 2026 ❤️",
  description:
    "Xem bói tình yêu theo tên và ngày sinh miễn phí, chính xác nhất 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
