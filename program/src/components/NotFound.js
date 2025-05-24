import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <p>This demonstrates the catch-all route path="*" in React Router.</p>
      <Link className='link' to="/">Return to Home Page</Link>
    </div>
  );
};

export default NotFound;