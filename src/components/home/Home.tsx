import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(1),
      marginTop: 50,
      color: '#dadada'
    },
  }));

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h1" align="center" className={classes.root}>Pokedex</Typography >
        </div>
    );
}
