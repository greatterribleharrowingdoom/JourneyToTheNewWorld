module.exports = function(app) {
    var EpisodeController = require('../controllers/episode.controller');
  
    app.route('/episodes')
      .get(EpisodeController.getEpisodes)
      .post(EpisodeController.createEpisode);
  };