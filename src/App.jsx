import React from "react";
import ChatBot from "./components/ChatBot";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-center bg-black border-2 border-white rounded-3xl shadow-white shadow-2xl">
      {/* <div className="h-1/10 m-2 bg-black shadow-xl  rounded-xl"> */}
      {/* <Header /> */}
      {/* </div> */}

      <h3 className="text-white text-4xl  tracking-widest">abc.bot</h3>
      {/* <Hero /> */}

      <ChatBot />
    </div>
  );
}

export default App;
