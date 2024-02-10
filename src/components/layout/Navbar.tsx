import './Navbar.css'

const Navbar = () => {
    return (
        <div className="w-[60px] h-screen sticky top-0 left-0 bg-gray-7">
            <div>Logo</div>
            <div className="navbar-items">
                <div className="navbar-item">Item 1</div>
                <div className="navbar-item">Item 1</div>
                <div className="navbar-item">Item 1</div>
                <div className="navbar-item">Item 1</div>
                <div className="navbar-item">Item 1</div>
            </div>
        </div>
    );
}

export default Navbar;