import React from "react";

export default function App() {
  const handleDownload = () => {
    window.location.href =
      "https://expo.dev/artifacts/eas/hWrHJ7ADhzaynEvTi6dbnd.apk";
  };

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
