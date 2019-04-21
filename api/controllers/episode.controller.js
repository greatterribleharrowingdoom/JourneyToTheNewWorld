var mongoose = require('mongoose');
var Episode = mongoose.model('Episode');

exports.getEpisodes = function(req, res) {
    Episode.find({}, function(err, episode) {
    if (err)
      res.send(err);
    res.json(episode);
  });
};

exports.createEpisode = function(req, res) {
  var new_episode = new Episode(req.body);
  new_episode.save(function(err, episode) {
    if (err)
      res.send(err);
    res.json(epipsode);
  });
};