"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItem = (href: string, label: string) => (
    <Link
      href={href}
      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
        pathname === href
          ? "bg-pink-500 text-white shadow-md"
          : "text-gray-700 hover:text-pink-600 hover:bg-pink-100"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className=" w-full bg-white/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-pink-600 tracking-wide hover:text-pink-700 transition-colors"
        >
          ❤️ Love Tarot
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex gap-6 font-medium">
          {navItem("/", "Trang Chủ")}
          {navItem("/boi-theo-ten", "Bói Theo Tên")}
          {navItem("/blog", "Blog")}
        </nav>
      </div>
    </header>
  );
}
