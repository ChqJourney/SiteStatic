import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { AppReducer, initialState } from "./appReducer";

export const AppContext = createContext();
export function AppWrapper({ children }) {
   const [state,dispatch]= useReducer(AppReducer, initialState);
   const contextValue = useMemo(() => {
    return { state, dispatch };
 }, [state, dispatch]);
   useEffect(() => {
    if (JSON.parse(localStorage.getItem("static"))) { 
       dispatch({ 
          type: "init_stored", 
          value: JSON.parse(localStorage.getItem("static")),
       });
    }
 }, []);
 useEffect(() => {
    if (state.static !== initialState.static) {
       
       localStorage.setItem("static", JSON.stringify(state.static)); 
    
       //create and/or set a new localstorage variable called "state"
    }
 }, [state]);
   return (
      <AppContext.Provider value={contextValue}>
         {children}
      </AppContext.Provider>
   );
}
export const useAppContext=()=> {
   return useContext(AppContext);
}