import React, { useEffect, useState } from "react";
import characterApiCall from "../services/characterApiCall";
import { useParams } from "react-router";

function CharacterPage() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    characterApiCall(id)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <img src={data?.image}></img>
      <h3>Name: {data?.name}</h3>
      <p>Status: {data?.status}</p>
      <p>Species: {data?.species}</p>
      <p>Gender: {data?.gender}</p>
      <p>Type: {data?.type}</p>
      <p>Location: {data?.location?.name}</p>
      <p>Origin: {data?.origin?.name}</p>
    </div>
  );
}

export default CharacterPage;
