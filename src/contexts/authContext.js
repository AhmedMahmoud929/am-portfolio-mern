import React, { createContext, useEffect, useState } from "react";

const authContext = createContext();

function AuthState(props) {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userToken");
  };

  useEffect(() => {
    setUser(localStorage.getItem("userToken"));
    // console.log("Token : " + localStorage.getItem("userToken"));
  }, []);
  return (
    <authContext.Provider value={{ user, setUser, logout }}>
      {props.children}
    </authContext.Provider>
  );
}

export { AuthState, authContext };
