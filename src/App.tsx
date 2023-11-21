import "./App.css";
import AiTextGenerator from "./components/aiTextGenerator";

function App() {
  return (
    <>
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
