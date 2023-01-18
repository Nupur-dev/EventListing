import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListView from './ListView';
import GridView from './GridView';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ListingScreen() {
    const classes = useStyles();
    const [events, setEvents] = useState([]);
    const [view, setView] = useState('list');
    const { categoryId } = useParams();

    useEffect(() => {
        axios.get(`https://allevents.s3.amazonaws.com/tests/events_${categoryId}.json`)
            .then(res => {
                setEvents(res.data);
            });
    }, [categoryId]);

    return (
        <div className={classes.root}>
            <h1>Events</h1>
            <Button variant="contained" color="primary" onClick={() => setView(view === 'list' ? 'grid' : 'list')}>Toggle View</Button>
            {view === 'list' ? <ListView events={events} /> : <GridView events={events} />}
        </div>
    );
}
