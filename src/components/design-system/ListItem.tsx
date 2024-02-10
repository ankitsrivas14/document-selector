import ArrowRightIcon from '../../assets/icons/arrow-right-dark.svg'
import CrossIcon from '../../assets/icons/cross.svg'
import { ICON_NAME } from '../../constants/design-system';
import { IconName } from '../../types/design-system';

interface ListItemProps {
    name: string;
    startIconType?: IconName;
    endIconType?: IconName;
    onItemClick?: () => void;
}

const ListItem = (props: ListItemProps) => {
    const { 
        name, 
        startIconType,
        endIconType,
        onItemClick,
    } = props;

    const handleItemClick = () => {
        if (onItemClick) {
            onItemClick();
        }
    }

    return (
        <div 
            className='
                px-1.5 py-2 mb-2.5 text-gray-4 text-sm font-medium 
                cursor-pointer hover:bg-accent-light
            ' 
            onClick={handleItemClick}
        >
            <div className='flex justify-between items-center'>
                <span>{name}</span>
                {endIconType === ICON_NAME.ARROW_RIGHT && <img 
                    src={ArrowRightIcon} 
                    className='p-1 border border-solid rounded-md border-gray-3 fill-gray-4' 
                    alt="toggle"
                />}
                {endIconType === ICON_NAME.CROSS && <img 
                    src={CrossIcon} 
                    className='p-1 border border-solid rounded-md border-gray-3 fill-gray-4' 
                    alt="cross"
                />}
            </div>
        </div>
    )
}
 
export default ListItem;