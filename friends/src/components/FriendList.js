import React, { useState, useEffect } from "react";
import { AxiosWithAuth } from "../api/axiosWithAuth";
import Header from "./Header";

import "../App.css";

const FriendList = (props) => {
  const [data, setData] = useState([{ name: "" }]);

  useEffect(() => {
    AxiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        console.log(res);
        setData(res.data);
        console.log(`data is ${data}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //console log to check data is passing through
  const checkData = () => {
    console.log(data);
  };

  const addData = () => {
    setData([...data, { name: "Chris" }]);
  };

  return (
    <div>
      <Header />
      {data.map((item) => {
        return <div className="namer">{item.name}</div>;
      })}
      <button onClick={checkData}> Check Data</button>
      <button onClick={addData}>Add Data</button>
    </div>
  );
};

export default FriendList;
