import React, { createContext } from "react";
import { MainContextProps, MainProviderProps } from "./MainContextTypes";

export const MainContext = createContext<MainContextProps | null>(null);

export default function MainProvider({ children }: MainProviderProps) {
  return <MainContext.Provider value={{}}>{children}</MainContext.Provider>;
}
