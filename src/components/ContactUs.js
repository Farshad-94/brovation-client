import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import { Icon } from 'semantic-ui-react';
import { orange, yellow } from '@material-ui/core/colors';


import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';

import './contactus.scss';





 function ContactUs() { 
  
   const CssTextField = withStyles({
      root: {
        '& label.Mui-focused': {
          color: '#000000',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#000000',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'red',
          },
          '&:hover fieldset': {
            borderColor: '#000000',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#000000',
          },
        },
      },
    })(TextField);

  const useStyles = makeStyles((theme) => ({
      root: {
        display: 'block',
        flexWrap: 'wrap',
      },
      margin: {
        marginTop: theme.spacing(1),
      },
    }));

    const ColorButton = withStyles((theme) => ({
      root: {
        color: theme.palette.getContrastText(yellow[800]),
        backgroundColor: yellow[800],
        '&:hover': {
          backgroundColor: orange[800],
        },
      },
    }))(Button);
    
  const classes = useStyles();

    return (

      <div style={{backgroundColor: "#f5d02a"}}>
        <div className="contact-header">
          <h2 style={{fontWeight:"900", fontSize: "xx-large"}}><i className="fas fa-font-case">We'd love to hear from you!</i>  
          </h2>
          <div style={{padding: "2rem"}}>
          <i className="fas fa-font-case">
          If you have any questions or would like get a quote, fill out the form below and press SEND, or just give us a call!
          </i>
          </div>  
        </div>

        <div className="contact-form">

        

        

        <Grid 
            container 
            spacing={0}
          
            direction="column"
            alignItems="center"
            justify="center"
            style={{ display: "flex" }}
            
            >


          <Grid 
            item xs={3}
            style={{maxWidth: "100%"}}
            
            >
                    <Grid container spacing={1} alignItems="flex-end" flexWrap="nowrap">
                      <Grid item>
                        <Icon inverted color='yellow' circular name='mail' />
                      </Grid>
                      <Grid item>
                        <CssTextField 
                          className={classes.margin} 
                          id="custom-css-standard-input" 
                          label="Your Email Address" 
                        />
                      </Grid>
                    </Grid>
                  

                    <Grid container spacing={1} flexWrap="nowrap" alignItems="flex-end">
                      <Grid item>
                        <Icon inverted color='yellow' circular name='phone' />
                      </Grid>
                      <Grid item>
                        <CssTextField 
                            className={classes.margin} 
                            id="custom-css-standard-input" 
                            label="Your Phone Number" 
                        />
                      </Grid>
                    </Grid>
              
                    <Grid container spacing={1} flexWrap="nowrap" alignItems="flex-end">
                      <Grid item>
                        <Icon inverted color='yellow' circular name='info' />
                      </Grid>
                      <Grid item>
                        <CssTextField 
                          className={classes.margin} 
                          id="custom-css-standard-input" 
                          label="Your Message" 
                        />
                      </Grid>
                    </Grid>

                    <Grid style={{margin: "2rem 0", display: "grid"}} container spacing={1} alignItems="center">
                    <ColorButton size="large" variant="contained" color="primary" className={classes.margin}>
                      Send
                    </ColorButton>
                    </Grid>

              </Grid>

          </Grid>
        
        
        </div>

      </div>
    )
  }


export default ContactUs;
