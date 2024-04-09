import React, { useMemo, useState } from "react";
import "./styles.scss";

const Day2 = () => {
  const [value, setValue] = useState(-1);

  const line1ClassName = useMemo(
    () =>
      ["line1", value === 1 && "line1-active", value === 0 && "line1-rev"]
        .filter(Boolean)
        .join(" "),
    [value]
  );

  const line2ClassName = useMemo(
    () =>
      ["line2", value === 1 && "line2-active", value === 0 && "line2-rev"]
        .filter(Boolean)
        .join(" "),
    [value]
  );

  const line3ClassName = useMemo(
    () =>
      ["line3", value === 1 && "line3-active", value === 0 && "line3-rev"]
        .filter(Boolean)
        .join(" "),
    [value]
  );

  return (
    <div className="container">
      <div className="box" onClick={() => setValue(value === 1 ? 0 : 1)}>
        <div className={line1ClassName} />
        <div className={line2ClassName} />
        <div className={line3ClassName} />
      </div>
    </div>
  );
};

export default Day2;
