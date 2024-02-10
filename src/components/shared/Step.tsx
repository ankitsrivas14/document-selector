interface StepProps {
    children: React.ReactNode;
    isActive: boolean;
    isCompleted: boolean;
}

const Step = (props: StepProps) => {
    const { 
        children, 
        isActive, 
        isCompleted 
    } = props;
    return (
        <div className={
            `px-4 py-3 rounded-md w-max font-semibold 
            cursor-pointer border border-solid text-gray-1
            text-xs flex items-center justify-center 
            ${isCompleted && 'text-success'} 
            ${isActive && '!border-accent-dark !text-accent-dark bg-accent-light'}`}
        >
            {children}
        </div>
    )
}

export default Step;