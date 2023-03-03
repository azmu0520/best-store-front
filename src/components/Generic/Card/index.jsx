import React, { useEffect, useState } from "react";
import { Wrap, Body } from "./style";
import img from "../../../assets/images/no-image.png";
import { NavLink } from "react-router-dom";
import AddCollection from "../../MyDrive/AddCollection";
import { useCollectionsContext } from "../../../context/Collections";
import { message, Modal } from "antd";
import useRequest from "../../../hooks/useRequest";
const { confirm } = Modal;

const Card = ({ item, all }) => {
  const [open, setOpen] = useState(false);
  const { request } = useRequest();
  const [{ collectionAdded }, dispatch] = useCollectionsContext();
  useEffect(() => {
    setOpen(false);
  }, [collectionAdded]);
  const showConfirm = () => {
    confirm({
      title: "Do you Want to delete this collection?",
      content: "Action cannot be returned",
      centered: true,
      onOk() {
        request({
          url: `/api/collections/${item?._id}`,
          method: "DELETE",
        }).then((res) => {
          if (res?.status === "success") {
            dispatch({ type: "setColllectionAdd", payload: item?._id });
            message.success(res?.message);
          }
        });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  return (
    <Wrap>
      <Wrap.ImageContainer>
        <Wrap.Image src={item.image || img} />
      </Wrap.ImageContainer>
      <Body>
        <NavLink to={item?._id || "/"} state={{ public: all }}>
          <Body.Title>
            {item.name}
            <span className="topic">{item?.topic}</span>
          </Body.Title>
          <Body.Desc>{item.description}</Body.Desc>
        </NavLink>

        {!all && (
          <Wrap.Footer>
            <span onClick={() => setOpen(true)}>
              <Wrap.Edit />
              Edit
            </span>
            <Wrap.Drawer
              placement="right"
              onClose={() => setOpen(false)}
              open={open}
              size="large"
              header={null}
            >
              <AddCollection edit={true} item={item} />
            </Wrap.Drawer>
            <span onClick={showConfirm}>
              <Wrap.Delete />
              Delete
            </span>
          </Wrap.Footer>
        )}
      </Body>
    </Wrap>
  );
};

export default Card;
