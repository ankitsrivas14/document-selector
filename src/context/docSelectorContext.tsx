import React, { createContext, useState } from "react";
import type { DocumentType } from "../types/index";

interface DocSelectorContextType {
    selectedDocs: DocumentType[]; 
    setSelectedDocs: React.Dispatch<React.SetStateAction<DocumentType[]>>;
}

export const DocSelectorContext = createContext<DocSelectorContextType>({
    selectedDocs: [],
    setSelectedDocs: () => {},
});

export const DocSelectorProvider = ({children}: {children: React.ReactNode}) => {
    const [selectedDocs, setSelectedDocs] = useState<DocumentType[]>([]);

    return (
        <DocSelectorContext.Provider value={{
            selectedDocs,
            setSelectedDocs,
        }}>
            {children}
        </DocSelectorContext.Provider>
    )
}