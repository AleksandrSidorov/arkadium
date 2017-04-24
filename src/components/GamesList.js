import React from 'react';
import { Link } from 'react-router-dom';

import './GamesList.css';

const GamesList = ({ games, currentGame, currentPeriod, handleCurrentGame }) => {
	return (
		<ul className="games-list">
			<li className="gmes-list games-list__item">
        <Link
          className={"gmes-list games-list__link" + (currentGame == 'all' ? " games-list__link--active" : "")}
          to={"/all/all"}
          onClick={ () => handleCurrentGame('all')}
        >
          All Games
        </Link>
      </li>
			{
				games.map((game, index) => {
					return (
						<li className="gmes-list games-list__item" key={index}>
							<Link
                className={"gmes-list games-list__link" + (currentGame == game ? " games-list__link--active" : "")}
								to={`/${game}/${currentPeriod}`}
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
