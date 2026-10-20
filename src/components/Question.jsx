import { useState } from "react";
import questions from "./questions.json";

function Question({setIsOver,setScore}) {
  const [index, setIndex] = useState(0);
  

  function handleOptionClick(selectedOption) {
    if (selectedOption === questions[index].answer) {
      setScore((prev) => prev + 1);
    }

    if (index < questions.length - 1) {
      setIndex((prev) => prev + 1);
    }else{
        setIsOver(true)
    }
  }

  return (
    <div>
      <h2>{questions[index].question}</h2>
      <div className="flex flex-col items-center gap-3">
        {questions[index].options.map((option, i) => (
          <button
            key={i}
            className="w-1/2 px-3 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
