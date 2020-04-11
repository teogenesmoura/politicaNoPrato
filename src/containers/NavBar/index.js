import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
	 	flexDirection: "row",
	 	justifyContent: "space-between",
    fontFamily: "'Roboto', sans-serif",
    color: "#3E3E3E",
  	backgroundColor: "#FFFFFF",
  },
  title: {
  	display: "flex",
    alignContent: "flex-start",
    color: "#3E3E3E",
    marginLeft: theme.spacing(2),
    fontFamily: "'Playfair Display', serif",
  },
  linkContainer: {
  	display: "flex",
  	marginRight: theme.spacing(5),
  },
  link: {
   	margin: "0 0 0 10%", 	
    fontSize: "2.5vmin",
  }
}));

export default function NavBar() {

	const classes = useStyles();

	return (
      <AppBar position="static" style={{width: "100%"}}>
        <Toolbar className={classes.menu}>
          <Typography variant="h5" className={classes.title}>
            Política No Prato
          </Typography>
          <div className={classes.linkContainer}>
          	<div className={classes.link}> Inicial </div>
          	<div className={classes.link}> Sobre </div>
          	<div className={classes.link}> FAQ </div>
          </div>
        </Toolbar>
      </AppBar>
	);
}
