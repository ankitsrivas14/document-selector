import CrossIcon from '../../assets/icons/cross.svg';
import ChevronLeft from '../../assets/icons/chevron-left.svg';
import ChevronRight from '../../assets/icons/chevron-right-light.svg';
import { ICON_NAME } from '../../constants/design-system';
import { IconName } from '../../types/design-system';

interface ButtonProps {
    startIcon?: IconName;
    endIcon?: IconName;
    primary?: boolean;
    children: string;
}

const getIconName = (iconName: IconName) => {
    switch (iconName) {
        case ICON_NAME.CROSS:
            return CrossIcon;
        case ICON_NAME.CHEVRON_LEFT:
            return ChevronLeft;
        case ICON_NAME.CHEVRON_RIGHT:
            return ChevronRight;
        default:
            return '';
    }

}

const Button = (props: ButtonProps) => {
    const { startIcon, endIcon, children } = props;
    return (
        <button 
            className={
                `px-3 py-2 flex items-center border-solid border border-gray-3
                gap-1.5 font-semibold text-gray-4 rounded-lg text-sm
                ${props.primary ? 'bg-accent-dark text-white' : 'bg-white'}
                `
            }
        >
            {startIcon && <img src={getIconName(startIcon)} />}
            {children}
            {endIcon && <img src={getIconName(endIcon)} />}
        </button>
    )
}

export default Button;