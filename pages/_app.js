import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";

//declare context
export const sidebarContext = createContext();

export const userContext = createContext();

function MyApp({ Component, pageProps }) {
  const [toggleSidebar, setToggleSidebar] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("SIDEBAR");
    setToggleSidebar(localData !== null ? JSON.parse(localData) : true);
  }, []);

  return (
    <ChakraProvider>
      <sidebarContext.Provider value={{ toggleSidebar, setToggleSidebar }}>
        <userContext.Provider value={{ users, setUsers }}>
          <Component {...pageProps} />
        </userContext.Provider>
      </sidebarContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
