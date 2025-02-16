import React from "react";
import { useAuthContext } from "../context/AuthContext";

//user나 onClose가 변경되지 않으면 ProfileBoard는 재렌더링x = 불필요한 렌더링 방지
const ProfileBoard = React.memo(({ onClose, user }) => {
  const { email, photoURL, displayName } = user;
  const { logout } = useAuthContext();

  const handleLogout = () => {
    logout().then(() => {
      onClose(); // 로그아웃 후 ProfileBoard 닫기
    });
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={stopPropagation}
      className="fixed z-10 right-9 top-16 h-[280px] w-[300px] rounded-3xl bg-slate-200 p-7 text-slate-800 "
    >
      <div className="flex justify-center ">
        <div>{email}</div>
      </div>
      <div className="flex flex-col items-center mt-5 ">
        <img
          className="w-[60px] h-[60px] rounded-full shadow-lg"
          src={photoURL}
          alt={displayName}
        />
        <p className="mt-6">{`안녕하세요, ${displayName}님.😊`}</p>
        <button
          type="button"
          className="text-white mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2"
          onClick={handleLogout}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
});
export default ProfileBoard;
