import React from 'react';
import { useParams, Link } from 'react-router-dom';
import users from './UserList'


const UserDetail = () => {
  const { userId } = useParams();
  const user = users.find(u => u.id === parseInt(userId));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="user-card">
      <h2>User Details</h2>
      <h3>{user.name}</h3>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p className='notice'>Perhatikan URL yang mencakup ID dari User sebagai parameter: <code>/users/{userId}</code></p>
      <Link className='link' to="/users">Back to Users List</Link>
    </div>
  );
};

export default UserDetail;