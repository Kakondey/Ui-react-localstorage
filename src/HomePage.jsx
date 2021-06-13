import { useEffect } from "react";
import "./styles/homepage.css";
import { useParams, useLocation, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Company from "./components/Company";
import Address from "./components/Address";
import Header from "./components/Header";

const HomePage = () => {
  const { userlist } = useLocation();
  const { id } = useParams();
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem("users") === null) {
      localStorage.setItem("users", JSON.stringify(userlist));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-main">
      <div className="side-bar">
        <Link to={`/home/${id}`}>Profile</Link>
        <Link to={`/${id}/posts`}>Posts</Link>
        <Link to={`/${id}/gallery`}>Gallery</Link>
        <Link to={`/${id}/todo`}>ToDo</Link>
      </div>
      <div className="home-content">
        <div className="header">
          <Header id={id} />
        </div>
        <div className="profile">
          <Profile
            user={JSON.parse(localStorage.getItem("users")).users[id - 1]}
          />
        </div>

        <div className="company">
          <div className="divider"></div>
          <Company
            user={JSON.parse(localStorage.getItem("users")).users[id - 1]}
          />
        </div>
        <div className="address">
          <Address
            user={JSON.parse(localStorage.getItem("users")).users[id - 1]}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
