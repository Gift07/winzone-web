import React, { useEffect } from "react";

export default function App() {
  const handleDownload = () => {
    window.location.href =
      "https://expo.dev/artifacts/eas/hWrHJ7ADhzaynEvTi6dbnd.apk";
  };

  const redirectUrl = "https://winzone-web.vercel.app/";

  useEffect(() => {
    const isInstagram = /Instagram/i.test(navigator.userAgent);

    if (isInstagram) {
      const clean = redirectUrl.replace("https://", "");

      window.location.href =
        "intent://" +
        clean +
        "#Intent;scheme=https;package=com.android.chrome;end;";

      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 1500);
    }
  }, []);

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={handleDownload}>
        Download App
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
  },
  button: {
    padding: "16px 32px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#22c55e",
    color: "#fff",
    fontWeight: "bold",
  },
};
