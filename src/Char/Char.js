import React from 'react';

const Char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
        cursor: 'pointer',
    };
    return (
        <div onClick={props.onClickedFn} style={style}>
            {props.character}
        </div>
    );
};

export default Char;
