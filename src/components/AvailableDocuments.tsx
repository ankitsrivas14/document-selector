import DocumentsList from "./DocumentsList";
import SearchInput from "./design-system/SearchInput";
import Select from "./design-system/Select";
import Switch from "./design-system/Switch";
import FormCard from "./shared/FormCard";

const AvailableDocuments = () => {
    return (
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
    )
}

export default AvailableDocuments;