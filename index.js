const apiBaseUrl = "https://api.lyrics.ovh/v1";
const youTubeBaseUrl = "https://www.googleapis.com/youtube/v3/search";

const apiKey = "AIzaSyAj5dch2er-_9YRk4PXq2RmVsdjOJQGicY";

console.log("hello");

function getDataFromApi(artist, title, callback) {
  const url = `${apiBaseUrl}/${artist}/${title}`;
  $.getJSON(url, {}, callback);
  console.log(url);
}

function displaySearchData(data) {
  const lyrics = data.lyrics.replace(/\n+/g, "<br>");
  console.log(lyrics);
  $(".js-search-results").html(lyrics);
}

function watchSubmit() {
  console.log("hello watching");
  $(".js-search-form").on("submit", function () {
    event.preventDefault();
    const artist = $(".js-query-artist").val();
    console.log(artist);
    const song = $(".js-query-title").val();
    console.log(song);
    getDataFromApi(artist, song, displaySearchData);
  })
}

$(watchSubmit);
