const artistPageDiv = document.querySelector("#paginaArtista")
const staticArtist = document.querySelector("#parteStaticaArtist")  //qua inner statico
const tracklistPosition = document.querySelector("#cicloArtist") //qua inner ciclato


let artistaCercato = localStorage.getItem("ricerca")
const urlDinamico = `https://deezerdevs-deezer.p.rapidapi.com/search?q={${artistaCercato}}`

let param = new URLSearchParams(document.location.search)
let artistId = param.get("id")  
let artistName = param.get("nameArtist")
const urlParam = `https://deezerdevs-deezer.p.rapidapi.com/search?q={${artistName}}`


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
        .then(oggetto => {
            console.log(oggetto)
            const array = oggetto.data
            console.log(array)
            //FOTO ARTISTA, NOME ARTISTA, FOLLOWER 
            const artistPic = array[0].artist.picture_xl
            const nameArtist = array[0].artist.name
            const followerArtist = array[0].rank

            const templateStatic = `
            <div 
style="background-image: url(${artistPic}); background-size: contain; padding-top: 240px; background-repeat: no-repeat; background-position: center;">

<div class="d-flex align-items-center"><i class="bi bi-patch-check-fill px-2" id="verificato"></i><p class="d-inline px-1 m-0 text-white">Artista verificato</p></div>
<h1 class="m-0 px-2 fw-bold text-white titleArtist">${nameArtist}</h1>
<p class="d-flex d-lg-none m-0 px-2 fw-bold text-white"> ${followerArtist} ascoltatori mensili</p>
<!--questo deve sparire su mobile-->
</div> <!-- questo è il contenitore della foto -->


<div id="sezioneDue">
<p class="d-none d-lg-flex m-0 pt-1 fw-bold text-white"> ${followerArtist} ascoltatori mensili</p>

<!-- questa è la barra play -->
<div class="d-flex justify-content-between flex-row-reverse flex-lg-row justify-content-lg-start">
    <div class="d-flex align-items-center">
        <i class="bi bi-shuffle d-lg-none p-2" id="btnShuffle"></i> 
        <i class="bi bi-play-circle-fill p-2" id="btnPlay"></i>
    </div>
    <div class="d-flex justify-content-center align-items-center">
        <button class="btn btn-outline-light bg-black fw-bold mx-2">FOLLOWING</button>
        <i class="bi bi-three-dots"></i>
    </div>
</div> <!-- qua finisce la barra del play -->

<div class="">
    <div class="row">
        <div class="col-lg-6 order-lg-2">
            <div class="d-flex flex-column align-items-lg-start">
                <div class="">
                    <div>
                        <h4 class="m-3 d-none d-lg-block fw-bold text-white" id="titoloh">Brani che ti piacciono</h4>
                    </div>
                    <div class="d-flex">
                        <div> <!-- questa foto è dinamica -->
                            <img id="fotoArtista" src="${artistPic}" alt="foto artista"
                                width="50" height="50" class="mt-3">
                                <div id="heartIcon" class="d-flex d-lg-none"><i class="bi bi-suit-heart-fill text-black heartIcon"></i></div>
                                <div id="heartIconDesk" class="d-none d-lg-flex"><i class="bi bi-suit-heart-fill text-white heartIcon"></i></div>
                        </div>
                        <div class="ml-lg-3 mt-3 px-2">
                            <h5 class="d-block d-lg-none text-white fw-bold">Brani che ti piacciono</h5>
                            <p class="d-none d-lg-flex m-0 fw-bold text-white">Hai messo Mi piace a 11 brani</p> <!-- numero brani dinamico -->
                            <p class="m-0 text-white">8 brani di ${nameArtist}</p><!-- #num Brani di #artista -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-lg-6 order-lg-1">
            <div id="albumList" class="">
            <h2 class="p-3 fw-bold text-white">Popolari</h2>
                <div id="cicloArtist">

                </div>
            </div>
        </div>
    </div>
</div>
</div>
            `
            staticArtist.innerHTML = templateStatic
            const tracklistPosition = document.querySelector("#cicloArtist")

            for(let i = 1; i < 8; i++){
                const trackTitle = array[i].title
                const albumPic = array[i].album.cover
                const numAscolti = array[i].rank
                const durataTrack = array[i].duration
                const albumId = array[i].album.id
                const nameArtist = array[i].artist.name


                const templateDinamic = `
                <div class="d-flex justify-content-between align-items-center">
    <div class="d-flex m-3 align-items-center">
        <a href="./album-page.html?id=${albumId}&nome=${nameArtist}"><img src="${albumPic}" alt="img album" width="50" height="50"></a>
        <div class="d-lg-flex px-2 align-items-center">
            <h3 class="m-0 text-white">${trackTitle}</h3><!--affiancare a img-->
            <p class="px-2 m-0">${numAscolti}</p><!--affiancare all'img sotto h3-->
        </div>
    </div>
    <div class="align-items-center">
        <p class="d-none d-lg-flex m-0 pt-1 text-white">${durataTrack/100}</p><!--solo su desk-->
        <i class="bi bi-three-dots-vertical d-lg-none"></i>
    </div>
</div>  
                
                `
                tracklistPosition.innerHTML += templateDinamic

            }
            

        })
        // mi serve FOTO ARTISTA, NOME ARTISTA, FOLLOWER + brani che ti piacciono solo mobile NUMERO BRANI <--------- questo è quello senza ciclo
        // dove ciclo mi serve TITOLO TRACCIA, FOTO ALBUM, NUMERO ASCOLTI E DURATION
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
        .then(oggetto => {
            console.log(oggetto)
            const array = oggetto.data
            console.log(array)
            //FOTO ARTISTA, NOME ARTISTA, FOLLOWER 
            const artistPic = array[0].artist.picture_xl
            const nameArtist = array[0].artist.name
            const followerArtist = array[0].rank

            const templateStatic = `
            <div 
style="background-image: url(${artistPic}); background-size: contain; padding-top: 240px; background-repeat: no-repeat; background-position: center;">

<div class="d-flex align-items-center"><i class="bi bi-patch-check-fill px-2" id="verificato"></i><p class="d-inline px-1 m-0 text-white">Artista verificato</p></div>
<h1 class="m-0 px-2 fw-bold text-white titleArtist">${nameArtist}</h1>
<p class="d-flex d-lg-none m-0 px-2 fw-bold text-white"> ${followerArtist} ascoltatori mensili</p>
<!--questo deve sparire su mobile-->
</div> <!-- questo è il contenitore della foto -->


<div id="sezioneDue">
<p class="d-none d-lg-flex m-0 pt-1 fw-bold text-white"> ${followerArtist} ascoltatori mensili</p>

<!-- questa è la barra play -->
<div class="d-flex justify-content-between flex-row-reverse flex-lg-row justify-content-lg-start">
    <div class="d-flex align-items-center">
        <i class="bi bi-shuffle d-lg-none p-2" id="btnShuffle"></i> 
        <i class="bi bi-play-circle-fill p-2" id="btnPlay"></i>
    </div>
    <div class="d-flex justify-content-center align-items-center">
        <button class="btn btn-outline-light bg-black fw-bold mx-2">FOLLOWING</button>
        <i class="bi bi-three-dots"></i>
    </div>
</div> <!-- qua finisce la barra del play -->

<div class="">
    <div class="row">
        <div class="col-lg-6 order-lg-2">
            <div class="d-flex flex-column align-items-lg-start">
                <div class="">
                    <div>
                        <h4 class="m-3 d-none d-lg-block fw-bold text-white" id="titoloh">Brani che ti piacciono</h4>
                    </div>
                    <div class="d-flex">
                        <div> <!-- questa foto è dinamica -->
                            <img id="fotoArtista" src="${artistPic}" alt="foto artista"
                                width="50" height="50" class="mt-3">
                                <div id="heartIcon" class="d-flex d-lg-none"><i class="bi bi-suit-heart-fill text-black heartIcon"></i></div>
                                <div id="heartIconDesk" class="d-none d-lg-flex"><i class="bi bi-suit-heart-fill text-white heartIcon"></i></div>
                        </div>
                        <div class="ml-lg-3 mt-3 px-2">
                            <h5 class="d-block d-lg-none text-white fw-bold">Brani che ti piacciono</h5>
                            <p class="d-none d-lg-flex m-0 fw-bold text-white">Hai messo Mi piace a 11 brani</p> <!-- numero brani dinamico -->
                            <p class="m-0 text-white">8 brani di ${nameArtist}</p><!-- #num Brani di #artista -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-lg-6 order-lg-1">
            <div id="albumList" class="">
            <h2 class="p-3 fw-bold text-white">Popolari</h2>
                <div id="cicloArtist">

                </div>
            </div>
        </div>
    </div>
</div>
</div>
            `
            staticArtist.innerHTML = templateStatic
            const tracklistPosition = document.querySelector("#cicloArtist")

            for(let i = 1; i < 8; i++){
                const trackTitle = array[i].title
                const albumPic = array[i].album.cover
                const numAscolti = array[i].rank
                const durataTrack = array[i].duration
                const albumId = array[i].album.id
                const nameArtist = array[i].artist.name


                const templateDinamic = `
                <div class="d-flex justify-content-between align-items-center">
    <div class="d-flex m-3 align-items-center">
        <a href="./album-page.html?id=${albumId}&nome=${nameArtist}"><img src="${albumPic}" alt="img album" width="50" height="50"></a>
        <div class="d-lg-flex px-2 align-items-center">
            <h3 class="m-0 text-white">${trackTitle}</h3><!--affiancare a img-->
            <p class="px-2 m-0 text-white">${numAscolti}</p><!--affiancare all'img sotto h3-->
        </div>
    </div>
    <div class="align-items-center">
        <p class="d-none d-lg-flex m-0 pt-1 text-white">${durataTrack/100}</p><!--solo su desk-->
        <i class="bi bi-three-dots-vertical d-lg-none"></i>
    </div>
</div>  
                
                `
                tracklistPosition.innerHTML += templateDinamic

            }
            

        })
      


}


