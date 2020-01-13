import React from 'react';
import './Button.css';

export default function Button({ sign, step, handleIncrease, handleDecrease }) {
    const handleClick = () => {
        if (sign === '+') {
            handleIncrease(step);
        } else if (sign === '-') {
            handleDecrease(step);
        }
    };
    return (
        <div className='Button'>
            <button onClick={handleClick}>
                {sign}
                {step}
            </button>
        </div>
    );
}
