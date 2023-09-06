import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CurrentUserContext = createContext();

export default CurrentUserContext;

export function CurrentUserContextProvider({ children }) {
  // on utilise un hook personnalisé
  const [userConnect, setUserConnect] = useState([]);
  const login = (userData) => {
    setUserConnect(userData);
  };
  const logout = () => {
    setUserConnect(null);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CurrentUserContext.Provider
      value={{ userConnect, setUserConnect, login, logout }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}

CurrentUserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCurrentUserContext = () => useContext(CurrentUserContext);
