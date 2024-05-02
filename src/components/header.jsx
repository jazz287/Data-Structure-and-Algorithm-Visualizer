import { getRandomArray } from "../utils/util";
import { useEffect, useState } from "react";
import { algos } from "../utils/algos";
import { setSteps } from "../utils/util";

function Header(props) {
  let [selectedAlgorithm, setSelectedAlgorithm] = useState(algos.bubble);

  useEffect(() => {
    setSteps(selectedAlgorithm.steps, selectedAlgorithm.name, selectedAlgorithm.desc);
  }, [selectedAlgorithm]);
  return (
    <div style={headerStyles}>
      <button onClick={() => props.setArray(getRandomArray(15))}>
        Generate New Array
      </button>
      <div>
        <select name="Algorithms" id="Algorithms" onChange={(a) => {
          setSelectedAlgorithm(algos[a.target.value]);
          return false;
        }}>
          <option disabled>
            Choose one
          </option>
          <option value="bubble" selected>Bubble Sort  </option>
          <option value="selection">Selection Sort   </option>
          <option value="insertion">Insertion Sort   </option>
        </select>
        <span>&emsp;</span>
        <button
          onClick={async () => {
            let oldArray = [...props.array];
            let value = await selectedAlgorithm.func(oldArray);
            console.log(value);
            props.setArray(value);
          }}
        >
          Sort
        </button>
      </div>
    </div>
  );
}

const headerStyles = {
  display: "flex",
  justifyContent: "space-around",
  width: "100vw",
  backgroundColor: "#213547",
  padding: "10px",
  marginBottom: "10px",
};

export default Header;
