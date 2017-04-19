var express = require('express');
var path = require('path');
var http = require('http');
var moment = require('moment');
var data = require('./gamesdata.json');

var app = module.exports = express();
app.set('port', process.env.PORT || 8000);
app.use(express.static(path.join(__dirname, 'public')));

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

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/public'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
}

// Starting express server
http.createServer(app).listen(app.get('port'), function (err) {
  if (err) {
    console.log('Express server error: ' + err);
  }
  console.log('Express server listening on port ' + app.get('port'));
});
