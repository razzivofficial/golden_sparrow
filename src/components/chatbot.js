import React, { useEffect } from "react";

export default function Chatbot() {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "c226245b6b8ef7f512afc998b97ac90f",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);
  return <div></div>;
}
