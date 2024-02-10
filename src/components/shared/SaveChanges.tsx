import { ICON_NAME } from "../../constants/design-system";
import { IconName } from "../../types/design-system";
import Button from "../design-system/Button";

const SaveChanges = () => {
    return (
        <div className="
            w-full h-[66px] fixed bg-white bottom-0 border-t pr-[80px]
            border-gray-3 px-6 py-4 flex justify-between items-center
        ">
            <Button startIcon={ICON_NAME.CHEVRON_LEFT as IconName}>Back</Button>
            <Button endIcon={ICON_NAME.CHEVRON_RIGHT as IconName} primary>Next</Button>
        </div>
    )
}

export default SaveChanges;