import { createContext } from "react";

export const ApiContext = createContext(null);

const apiUrl = "https://localhost/cothink1/cothink"; 

const ApiProvider = (props) => {
  return (
    <ApiContext.Provider value={{ apiUrl }}>
      {props.children}
    </ApiContext.Provider>
  );
};
export default ApiProvider;
