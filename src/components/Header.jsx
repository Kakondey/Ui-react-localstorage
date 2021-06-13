import "./styles/header.css";
import Dropdown from "./Dropdown";

const Header = ({ id }) => {
  return (
    <div className="header-data">
      <p>Profile</p>
      <div className="side-data">
        <img
          src={
            JSON.parse(localStorage.getItem("users")).users[id - 1]
              .profilepicture
          }
          alt="pimage"
        />
        <p>{JSON.parse(localStorage.getItem("users")).users[id - 1].name}</p>
        <Dropdown id={id} />
      </div>
    </div>
  );
};

export default Header;
