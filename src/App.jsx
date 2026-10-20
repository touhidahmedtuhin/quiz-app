import { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import Timer from "./components/Timer";
import Result from "./components/Result";

function App() {
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(1);

  return (
    <>
      {!isOver && <Timer setIsOver={setIsOver} />}
      {isOver ? <Result score={score}/> : <Question setIsOver={setIsOver} setScore={setScore}/>}
    </>
  );
}

export default App;
