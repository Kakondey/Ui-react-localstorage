import "./styles/address.css";
import map_image from "./styles/mapimage.png";
import ChatWindow from "./ChatWindow";

const Address = ({ user }) => {
  return (
    <div className="address-data">
      <h2>Address</h2>
      <p>
        Street : <span>{user.address.street}</span>
      </p>
      <p>
        Suite : <span>{user.address.suite}</span>
      </p>
      <p>
        City : <span>{user.address.city}</span>
      </p>
      <p>
        Zipcode : <span>{user.address.zipcode}</span>
      </p>
      <img src={map_image} alt="map" />
      <ChatWindow />
    </div>
  );
};

export default Address;
