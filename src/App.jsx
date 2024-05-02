import { useState } from "react";
import BlockContainer from "./components/block_container";
import Header from "./components/header";
import { getRandomArray } from "./utils/util";
import CardStep from "./components/CardStep";
import Footer from "./components/footer";
import Draggable from "react-draggable";


function App() {
  const [arr, setArray] = useState(getRandomArray(15));
  return (
    <>
      <Header setArray={setArray} array={arr} />
      <BlockContainer array={arr} />
      <audio src="/beep_audio.wav" autoPlay = {false} style={{display : "none"}}/>
      <Draggable handle="#step-container">
        <CardStep />
      </Draggable>
      <Footer setArray={setArray} array={arr} />
    </>
  );
}

export default App
