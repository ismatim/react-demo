import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/board">KanbanBoard</Link></li>
    </ul>
  </div>
);

export default Navigation;
