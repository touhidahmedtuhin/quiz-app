import { useEffect, useState } from "react";

function Timer({ setIsOver }) {
  const [time, setTime] = useState(20);
  const [displayTime, setDisplayTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === 0) {
      setIsOver(true);
    }
    let formatedTime = `${Math.floor(time / 60)
      .toString()
      .padStart(2, 0)} : ${Math.floor(time % 60)
      .toString()
      .padStart(2, 0)}`;
    console.log(formatedTime);
    setDisplayTime(formatedTime);
  }, [time]);

  return (
    <div className="mt-5">
      <h2>🕝 Time Left {displayTime}</h2>
    </div>
  );
}

export default Timer;
