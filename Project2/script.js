console.log("Radhe Radhe");

let semv = document.getElementById("sm")
let mvli = document.getElementById("ml")

semv.addEventListener("keyup",function () {
    async function logMovies() {
        const response = await fetch("https://www.omdbapi.com/");
        const movies = await response.json();
        console.log(movies);

      }
      logMovies()
    console.log("jai sri krishna");
})


