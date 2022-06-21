import LogoImg from "./Logo";
import LogoutBtn from "./LogoutBtn";
import ProfileImg from "./ProfileImg";
import WriteBtn from "./WriteBtn";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="max-width">
        <LogoImg />
        <ul>
          <li className="profile-img">
            <a href="#none">
              <ProfileImg alt="My Page" />
            </a>
          </li>
          <li>
            <WriteBtn />
          </li>
          <li>
            <LogoutBtn />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
