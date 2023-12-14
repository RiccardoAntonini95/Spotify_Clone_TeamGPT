const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q={eminem}';
const url2 = 'https://deezerdevs-deezer.p.rapidapi.com/search?q={celentano}';
const url3 = 'https://deezerdevs-deezer.p.rapidapi.com/album/103248';
const url4 = 'https://deezerdevs-deezer.p.rapidapi.com/artist/14'; 
const url5 = 'https://striveschool-api.herokuapp.com/api/deezer/artist/14/top?limit=10'

const artistPageDiv = document.querySelector("#artistPageHere")
const searchMobile = document.querySelector("#searchBarMobile")
const searchDesk = document.querySelector("#searchBarDesk")

searchMobile.addEventListener("change", prendiIdMobile)
searchMobile.addEventListener("change", cambiaPagina)

searchDesk.addEventListener("change", prendiIdDesk)
searchDesk.addEventListener("change", cambiaPagina)


function prendiIdMobile (){ 
    const inputUtente = document.querySelector("#searchBarMobile").value
    localStorage.clear()
    localStorage.setItem("ricerca", `${inputUtente}`)
 } 
function prendiIdDesk (){ 
    const inputUtente = document.querySelector("#searchBarDesk").value
    localStorage.clear()
    localStorage.setItem("ricerca", `${inputUtente}`)
 } 

 function cambiaPagina(){
    window.location.href="./artist-page.html"
 }
