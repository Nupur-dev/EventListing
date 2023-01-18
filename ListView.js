import React from 'react';

function ListView({ events }) {
    return (
        <div>
            <h1>List View</h1>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <h2>{event.name}</h2>
                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListView;
