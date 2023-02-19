import { createContext } from "react";

const DataContext = createContext();

const DataProvider = DataContext.Provider;

export { DataProvider, DataContext };
