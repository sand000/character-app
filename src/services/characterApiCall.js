async function characterApiCall(id) {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    let data = res.json();
    if (!data) return "No data Found";
    console.log("char page data", data);
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
}

export default characterApiCall;
