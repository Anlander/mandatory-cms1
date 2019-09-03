import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';



const Navigation = () => {
  return (
    <div className="Menu">
      <Link to="/">Home</Link><br></br>
      <Link to="/Article">Article</Link> <br></br>
      <Link to="/Authors">Authors</Link><br></br>
    </div>
  );
};

export default Navigation;
