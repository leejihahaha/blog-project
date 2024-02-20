import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex justify-between p-5 border-b border-gray-300">
      <Link to="/" className="flex items-center text-2xl font-semibold">
        <h3>My Blog</h3>
      </Link>

      <nav className="flex items-center gap-4 font-semibold ">
        <Link to="/">홈</Link>
        <Link to="/posts">전체글</Link>
        <div>☀</div>
      </nav>
    </header>
  );
}
