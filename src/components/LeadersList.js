import React from 'react';
import './LeadersList.css';

const LeadersList = ({ leaders }) => {
  return (
		<ul className="leaders-wrapper">
			{
				leaders.map((leader, index) => {
					return (
						<li className={"leader-card" + (index % 2 !== 0 ? ' leader-card--gray' : '')} key={index}>
              <div className={"leader-card__place" + (index > 3 ? '' : ' leader-card__place--first')}>
                {index + 1}
              </div>
              <div className="avatar__background">
                <img className="avatar__img" src="/img/avatar.jpg" />
              </div>
              { index < 3 ? <img className="leader-card__star" src={`/img/star-${index}.jpg`} /> : null }
              <div className="leader-card__name">
                {leader.name}
              </div>
              <div className={"leader-card__score" + (index === 0 ? ' leader-card__score--first' : '')}>
                {leader.score}
              </div>
						</li>
					)
				})
			}
		</ul>
	)
}

export default LeadersList;
