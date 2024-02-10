import DetailsCard from "../components/shared/DetailsCard";
import AvailableDocuments from "../components/AvailableDocuments";
import SelectedDocuments from "../components/SelectedDocuments";

const FormViewer = () => {
    return (
        <div className="mx-auto w-[1024px] mt-6 mb-[75px]">
            <DetailsCard 
                title="Which agreements, forms and notices should be sent to Jason Smith?" 
                description="Employees assigned to this job type will be required to review, where relevant fill-in, and sign the following agreements and notices:"
            />
            <div className="text-gray-4 text-sm font-medium mb-2">
                Select the agreements, notices and documents you want Jason Smith to sign
            </div>
            <div className="flex gap-6 text-gray-4">
                <AvailableDocuments />
                <SelectedDocuments />
            </div>
        </div>
    )
}

export default FormViewer;