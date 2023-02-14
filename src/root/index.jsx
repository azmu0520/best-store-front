import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import { data } from '../utilits/navbar';
const Root = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        {data?.map(({ id, path, Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
      </Route>
      <Route path={'*'} element={<div>you are lost</div>} />
    </Routes>
  );
};

export default Root;
