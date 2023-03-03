import { message } from "antd";
import React, { useEffect } from "react";
import { useCollectionsContext } from "../../context/Collections";
import useRequest from "../../hooks/useRequest";
import Card from "../Generic/Card";
import { Wrap } from "./style";

const Home = () => {
  const { request } = useRequest();
  const [{ allCollections }, dispatch] = useCollectionsContext();
  useEffect(() => {
    request({
      url: "/api/collections",
    }).then((res) => {
      if (res?.status === "success") {
        dispatch({ type: "setAllCollections", payload: res?.data });
      } else {
        message.error(res?.message);
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <Wrap>
      {allCollections?.map((item) => (
        <Card item={item} all="true" />
      ))}
    </Wrap>
  );
};

export default Home;
