import React from "react";
import "./infoMessage.style.css";
import { useDash } from "../../hooks/useDash";

function InfoMessage() {
  const { infoMessage } = useDash();
  return (
    infoMessage && (
      <div
        id="InfoMessage"
        className={`${infoMessage ? "visible" : ""} ${
          infoMessage.isError ? "error" : ""
        }`}
      >
        <div className="message">{infoMessage.payload}</div>
      </div>
    )
  );
}

export default InfoMessage;
