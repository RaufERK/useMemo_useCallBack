import React, { useState, useEffect } from "react";

const ShowList = ({ list }) => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    setValue(list(4));
  }, [list]);

  return (
    <div className="comp">
      <ul>
        {value.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
