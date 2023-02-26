import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { sidebar } from '../../utilits/sidebar';
import { Sidebar, Wrap } from './style';

const MyDrive = () => {
  return (
    <Wrap>
      <Sidebar>
        <Sidebar.Logo>My Drive</Sidebar.Logo>
        {sidebar.map(({ path, title, id }) => (
          <NavLink key={id} to={path} data-replace={title}>
            <span>{title}</span>
          </NavLink>
        ))}
      </Sidebar>
      <Wrap.Outlet>
        <Outlet />
      </Wrap.Outlet>
    </Wrap>
  );
};

export default MyDrive;
