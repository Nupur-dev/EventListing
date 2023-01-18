import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomeScreen() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://allevents.s3.amazonaws.com/tests/categories.json')
            .then(res => {
                setCategories(res.data);
            });
    }, []);

    return (
        <div>
            <h1>Event Categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default HomeScreen;
