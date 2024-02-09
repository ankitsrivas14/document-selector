import { APPLICATION_STEPS } from '../../data/applications';
import { ApplicationStepType } from '../../types';
import Step from '../shared/Step';
import ArrowIcon from '../../assets/icons/arrow-right.svg';
import Cross from '../../assets/icons/cross.svg';

const Header = () => {
    return (
        <header className="px-6 py-4 border border-solid border-c-gray-100">
            <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold text-c-gray-900">
                    Select Agreements, Notices and Other Documents
                </span>
                <button 
                    className="
                        px-3 py-2 flex items-center border-solid border border-c-gray-100
                        gap-1.5 font-semibold text-c-gray-900 rounded-lg text-sm
                    "
                >
                    <img src={Cross} />
                    Save & Close
                </button>
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