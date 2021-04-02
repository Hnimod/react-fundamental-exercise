import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props: any) => {
  return (
    <div
      style={{ textAlign: 'center', background: '#3f51b5', padding: '10px 0' }}
    >
      <NavLink
        exact
        style={{ color: '#fff', marginRight: '20px' }}
        activeStyle={{ color: '#ff0000' }}
        to="/"
        className="my-link"
      >
        Home
      </NavLink>

      <NavLink
        exact
        style={{ color: '#fff', marginRight: '20px' }}
        activeStyle={{ color: '#ff0000' }}
        to="/profile"
        className="my-link"
      >
        Profile
      </NavLink>
    </div>
  );
};

export default Nav;
