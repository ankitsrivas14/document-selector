import ArrowRightIcon from '../../assets/icons/arrow-right-dark.svg'
import CrossIcon from '../../assets/icons/cross.svg'
import EditIcon from '../../assets/icons/edit.svg'
import TickIcon from '../../assets/icons/tick.svg'
import { ICON_NAME } from '../../constants/design-system';
import { IconName } from '../../types/design-system';

interface ListItemProps {
    name: string;
    startIconType?: IconName;
    endIconType?: IconName;
    onItemClick?: () => void;
    isLast?: boolean;
}

const getIcon = (type: IconName) => {
    switch (type) {
        case ICON_NAME.ARROW_RIGHT:
            return ArrowRightIcon;
        case ICON_NAME.CROSS:
            return CrossIcon;
        case ICON_NAME.EDIT:
            return EditIcon;
        case ICON_NAME.TICK:
            return TickIcon;
        default:
            return '';
    }
}

const ListItem = (props: ListItemProps) => {
    const { 
        name, 
        startIconType,
        endIconType,
        onItemClick,
        isLast,
    } = props;

    const handleItemClick = () => {
        if (onItemClick) {
            onItemClick();
        }
    }

    return (
        <div 
            className={`
                px-1.5 py-2 text-gray-4 text-sm font-medium 
                cursor-pointer hover:bg-accent-light 
                ${isLast ? 'mb-0' : 'r mb-2.5'}
            `}
            onClick={handleItemClick}
        >
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2.5'>
                    {startIconType && <img 
                        src={getIcon(startIconType)} 
                        className='p-1' 
                        alt="tick"
                    />}
                    <span>{name}</span>
                </div>
                {endIconType && <img 
                    src={getIcon(endIconType)} 
                    className='p-1 border border-solid rounded-md border-gray-3' 
                    alt="toggle"
                />}
            </div>
        </div>
    )
}
 
export default ListItem;