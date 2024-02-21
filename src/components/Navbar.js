import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navItem = [
    { path: "/", link: "홈" },
    // { path: "/posts", link: "전체" },
    { path: "/new", link: "글쓰기" },
  ];

  return (
    <header className="flex justify-between p-5 border-b border-gray-300">
      <Link to="/" className="flex items-center text-2xl font-semibold">
        <h3>My Blog</h3>
      </Link>

      <ul className="flex justify-between items-center font-semibold gap-11">
        {navItem.map(({ path, link }) => (
          <li key={path}>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
              to={path}
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
      <div>☀</div>
      {/* <nav className="flex items-center gap-4 font-semibold ">
        <Link to="/">홈</Link>
        <Link to="/posts">전체글</Link>
        <div>☀</div>
      </nav> */}
    </header>
  );
}
