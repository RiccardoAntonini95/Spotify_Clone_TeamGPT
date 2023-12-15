// qua ci arrivo dal click sugli album, mi serve un fetch usando l'id degli album 
//id dell'album sufficiente come dati, prendere con url search param e fetchare quello
// ho l'anno con i giorni, numero brani senza scritta "brani", duration diviso 100
//riproduzioni ci metto rank

//qua mi serviranno due cicli diversi per la parte inferiore

let param = new URLSearchParams(document.location.search)
let idAlbum = param.get("id")  
let artistName = param.get("nameArtist")
const urlAlbum = "https://deezerdevs-deezer.p.rapidapi.com/album/${idAlbum}"

fetch(urlAlbum, {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a50fe14028msh940c0b8b9fece73p125787jsn3dae20f86ae0',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
    .then(response => response.json())
    .then(data => console.log(data))
})