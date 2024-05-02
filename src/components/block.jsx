/* eslint-disable react/prop-types */
function Block(props) {
    return <div style={{
        backgroundColor: "mediumseagreen",
        height: (props.value * 2.5) + `px`,
        width: '40px',
        marginRight: '8px',
        transformOrigin: '50% 50% 0px',
        transition: 'all 0.25s ease',
    }}
    
    data-value={props.value}
    >
        {props.value}
    </div>;
}

export default Block;