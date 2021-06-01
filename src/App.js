import "./App.css";
import React, { useState } from "react";
import HomeContainer from "./components/HomeContainer";
import ResultContainer from "./components/ResultContainer";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import axios from "axios";

function App() {
	const [artists, setArtists] = useState([]);
	const [results, setResults] = useState([]);

	const apiUrl = "https://shared-music-backend.herokuapp.com/api";

	const handleDelete = (index) => {
		const newArr = [...artists];
		newArr.splice(index, 1);
		setArtists({ artists: newArr });
	};

	const handleSubmit = (artist) => {
		setArtists((artists) => [...artists, artist]);
	};

	const findSongs = () => {
		axios
			.post(apiUrl, {
				artistArray: artists,
			})
			.then(function (response) {
				results.push(response.data.result);
				setArtists([]);
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<div className="App">
			<HeaderComponent />
			{results.length !== 0 ? (
				<ResultContainer results={results[0]} />
			) : (
				<HomeContainer
					findSongs={findSongs}
					handleSubmit={handleSubmit}
					handleDelete={handleDelete}
					artists={artists}
				/>
			)}
			<FooterComponent />
		</div>
	);
}

export default App;
