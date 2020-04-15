import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
    width:100%;
    height:60px;
    border-width:10px;
    border-color:red;
    display:flex;
    flex:1;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    `

const Button = styled.div(prop => ({
    width: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "90px",
    height: "30px",
    margin: "10px",
    color: "#fff",
    fontSize: "1.5rem",
    backgroundColor: prop.color
}))

export default function panel(props) {

    return (
        <Panel>
            <div>
                {props.name}
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Button color="blue" onClick={() => props.increment(props.name)}>+</Button>
                {props.data}
                <Button color="red" onClick={() => props.decrement(props.name)}>-</Button>
            </div>
        </Panel>
    )
}