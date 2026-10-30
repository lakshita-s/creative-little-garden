import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Gate from "./scenes/Gate.jsx";
import Map from "./scenes/Map.jsx";
import Bench from "./scenes/Bench.jsx";
import Meal from "./scenes/Meal.jsx";
import LadiesLunch from "./scenes/LadiesLunch.jsx";
import Swing from "./scenes/Swing.jsx";
import Tree from "./scenes/Tree.jsx";
import Images from "./scenes/Images.jsx";



function App() {
  const [scene, setScene] = useState("gate"); // which scene is showing
  const [done, setDone] = useState([]); // finished scenes

  function markDone(id) {
    if (!done.includes(id)) setDone([...done, id]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gate />} />
        <Route path="/map" element={<Map done={done} />} />
        <Route path="/bench" element={<Bench markDone={markDone} />} />
        <Route path="/ladies-lunch" element={<LadiesLunch markDone={markDone} />}/>
        <Route path="/meal" element={<Meal markDone={markDone} />} />
        <Route path="/swing" element={<Swing markDone={markDone} />} />
        <Route path="/willow-tree" element={<Tree markDone={markDone} />} />
        <Route path="/images" element={<Images markDone={markDone} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
