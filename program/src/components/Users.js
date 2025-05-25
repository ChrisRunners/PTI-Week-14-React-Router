import { useNavigate, Link } from "react-router-dom";
import users from "./UserList";

const Users = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>
        Berikut adalah daftar anomali yang telah ditemukan... (Dynamic Route
        with State Management)
      </p>

      {users.map((user) => (
        <div key={user.id} className="user-card">
          <img src={user.image} alt={user.name}></img>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>

          <button onClick={() => navigate("/users/detail", { state: user })}>
            Navigation on Button {user.name}
          </button>
          <br></br><br></br>
          <Link className="link"
            to={`/users/detail`}
              state={user}
          >
            Link {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
