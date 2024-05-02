import Block from "./block";

function BlockContainer(props) {
  const { array } = props;
  return (
    <div className="block-container" style={containerStyles}>
      {array.map(function (object, i) {
        return <Block key={object} value={object} />;
      })}
    </div>
  );
}

const containerStyles = {
  width: "100vw",
  display: "flex",
  textAlign: 'center',
  justifyContent: "center",
  alignItems: "flex-end",
  height: 'calc(100vh - 150px - 60px)',
};

export default BlockContainer;
