import PropTypes from "prop-types";
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserdata] = useState({});

  const putUserData = async (imputedData) => {
    setUserdata(imputedData);

    await localStorage.setItem(
      "tavolaItaliana:UserData",
      JSON.stringify(imputedData)
    );
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientData = await localStorage.getItem("tavolaItaliana:UserData");
      if (clientData) {
        setUserdata(JSON.parse(clientData));
      }
    };
    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, putUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used with UserContext");
  }

  return context;
};

UserProvider.PropTypes = {
  children: PropTypes.node.isRequired,
};
