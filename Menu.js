import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Menu() {
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
                    <li key={category.id}>
                        <Link to={`/categories/${category.id}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
