import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
      marginTop: 50,
      color: '#dadada'
    },
    paragraph: {
        marginTop: 25,
        color: '#d22c2c' 
    }
  }));

export default function PageNotFound() {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h1" align="center" className={classes.root}>404</Typography >
            <Typography variant="h4" align="center" className={classes.paragraph}>Page not found</Typography >
        </div>
    );
}
