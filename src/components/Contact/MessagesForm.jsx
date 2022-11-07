import React from "react";
import { useState } from "react";
import { usePortfolio } from "../../hooks/usePortfolio";
import { FcOk } from "react-icons/fc";

function MessagesForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [userName, setUserName] = useState(false);
  const [error, setError] = useState(false);

  const { addNewMessage } = usePortfolio();

  const sendFormHandler = (e) => {
    e.preventDefault();
    if (name && email && message) {
      addNewMessage(name, email, message).then(() => {
        console.log("It's Done");
        setSent(true);
        setError(false);
        setUserName(name.split(" ")[0]);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setSent(false), 2000);
      });
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form
        className="form"
        onSubmit={sendFormHandler}
        data-aos="zoom-out-left"
        data-aos-delay="100"

      >
        <div className={`message-sent ${sent ? "vesible" : ""}`}>
          <h1>Message Sent</h1>
          <h2>
            Thanks <span>{userName}</span>
          </h2>
          <FcOk className="icon" />
        </div>
        <div className="input-container">
          <input
            id="firstname"
            className={`input ${error && !name ? "error" : ""} `}
            type="text"
            placeholder=" "
            autoComplete="off"
            autoCorrect="false"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            Full Name
          </label>
        </div>

        <div className="input-container">
          <input
            id="email"
            className={`input ${error && !email ? "error" : ""}`}
            type="email"
            placeholder=" "
            autoComplete="off"
            autoCorrect="false"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder email">
            Email
          </label>
        </div>

        <div className="input-container">
          <textarea
            id="message"
            className={`input ${error && !message ? "error" : ""}`}
            placeholder=" "
            autoCorrect="false"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="cut"></div>
          <label htmlFor="message" className="placeholder">
            Message
          </label>
        </div>

        <button type="text" className="submit">
          Send
        </button>
      </form>
    </>
  );
}

export default MessagesForm;
