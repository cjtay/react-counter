import React, { useState } from 'react';
import Button from './Button';
import Reset from './Reset';
import Save from './Save';

import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [result, setResult] = useState([]);

    const handleIncrease = step => {
        setCount(count + step);
    };

    const handleDecrease = step => {
        setCount(count - step);
    };

    const handleReset = () => {
        setCount(0);
    };

    const handleSave = () => {
        setResult(result => [...result, count]);
    };

    const resultList = result.map(r => {
        return <p>{r}</p>;
    });

    return (
        <>
            <div className='App'>
                <h1>Counter (forked version)</h1>
                <Button sign={'+'} step={1} handleIncrease={handleIncrease} />
                <Button sign={'+'} step={10} handleIncrease={handleIncrease} />
                <Button sign={'+'} step={100} handleIncrease={handleIncrease} />

                <Button sign={'-'} step={1} handleDecrease={handleDecrease} />
                <Button sign={'-'} step={10} handleDecrease={handleDecrease} />
                <Button sign={'-'} step={100} handleDecrease={handleDecrease} />

                <span>{count}</span>
                <Save handleSave={handleSave} />
                <Reset reset={handleReset} />
                <h1>List of results!</h1>
                {resultList}
            </div>
        </>
    );
}

export default App;
