//picks which scene to show, and remembers which scenes have been completed. 
//the state is stored in the App component and passed down to the Map component. 
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
import Gallery from "./scenes/Gallery.jsx";

function App() {
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
        <Route path="/ladies-lunch" element={<LadiesLunch markDone={markDone} />} />
        <Route path="/meal" element={<Meal markDone={markDone} />} />
        <Route path="/swing" element={<Swing markDone={markDone} />} />
        <Route path="/willow-tree" element={<Tree markDone={markDone} />} />
        <Route path="/gallery" element={<Gallery markDone={markDone} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
