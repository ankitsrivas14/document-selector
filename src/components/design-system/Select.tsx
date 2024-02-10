
interface SelectProps {
    value: string;
}

const Select = (props: SelectProps) => {
    const { value } = props;
    return (
        <select className="
            border border-solid border-gray-3 w-full cursor-pointer
            px-2.5 py-2 rounded-md outline-none text-sm
        ">
            <option value="1">{value}</option>
        </select>
    )
}

export default Select;