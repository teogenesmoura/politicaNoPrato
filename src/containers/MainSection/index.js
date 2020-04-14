import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Box, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
		container: {
			backgroundColor: "#1dd1a1",
			height: '100vh',
			margin: "-4rem 0 0 0",
		},
		come: {
	  	fontSize: '3rem',
	  	fontFamily: "'Roboto', sans-serif",
	  	fontWeight: 700,
	  	color: "#fff",
	  },
	  text: {
	  	display: "flex",
	  	flexDirection: "column",
	  	color: "#fff",
	  },
	  deOndeVem: {
	  	fontFamily: "'Roboto', sans-serif",
	  	fontSize: '3rem',
	  	lineHeight: 2,
	  	fontWeight: 300, 
	  	color: "#fff",
	  }, 
	  underline: {
	  	lineHeight: 2,
	  	borderBottom: "10px solid #fff",
	  	margin: "0 0 3rem 0",
	  },
	  explanatoryText: {
	  	display: 'flex',
	  	fontSize: '1.5rem',
	  	fontFamily: "'Roboto',sans-serif",
	  	lineHeight: 3,
	  },
	  button: {
	  	display: "flex",
	  	color: "#1dd1a1",
	  	width: "fit-content",
	  	margin: "3rem 0 0 0",
	  },
	  link: {
	  	color: "#1dd1a1",
	  },
	  imgContainer: {
	  		display: "flex",
				alignItems: "center",
				justifyContent: "center",
	  },
		[theme.breakpoints.up('xs')]: {
			container: {
				display: 'flex',
				flexDirection: 'column-reverse',
			},
			deOndeVem: {
				alignSelf: 'center',
				textAlign: 'center',
			},
			come: {
				alignSelf: 'center',
			},
			explanatoryText: {
				alignSelf: 'center',
				textAlign: 'center',
			},
			text: {
				margin: '2rem 2rem 2rem 2rem',		
				textAlign: 'justify',		
			},
			button: {
				alignSelf: 'center',
			},
			img: {
				width: '50vh',
			},
		},
		[theme.breakpoints.up('md')]: {
			container: {
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
			},
			come: {
				alignSelf: 'flex-start',
			},
			deOndeVem: {
				alignSelf: "flex-start",
			},
			explanatoryText: {
				alignSelf: "flex-start",
			},
			text: {
				margin: '0rem 0 2rem 4rem',				
			},
			button: {
				alignSelf: 'flex-start',
			},
			img: {
				width: "80%",
				margin: "0rem 0 0rem 0",
				display: "flex", 
			},
		},
	}));

export default function MainSection() {

	const classes = useStyles();

	return (
		<Grid className={classes.container}>
				<Grid item xs={12} md={6}>
					<div className={classes.text}>
						<div className={classes.deOndeVem}> De onde vem o que você </div>
						<div className={classes.come}>
							<div className={classes.underline}> come?</div>
						</div>
							<div className={classes.explanatoryText}>Entenda como o alimento vai parar na sua mesa.</div>
							<div className={classes.explanatoryText}>Um projeto de lei por vez.</div>
						<Button variant="contained" className={classes.button}>
							<Link href="/plataforma" className={classes.link}>
								Acesse a plataforma
							</Link>
						</Button>
					</div>
				</Grid>		
				<Grid item xs={12} md={6}>
						<div className={classes.imgContainer}>
							<img src="./img/home.svg" alt="Two people eating illustration" className={classes.img}/>
						</div>
				</Grid>
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