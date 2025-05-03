async function apiCall(page) {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    let data = res.json();
    if (!data) return "No data Found";
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
}

export default apiCall;
