var dotenv = require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");


var spotify = new Spotify(keys.spotify);


var axios = require("axios");

// node liri.js movie-this movieName
var option = process.argv[2];
var value = process.argv[3];

function StartProg(option, value) {
    switch (option) {
        case "concert-this": getMyBands(value);
            break;
        case "spotify-this-song": getMeSpotified(value);
            break;

        case "movie-this": getMovieInfo(value);
            break;

        case "do-what-it-says": dowhatItSays(value);
            break;
        default: console.log("LIRI doen't know what you are talking about")

    }

}
StartProg(option, value);
function getMyBands(value) {
    var queryURL = "https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp";
    axios.get(queryURL).then(function (res) {
        console.log(res.data[0].venue.name);
        console.log(res.data[0].venue.city);
        console.log(res.data[0].datetime);
        
    })
}
function getMeSpotified(value) {
    console.log("inside spotify")
    spotify.search(
        {
          type: "track",
          query: value
        },
        function(err, data) {
          if (err) {
            console.log("Error occurred: " + err);
            return;
          }
         // song name
          console.log(JSON.stringify(data.tracks.items[0].artists.name, null ,2))
          console.log(JSON.stringify(data.tracks.items[0].preview_url, null ,2))
          console.log(JSON.stringify(data.tracks.items[0].album.name, null ,2))
          console.log(JSON.stringify(data.tracks.items[0].name, null ,2))


        }
    )
    function getMovieInfo(value){
        console.log("movie-this")

        axios.get(value).then(function (res) {
         

    }

    
}




// // get request for axios
// const axios = require('axios');

// // Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });
