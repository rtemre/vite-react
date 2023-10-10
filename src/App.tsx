import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AiTextGenerator from "./components/aiTextGenerator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="read-the-docs">
        <AiTextGenerator
          evenTitles
          input={[
            "Click on the Vite and React logos to learn more",
            "Typically, you might create a new project using Create React App, but it can take a lot of time to install over 140 MB of dependencies.  ",
            "Vite is a lightweight tool that takes up 31 MB of dependencies, which will save time in starting a new project.",
            "Vite also uses the browser-native ES (ECMAScript) modules for linking to JavaScript files, which doesn’t rebuild the entire bundle after each file change. ",
            "These differences result in a faster experience when creating, updating, and building a React App with Vite.",
          ]}
          title=""
          startGenerating
        />
      </div>
    </>
  );
}

export default App;
