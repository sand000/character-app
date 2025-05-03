import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, Router } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/character' element={<Home />}></Route>
          <Route path='/character/:id' element={<CharacterPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
