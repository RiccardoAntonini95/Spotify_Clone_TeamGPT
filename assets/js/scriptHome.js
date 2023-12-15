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

        for (let i = 1; i < 16; i++) {
            const idAlbum = data.data[i].album.id
            const idQueen = data.data[i].artist.id
            const albumQueen = data.data[i].album.cover
            const trackQueen = data.data[i].title
            const nameQueen = data.data[i].artist.name
            const singleCard = `
            <div class="card rounded-4 col-lg-2 my-4 box-CONSIGLI cursore-puntatore">
            <div>
            <div class="d-flex flex-lg-column">
                <div class="justify-content-center align-self-center">
                    <a href="./album-page.html?id=${idAlbum}"><img src="${albumQueen}"
                        class="img-fluid img-CONSIGLI cursore-puntatore mt-3 " alt="copertinaAlbum"></a>
                </div>
                <div class="col mt-3">
                    <p class="card-title d-lg-none text-riduzioneIngrandimento">Album</p>
                    <a href="#" class="text-NODECORATION text-bg-light text-decoration-none">
                        <h1 class="card-text fw-bold m-2 title-riduzioneIngrandimento">${trackQueen}</h1>
                    </a>
                    <a href="./artist-page.html?id=${idQueen}&nameArtist=${nameQueen}" class="text-NODECORATION text-bg-light text-decoration-none">
                        <p class="card-text d-none d-lg-block text-riduzioneIngrandimento mb-3">${nameQueen}</p>
                    </a>
                </div>
             </div>
             <div class="d-flex justify-content-between text-white  d-lg-none">
                        <div class="d-flex ">
                          <i class=" bi-suit-heart-fill me-3 icon-change icon-riduzioneIngrandimento"></i>
                          <i class=" bi bi-three-dots-vertical icon-change icon-riduzioneIngrandimento"></i>
                        </div>
                          <p class="icon-riduzioneIngrandimento1 align-self-center">16 brani</p>
                          <i class=" bi bi-play-circle-fill icon-change img-fluid icon-riduzioneIngrandimento "></i>
                      </div>
           </div>
         </div>`
         contenitoreCard.innerHTML += singleCard;
        }
    })