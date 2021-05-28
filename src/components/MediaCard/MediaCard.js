import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const MediaCard = (props) => {
	const projects = [
		{
			key: 1,
			title: "project1",
			github: "github1",
			heroku: "www.clickme.com",
			description: "this is a description",
		},
		{
			key: 2,
			title: "project2",
			github: "github2",
			heroku: "www.clickme2.com",
			description: "this is a description2",
		},
	];
	return (
		console.log(projects),
		(
			<Grid>
				{projects.map((project) => (
					<Card>
						<CardActionArea>
							<CardMedia
								image="/static/images/cards/contemplative-reptile.jpg"
								title={project.title}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									{project.title}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{project.description}
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								{project.github}
							</Button>
							<Button size="small" color="primary">
								Learn More
							</Button>
						</CardActions>
					</Card>
				))}
			</Grid>
		)
	);
};

export default MediaCard;
