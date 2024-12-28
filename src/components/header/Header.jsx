import { FaHeart, FaBell, FaCog } from "react-icons/fa";
import "./Header.css";
import profile from "../../assets/Image.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h1>MORENT</h1>
        </div>

        <div className="header__icons">
          <div className="header__icon">
            <FaHeart />
          </div>
          <div className="header__icon header__icon--notification">
            <FaBell />
            <span className="header__icon-dot"></span>
          </div>
          <div className="header__icon">
            <FaCog />
          </div>
          <div className="header__profile">
            <img src={profile} alt="User Profile" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
