import react from "react";
import Daniel from "./components/Daniel/Daniel";
import Jonathan from "./components/Jonathan/Jonathan";
import Jeanette from "./components/Jeanette/Jeanette";
import Patrick from "./components/Patrick/Patrick";
import Kira from "./components/Kira/Kira";
import "../index.css";
const App = () => {
  return (
    <>
      <div className="grid-container">
        <Daniel />
        <Jonathan />
        <Jeanette />
        <Patrick />
        <Kira />
      </div>
    </>
  );
};

export default App;
