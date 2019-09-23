import React from 'react';
import { Link } from "react-router-dom";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ITableData from './interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
    tableHeader: {
      fontWeight: 'bold',
    },
    link: {
      textDecoration: 'none',
      color: 'green'
    },
    firstCell: {
      width: '30px',
      paddingRight: '15px'
    }
  }),
);

export default function Data(props: ITableData){
  console.log(props);
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.firstCell}>Nr.</TableCell>
            <TableCell className={classes.tableHeader}>Pokemon name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.pokemons.map((el: any, index: number) => {
              return(
                <TableRow key={el.pokemon_species.name}>
                  <TableCell className={classes.firstCell} scope="row">
                    {index}
                  </TableCell>
                  <TableCell scope="row">
                    <Link className={classes.link} to={"/pokemon/" + el.pokemon_species.name}>{el.pokemon_species.name}</Link>
                  </TableCell>
                </TableRow>
              )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}