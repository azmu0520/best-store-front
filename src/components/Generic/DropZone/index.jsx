import React from "React";
import { useDropzone } from "React-dropzone";
import { Wrap } from "./style";

function Dropzone({ open }) {
  const { getRootProps, getInputProps } = useDropzone({});
  return (
    <Wrap {...getRootProps({ className: "dropzone" })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
        <p className="dropzone-content">
          Drag’n’drop some files here, or click to select files
        </p>
      </div>
    </Wrap>
  );
}

export default Dropzone;
