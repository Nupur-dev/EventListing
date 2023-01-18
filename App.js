import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ListView from './ListView';
import GridView from './GridView';

function HomeScreen() {
    const [categories, setCategories] = useState([]);

    React.useEffect(() => {
        axios.get('https://allevents.s3.amazonaws.com/tests/categories.json')
            .then(res => {
                setCategories(res.data);
            });
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Event Categories</h1>
                    <ul>
                        {categories.map(category => (
                            <li key={category.id}>
                                <Link to={`/categories/${category.id}`}>{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

function ListingScreen({ match }) {
    const [events, setEvents] = useState([]);
    const [view, setView] = useState('list');

    React.useEffect(() => {
        const { categoryId } = match.params;

        axios.get(`https://allevents.s3.amazonaws.com/tests/events_${categoryId}.json`)
            .then(res => {
                setEvents(res.data);
            });
    }, [match.params]); }

    return (
        Container

    );
