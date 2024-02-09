import { APPLICATION_STEPS } from '../../data/applications';
import { ApplicationStepType } from '../../types';
import Step from '../shared/Step';
import './Header.css'
import ArrowIcon from '../../assets/icons/arrow-right.svg';
import Cross from '../../assets/icons/cross.svg';

const Header = () => {
    return (
        <header className="abc">
            <div className="def">
                <span className="ghi">Select Agreements, Notices and Other Documents</span>
                <button className="jkl">
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