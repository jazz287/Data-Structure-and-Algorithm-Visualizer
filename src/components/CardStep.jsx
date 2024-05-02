function CardStep() {
  return (<div style={{
    position: "fixed",
    right: "10px",
    "bottom": "70px",
    backgroundColor : "#C4A484",
    padding : "7px",
    borderRadius : "5px",
    border : "1px solid black",
    maxWidth : "300px",
    maxHeight : "300px",
    overflow : "scroll",
  }}
  id="step-container"
  >
    <u><h3>Algorithm Name</h3></u>
    <p style={{
      fontSize : "11px",
      fontWeight : "bold",
    }}>Algorithm Description</p>

    <ul style={{paddingLeft : "15px"}}>

    </ul>
  </div>);
}

export default CardStep;