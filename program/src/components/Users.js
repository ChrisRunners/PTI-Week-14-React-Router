import { Link } from 'react-router-dom';
import users from './UserList'

const Users = () => {
  return (
    <div>
      <h2>Daftar Anomali</h2>
      <p>Berikut adalah daftar anomali yang telah ditemukan...</p>
      
      {users.map(user => (
        <div key={user.id} className="user-card">
          <img src={user.image} alt={user.name}></img>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <Link className='link' to={`/users/${user.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Users;