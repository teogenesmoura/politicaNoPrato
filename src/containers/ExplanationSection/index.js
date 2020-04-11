import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		height: '100vh',
		backgroundColor: "#fff",
	},
	title: {
		fontFamily: "'Playfair Display', serif",
		color: "#1dd1a1",
		fontWeight: 100, 
		fontSize: "3rem",
		display: "flex",
		alignSelf: "center",
		margin: "4rem 0 0 0",
	},
	  underline: {
  	lineHeight: 2,
  	borderBottom: "10px dotted #1dd1a1",
  	margin: "0 0 3rem 0",
  },
  row: {
  	display: "flex",
  	flexDirection: "row",
  	alignContent: "space-around",
  	justifyContent: "center",
  	margin: "4rem 1rem 0 1rem",
  },
  subtitle: {
  	fontFamily: "'Roboto', sans-serif",
  	color: "#1dd1a1",
  	fontSize: "1.5rem",
  	margin: "3rem 0 0 0",
  },
  explanationStep: {

  },
  img: {
		width: "50%",
	},
}));

export default function ExplanationSection(theme) {
	const classes = useStyles();
	return (
		<div class={classes.container}>
			<div class={classes.title}> 
				Como Funciona 
			</div>
			<p class={classes.subtitle}> Nós acompanhamos o dia a dia do congresso para que você não precise </p>
			<div class={classes.row}>
				<div class={classes.explanationStep}>
						<img src="./img/congress.svg" alt="Politician giving speech" className={classes.img}/>
				</div>
				<div class={classes.explanationStep}>
						<img src="./img/congress.svg" alt="Politician giving speech" className={classes.img}/>
				</div>
				<div class={classes.explanationStep}>
						<img src="./img/congress.svg" alt="Politician giving speech" className={classes.img}/>
				</div>
			</div>
		</div>
	);
}