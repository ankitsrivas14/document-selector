
interface DetailsCardProps {
    title: string;
    description: string;
}

const DetailsCard = (props: DetailsCardProps) => {
    const { title, description } = props;
    return (
        <div className="p-6 bg-white border border-solid border-c-gray-100 rounded-md text-c-gray-900 mb-6">
            <div className="text-base font-semibold mb-4">{title}</div>
            <div className="text-sm font-medium">{description}</div>
        </div>
    );
}

export default DetailsCard;