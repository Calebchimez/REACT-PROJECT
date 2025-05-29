import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Herosection from "./Components/Hero/Hero";
import Header from "../../calebdevforge/src/Components/Header/header";
import Rough from "../../calebdevforge/src/Components/Rough/Rough";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <Navbar /> */}
        <Header />
        <Rough/>
        <Herosection />
      </div>
    </>
  );
}

export default App;
