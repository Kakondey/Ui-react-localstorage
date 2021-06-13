import "./styles/chatwindow.css";

const ChatWindow = () => {
  return (
    <div className="chatwindow-main">
      <div className="close">
        Chat <span>&#9660;</span>
        <div className="chat-content">
          <h3 className="chat-header">Chats</h3>
          <div className="chat-main">
            {JSON.parse(localStorage.getItem("users")).users.map(
              (user, index) => {
                return (
                  <li key={index}>
                    <img src={user.profilepicture} alt="proimg" />
                    <div>{user.username}</div>
                    <div className="active"></div>
                  </li>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
