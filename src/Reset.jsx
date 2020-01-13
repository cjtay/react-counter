import React from 'react';
import './Reset.css';

export default function Reset({ reset }) {
    return (
        <div className="Reset" onClick={reset}>
            Reset
        </div>
    );
}
