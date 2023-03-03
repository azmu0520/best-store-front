import React, { useEffect, useState } from "react";
import { useCollectionsContext } from "../../../context/Collections";
import { Content, Wrap } from "./style";
import noImage from "../../../assets/images/user.jpg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Manual from "../../MyDrive/AddItems/Manual";
const Item = () => {
  const [{ allCollections, data }, dispatch] = useCollectionsContext();
  const { collectionId } = useParams();
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const currentItems = allCollections?.filter(
      (item) => item?._id === collectionId
    )[0];

    setItems(currentItems?.items);
  }, [allCollections, data, collectionId]);
  const handleEdit = (id) => {
    setOpen(true);
    console.log(items?.filter((item) => item?._id === id)[0]);
    dispatch({
      type: "setSingleItem",
      payload: items?.filter((item) => item?._id === id)[0],
    });
  };
  const handleDelete = () => {};
  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  return (
    <>
      <Wrap.Drawer
        size={"large"}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Manual edit={true} />
      </Wrap.Drawer>
      {items?.length ? (
        items?.map((item) => (
          <Wrap>
            <Wrap.Image src={noImage} />
            <Content>
              <Content.Title>{item?.name}</Content.Title>
              <Content.Auther>{item?.author}</Content.Auther>
              <Content.CustomItems>
                Published: <span>{item?.publish_date}</span>
              </Content.CustomItems>
              <Content.Desc>
                Description
                <p>{item?.description}</p>
              </Content.Desc>
              <Content.Tags>
                {item?.tags?.map((tag) => (
                  <span>{tag}</span>
                ))}
              </Content.Tags>
              {location.state.public !== "true" && (
                <Wrap.Controllers>
                  <span onClick={() => handleEdit(item?._id)}>
                    <Wrap.EditIcon /> Edit
                  </span>
                  <span onClick={() => handleDelete(item?._id)}>
                    <Wrap.DeleteIcon /> Delete
                  </span>
                </Wrap.Controllers>
              )}
            </Content>
          </Wrap>
        ))
      ) : (
        <Wrap.NoItems>
          <span>There is no items yet!</span>
          <span
            style={{ textDecoration: "underline" }}
            onClick={() => navigate(-1)}
          >
            Go back
          </span>
        </Wrap.NoItems>
      )}
    </>
  );
};

export default Item;
