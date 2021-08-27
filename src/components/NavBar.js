
import "./NavBar.css";
import MyDrawer from "./MyDrawer";

const NavBar = ({ setCategory }) => {
    return (
        <div className="nav">
            <div className="menu">
                <MyDrawer setCategory={setCategory} />
            </div>

            <img
                className="logo"
                src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
                alt="logo"
            />
        </div>
    );
};

export default NavBar;