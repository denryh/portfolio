import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const messages: string[] = [
  "Hi, I'm Henry Dang.",
  "I turn product ideas into reliable, human-centered software.",
  "Over the last few years, I've focused on shipping useful features with clean code.",
  "If our values align, I'd love to connect and build something meaningful together.",
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App messages={messages} />
  </React.StrictMode>,
);
