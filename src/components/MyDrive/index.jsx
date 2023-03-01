import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useCollectionsContext } from "../../context/Collections";
import useRequest from "../../hooks/useRequest";
import { sidebar } from "../../utilits/sidebar";
import { Sidebar, Wrap } from "./style";

const MyDrive = () => {
  const { request } = useRequest();
  const [, dispatch] = useCollectionsContext();

  useEffect(() => {
    request({
      url: "/api/collections/user",
    }).then((res) => {
      if (res?.status == "success") {
        dispatch({ type: "setUserCollections", payload: res?.data });
      }
    });
  }, []);
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
