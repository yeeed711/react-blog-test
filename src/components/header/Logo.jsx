import Logo from "../../assets/Logo.svg";

const LogoImg = () => {
  return (
    <h1>
      <a href="#none">
        <img src={Logo} alt="My Blog" />
      </a>
    </h1>
  );
};

export default LogoImg;
