import LogoutIcon from "../../assets/icon-logout.svg";
import "./logoutbtn.css";

function LogoutBtn() {
  return (
    <button className="button white">
      <img src={LogoutIcon} alt="" />
      <span>Logout</span>
    </button>
  );
}

export default LogoutBtn;
