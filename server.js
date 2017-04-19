var express = require('express');
var moment = require('moment');
var data = require('./gamesdata.json');

var app = express();

// Get list of all games
app.route('/api/gameslist')
  .get(function(req, res) {
	  var gameslist = data.map(function(gameObj) {
		return gameObj.game;
	  });
	  res.json(gameslist);
  });

// Get List of players based on period and game name (or for all games)
app.route('/api/:game/:period')
	.get(function(req, res) {
		// Select particular game
		if(req.params.game != "all") {
			var currentGame = data.filter(function(gameObj) {
				return gameObj.game == req.params.game;
			})[0].scores;
			// Check period
			if (req.params.period == "today") {
				var result = currentGame.filter(function(gameEvent) {
					return moment().diff(moment(gameEvent.date), 'days') < 1;
				});
				res.json(result);
			} else if (req.params.period == "week") {
				var result = currentGame.filter(function(gameEvent) {
					return moment().diff(moment(gameEvent.date), 'weeks') < 1;
				});
				res.json(result);
			}
			else {
				res.json(currentGame);
			}
		} else { // Creates a list of all games
			var allGames = data.reduce(function(acc, val) {
				return acc.concat(val.scores);
			}, []);
			// Check period
			if (req.params.period == "today") {
				var result = allGames.filter(function(gameEvent) {
					return moment().diff(moment(gameEvent.date), 'days') < 1;
				});
				res.json(result);
			} else if (req.params.period == "week") {
				var result = allGames.filter(function(gameEvent) {
					return moment().diff(moment(gameEvent.date), 'weeks') < 1;
				});
				res.json(result);
			}
			else {
				res.json(allGames);
			}
		}
	});

app.listen(3300, function() {
	console.log('Example server started on port 3300');
});