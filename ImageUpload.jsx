import React, { useState } from "react";
import { Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const ImageUpload = () => {
  const [fileList, setFileList] = useState([]);
  return (
    <Upload
      listType="picture-card"
      fileList={fileList}
      onChange={({ fileList }) => setFileList(fileList)}
      beforeUpload={() => {
        message.success("Image added");
        return false;
      }}
    >
      <PlusOutlined /> Upload
    </Upload>
  );
};

export default ImageUpload;
