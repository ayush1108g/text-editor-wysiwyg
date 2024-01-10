import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ToLink } from "../App";
import { useNavigate } from "react-router";
import axios from "axios";
import MySunEditor from "../Editor";

const EditPost = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const getData = async () => {
    try {
      const res = await axios.get(`${ToLink}/api/getPost/${id}`);
      const newdata = res.data.post;
      console.log(res);
      const newdata2 = JSON.parse(newdata.data);
      console.log("newdata2", newdata2);
      setData(newdata2);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log("data", data);

  const changeHandler = (content) => {
    const dhtml = content;
    const pdata = JSON.stringify(dhtml);
    console.log("pdata", pdata);
    setData(pdata);
    console.log("data", data);
  };
  console.log("data", data);

  const SubmitHandler = async () => {
    console.log("data", data);
    try {
      const res = await axios.put(`${ToLink}/api/updatePost/${id}`, {
        data,
      });
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        {data && data.length > 0 && (
          <MySunEditor initialContent={data} onChange={changeHandler} />
        )}
        <button onClick={SubmitHandler}>Submit </button>
      </div>
    </div>
  );
};

export default EditPost;
