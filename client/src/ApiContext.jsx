import { createContext } from "react";

export const ApiContext = createContext(null);

const apiUrl = "https://cothink.az"; 

const ApiProvider = (props) => {
  return (
    <ApiContext.Provider value={{ apiUrl }}>
      {props.children}
    </ApiContext.Provider>
  );
};
export default ApiProvider;
