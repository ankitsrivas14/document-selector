import MasonLogo from '../../assets/icons/mason-logo.svg';
import HomeIcon from '../../assets/icons/home.svg';
import MembersIcon from '../../assets/icons/members.svg';
import MessagesIcon from '../../assets/icons/messages.svg';
import SettingsIcon from '../../assets/icons/settings.svg';
import FolderIcon from '../../assets/icons/folder.svg';
import AccountIcon from '../../assets/icons/account.svg';

const NavbarItems = [
    {id: 'home', icon: HomeIcon},
    {id: 'members', icon: MembersIcon},
    {id: 'messages', icon: MessagesIcon},
    {id: 'settings', icon: SettingsIcon},
    {id: 'folder', icon: FolderIcon},
]

const Navbar = () => {
    return (
        <div className="w-[60px] h-screen sticky top-0 left-0 bg-gray-7 flex flex-col justify-between items-center">
            <div>
                <img src={MasonLogo} alt="Mason Logo" className="w-8 h-8 mx-auto my-6 mb-10" />
                <div className="flex flex-col gap-5 items-center">
                    {NavbarItems.map((item) => (
                        <div className="p-1.5">
                            <img 
                                key={item.id} 
                                src={item.icon} 
                                alt={item.id} 
                                className='w-5 h-5 cursor-pointer' 
                            />
                        </div>
                    ))}
                </div>
            </div>
            <img src={AccountIcon} alt="Account" className="w-5 h-5 cursor-pointer mb-7" />
        </div>
    );
}

export default Navbar;