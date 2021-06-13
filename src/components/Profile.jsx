import "../components/styles/profile.css";

const Profile = ({ user }) => {
  return (
    <div className="profile-data">
      <img src={user.profilepicture} alt="profile_image" />
      <h2>{user.name}</h2>
      <p>
        Username : <span>{user.username}</span>
      </p>
      <p>
        e-mail : <span>{user.email}</span>
      </p>
      <p>
        Phone : <span>{user.phone}</span>
      </p>
      <p>
        Website : <span>{user.website}</span>
      </p>
    </div>
  );
};

export default Profile;
