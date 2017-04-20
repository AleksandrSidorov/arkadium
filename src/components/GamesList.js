import React from 'react';
import { Link } from 'react-router-dom';

const GamesList = ({ games, handleCurrentGame }) => {
	return (
		<ul>
			<li><Link to="/all/all">All Games</Link></li>
			{
				games.map((game, index) => {
					return (
						<li key={index}>
							<Link
								to={`/${game}/all`}
								onClick={ () => handleCurrentGame(game)}
							>
								{game}
							</Link>
						</li>
					)
				})
			}
		</ul>
	)
}

export default GamesList;