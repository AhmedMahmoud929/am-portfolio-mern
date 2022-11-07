import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
// import { useNotesContext } from "../../hooks/useNotesContext";
// Images
import orangeBall from "../../assets/images/orangeBall.png";
import purpleBall from "../../assets/images/purpleBall.png";
// Icons
import { MdEmail } from "react-icons/md";
import { RiKeyFill } from "react-icons/ri";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./login.style.css";

function Login() {
  const [passVisible, setPassVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();
  //   const { setError } = useNotesContext();

  return (
    <div id="auth">
      {/* <!-- wave effect --> */}
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="cont">
        <img src={orangeBall} alt="3d ball" className="orange-ball ball" />
        <img src={purpleBall} alt="3d ball" className="purple-ball ball" />
        {error && <div className="error">{error}</div>}
        <form>
          <h1>Login</h1>
          <h2>Sign in to manage your content</h2>
          <div className={`inputs `}>
            <div className="inp userName">
              <div className="icon">
                <MdEmail className="ico" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                spellCheck="false"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inp password">
              <div className="icon">
                <RiKeyFill className="ico" />
              </div>
              <input
                type={passVisible ? "text" : "password"}
                security="visible"
                name="email"
                placeholder="Password"
                autoComplete="off"
                spellCheck="false"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="icon eye">
                {passVisible ? (
                  <AiFillEyeInvisible
                    className="ico-eye"
                    onClick={() => setPassVisible(false)}
                  />
                ) : (
                  <AiFillEye
                    className="ico-eye"
                    onClick={() => setPassVisible(true)}
                  />
                )}
              </div>
            </div>
          </div>
          <button
            className="btn"
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              if (email && password) {
                login(email, password);
              }
            }}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
