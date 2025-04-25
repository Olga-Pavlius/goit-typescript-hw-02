// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./components/App/App";

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import Modal from "react-modal";

// Встановлюємо кореневий елемент для модалки
Modal.setAppElement("#root");

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
