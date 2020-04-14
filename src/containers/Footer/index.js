import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BottomNavigation } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "#3E3E3E",
		color: "#fff",
		height: "auto",
	},
		item: {
			listStyle: "none",
		},
}))

export default function Footer() {
	const classes = useStyles();
	return (
		<Grid container className={classes.container}>
			<Grid item xs={4}>
				<ul>
					<li className={classes.item}> item 1 </li>
					<li className={classes.item}> item 2 </li>
					<li className={classes.item}> item 3 </li>
				</ul>
			</Grid>
			<Grid item xs={4}>
				<center> Teste </center>
				<center> Teste </center>
			</Grid>
			<Grid item xs={4}>
				<ul>
					<li className={classes.item}> item 1 </li>
					<li className={classes.item}> item 2 </li>
					<li className={classes.item}> item 3 </li>
				</ul>
			</Grid>
		</Grid>
	)
};