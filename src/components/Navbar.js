import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { IoMdSunny } from "react-icons/io";
import { useDarkMode } from "../context/DarkModeContext";
import { onUserStateChange } from "../api/firebase";
import User from "./User";
import { useAuthContext } from "../context/AuthContext";
import ProfileBoard from "./ProfileBoard";

export default function Navbar() {
  const [user, setUser] = useState();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { login } = useAuthContext();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const navItem = [
    { path: "/", link: "홈" },
    { path: "/new", link: "글쓰기" },
  ];

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
    const handleClickOutside = () => {
      setIsProfileOpen(false);
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogin = () => {
    login().then(setUser);
  };

  const onProfileBoard = (e) => {
    e.stopPropagation();
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <>
      <header className="border-b border-gray-200 fixed top-0 left-0 right-0 z-10  bg-white backdrop-blur-sm md:backdrop-blur-sm  dark:text-gray-100 dark:bg-slate-800 duration-100">
        <nav className="flex justify-between p-5">
          <Link to="/" className="flex items-center text-2xl font-semibold">
            <h3>My Record</h3>
          </Link>

          <ul className="flex justify-between items-center font-semibold gap-11">
            {navItem
              .filter(({ path }) => {
                if (path === "/new") {
                  return user?.isAdmin;
                }

                return true;
              })
              .map(({ path, link }) => (
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
          <div className="flex mr-3">
            <button
              className="flex items-center text-xl mr-6"
              onClick={toggleDarkMode}
            >
              {!darkMode && <MdDarkMode />}
              {darkMode && <IoMdSunny />}
            </button>

            {user && (
              <button onClick={onProfileBoard}>
                <User user={user} />
              </button>
            )}
            {!user && (
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-2 mb-2"
                onClick={handleLogin}
              >
                LOGIN
              </button>
            )}
          </div>
        </nav>
      </header>
      {isProfileOpen && (
        <ProfileBoard user={user} onClose={() => setIsProfileOpen(false)} />
      )}
    </>
  );
}
