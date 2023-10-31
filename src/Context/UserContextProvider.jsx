import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(false);
  const [hideSideBar, setSidebar] = useState(true);
  return (
    <div>
      <UserContext.Provider
        value={{ userLogin, setUserLogin, hideSideBar, setSidebar }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserContextProvider;
