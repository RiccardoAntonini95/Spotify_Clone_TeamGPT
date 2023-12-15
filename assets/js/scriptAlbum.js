// qua ci arrivo dal click sugli album, mi serve un fetch usando l'id degli album 
//id dell'album sufficiente come dati, prendere con url search param e fetchare quello
// ho l'anno con i giorni, numero brani senza scritta "brani", duration diviso 100
//riproduzioni ci metto rank

//qua mi serviranno due cicli diversi per la parte inferiore

const paginaAlbum = document.querySelector("#albumPage")

let param = new URLSearchParams(document.location.search)
let idAlbum = param.get("id") 
console.log(idAlbum) 
const urlAlbum = `https://deezerdevs-deezer.p.rapidapi.com/album/${idAlbum}`

fetch(urlAlbum, {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a50fe14028msh940c0b8b9fece73p125787jsn3dae20f86ae0',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
})
    .then(response => response.json())
    .then(data => { 
        console.log(data)
        // FOTO ALBUM, NOME ALBUM, NOME ARTISTA, RELEASE DATE, NUMERO BRANI, DURATION ALBUM <---- parte statica 
        // ACCEDI AD ARRAY TRACKS PRIMA DI TUTTO  INDEX DEL FOR PER NUMERO, 
        //TITOLO TRACKS.TITLE, ARTISTA TRACKS.ARTIST.NAME, RIPROD. TRACKS.RANK, DURATION DIVISO 100

        const albumPic = data.cover
        const albumName = data.title
        const artistName = data.artist.name   
        const releaseDate = data.release_date
        const numTracks = data.nb_tracks
        const durationAlbum = data.durationAlbum 

       /*  const templateStatic = `` */



       const arrayTracks = data.tracks.data
       console.log(arrayTracks)













})