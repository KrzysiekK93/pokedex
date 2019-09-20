import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Grid, Modal, Typography, CardMedia, CardContent, CardActionArea, Card } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        media: {
            height: 200,
        },
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        mTop: {
            marginTop: '50px'
        }
    }),
);

export default function Data(props: any){
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

    return (
        <div className={classes.mTop}>
            <Grid container spacing={2}>   
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <CardActionArea onClick={handleOpen}>
                            <CardMedia
                                className={classes.media}
                                image={"/photo.jpg"}
                                title="Contemplative Reptile"
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.pokemon.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <p id="simple-modal-description">
                        Here could be small gallery
                    </p>
                </div>
            </Modal>
        </div>
    );
}

