import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
		[theme.breakpoints.up('xs')]: {
			container: {
				display: 'flex',
				flexDirection: 'column-reverse',
				height: '100vh',
			},
		},
		[theme.breakpoints.up('md')]: {
			container: {
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				height: '100vh',
			},
		},
		imgContainer: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		img: {
			width: "80%",
			margin: "1rem 0 0 0",
		},
	  text: {
	  	display: "flex",
	  	flexDirection: "column",
	  	color: "#5E52AD",
	  	margin: '0rem 0 2rem 4rem',
	  },
	  deOndeVem: {
	  	fontFamily: "'Roboto', sans-serif",
	  	fontSize: '3rem',
	  	lineHeight: 2,
	  	fontWeight: 300, 
	  	color: "#5E52AD",
	  	alignSelf: "flex-start",
	  }, 
	  come: {
	  	fontSize: '3rem',
	  	fontFamily: "'Roboto', sans-serif",
	  	fontWeight: 700,
	  	color: "#5E52AD",
	  	alignSelf: "flex-start",
	  },
	  underline: {
	  	lineHeight: 2,
	  	borderBottom: "10px solid #5E52AD",
	  	margin: "0 0 3rem 0",
	  },

	  explanatoryText: {
	  	display: 'flex',
	  	fontSize: '1.5rem',
	  	fontFamily: "'Roboto',sans-serif",
	  	lineHeight: 3,
	  	alignSelf: "flex-start",
	  }
	}));

export default function Content() {

	const classes = useStyles();

	return (
		<Grid container spacing={2}>
			<div className={classes.container}>
			<Grid item xs={12} md={6}>
				<div className={classes.text}>
					<div className={classes.deOndeVem}> De onde vem o que você </div>
					<div className={classes.come}>
						<div className={classes.underline}> come?</div>
					</div>
					<div className={classes.explanatoryTextContainer}>
							<div className={classes.explanatoryText}>Entenda como o alimento vai parar na sua mesa.</div>
							<div className={classes.explanatoryText}>Um projeto de lei por vez.</div>
					</div>	
				</div>
			</Grid>		
			<Grid item xs={12} md={6}>
					<div className={classes.imgContainer}>
						<img src="./img/home.svg" alt="Image description." className={classes.img}/>
					</div>
			</Grid>
		</div>
		</Grid>
	)
}


// {
//   container: {
//     flexGrow: 1,
//     height: "100vh",
//     backgroundColor: "#FFFFFF",
//   	display: "flex",
//   	flexDirection: "row",
//   	alignItems: "center",
//   },
//   img: {
//   	display: "flex",
//   	width: "50%",
//   	alignItems: "center",
//   },
//   text: {
//   	display: "flex",
//   	flexWrap: "wrap",
//   	flexDirection: "column",
//   	alignItems: "center",
//   	color: "#5E52AD",
//   	margin: '4rem 0 0 4rem',
//   },
//   deOndeVem: {
//   	fontFamily: "'Roboto', sans-serif",
//   	fontSize: '3rem',
//   	lineHeight: 1.5,
//   	fontWeight: 300, 
//   	color: "#5E52AD",
//   	alignSelf: "flex-start",
//   }, 
//   come: {
//   	fontSize: '3rem',
//   	fontFamily: "'Roboto', sans-serif",
//   	fontWeight: 700,
//   	color: "#5E52AD",
//   	alignSelf: "flex-start",
//   },
//   underline: {
//   	lineHeight: 2,
//   	borderBottom: "10px solid #5E52AD",
//   }, 

//   explanatoryText: {
//   	display: 'flex',
//   	alignSelf: "flex-start",
//   	fontSize: '1.5rem',
//   	fontFamily: "'Roboto',sans-serif",
//   	lineHeight: 3,
//   }
// }