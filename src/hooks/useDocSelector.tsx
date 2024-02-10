import { useContext } from "react";
import { DocSelectorContext } from "../context/docSelectorContext";
import { DocumentType } from "../types/index";

const useDocSelector = () => {
    const { selectedDocs, setSelectedDocs } = useContext(DocSelectorContext);

    const updateSelectedDocs = (doc: DocumentType) => {
        if (doc && 'id' in doc) {
            const existingDoc = selectedDocs.find((d) => d.id === doc.id);
            if (existingDoc) {
                setSelectedDocs(selectedDocs.filter((d) => d.id !== doc.id));
            } else {
                setSelectedDocs([...selectedDocs, doc]);
            }
        }
    }

    return {
        selectedDocs,
        updateSelectedDocs,
    }
}

export default useDocSelector;
