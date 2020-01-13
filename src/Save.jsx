import React from 'react';
import './Save.css';

export default function Save({ handleSave }) {
    const handleClick = () => {
        handleSave();
    };
    return (
        <div className="Save" onClick={handleClick}>
            Save
        </div>
    );
}
