import { useState } from "react";
import "./App.css";
import VoiceflowChatbot from "./VoiceflowChatbot";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <div className="text-center mt-4">
            <p className="text-lg font-semibold">Property for Sale or Rent</p>
            <p className="text-gray-500">
              This beautiful property is available for both sale and rent. It
              features spacious rooms, a stunning view, and a convenient
              location.
            </p>
          </div>
        </div>
      </div>
      <VoiceflowChatbot />
    </>
  );
}

export default App;
