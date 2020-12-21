import React from 'react';

const Btn = (props) => {
    return (
        <button className={props.className} onClick={props.onClick} type="button">{props.value}</button>
    );
};

export default Btn;