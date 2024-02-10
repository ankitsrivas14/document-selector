import DocumentsList from "./DocumentsList";
import SearchInput from "./design-system/SearchInput";
import Select from "./design-system/Select";
import Switch from "./design-system/Switch";
import DetailsCard from "./shared/DetailsCard";
import FormCard from "./shared/FormCard";

const FormViewer = () => {
    return (
        <div className="mx-auto w-[1024px] mt-6">
            <DetailsCard 
                title="Which agreements, forms and notices should be sent to Jason Smith?" 
                description="Employees assigned to this job type will be required to review, where relevant fill-in, and sign the following agreements and notices:"
            />
            <div className="text-gray-4 text-sm font-medium mb-2">
                Select the agreements, notices and documents you want Jason Smith to sign
            </div>
            <div className="flex gap-6 text-gray-4">
                <FormCard heading="Available Documents">
                    <SearchInput />
                    <div className="text-sm font-medium my-3">Filter by:</div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Select value="Job Templates" />
                        <Select value="Locations" />
                        <Select value="Subsidiary" />
                        <Select value="Seniority" />
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <div className="text-sm font-medium my-3">53 Available Documents</div>
                        <Switch />
                    </div>
                    <DocumentsList />
                </FormCard>
                <FormCard heading="Selected Documents">
                    <SearchInput />
                </FormCard>
            </div>
        </div>
    )
}

export default FormViewer;