/* <div 
style="background-image: url(./assets/imgs/search/image-37.jpeg); background-size: contain; padding-top: 240px; background-repeat: repeat;">

<div class="d-flex align-items-center"><i class="bi bi-patch-check-fill px-2" id="verificato"></i><p class="d-inline px-1 m-0">Artista verificato</p></div>
<h1 class="m-0 px-2 fw-bold">Artista Dinamico</h1>
<p class="d-flex d-lg-none m-0 px-2 fw-bold">Followers Dinamico ascoltatori mensili</p>
<!--questo deve sparire su mobile-->
</div> <!-- questo è il contenitore della foto -->


<div id="sezioneDue">
<p class="d-none d-lg-flex m-0 pt-1 fw-bold">Followers Dinamico ascoltatori mensili</p>

<!-- questa è la barra play -->
<div class="d-flex justify-content-between flex-row-reverse flex-lg-row justify-content-lg-start">
    <div class="d-flex align-items-center">
        <i class="bi bi-shuffle d-lg-none p-2" id="btnShuffle"></i> 
        <i class="bi bi-play-circle-fill p-2" id="btnPlay"></i>
    </div>
    <div class="d-flex justify-content-center align-items-center">
        <button class="btn btn-outline-light bg-black fw-bold mx-2">FOLLOWING</button>
        <i class="bi bi-three-dots"></i>
    </div>
</div> <!-- qua finisce la barra del play -->

<div class="">
    <div class="row">
        <div class="col-lg-6 order-lg-2">
            <div class="d-flex flex-column align-items-lg-start">
                <div class="">
                    <div>
                        <h4 class="m-3 d-none d-lg-block fw-bold" id="titoloh">Brani che ti piacciono</h4>
                    </div>
                    <div class="d-flex">
                        <div> <!-- questa foto è dinamica -->
                            <img id="fotoArtista" src="/assets/imgs/search/image-19.jpg" alt="foto artista"
                                width="50" height="50" class="mt-3">
                                <div id="heartIcon" class="d-flex d-lg-none"><i class="bi bi-suit-heart-fill text-black heartIcon"></i></div>
                                <div id="heartIconDesk" class="d-none d-lg-flex"><i class="bi bi-suit-heart-fill text-white heartIcon"></i></div>
                        </div>
                        <div class="ml-lg-3 mt-3 px-2">
                            <h5 class="d-block d-lg-none text-white fw-bold">Brani che ti piacciono</h5>
                            <p class="d-none d-lg-flex m-0 fw-bold">Hai messo Mi piace a 11 brani</p> <!-- numero brani dinamico -->
                            <p class="m-0">Questo deve essere dinamico</p><!-- #num Brani di #artista -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-lg-6 order-lg-1">
            <div id="albumList" class="">
            <h2 class="p-3 fw-bold">Popolari</h2>
                <div id="cicloArtist">

                </div>
            </div>
        </div>
    </div>
</div>
</div> */

  // QUESTO VA CICLATO
/* <div class="d-flex justify-content-between align-items-center">
    <div class="d-flex m-3 align-items-center">
        <img src="./assets/imgs/main/image-10.jpg" alt="img album" width="50" height="50">
        <div class="d-lg-flex px-2 align-items-center">
            <h3 class="m-0">Titolo Dinamico</h3><!--affiancare a img-->
            <p class="px-2 m-0">Artista Dinamico</p><!--affiancare all'img sotto h3-->
        </div>
    </div>
    <div class="align-items-center">
        <p class="d-none d-lg-flex m-0 pt-1">Tempo Dinamico</p><!--solo su desk-->
        <i class="bi bi-three-dots-vertical d-lg-none"></i>
    </div>
</div>  */











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