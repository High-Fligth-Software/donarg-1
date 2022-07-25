import React from "react";
import axios from "axios";
import React, { useState } from "react";

function TestUpload() {
  const [files, setFiles] = useState([]);

  const selectedHandler = (e) => {
    setFiles(e.target.files);
  };
  const sendFiles = () => {
    if (!file) {
      alert("you must upload file");
      return;
    }
    const formData = new FormData();
    for (let index = 0; index < files.length; index++) {
      formData.append("files", files[index]);
    }
    const body = formData;
    axios
      .post("http://localhost:3000/post/testUploadArray", body)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
    document.getElementById("fileInput").value = null;
  };

  return (
    <div>
      <input
        id="fileInput"
        onChange={selectedHandler}
        multiple
        type={"file"}
      ></input>
      <button onClick={sendFiles}>TestUpload</button>
    </div>
  );
}

export default TestUpload;
