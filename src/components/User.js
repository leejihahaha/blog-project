import React from "react";

export default function User({ user: { photoURL, dispalyName } }) {
  return (
    <div className="flex items-center cursor-pointer">
      <img
        className="w-10 h-10 rounded-full"
        src={photoURL}
        alt={dispalyName}
      />
      <p>{dispalyName}</p>
    </div>
  );
}
