import { APPLICATION_STEPS } from '../../data/applications';
import { ApplicationStepType } from '../../types';
import Step from '../shared/Step';
import ArrowIcon from '../../assets/icons/arrow-right.svg';
import Button from '../design-system/Button';
import { ICON_NAME } from '../../constants/design-system';
import { IconName } from '../../types/design-system';

const Header = () => {
    return (
        <header className="px-6 py-4 border border-solid border-gray-3 sticky top-0 left-0 bg-white z-10">
            <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-gray-4">
                    Select Agreements, Notices and Other Documents
                </span>
                <Button startIcon={ICON_NAME.CROSS as IconName}>Save & Close</Button>
            </div>
            <div className='flex'>
                {APPLICATION_STEPS.map((step: ApplicationStepType, index) => (
                    <div key={step.id} className='flex items-center'>
                        <Step 
                            isActive={step.isActive} 
                            isCompleted={step.isCompleted}
                        >
                            {step.name}
                        </Step>
                        {index !== APPLICATION_STEPS.length-1 && <img src={ArrowIcon} alt={step.name} className='mx-3' />}
                    </div>
                ))}
            </div>
        </header>
    );
}

export default Header;