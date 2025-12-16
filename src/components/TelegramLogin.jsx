import { useEffect, useRef } from "react";

const TelegramLogin = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", "HasiMusicBot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-onauth", "onTelegramAuth(user)");
    script.setAttribute("data-request-access", "write");
    script.async = true;

    // Define the callback function
    window.onTelegramAuth = function (user) {
      alert(
        "Logged in as " +
          user.first_name +
          " " +
          user.last_name +
          " (" +
          user.id +
          (user.username ? ", @" + user.username : "") +
          ")"
      );
    };

    // Append script to container
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // Cleanup
    return () => {
      if (containerRef.current && containerRef.current.contains(script)) {
        containerRef.current.removeChild(script);
      }
      delete window.onTelegramAuth;
    };
  }, []);

  return (
    <div className="flex justify-center my-6">
      <div ref={containerRef}></div>
    </div>
  );
};

export default TelegramLogin;
