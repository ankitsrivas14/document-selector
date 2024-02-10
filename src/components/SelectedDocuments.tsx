import { ICON_NAME } from "../constants/design-system";
import useDocSelector from "../hooks/useDocSelector";
import { DocumentType } from "../types";
import { IconName } from "../types/design-system";
import ListItem from "./design-system/ListItem";
import SearchInput from "./design-system/SearchInput";
import FormCard from "./shared/FormCard";
import ArrowLeftIcon from '../assets/icons/arrow-left-light.svg'

export const SelectedDocuments = () => {
    const { selectedDocs, updateSelectedDocs } = useDocSelector();
    return (
        <FormCard heading="Selected Documents">
            <SearchInput />

            {!selectedDocs?.length ? (
                <div className="w-full h-full bg-gray-5 mt-3 rounded-md border border-gray-3 border-solid py-10 px-7 text-center">
                    <img src={ArrowLeftIcon} alt="Arrow Left" className="mx-auto mb-6" />
                    <div className="text-gray-6 text-sm font-semibold">
                        Select documents from the left panel to have employees review them and provide a signature acknowledging review
                    </div>
                </div>
            ) : (
                <div className="border border-solid border-success mt-3 rounded-md p-2">
                    {selectedDocs.map((doc: DocumentType, index) => (
                        <ListItem 
                            key={doc.id} 
                            name={doc.name} 
                            startIconType={ICON_NAME.TICK as IconName}
                            endIconType={ICON_NAME.CROSS as IconName}
                            onItemClick={() => updateSelectedDocs(doc)}
                            isLast={index === selectedDocs.length - 1}
                        />
                    ))}
                </div>
            )}

        </FormCard>
    )
}

export default SelectedDocuments;