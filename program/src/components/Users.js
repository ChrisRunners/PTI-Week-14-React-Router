import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];

const Users = () => {
  return (
    <div>
      <h2>Users List</h2>
      <p>Click on a user to see their details (dynamic route with parameter)</p>
      
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <Link to={`/users/${user.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Users;