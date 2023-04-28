import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
document.addEventListener("contextmenu", (e) => {
  alert("Oh no, did you try a magic trick and it failed miserably?😎");
  e.preventDefault();
});

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    e.keyCode === 123 ||
    ctrlShiftKey(e, "I") ||
    ctrlShiftKey(e, "J") ||
    ctrlShiftKey(e, "C") ||
    (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
  ) {
    alert(
      "Either way, just remember that failure is a part of life and it's nothing to be ashamed of 😊"
    );
    return false;
  }
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
