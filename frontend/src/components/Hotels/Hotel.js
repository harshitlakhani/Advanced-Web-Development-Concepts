import React, {useEffect, useState} from 'react'
import {Alert, Box, Button, Grid, Modal, Paper, Snackbar, Typography} from "@mui/material";
import {CardImg} from "react-bootstrap";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useNavigate} from "react-router";
import background from "../../assets/images/beach-background.jpg";

/*Author: Created by Meghna Kumar
Contains the format of hotel card which gets rendered on the dashboard*/

const Hotel = (props) => {
    const [addedToWishlist, setAddedToWishlist] = useState(false);
    const [openWishlistAlert, setOpenWishlistAlert] = useState({message:"", visibility:false});
    const goToDetailsPage= useNavigate();
    useEffect(()=>{
        console.log(props.reviews)
    })



    const handleClick =()=>{
        setAddedToWishlist(current=>!current)
        if(addedToWishlist===false){
            setOpenWishlistAlert({message:"Hotel added to wishlist!", visibility:true})
        }
        else
            setOpenWishlistAlert({message:"Hotel removed from wishlist!", visibility:true})
    }

    const id = props.id
    const hotelname = props.name
    const place = props.place

    //function to redirect to the hotel detail page based on which hotel cards book button is clicked.
    const handleBookClick = () =>{
        goToDetailsPage("/hotel-detail", {state:{hotelid:id, rooms:props.rooms, hotelname:hotelname, place:place}})

    }
    return(
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                mb: 2,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            className="col-12 col-sm-10"
        >
            <Grid container spacing={2}>
                <Grid item sm={12} md={2}>

                    <CardImg alt="complex" src={background}/>

                </Grid>
                <Grid item sm={12} md={10} container>
                    <Grid item xs container direction="column" alignContent="flex-start">
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >

                            <Typography variant="subtitle1" component="div">
                                {props.name}
                            </Typography>

                            <Typography variant="subtitle1" component="div">
                                <FavoriteIcon style={{
                                    color:addedToWishlist? 'red':'grey' }} onClick={handleClick}/>
                            </Typography>

                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start">
                            {[...Array(props.rating)].map(() => {
                                return (
                                    <span className="star" style={{color: '#ffd700'}}>&#9733;</span>
                                );
                            })}
                        </Grid>


                        <Typography variant="body2" align="left" color="text.secondary">
                            {props.description}
                        </Typography>

                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="flex-start">
                            <Button type="button" style={{
                                "marginTop": "4px",
                                "padding": "8px 24px",
                                "borderRadius": "25px"
                            }} variant="contained" onClick={handleBookClick}>
                                Book
                            </Button>
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
            <div>
                <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "right"}} open={openWishlistAlert.visibility} autoHideDuration={2000}
                          onClose={() => setOpenWishlistAlert(false)}>
                    <Alert onClose={() => setOpenWishlistAlert(false)} severity="success" sx={{width: '100%'}}>
                        {openWishlistAlert.message}
                    </Alert>
                </Snackbar>
            </div>


        </Paper>

    )
}

export default Hotel