import { useState } from "react";
import { Header, GameButtonsContainer, BodyText } from "./index";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <BodyText />
      <GameButtonsContainer />

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
