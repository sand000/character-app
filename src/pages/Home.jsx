import React, { useEffect, useState } from "react";
import apiCall from "../services/apiCall";
import CharachterCard from "../components/CharacterCard";

function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const today = new Date();
  const options = {
    weekday: "short", // "Sat"
    month: "short", // "May"
    day: "numeric", // "3"
    year: "numeric", // "2025"
  };
  const todayDay = today.toLocaleDateString("en-US", options);

  useEffect(() => {
    apiCall(page)
      .then((res) => setData(res.results))
      .catch((err) => console.log("Error", err));
  }, [page]);

  console.log("home", data);
  return (
    <div>
      <h1>CHARACTERS</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", margin: "10px", width: "full" }}>
        {data.map((item) => (
          <CharachterCard item={item} />
        ))}
      </div>
      <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
        <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
          Previous
        </button>
        <p style={{ padding: "0px 10px" }}>{page}</p>
        <button style={{ backgroundColor: "blue", color: "white" }} onClick={() => setPage((prev) => prev + 1)}>
          Next
        </button>
      </div>
      <div style={{ color: "grey", paddingTop: "10px" }}>Todays Time: {todayDay}</div>
    </div>
  );
}

export default Home;
