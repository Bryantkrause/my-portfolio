import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import MediaCard from "../../components/MediaCard";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 2,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

export default function Portfolio() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<React.Fragment>
				<CssBaseline />
				<Container maxWidth="sm">
					<Grid
						container
						spacing={3}
						maxWidth="sm"
						style={{ marginTop: "25%" }}
					>
						<Grid item xs={6}>
							<Paper className={classes.paper}>
								<MediaCard />
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paper}>
								<MediaCard />
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paper}>
								<MediaCard />
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paper}>
								<MediaCard />
							</Paper>
						</Grid>
					</Grid>
				</Container>
			</React.Fragment>
		</div>
	);
}
