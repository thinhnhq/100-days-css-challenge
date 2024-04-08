import React from "react";
import "./styles.scss";

const One = () => {
  return (
    <div className="number-one">
      <div className="number-one-first-part" />
      <div className="number-one-second-part" />
    </div>
  );
};

const Zero = () => <div className="number-zero" />;

const Day1 = () => {
  return (
    <div className="container">
      <div className="number">
        <div className="one">
          <One />
        </div>
        <div className="first-zero">
          <Zero />
        </div>
        <div className="second-zero">
          <Zero />
        </div>
      </div>
      <span className="days">DAYS</span>
      <span className="challenge">CSS CHALLENGE</span>
    </div>
  );
};

export default Day1;
