import { useNavigate, useLocation, Link } from "react-router-dom";

const UserDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state;

  const returnNavigate = () => {
    navigate(-1);
  };

  if (!user) {
    return (
      <div>
        <div>User not found</div>
        <button onClick={returnNavigate}>Back to Users List</button>
        <br></br>
        <br></br>
        <Link className="link" to="/users">
          Back to Users List
        </Link>
      </div>
    );
  }

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p className="notice">Notice: The URL doesn't show the user ID because we're using state. The current path is: {location.pathname}</p>

      <button onClick={returnNavigate}>Back to Users List</button>
      <br></br><br></br>
      <Link className="link" to="/users">Back to Users List</Link>
    </div>
  );
};

export default UserDetail;
