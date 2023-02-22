import React from "react";
import uploadImage from "../../assets/images/fileUpload.png";

const FileInput = ({OnFileChange}) => {
  return (
    <div className="flex justify-center items-center w-full  ">
      <label
        for="dropzone-file"
        className="w-full h-full cursor-pointer"
        // className="flex flex-col justify-center items-center w-full h-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"

        onChange={(e)=>{
           
          OnFileChange(e.target.files[0])
       }}
      >
        <div>

          <img src={uploadImage} alt="Upload" className="w-full h-full" />
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
};

export default FileInput;
