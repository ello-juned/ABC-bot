import React from "react";
import homeImg from "../assets/home.avif";

const Hero = () => {
  return (
    <div className="h-9/10 flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-center bg-white  shadow-2xl m-2 rounded-xl   p-5 h-full">
      <div className="rounded-full w-full  h-full flex flex-col justify-center items-center cursor-pointer">
        <img
          src={homeImg}
          alt="emoji"
          className="rounded-full object-cover  sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px]    "
        />
      </div>
      <div className=" w-full  h-full flex flex-col gap-5 ">
        <h2 className=" tracking-wider bg-primaryColor text-white  mt-8 p-4 rounded-xl shadow-2xl text-2xl border-2 text-center ">
          Welcome to ello-chatbot 😊
        </h2>
        <p className=" bg-primaryColor text-white  mt-8 p-4 rounded-xl shadow-2xl text-xl border-2 text-center ">
          "Ello Bot" is an advanced conversational AI chatbot built using the
          Botpress framework. This intelligent virtual assistant is designed to
          provide seamless and interactive communication with users across
          various platforms and applications.
        </p>
      </div>
    </div>
  );
};

export default Hero;
