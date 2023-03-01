import React, { useEffect, useState } from "react";
import { CustomFields, Wrap } from "./style";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useCollectionsContext } from "../../../../context/Collections";
import useRequest from "../../../../hooks/useRequest";
import { message } from "antd";

const Manual = () => {
  const [{ titles }] = useCollectionsContext();
  const [tags, setTags] = useState([]);
  const [state, setState] = useState({
    collectionId: "",
  });
  const { request } = useRequest();
  useEffect(() => {
    request({
      url: "/api/tags",
    }).then((res) => {
      if (res.status == "success") {
        setTags(
          res?.data.map((i) =>
            Object.assign({}, { value: i.name, label: i.name })
          )
        );
      }
    });
  }, []);

  const handleSubmit = (e, { resetForm }) => {
    request({
      url: "/api/items",
      method: "POST",
      body: e,
    }).then((res) => {
      if (res?.status === "success") {
        console.log(res);
        message.success(res?.message);
        resetForm();
      }
    });
  };
  return (
    <Wrap>
      <Formik
        initialValues={{
          collectionId: "",
          name: "",
          auther: "",
          description: "",
          publish_date: "",
          image: "",
          tags: [],
        }}
        validationSchema={Yup.object({
          // password: Yup.string()
          //   .min(3, "Password should be of minimum 3 characters length")
          //   .required("Required"),
          collectionId: Yup.string().required("Required"),
        })}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Wrap.Form onSubmit={formik.handleSubmit}>
            <Wrap.Title>Select Collection</Wrap.Title>
            <Wrap.AntSelect
              placeholder="Choose Collection"
              required
              name="collectionId"
              onChange={(value) => formik.setFieldValue("collectionId", value)}
            >
              {titles.map((item) => (
                <Wrap.Option value={item?.value}> {item?.label}</Wrap.Option>
              ))}
            </Wrap.AntSelect>
            <ErrorMessage name="collectionId">
              {() => (
                <p style={{ color: "red", fontSize: "12px" }}>
                  Choose Collection
                </p>
              )}
            </ErrorMessage>
            <Wrap.Label>
              Choose the collection you're adding items to.
            </Wrap.Label>
            {/*  
           <Wrap.Title>Item Type</Wrap.Title>
           <Wrap.TypeCheckBoxes>
             {types.map(({ name }) => (
               <span>
                 <Wrap.Checkbox
                   type="radio"
                   id={name}
                   name="type"
                   {...formik.getFieldProps("type")}
                 />
                 <label htmlFor={name}>{name}</label>
               </span>
             ))}
           </Wrap.TypeCheckBoxes> 
           <Wrap.Label>The type of item are you adding.</Wrap.Label>
           */}
            <Wrap.Title style={{ marginBottom: "-15px" }}>
              Custom Fields
            </Wrap.Title>
            <CustomFields>
              <CustomFields.Item>
                <CustomFields.Title>Title</CustomFields.Title>
                <Wrap.Input name="name" {...formik.getFieldProps("name")} />
              </CustomFields.Item>
              <CustomFields.Item>
                <CustomFields.Title>Author</CustomFields.Title>
                <Wrap.Input name="auther" {...formik.getFieldProps("auther")} />
              </CustomFields.Item>
              <CustomFields.Item>
                <CustomFields.Title>Description</CustomFields.Title>
                <Wrap.TextArea
                  name="description"
                  {...formik.getFieldProps("description")}
                />
              </CustomFields.Item>
              <CustomFields.Item>
                <CustomFields.Title>Publish Date</CustomFields.Title>
                <Wrap.Input
                  type="date"
                  value="2023-07-22"
                  style={{ width: "fit-content" }}
                  {...formik.getFieldProps("publish_date")}
                />
              </CustomFields.Item>
              <CustomFields.Item>
                <Wrap.ImageLabel htmlFor="image">
                  <Wrap.CoverIcon />
                  Cover Image
                </Wrap.ImageLabel>
                <Wrap.Input
                  type="file"
                  id="image"
                  accept=".jpg,.png,.gif,.jpeg"
                  hidden
                  {...formik.getFieldProps("image")}
                />
              </CustomFields.Item>
              <CustomFields.Item>
                <CustomFields.Title>Tags</CustomFields.Title>
                <Wrap.AntSelect
                  mode="tags"
                  options={tags}
                  name="tags"
                  onChange={(value) => formik.setFieldValue("tags", value)}
                />
              </CustomFields.Item>
            </CustomFields>
            <Wrap.Footer>
              <Wrap.Submit type="submit" value="Submit" />
            </Wrap.Footer>
          </Wrap.Form>
        )}
      </Formik>
    </Wrap>
  );
};

export default Manual;
