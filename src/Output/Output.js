import React from 'react';

const Output = (props) => {
    return (
        <div className='w-full text-center text-purple-600'>
            <h1 className='text-4xl'>Счётчик: {props.counter}</h1>
        </div>
    )
};

export default Output;