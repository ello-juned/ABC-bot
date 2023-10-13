import React, { useEffect } from "react";

function VoiceflowChatbot() {
  useEffect(() => {
    const script = document.createElement("script");
    script.onload = function () {
      window.voiceflow.chat.load({
        verify: { projectID: "6527efaf78665c00074a8851" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
    };
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);

    return () => {
      // Cleanup if the component unmounts
      script.remove();
    };
  }, []);

  return <div id="chatbot-container">{/* Chatbot will be loaded here */}</div>;
}

export default VoiceflowChatbot;
