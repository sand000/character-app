import React from "react";
import { useNavigate } from "react-router-dom";

function CharacterCard({ item }) {
  return (
    <div
      style={{ margin: "10px", padding: "10px", border: "1px solid black", cursor: "pointer" }}
      onClick={() => window.open(`/character/${item.id}`, "_blank")}
    >
      <img src={item.image} alt='species img' height={"200px"} width={"230px"}></img>
      <h4>Name: {item.name}</h4>
      <p>Species: {item.species}</p>
      <p>Status: {item.status}</p>
    </div>
  );
}

export default CharacterCard;
