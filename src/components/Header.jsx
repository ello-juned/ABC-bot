import React from "react";

const Header = () => {
  return (
    <div className=" text-violet-300 p-4 flex items-center justify-between ">
      <div>
        <p className="text-3xl font-semibold ">
          Ello 🤖 <span className=" text-2xl"> </span>
        </p>
      </div>
      <div>
        <img
          src="https://cdn.dribbble.com/users/77598/screenshots/16399264/media/d86ceb1ad552398787fb76f343080aa6.gif"
          alt="AI Chat Bot"
          className="w-14 h-14 rounded-full cursor-pointer hover:border-2"
        />
      </div>
    </div>
  );
};

export default Header;
