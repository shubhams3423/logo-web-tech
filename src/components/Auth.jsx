import React, { useContext } from "react";
import "../componentsCss/Auth.css";
import UserContext from "../Context/UserContext";
import { BiLogInCircle } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";

const Auth = () => {
  const { userLogin, setUserLogin, hideSideBar } = useContext(UserContext);

  return (
    <div className="authContainer">
      {hideSideBar ? (
        <button
          className="auth"
          onClick={
            !userLogin ? () => setUserLogin(true) : () => setUserLogin(false)
          }
        >
          {userLogin ? "LogOut" : "Login"}
        </button>
      ) : userLogin ? (
        <BiLogInCircle
          className="user"
          onClick={
            !userLogin ? () => setUserLogin(true) : () => setUserLogin(false)
          }
        />
      ) : (
        <BiLogOutCircle
          className="user"
          onClick={
            !userLogin ? () => setUserLogin(true) : () => setUserLogin(false)
          }
        />
      )}
    </div>
  );
};

export default Auth;
