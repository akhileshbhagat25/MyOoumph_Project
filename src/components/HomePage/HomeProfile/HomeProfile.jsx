import React from "react";
import { Box, Typography, Grid,Fab } from "@mui/material";
import "./HomeProfile.css";
import ironman from "./../../../assets/images/iron-man.png";
import { IoBag } from "react-icons/io5";
import { MdHome } from "react-icons/md";

const HomeProfile = () => {
  return (
    <React.Fragment>
      <Box sx={{ml:"18.8rem",mt:4, display: {
          xs: 'none', // for extra-small screens
          sm: 'none', // for small screens
          md: 'flex', // for medium screens
          lg: 'flex', // for large screens
          xl: 'flex', // for extra-large screens
        },}}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box className="home-profile-image-wrapper">
              <Box sx={{ml:{xl:3,lg:3,md:3,xs:0}}}>
                <img
                  src={ironman}
                  className="home-profile-custom-image"
                  alt="iron-man-image"
                ></img>
              </Box>
              <Box className="home-profile-image-under-text-wrapper">
                <Typography className="home-profile-image-under-text">
                  70%
                </Typography>
                <Typography sx={{mt:{xl:0.5,lg:0.5,sm:0.5,xs:0},ml:1}}>
                    Vibes Match
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box>
              <Typography sx={{fontWeight:'bold',fontSize:"19px"}}>IronMan Fanpage</Typography>
              <Typography>@ironmanisbest</Typography>
               <Box className="home-profile-viber-posts-container">
                 <Typography sx={{ml:1}}>Vibers: 5.2k</Typography>
                 <Typography sx={{ml:15}}> Posts:25</Typography>
               </Box>
            </Box>
            <Box className="home-profile-counter">
              <Box sx={{pl:4,pr:4}}>
              <Typography sx={{fontWeight:"bold",fontSize:"25px"}}>
                 15
              </Typography>
              <Typography>
                 Inner
              </Typography>
              </Box>
              <Box sx={{pl:4,pr:4}}>
              <Typography sx={{fontWeight:"bold",fontSize:"25px"}}>
                 2.3k
              </Typography>
              <Typography>
                 Outer
              </Typography>
              </Box>
              <Box sx={{pl:4,pr:4}}>
              <Typography sx={{fontWeight:"bold",fontSize:"25px",ml:1}}>
                 2.3k
              </Typography>
              <Typography>
                 Universe
              </Typography>
              </Box>
            </Box>
            <Box sx={{mt:2}}>
                <Typography sx={{fontSize:"14px"
                }}>Greatest super herp of all the time .Perfect combination of intelligence and looks.</Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:"row",mt:3}}> 
                 <IoBag className="home-profile-icons"/>
                <Typography sx={{fontSize:"14px",ml:1}}>CEO, Ooumph</Typography>
                 <MdHome className="home-profile-icons2"/>
                <Typography sx={{ml:1,fontSize:"14px"}}> Lucknow, India</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box className="home-profile-join-now-button-container">
          <Fab variant="extended" className="home-profile-join-now-button"> <Typography sx={{color:'#00A2FF',fontWeight:"bold"}}>Join Now</Typography></Fab>
          </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ml:"0",mt:4, display: {
          xs: 'flex', // for extra-small screens
          sm: 'none', // for small screens
          md: 'none', // for medium screens
          lg: 'none', // for large screens
          xl: 'none', // for extra-large screens
        },}}>
        <Grid container>
          <Grid item xs={6} sm={12} md={4} lg={4} xl={4}>
            <Box className="home-profile-image-wrapper">
              <Box sx={{ml:{xl:3,lg:3,md:3,xs:0}}}>
                <img
                  src={ironman}
                  className="home-profile-custom-image"
                  alt="iron-man-image"
                ></img>
              </Box>
              <Box className="home-profile-image-under-text-wrapper">
                <Typography className="home-profile-image-under-text">
                  70%
                </Typography>
                <Typography sx={{mt:{xl:0.5,lg:0.5,sm:0.5,xs:0},ml:1}}>
                    Vibes Match
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={12} md={4} lg={4} xl={4}>
            <Box sx={{mt:3}}>
              <Typography sx={{fontWeight:'bold',fontSize:"19px"}}>IronMan Fanpage</Typography>
              <Typography>@ironmanisbest</Typography>
               <Box className="home-profile-viber-posts-container">
                 <Typography sx={{}}>Vibers: 5.2k</Typography>
                 <Typography sx={{ml:1.2}}> Posts:25</Typography>
               </Box>
            </Box>
            {/* <Box className="home-profile-counter">
              <Box sx={{pl:4,pr:4}}>
              <Typography sx={{fontWeight:"bold",fontSize:"25px"}}>
                 15
              </Typography>
              <Typography>
                 Inner
              </Typography>
              </Box>
              <Box sx={{pl:4,pr:4}}>
              <Typography sx={{fontWeight:"bold",fontSize:"25px"}}>
                 2.3k
              </Typography>
              <Typography>
                 Outer
              </Typography>
              </Box>
              <Box sx={{pl:4,pr:4}}>
              <Typography sx={{fontWeight:"bold",fontSize:"25px",ml:1}}>
                 2.3k
              </Typography>
              <Typography>
                 Universe
              </Typography>
              </Box>
            </Box>
            <Box sx={{mt:2}}>
                <Typography sx={{fontSize:"14px"
                }}>Greatest super herp of all the time .Perfect combination of intelligence and looks.</Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:"row",mt:3}}> 
                 <IoBag className="home-profile-icons"/>
                <Typography sx={{fontSize:"14px",ml:1}}>CEO, Ooumph</Typography>
                 <MdHome className="home-profile-icons2"/>
                <Typography sx={{ml:1,fontSize:"14px"}}> Lucknow, India</Typography>
            </Box> */}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box sx={{mt:2}}>
                <Typography sx={{fontSize:"14px"
                }}>Greatest super herp of all the time .Perfect combination of intelligence and looks.</Typography>
            </Box>
          <Box className="home-profile-counter">
              <Box sx={{pl:4,pr:4}}>
              <Typography sx={{fontWeight:"bold",fontSize:"25px"}}>
                 15
              </Typography>
              <Typography>
                 Inner
              </Typography>
              </Box>
              <Box sx={{pl:4,pr:4}}>
              <Typography sx={{fontWeight:"bold",fontSize:"25px"}}>
                 2.3k
              </Typography>
              <Typography>
                 Outer
              </Typography>
              </Box>
              <Box sx={{pl:4,pr:4}}>
              <Typography sx={{fontWeight:"bold",fontSize:"25px",ml:1}}>
                 2.3k
              </Typography>
              <Typography>
                 Universe
              </Typography>
              </Box>
            </Box>
            <Box sx={{display:"flex",flexDirection:"row",mt:3,ml:7}}> 
                 <IoBag className="home-profile-icons"/>
                <Typography sx={{fontSize:"14px",ml:1}}>CEO, Ooumph</Typography>
                 <MdHome className="home-profile-icons2"/>
                <Typography sx={{ml:1,fontSize:"14px"}}> Lucknow, India</Typography>
            </Box>
            

          {/* <Box className="home-profile-join-now-button-container">
          <Fab variant="extended" className="home-profile-join-now-button"> <Typography sx={{color:'#00A2FF',fontWeight:"bold"}}>Join Now</Typography></Fab>
          </Box> */}
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default HomeProfile;
