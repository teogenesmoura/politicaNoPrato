import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#fff",
		height: '40vh',
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
  	margin: "6rem 2rem -20rem 2rem",
  },
  subtitle: {
  	fontFamily: "'Roboto', sans-serif",
  	color: "#1dd1a1",
  	fontSize: "1.5rem",
  	margin: "5rem 0 0 0",
  },
	stepTitle: {
		fontWeight: 700,
		fontSize: 18,
		color: "#3E3E3E",
		margin: "3rem 0 0 0",
	}, 
	stepText: {
		fontWeight: 300, 
		fontSize: 16, 
		lineHeight: 2,
		color: "#3E3E3E",
		margin: "3rem 2rem 0 2rem",
		textAlign: "justify",
	},
	img: {
		height: "20%",
	},
	button: {
		backgroundColor: "#1dd1a1",
	}
}));

export default function ExplanationSection(theme) {
	const classes = useStyles();
	return (
		<Grid>
		<div className={classes.container}>
			<div className={classes.title}> 
				Como Funciona 
			</div>
			<p className={classes.subtitle}> Nós acompanhamos o dia a dia do congresso para que você não precise </p>
			<div className={classes.row}>
				<div className={classes.explanationStep}>
						<img src="./img/congress.svg" alt="Politician giving speech" className={classes.img}/>
						<div className={classes.stepTitle}>Nós observamos o congresso</div>
				 		<div className={classes.stepText}>
							Todos os dias, os deputados e senadores apresentam diversos projetos, inclusive os que 
							afetam diretamente os ingredientes e os produtos que acabam na sua mesa. Utilizamos ferramentas
							computacionais para acompanhar diariamente as tramitações da casa e garantir que nada 
							escape aos nossos olhos.
				 		</div>				
				</div>
				<div className={classes.explanationStep}>
						<img src="./img/analytics.svg" alt="Politician giving speech" className={classes.img}/>
						<div className={classes.stepTitle}>Traduzimos o que está acontecendo</div>
						<div className={classes.stepText}>
							Textos jurídicos não são exatamente fáceis de ler. Por isso, nós analisamos e traduzimos para 
							a linguagem simples os projetos apresentados, de modo que ninguém fica de fora ao saber o que
							realmente está comendo e oferecendo para a sua família.
						</div>				
				</div>
				<div className={classes.explanationStep}>
						<img src="./img/interface.svg" alt="Politician giving speech" className={classes.img}/>
						<div className={classes.stepTitle}>E te mostramos numa interface simples!</div>
						<div className={classes.stepText}>
							Nossa missão é levar a todos os brasileiros a informação direta e clara sobre como o 
							desenrolar político está afetando diretamente a qualidade da nossa alimentação. Por isso,
							mostramos as informações do modo mais simples possível.
						</div>
				</div>				
			</div>
			<div className="button">
				<a href="/plataforma" className="button"> Visite a plataforma </a>
			</div>
		</div>
		</Grid>
	);
}


				// <div className={classes.explanationStep}>
				// 		<img src="./img/congress.svg" alt="Politician giving speech" className={classes.img}/>
				// 		<div className={classes.stepTitle}>E te mostramos numa interface simples!</div>
				// 		<div className={classes.stepText}>
				// 			Nossa missão é levar a todos os brasileiros a informação direta e clara sobre como o 
				// 			desenrolar político está afetando diretamente a qualidade da nossa alimentação. Por isso,
				// 			mostramos as informações do modo mais simples possível.
				// 		</div>
				// </div>

				// <div className={classes.explanationStep}>
				// 		<img src="./img/congress.svg" alt="Politician giving speech" className={classes.img}/>
				// 		<div className={classes.stepTitle}>Traduzimos o que está acontecendo</div>
				// 		<div className={classes.stepText}>
				// 			Textos jurídicos não são exatamente fáceis de ler. Por isso, nós analisamos e traduzimos para 
				// 			a linguagem simples os projetos apresentados, de modo que ninguém fica de fora ao saber o que
				// 			realmente está comendo e oferecendo para a sua família.
				// 		</div>
				// </div>
				// 						<div className={classes.stepText}>
						// 	Todos os dias, os deputados e senadores apresentam diversos projetos, inclusive os que 
						// 	afetam diretamente os ingredientes e os produtos que acabam na sua mesa. Utilizamos ferramentas
						// 	computacionais para acompanhar diariamente as tramitações da casa e garantir que nada 
						// 	escape aos nossos olhos.
						// </div>