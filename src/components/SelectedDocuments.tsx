import { ICON_NAME } from "../constants/design-system";
import useDocSelector from "../hooks/useDocSelector";
import { DocumentType } from "../types";
import { IconName } from "../types/design-system";
import ListItem from "./design-system/ListItem";
import SearchInput from "./design-system/SearchInput";
import FormCard from "./shared/FormCard";

export const SelectedDocuments = () => {
    const { selectedDocs, updateSelectedDocs } = useDocSelector();
    return (
        <FormCard heading="Selected Documents">
            <SearchInput />
            <div className="border border-solid border-success mt-3 rounded-md p-2">
                {selectedDocs.map((doc: DocumentType) => (
                    <ListItem 
                        key={doc.id} 
                        name={doc.name} 
                        startIconType={ICON_NAME.TICK as IconName}
                        endIconType={ICON_NAME.CROSS as IconName}
                        onItemClick={() => updateSelectedDocs(doc)}
                    />
                ))}
            </div>
        </FormCard>
    )
}

export default SelectedDocuments;