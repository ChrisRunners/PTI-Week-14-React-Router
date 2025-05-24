import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About This Demo</h2>
      <hr></hr>
      <p>This application demonstrates key features of React Router:</p>
      
      <h3>NavLink</h3>
      <p>
        The navigation menu uses <code>NavLink</code> instead of regular <code>Link</code> 
        to apply special styling to the active route. Notice how the current page's link 
        is highlighted in the navigation bar.
      </p>
      
      <h3>Dynamic Routing</h3>
      <p>
        The Users and Products pages demonstrate dynamic routing where content is loaded 
        based on URL parameters. Click on any user or product to see their details page.
      </p>
      
      <h3>Route Parameters</h3>
      <p>
        The detail pages (like <code>/users/1</code> or <code>/products/101</code>) 
        use route parameters to display specific content. These parameters are accessed 
        using the <code>useParams</code> hook from React Router.
      </p>
    </div>
  );
};

export default About;