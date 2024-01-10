import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToLink } from "../App";
import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const res = await axios.get(`${ToLink}/api/allPost`);
      console.log(res.data.listall);
      const newdata = res.data.listall;
      newdata.map((item) => {
        item.data = JSON.parse(item.data);
        return item;
      });
      setList(newdata);
    } catch (err) {
      console.log(err);
    }
  };
  const addPostHandler = async () => {
    navigate("/add");
  };

  return (
    <>
      <div
        key="1"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          margin: "100px",
        }}
      >
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={addPostHandler}
        >
          Add Post
        </button>
        {list.map((item, index) => (
          <>
            <div key={index} style={{ boxShadow: "2px 2px 2px #000" }}>
              index: {index}
            </div>
            <div
              key={item._id}
              style={{ boxShadow: "2px 2px 2px #000", marginBottom: "50px" }}
            >
              <button
                key={item._id + "1mq"}
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate(`/edit/${item.id}`);
                }}
              >
                Edit this Post
              </button>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.data,
                }}
              ></div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
