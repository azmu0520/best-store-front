import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Item from "../components/Generic/Item";
import MyDrive from "../components/MyDrive";
import Navbar from "../components/Navbar";
import { data } from "../utilits/navbar";
import { sidebar } from "../utilits/sidebar";
import PrivateRoute from "./privateRoute";
const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        {data?.map(({ id, path, Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
        <Route path="/drive" element={<MyDrive />}>
          {sidebar.map(({ id, path, Component }) => (
            <Route
              key={id}
              path={path}
              element={
                <PrivateRoute>
                  <Component />
                </PrivateRoute>
              }
            />
          ))}
          <Route index element={<Navigate to="profile" />}></Route>
          <Route
            path="library/:collectionId"
            element={
              <PrivateRoute>
                <Item />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/:collectionId"
          element={
            <PrivateRoute>
              <Item />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path={"*"} element={<div>you are lost</div>} />
    </Routes>
  );
};

export default Root;
