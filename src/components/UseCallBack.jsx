import { useCallback, useState, useMemo } from "react";
import ShowList from "./ShowList";

const UseCallBack = () => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(false);

  const style = { backgroundColor: color ? "lightcoral" : "lightblue" };

  const list = (param) => {
    console.log("LIST is runing!");
    return new Array(counter + param)
      .fill("")
      .map((item, index) => Math.random());
  };

  return (
    <div className="comp" style={style}>
      <h1>useCallBack</h1>
      <h3>колличество элементов: {counter}</h3>
      <button onClick={() => setCounter((pre) => pre + 1)}>UPDATE_LIST</button>
      <button onClick={() => setColor((pre) => !pre)}>COLOR</button>
      <ShowList list={list} />
    </div>
  );
};

export default UseCallBack;
