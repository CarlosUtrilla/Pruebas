import ReactDOM from "react-dom/client";

import App from "./App";

import "nes.css/css/nes.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <main>
    <header>
      <i className="nes-icon coin is-medium" />
      <span>PokeStore</span>
    </header>
    <App />
  </main>,
);
