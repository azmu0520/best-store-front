import React from "react";
import { useCollectionsContext } from "../../../context/Collections";

const Item = () => {
  const [{ items }] = useCollectionsContext();
  return <div>Item</div>;
};

export default Item;
