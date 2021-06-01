import React from "react";
import ResultCard from "./ResultCard";

function ResultContainer({ results }) {
	return (
		<div className="resultContainer">
			{results.map((item) => (
				<ResultCard
					song_title={item.track_name}
					artist_name={item.track_artist}
					album_cover={item.track_cover}
					music_link={item.track_url}
				/>
			))}
		</div>
	);
}

export default ResultContainer;
