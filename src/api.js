import fetch from 'isomorphic-fetch';

const baseUrl = `/api`;

// REST API Calls

// Get list of all Games
function getGames() {
  return fetch(`${baseUrl}/gameslist`)
    .then(res => {
      if(res.ok) {
        return res;
      }
      throw new Error('Network response was not ok.', res.status);
    })
    .then(res => res.json());
}

// Get users rating based on game name and period
function getUsersRating(game="all", period="all") {

  return fetch(`${baseUrl}/${game}/${period}`)
    .then(res => {
      if(res.ok) {
        return res;
      }
      throw new Error('Network response was not ok.', res.status);
    })
    .then(res => res.json());
}

export default {
  getGames,
  getUsersRating
};
