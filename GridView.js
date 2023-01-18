import React from 'react';

function GridView({ events }) {
    return (
        <div>
            <h1>Grid View</h1>
            <div className="grid-container">
                {events.map(event => (
                    <div className="grid-item" key={event.id}>
                        <h2>{event.name}</h2>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GridView;
