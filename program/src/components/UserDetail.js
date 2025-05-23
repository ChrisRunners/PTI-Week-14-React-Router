import React from 'react';
import { useParams, Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-1234', address: '123 Main St' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-5678', address: '456 Oak Ave' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-9012', address: '789 Pine Rd' },
];

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
      <p>Notice how the URL contains the user ID as a parameter: <code>/users/{userId}</code></p>
      <Link to="/users">Back to Users List</Link>
    </div>
  );
};

export default UserDetail;