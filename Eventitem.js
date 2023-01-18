import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EventItems() {
    const [events, setEvents] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        axios.get(`https://allevents.s3.amazonaws.com/tests/events_${categoryId}.json`)
            .then(res => {
                setEvents(res.data);
            });
    }, [categoryId]);

    return (
        <div>
            <h1>Events</h1>
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

export default EventItems;
