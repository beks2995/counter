import React from 'react';
import Btn from "../Btn";

const BtnsPanel = (props) => {
    const MAX_COUNTER = 10;
    const MIN_COUNTER = 0;
    function increment() {
        props.setCounter(Math.min(props.counter + 1, MAX_COUNTER))
    }
    function decrement() {
        props.setCounter(Math.max(props.counter - 1, MIN_COUNTER))
    }
    function reset() {
        props.setCounter(props.counter - props.counter)
    }
    return (
        <div>
            <Btn className="w-20 bg-green-700 text-yellow-200 text-3xl h-10 m-3 focus:outline-none focus:ring focus:border-blue-300 rounded-lg" onClick={increment} value="+"/>
            <Btn className="w-20 bg-purple-700 text-yellow-200 text-3xl h-10 m-3 focus:outline-none focus:ring focus:border-blue-300 rounded-lg" onClick={decrement} value="-"/>
            <Btn className="w-20 bg-pink-800 text-yellow-200 text-3xl h-10 m-3 focus:outline-none focus:ring focus:border-blue-300 rounded-lg" onClick={reset} value="Reset"/>
        </div>
    )
};

export default BtnsPanel;