import React from 'react';
import ILoaded from './interface';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
  progressWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  }

}));

export default function Loader() {
  const classes = useStyles();
  return (
    <div className={classes.progressWrapper}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}