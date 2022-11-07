import React from "react";
import "./codeCard.style.css";

function CodeCard() {
  return (
    <div className="card">
      <div className="card-back">
        <div className="line-numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
        <code>
          <span className="variable">const </span>
          <span className="function">aboutMe </span>
          <span className="operator">= </span>
          <span>{"{"}</span>
          <div className="indent">
            {" "}
            <span className="property">name</span>
            <span className="operator">: </span>
            <span className="string">'Ahmed Mahmoud'</span>
            <span>,</span>
          </div>
          <div className="indent">
            {" "}
            <span className="property">title</span>
            <span className="operator">: </span>
            <span className="string">'JavaScript Developer'</span>
            <span>,</span>
          </div>
          <div className="indent">
            {" "}
            <span className="property">contact</span>
            <span className="operator">: </span>
            <span>{"{"}</span>
            <div className="indent">
              {" "}
              <span className="property">email</span>
              <span className="operator">: </span>
              <span className="string">'alrba2003@gmail.com'</span>
              <span>,</span>
            </div>
            <div className="indent">
              <span className="property">website</span>
              <span className="operator">:</span>
              <span className="string">'ahmedmahmoud929.com'</span>
            </div>
            <span>{"}"}</span>
          </div>
          <span>{"}"}</span>
        </code>
      </div>
      <div className="card-front">
        <div className="line-numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
        <code>
          <span className="variable">this</span>
          <span>.</span>
          <span className="method">addEventListener</span>
          <span>{"("}</span>
          <span className="string">'mouseover'</span>
          <span>, </span>
          <span className="function">{"() => "}</span>
          <span>{"{"} </span>
          <div className="indent">
            <span className="variable">this</span>
            <span>.</span>
            <span className="property">flipCard </span>
            <span>= </span>
            <span className="boolean">true</span>
            <span>;</span>
          </div>
          <span>{"});"}</span>
        </code>
      </div>
    </div>
  );
}

export default CodeCard;
