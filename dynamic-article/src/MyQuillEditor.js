import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const CustomUndo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
    <path
      className="ql-stroke"
      d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
    />
  </svg>
);

const CustomRedo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
    <path
      className="ql-stroke"
      d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
    />
  </svg>
);

const MyQuillEditor = () => {
  const [content, setContent] = useState("");

  const Size = Quill.import("formats/size");
  Size.whitelist = ["extra-small", "small", "medium", "large"];
  Quill.register(Size, true);

  const Font = Quill.import("formats/font");
  Font.whitelist = ["arial"];
  Quill.register(Font, true);

  const handleEditorChange = (value) => {
    setContent(value);
    console.log(content);
  };

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleEditorChange}
        modules={{
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"],
              ["blockquote", "code-block"],
              [{ size: ["small", false, "large", "huge"] }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }],
              [{ indent: "-1" }, { indent: "+1" }],
              [{ direction: "rtl" }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ color: [] }, { background: [] }],
              [{ font: [] }],
              [{ align: [] }],
              ["clean"],
              ["link", "image", "video"],
              ["formula", "code-block"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["undo", "redo"],
            ],
          },
        }}
        formats={[
          "header",
          "size",
          "bold",
          "font",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "code-block",
          "script",
          "align",
          "direction",
          "color",
          "background",
          "clean",
          "list",
          "ordered",
          "bullet",
          "indent",
          "link",
          "image",
          "video",
        ]}
        theme="snow"
        placeholder="Start typing..."
      />
    </div>
  );
};

export default MyQuillEditor;
