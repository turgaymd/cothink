import { createContext } from "react";

export const ApiContext = createContext(null);

const apiUrl = process.env.NODE_ENV === "production" ? "https://cothink.az" : "https://localhost/cothink";

const ApiProvider = (props) => {
  return (
    <ApiContext.Provider value={{ apiUrl }}>
      {props.children}
    </ApiContext.Provider>
  );
};
export default ApiProvider;
