import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 200,
  },
  label: {
    marginTop: 19,
  },
}));

export default function TextFields(props:any) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        onChange={props.onChange}
        id="filter_name"
        label={props.text}
        className={clsx(classes.textField, classes.label)}
        margin="dense"
      />
    </form>
  );
}