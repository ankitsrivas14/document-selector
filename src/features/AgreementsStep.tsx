import DetailsCard from "../components/shared/DetailsCard";
import AvailableDocuments from "../components/AvailableDocuments";
import SelectedDocuments from "../components/SelectedDocuments";
import { AGREEMENTS_PAGE_INFO_TEXT, DETAILS_CARD_DESCRIPTION, DETAILS_CARD_HEADING, createMessage } from "../constants/messages";

const FormViewer = () => {
    return (
        <div className="mx-auto w-[1024px] mt-6 mb-[75px]">
            <DetailsCard 
                title={createMessage(DETAILS_CARD_HEADING)} 
                description={createMessage(DETAILS_CARD_DESCRIPTION)}
            />
            <div className="text-gray-4 text-sm font-medium mb-2">
                {createMessage(AGREEMENTS_PAGE_INFO_TEXT)}
            </div>
            <div className="flex gap-6 text-gray-4">
                <AvailableDocuments />
                <SelectedDocuments />
            </div>
        </div>
    )
}

export default FormViewer;