import { useState } from "react";
import DocumentsList from "./DocumentsList";
import SearchInput from "./design-system/SearchInput";
import Select from "./design-system/Select";
import Switch from "./design-system/Switch";
import FormCard from "./shared/FormCard";
import { AVAILABLE_DOCUMENTS, FILTER_BY, SELECT_ALL, createMessage } from "../constants/messages";

const AvailableDocuments = () => {
    const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);

    const handleSwitchToggle = () => {
        setIsSwitchEnabled((prev) => !prev);
    }

    return (
        <FormCard heading="Available Documents">
            <SearchInput />
            <div className="text-sm font-medium my-3">{createMessage(FILTER_BY)}</div>
            <div className="grid md:grid-cols-2 gap-4">
                <Select value="Job Templates" />
                <Select value="Locations" />
                <Select value="Subsidiary" />
                <Select value="Seniority" />
            </div>
            <div className="flex justify-between items-center mt-3">
                <div className="text-sm font-medium my-3">53 {createMessage(AVAILABLE_DOCUMENTS)}</div>
                <Switch enabled={isSwitchEnabled} toggleSwitch={handleSwitchToggle}>{createMessage(SELECT_ALL)}</Switch>
            </div>
            <DocumentsList />
        </FormCard>
    )
}

export default AvailableDocuments;