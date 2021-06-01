import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormComponent from "./FormComponent";
import { Button, Chip } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
	root: {
		width: "20ch",
		color: "#fff",
		marginTop: "0.3em",
		fontFamily: "Quicksand",
		textTransform: "none",
		border: "solid",
		fontSize: "medium",
		borderWidth: "1px",
		borderColor: "#00000000",
		backgroundColor: "#ffffff33",

		"&:hover": {
			backgroundColor: "#00000000",
			color: "#fff",
			borderWidth: "1px",
			borderColor: "#fff",
		},
	},
}))(Button);

const ArtistChip = (props) => {
	return (
		<Chip
			label={props.artist}
			onClick={() => {
				props.onDelete(props.id);
			}}
			variant="outlined"
			color="default"
			style={{
				borderColor: "white",
				color: "white",
				fontSize: "medium",
				fontFamily: "Quicksand",
				margin: "0.3em",
				backgroundColor: "transparent",
			}}
		/>
	);
};

window.id = 0;

function Home({ artists, findSongs, handleDelete, handleSubmit }) {
	return (
		<div className="formContainer">
			<div className="artistList">
				{artists.map((artist, index) => (
					<ArtistChip
						artist={artist}
						key={index}
						id={index}
						onDelete={handleDelete}
					/>
				))}
			</div>
			<FormComponent onFormSubmit={handleSubmit} />

			<ColorButton
				variant="contained"
				color="primary"
				disableElevation
				onClick={findSongs}
			>
				Find Songs!
			</ColorButton>
		</div>
	);
}

export default Home;
