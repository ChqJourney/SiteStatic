import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { AppReducer, initialState } from "./appReducer";
import {useTheme} from 'next-themes'

export const AppContext = createContext();

export function AppWrapper({ children }) {
   const {theme,setTheme}=useTheme()
   initialState.static.theme=theme
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
       setTheme(state.static.theme)
    }
 }, []);
 useEffect(() => {
    if (state.static !== initialState.static) {
       
       localStorage.setItem("static", JSON.stringify(state.static)); 
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