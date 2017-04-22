import React from 'react';

const LeadersList = ({ leaders }) => {
  return (
		<ul>
			{
				leaders.map((leader, index) => {
					return (
						<li key={index}>
							{index + 1} - {leader.name} - {leader.score}
						</li>
					)
				})
			}
		</ul>
	)
}

export default LeadersList;
