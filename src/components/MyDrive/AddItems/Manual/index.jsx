import React, { useEffect, useState } from "react";
import { CustomFields, Wrap } from "./style";
import { message, Upload } from "antd";
import { useCollectionsContext } from "../../../../context/Collections";
import useRequest from "../../../../hooks/useRequest";

const { Dragger } = Upload;

const Manual = ({ edit }) => {
  const [{ titles, item }, dispatch] = useCollectionsContext();
  const [tags, setTags] = useState([]);
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

  const handleSubmit = async (values) => {
    await request({
      url: edit ? `/api/items/${item?._id}` : "/api/items",
      method: edit ? "PATCH" : "POST",
      body: values,
    }).then((res) => {
      if (res?.status === "success") {
        message.success(res?.message);
        dispatch({ type: "setColllectionAdd", payload: values });
      }
    });
  };
  const handleSelect = async (e) => {
    await request({
      url: "/api/tags",
      method: "POST",
      body: { name: e },
    });
  };

  const [file, setFile] = useState(null);
  const handleFileChange = (file) => {
    setFile(file);
    console.log(file);
  };
  const fileTypes = ["JPG", "PNG"];
  return (
    <Wrap>
      <Wrap.Form onFinish={handleSubmit}>
        <Wrap.Title>Select Collection</Wrap.Title>
        <CustomFields.Item
          name="collectionId"
          rules={[{ required: true, message: "Please select an option!" }]}
        >
          <Wrap.AntSelect placeholder="Choose Collection" name="collectionId">
            {titles.map((item) => (
              <Wrap.Option value={item?.value}> {item?.label}</Wrap.Option>
            ))}
          </Wrap.AntSelect>
        </CustomFields.Item>

        <Wrap.Label>Choose the collection you're adding items to.</Wrap.Label>

        <Wrap.Title style={{ marginBottom: "-15px" }}>Custom Fields</Wrap.Title>
        <CustomFields>
          <CustomFields.Title>Title</CustomFields.Title>
          <CustomFields.Item
            name="name"
            rules={[{ required: true, message: "Please eneter an title!" }]}
          >
            <Wrap.Input />
          </CustomFields.Item>
          <CustomFields.Item>
            <CustomFields.Title>Author</CustomFields.Title>
            <CustomFields.Item name="auther">
              <Wrap.Input />
            </CustomFields.Item>
          </CustomFields.Item>
          <CustomFields.Item>
            <CustomFields.Title>Description</CustomFields.Title>
            <CustomFields.Item name="description">
              <Wrap.TextArea />
            </CustomFields.Item>
          </CustomFields.Item>
          <CustomFields.Item>
            <CustomFields.Title>Publish Date</CustomFields.Title>
            <CustomFields.Item name="publish_date">
              <Wrap.Input type="date" style={{ width: "fit-content" }} />
            </CustomFields.Item>
          </CustomFields.Item>
          <Wrap.ImageLabel htmlFor="image">
            <Wrap.CoverIcon />
            Cover Image
          </Wrap.ImageLabel>
          <CustomFields.Item name="image">
            <Dragger
              beforeUpload={(file) => {
                return new Promise((resolve, reject) => {
                  if (!file) {
                    reject("File not uploaded");
                  } else {
                    resolve("Successfully uploaded");
                  }
                });
              }}
            >
              <p className="ant-upload-drag-icon">
                <Wrap.Export />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </Dragger>
          </CustomFields.Item>
          <CustomFields.Item>
            <CustomFields.Title>Tags</CustomFields.Title>
            <CustomFields.Item name="tags">
              <Wrap.AntSelect
                mode="tags"
                options={tags}
                onSelect={handleSelect}
              />
            </CustomFields.Item>
          </CustomFields.Item>
        </CustomFields>
        <Wrap.Footer>
          <Wrap.Submit type="submit" value="Submit" />
        </Wrap.Footer>
      </Wrap.Form>
    </Wrap>
  );
};

export default Manual;
