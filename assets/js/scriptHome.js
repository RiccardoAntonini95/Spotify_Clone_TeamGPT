//devo inserire gli album di un solo artista sotto "altro di ciò che ti piace"
//la foto dell'album deve portare alla pagina album con l'id giusto
//il nome dell'artista deve portare alla relativa pagina artista 
//uso QUEEN come artista preso dall'endpoint search query
//dall'array estraggo un tot di card ciclandole dalla pagina di andrea e le metto nel contenitore riga 309

const urlQueen = 'https://deezerdevs-deezer.p.rapidapi.com/search?q={Queen}'
const contenitoreCard = document.querySelector("#cardContainer")
const urlArtista = 'https://deezerdevs-deezer.p.rapidapi.com/artist/412'
/* const album = 'https://deezerdevs-deezer.p.rapidapi.com/album/103248' */

fetch(urlQueen, {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a50fe14028msh940c0b8b9fece73p125787jsn3dae20f86ae0',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
})
    .then(response => response.json())
    .then(data => { 
        console.log(data)

        for (let i = 1; i < 13; i++) {
            const idAlbum = data.data[i].album.id
            const idQueen = data.data[i].artist.id
            const albumQueen = data.data[i].album.cover
            const trackQueen = data.data[i].title
            const nameQueen = data.data[i].artist.name
            const singleCard = `
            <div class="card rounded-4 col-lg-3 my-4 box-CONSIGLI cursore-puntatore">
            <div>
            <div class="d-flex flex-lg-column">
                <div class="justify-content-center p-2">
                    <a href="./album-page.html?id=${idAlbum}"><img src="${albumQueen}"
                        class="img-fluid img-CONSIGLI cursore-puntatore mt-3 " alt="copertinaAlbum"></a>
                </div>
                <div class="col mt-3">
                    <p class="card-title d-lg-none m-2">Album</p>
                    <a href="#" class="text-NODECORATION text-bg-light text-decoration-none">
                        <p class="card-text fs-4 fw-bold m-2">${trackQueen}</p>
                    </a>
                    <a href="./artist-page.html?id=${idQueen}&nameArtist=${nameQueen}" class="text-NODECORATION text-bg-light text-decoration-none">
                        <p class="card-text fs-4 d-none d-lg-block m-2">${nameQueen}</p>
                    </a>
                </div>
             </div>
           </div>
         </div>`
         contenitoreCard.innerHTML += singleCard;
        }
    })
    //mi serve link artista ovvero id, foto ALBUM, nome traccia, nome artista
    // link è oggetto.data.artist.id
    //foto album è oggetto.data.album.cover
    //nome traccia è oggetto.data.title 
    //nome artista è oggetto.data.artist.name


    //const url dei QUEEN = 'https://deezerdevs-deezer.p.rapidapi.com/artist/412'

/*     <div class="card rounded-4 col-lg-3 my-4 box-CONSIGLI cursore-puntatore" >
        <div>
            <div class="d-flex flex-lg-column">
                <div class="justify-content-center p-2">
                    <a href="#LINK DEI QUEEN"><img src="FOTO ALBUM QUEEN"
                        class="img-fluid img-CONSIGLI cursore-puntatore mt-3 " alt="copertinaAlbum"></a>
                </div>
                <div class="col mt-3">
                    <p class="card-title d-lg-none m-2">Playlist</p>
                    <a href="#" class="text-NODECORATION text-bg-light text-decoration-none">
                        <p class="card-text fs-4 fw-bold m-2">NOME TRACCIA QUEEN</p>
                    </a>
                    <a href="#" class="text-NODECORATION text-bg-light text-decoration-none">
                        <p class="card-text fs-4 d-none d-lg-block m-2">NOME QUEEN</p>
                    </a>
                </div>
            </div>
        </div>
    </div> */