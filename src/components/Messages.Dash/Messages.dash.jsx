import React, { useState } from "react";
import Loader from "../Loader/Loader";
import { useDash } from "../../hooks/useDash";
import { MdDelete, MdEmail } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import "./messages.style.css";

function Messages() {
  // States
  const [messagePreview, setMessagePreview] = useState(null);
  const { allMessages, messagesLoading, deleteMessage } = useDash();

  return (
    <>
      {/* Preview */}
      <div id="message-preview" className={messagePreview ? "vesible" : ""}>
        <div className="exit-icon">
          <RiCloseFill onClick={() => setMessagePreview(null)} />
        </div>
        {messagePreview && (
          <div className="message">
            <h1>
              {messagePreview.fullName} <span>({messagePreview.email})</span>
            </h1>
            <p>{messagePreview.message}</p>
          </div>
        )}
      </div>
      {/* Main */}
      <div id="messages-dash">
        <div className="heading">
          <h1 className="main-title">Clients Messages</h1>
        </div>
        <div className="cards">
          {messagesLoading ? (
            <Loader />
          ) : allMessages.length ? (
            allMessages.map((message, ix) => (
              <div className={`card card-${ix % 2}`} key={message._id}>
                <p className="card-icons">
                  <AiFillEye
                    className="icon"
                    onClick={() => setMessagePreview(message)}
                  />
                  <a
                    className="delete-icon icon"
                    href={`mailto:${message.email}`}
                  >
                    <MdEmail className="icon email" />
                  </a>
                  <MdDelete
                    className="icon"
                    onClick={() => deleteMessage(message._id)}
                  />
                </p>
                <div className="card-name">{message.fullName}</div>
                <h2 className="card-content">{message.message}</h2>
              </div>
            ))
          ) : (
            <h2 className="info-title">Does Not Messages Exist</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default Messages;
