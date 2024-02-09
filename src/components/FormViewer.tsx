import DetailsCard from "./shared/DetailsCard";

const FormViewer = () => {
    return (
        <div className="mx-auto w-[1024px] mt-6">
            <DetailsCard 
                title="Which agreements, forms and notices should be sent to Jason Smith?" 
                description="Employees assigned to this job type will be required to review, where relevant fill-in, and sign the following agreements and notices:"
            />
        </div>
    )
}

export default FormViewer;