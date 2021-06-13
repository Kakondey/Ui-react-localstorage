import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/landingpage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("https://panorbit.in/api/users.json");
      setUsers(response.data.users);
    };

    fetch();
  }, []);

  return (
    <div className="main">
      {users.map((user, index) => {
        return (
          <Link
            to={{ pathname: `home/${user.id}`, userlist: { users } }}
            key={index}
            className="card"
          >
            <img src={user.profilepicture} alt="pic" />
            <p>{user.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default LandingPage;
