const artistPageDiv = document.querySelector("#artistPageHere")
let artistaCercato = localStorage.getItem("ricerca")
const urlDinamico = `https://deezerdevs-deezer.p.rapidapi.com/search?q={${artistaCercato}}`

let param = new URLSearchParams(document.location.search)
let artistId = param.get("id")  
let artistName = param.get("nameArtist")
const urlParam = `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistName}`


if (artistId) {  
    //fetch del link artista coi param
    fetch(urlParam, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a50fe14028msh940c0b8b9fece73p125787jsn3dae20f86ae0',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        //innerHTML della pagina artisti usando il link dei queen  // name nb_fan picture 
        //prima la parte senza ciclo commentata nel template artista, poi l'altra ciclata
} else {
    //fetch del localstorage
    fetch(urlDinamico, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a50fe14028msh940c0b8b9fece73p125787jsn3dae20f86ae0',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        //innerHTML usando la barra di ricerca
}





//fetch del localstorage
/* fetch(urlDinamico, {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a50fe14028msh940c0b8b9fece73p125787jsn3dae20f86ae0',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
})
    .then(response => response.json())
    .then(data => console.log(data)) */

    
//ora devo caricare la pagina con innerHTML di Marco parte sopra in un template, la lista di tracce in un ciclo





/* const divDaInserire.innerHTML =

 //  usare index per i numeri oppure un OL 
for(let i=1; i< 9; i++){
    const nome = ${nome}
    const cognome = ${cognome}

    const templateCiclato.innerHTML=
    div tabella> div col-1
}; */