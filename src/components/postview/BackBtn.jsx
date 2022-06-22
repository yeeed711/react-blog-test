import { Link } from "react-router-dom";
import "./backbtn.css";

function BackBtn() {
  return (
    <Link to="/" class="btn-back">
      <span class="a11y-hidden">Back</span>
    </Link>
  );
}

export default BackBtn;
