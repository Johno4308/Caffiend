import "./index.scss";
import React from "react";

const Coffees = (props) => {
  return (
    <div className="coffees-text-zone">
      <h1>{props.data.title}</h1>
      <p> {props.data.description}</p>
      <section>
        <div style={{ backgroundImage: `url(${props.data.img})` }}></div>
        <p>{props.data.ratio}</p>
        <p>{props.data.cup}</p>
      </section>
      <hr id="steps-line" />
      <ul>
        {props.data.steps.map((step) => (
          <li key={step.idx}>{step.text}</li>
        ))}
      </ul>
      <hr id="steps-line" />
    </div>
  );
};

export default Coffees;
