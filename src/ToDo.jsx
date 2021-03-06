import { useEffect } from "react";
import "./styles/posts.css";
import { useParams, useLocation, Link } from "react-router-dom";

import Header from "./components/Header";

const ToDo = () => {
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
      <div className="posts-side-bar">
        <Link to={`/home/${id}`}>Profile</Link>
        <Link to={`/${id}/posts`}>Posts</Link>
        <Link to={`/${id}/gallery`}>Gallery</Link>
        <Link to={`/${id}/todo`}>ToDo</Link>
      </div>
      <div className="home-content">
        <div className="header">
          <Header id={id} />
        </div>
        <div className="posts-profile">
          <h1>Coming Soon</h1>
        </div>

        <div className="posts-company">
          <div className="posts-divider"></div>
        </div>
        <div className="posts-address"></div>
      </div>
    </div>
  );
};

export default ToDo;
