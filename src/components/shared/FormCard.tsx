
interface FormCardProps {
    children: React.ReactNode;
    heading: string;
}

const FormCard = (props: FormCardProps) => {
    const { children, heading } = props;
    return (
        <div className="w-full p-4 border border-solid border-gray-3 rounded-lg flex flex-col">
            <div className="text-base font-medium text-gray-4 mb-3">{heading}</div>
            {children}
        </div>
    )
}

export default FormCard;