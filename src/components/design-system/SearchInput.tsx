import SearchIcon from '../../assets/icons/search.svg'
import { SEARCH, createMessage } from '../../constants/messages';
const SearchInput = () => {
    return (
        <div className="flex items-center space-x-2 border border-solid border-gray-3 rounded-lg p-2 shadow-sm">
            <img src={SearchIcon} alt="search" className="h-4 w-4 text-gray-500" />
            <input
                className="flex-1 outline-none text-sm"
                type="text"
                placeholder={createMessage(SEARCH)}
            />
        </div>
    );
}
export default SearchInput;