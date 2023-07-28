const searchBar = document.getElementById("search-bar");
const songDisplay = document.getElementById("output");

const searchBtn = document.getElementById("search-btn");
let songId = 1488;

searchBtn.addEventListener("click", () => {
  let songName = searchBar.value;

  const url = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${songName}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0c61322343mshe5386bc17e61688p19e553jsnd4d160510343",
      "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((songs) => {
      //const songItem = songs.results;
      const songItem = songs.hits;
      //console.log(songItem);

      for (let i = 0; i < songItem.length; i++) {
        const element = songItem[i].result;
        console.log(element);

        songId = songItem[i].result.id;

        output += `
        <div id= "song-card" id="songId">
            <img src=${element.song_art_image_thumbnail_url} class ="song-img">
            <div class ="song-text">
            <h3 class ="song-title">${element.full_title}</h3>
            <p class="artists">${element.artist_names}</p>
            <a href="${element.url}" class="song-link">Lyrics</a>
            <br>
            </div>
        </div>
        `;
      }

      songDisplay.innerHTML = output;
    })

    .catch((err) => console.error(err));
});

/*const songCard = document.getElementById("song-card");
songCard.addEventListener("click", () => {
  console.log(songId);
});*/
