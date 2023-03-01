import React from "react";
import { Routes, Route } from "react-router-dom";
import Item from "../components/Generic/Item";
import MyDrive from "../components/MyDrive";
import Navbar from "../components/Navbar";
import { data } from "../utilits/navbar";
import { sidebar } from "../utilits/sidebar";
const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        {data?.map(({ id, path, Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
        <Route path="drive" element={<MyDrive />}>
          {sidebar.map(({ id, path, Component }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
          <Route path="library/:collectionId" element={<Item />} />
        </Route>
      </Route>
      <Route path={"*"} element={<div>you are lost</div>} />
    </Routes>
  );
};

export default Root;
