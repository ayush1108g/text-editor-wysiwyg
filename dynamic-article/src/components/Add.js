import React from "react";
import MySunEditor from "../Editor";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToLink } from "../App";

const Add = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const changeHandler = (content) => {
    const dhtml = content;
    // const pdata = JSON.stringify(dhtml);
    const pdata = dhtml;
    console.log("pdata", pdata);
    setData(pdata);
    console.log("data", data);
  };
  console.log("data", data);

  const SubmitHandler = async () => {
    console.log("data", data);
    try {
      const res = await axios.post(`${ToLink}/api/addArticle`, { data });
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <MySunEditor onChange={changeHandler} />
      <button onClick={SubmitHandler}>Submit </button>
    </div>
  );
};

export default Add;
