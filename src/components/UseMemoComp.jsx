import { useState, useMemo, useEffect } from "react";
function UseMemoComp() {
  const [color, setColor] = useState(false);
  const [counter, setCounter] = useState(88);

  const styles = {
    backgroundColor: color ? "lightcoral" : "lightgray",
    moreData: "text",
  };

  const heavyСalc = () => {
    console.log("------------> heavyСalc");
    return counter * Math.round(Math.random() * 1000);
  };

  const result = useMemo(() => heavyСalc(), [counter]);

  useEffect(() => {
    console.log(styles);
  }, [color]);

  return (
    <div className="comp" style={styles}>
      <h1>useMemo</h1>
      <h2>{counter}</h2>
      <h2>result : {result}</h2>
      <button onClick={() => setColor((pre) => !pre)}>COLOR</button>
      <button onClick={() => setCounter((pre) => pre + 1)}>
        counter + HEAVY CALCULATIONS
      </button>
    </div>
  );
}
export default UseMemoComp;
