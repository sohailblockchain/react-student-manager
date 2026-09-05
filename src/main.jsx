// Import ReactDOM so React can display our application in the browser.
import ReactDOM from "react-dom/client";

// Import our main App component.
import App from "./App.jsx";

// Import the CSS file used for the design of the application.
import "./App.css";

// Find <div id="root"> from index.html and display <App /> inside it.
ReactDOM.createRoot(document.getElementById("root")).render(<App />);