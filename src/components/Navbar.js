import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { useDarkMode } from "../context/DarkModeContext";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const navItem = [
    { path: "/", link: "홈" },
    { path: "/posts", link: "전체" },
    { path: "/new", link: "글쓰기" },
  ];

  return (
    <header className="border-b border-gray-200 fixed top-0 left-0 right-0 z-10  bg-white backdrop-blur-sm md:backdrop-blur-sm  dark:text-gray-100 dark:bg-slate-800 duration-100">
      <nav className="flex justify-between p-5">
        <Link to="/" className="flex items-center text-2xl font-semibold">
          <h3>My Record</h3>
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
        <button className="flex items-center text-xl" onClick={toggleDarkMode}>
          {!darkMode && <MdDarkMode />}
          {darkMode && <IoMdSunny />}
        </button>
      </nav>
    </header>
  );
}
