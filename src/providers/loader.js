import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export function useLoader() {
    return useContext(LoaderContext);
}

export default function LoaderProvider({ children }) {
    const [loader, showLoader] = useState(false);
    
    const value = {
        loader,
        showLoader
    }

    return (
        <LoaderContext.Provider value={value}>
            {children}
        </LoaderContext.Provider>
    );
}