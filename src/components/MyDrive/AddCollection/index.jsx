import { ErrorMessage, Formik } from "formik";
import React, { useState, useEffect } from "react";
import useRequest from "../../../hooks/useRequest";
import { Wrap, Uploader } from "./style";
import * as Yup from "yup";
import { message } from "antd";
import { useCollectionsContext } from "../../../context/Collections";

const AddCollection = ({ edit, item }) => {
  const [topics, setTopics] = useState([]);
  const [, dispatch] = useCollectionsContext();
  const [file, setFile] = useState(null);
  const handleFileChange = (file) => {
    setFile(file);
    console.log(file);
  };
  const [state, setState] = useState(item);
  const { request } = useRequest();
  useEffect(() => {
    request({
      url: "/api/topics",
    }).then((res) => {
      console.log(res, "res");
      if (res?.status === "success") {
        setTopics(res?.data);
      }
    });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    request({
      url: edit ? `/api/collections/${item?._id}` : "/api/collections",
      method: edit ? "PATCH" : "POST",
      body: state,
    }).then((res) => {
      if (res?.status === "success") {
        message.success(res?.message);
        dispatch({ type: "setColllectionAdd", payload: state });
        setState({ name: "", description: "", topic: "" });
      }
    });
  };
  console.log(item, "item");
  const fileTypes = ["JPG", "PNG"];

  return (
    <Wrap onSubmit={handleSubmit}>
      <Wrap.Title>{edit ? "Edit" : "Add"} Collection</Wrap.Title>
      <Wrap.SubTitle>Collection Title</Wrap.SubTitle>
      <Wrap.Input
        placeholder="Collection title"
        name="name"
        value={state?.name}
        required
        onChange={handleChange}
      />

      <Wrap.SubTitle>Collection Description</Wrap.SubTitle>
      <Wrap.TextArea
        placeholder="Small Description"
        required
        value={state?.description}
        name="description"
        onChange={handleChange}
        multiple={false}
        maxLength="100"
      />
      <Wrap.SubTitle>Cover Image</Wrap.SubTitle>
      <Uploader
        handleChange={handleFileChange}
        name="file"
        types={fileTypes}
        value={state?.image}
      />
      <p style={{ marginTop: "10px" }}>
        {file ? `File name: ${file?.name}` : "no files uploaded yet"}
      </p>
      <Wrap.SubTitle>Collection Topic</Wrap.SubTitle>
      <Wrap.TypeCheckBoxes>
        {topics.map(({ name }) => (
          <span>
            <Wrap.Checkbox
              type="radio"
              id={name}
              name="topic"
              required
              value={name}
              onChange={handleChange}
            />
            <label htmlFor={name}>{name}</label>
          </span>
        ))}
      </Wrap.TypeCheckBoxes>

      <Wrap.Submit type="submit" value="Add Collection" />
    </Wrap>
  );
};

export default AddCollection;
