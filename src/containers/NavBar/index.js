import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box  from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
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
    color: "#3E3E3E",
    fontWeight: 400,
    fontSize: "1.1rem",
    fontFamily: "'Roboto', sans-serif",
  }
}));

export default function NavBar() {

	const classes = useStyles();

	return (
    <React.Fragment>
      <CssBaseline />
        <AppBar position="static" style={{width: "100%"}}>
          <Toolbar className={classes.menu}>
            <Typography variant="h5" className={classes.title}>
              Política No Prato
            </Typography>
            <nav>
              <div className={classes.linkContainer}>
              	<Link className={classes.link} href="#"> Inicial </Link>
              	<Link className={classes.link} href="#"> Sobre </Link>
              	<Link className={classes.link} href="#"> FAQ </Link>
              </div>
            </nav>
          </Toolbar>
        </AppBar>
      </React.Fragment>
	);
}
