import "./styles/dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = ({ id }) => {
  return (
    <div className="dropdown-content">
      <img
        src={
          JSON.parse(localStorage.getItem("users")).users[id - 1].profilepicture
        }
        alt="pimage"
      />
      <div className="name">
        {JSON.parse(localStorage.getItem("users")).users[id - 1].name}
      </div>
      <div className="email">
        {JSON.parse(localStorage.getItem("users")).users[id - 1].email}
      </div>
      <div className="userlist">
        {JSON.parse(localStorage.getItem("users")).users.map((user, index) => {
          return (
            <li key={index}>
              <img src={user.profilepicture} alt="img" />
              <div>{user.name}</div>
            </li>
          );
        })}
      </div>
      <button>
        <Link to="/">Sign out</Link>
      </button>
    </div>
  );
};

export default Dropdown;
