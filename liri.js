require("dotenv").config();
var keys = require("./liribot/keys.js/index.js");
var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");




 var pick = function(caseData, functionData) {
    switch (caseData) {
    case "spotify-this-song":
      getSpotify(functionData);
      break;
      case "concert-this":
        getMyBands(functionData);
        break;
    case "movie-this":
      getMeMovie(functionData);
      break;
    case "do-what-it-says":
      doWhatItSays();
      break;
    default:
      console.log("Liri didn't understand Please enter a valid command.");
    }
  };

var getSpotify = function(song) {
    if (song === undefined) {
      song = "What song are you looking for?";
    }
  
    spotify.search(
      {
        type: "track",
        query: song
      },
      function(err, data) {
        if (err) {
          console.log("Error occurred: " + err);
          return;
        }
  
        var songs = data.track.item;
  
        for (var i = 0; i < songs.length; i++) {
          console.log(i);
          console.log("song name: " + song[i].name);
          console.log("preview song: " + song[i].preview_url);
          console.log("artist: " + song[i].artist.map(getArtistName));
          console.log("album: " + song[i].album.name);
        }
      }
    );
  };

  
  var run = function(argOne, argTwo) {
    pick(argOne, argTwo);
  };
  
  run(process.argv[2], process.argv.slice(3).join(" "));
  