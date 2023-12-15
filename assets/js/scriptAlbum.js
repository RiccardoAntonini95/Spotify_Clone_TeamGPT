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
        const albumPic = data.cover_medium
        const albumName = data.title
        const artistName = data.artist.name   
        const releaseDate = data.release_date
        const numTracks = data.nb_tracks
        const durationAlbum = data.duration 
        const artistPic = data.artist.picture

        const templateStatic = `
        <div class="border border-white py-4"> <!--  la pagina album -->
  <div class="d-lg-flex flex-column flex-lg-row">
    <div class="px-4">
      <img src="${albumPic}" id="fotoAlbum" class="img-fluid" alt="foto-album">
    </div>
    <div class="px-4 d-lg-flex flex-wrap text-start pt-lg-5">
      <p class="d-none d-lg-block text-white fw-bold align-self-end mb-0 w-100">ALBUM</p>
      <p class="display-4 text-white fw-bold">${albumName}</p>
      <div class="d-flex text-white gap-1 align-self-end">
        <a href="./artist-page.html?"><img src="${artistPic}" width="25" id="fotoArtista" class="rounded-circle"
          alt="foto-artista"></a>
        <div class="d-flex gap-1">
          <p class="fw-bold">${artistName}</p>
          <p class="d-none d-lg-inline">&#8729;</p>
          <p class="d-none d-lg-inline">${releaseDate}</p>
          <p class="d-none d-lg-inline">&#8729;</p>
          <p class="fw-bold d-none d-lg-inline">${numTracks} brani</p>
          <p class="d-none d-lg-inline">${durationAlbum/100} Min.</p>
        </div>
      </div>
      <div class="d-lg-none text-secondary">
        <p>Album &#8729; 2017</p>
      </div>
    </div>
  </div>
  <div class="border border-warning"> <!-- contenitore barra play statica -->
    <div
      class="d-flex gap-4 justify-content-between justify-content-lg-start align-items-center px-4 d-lg-flex">
      <div class="d-flex gap-4 order-lg-2">
        <i class="fs-1 bi bi-suit-heart text-white"></i> <!-- questo cambia colore marco ha css -->
        <i class="fs-1 bi bi-arrow-down-circle text-secondary"></i>
        <i class="fs-1 bi bi-three-dots-vertical rotate-90 text-secondary"></i>
      </div>
      <div class="d-flex gap-4">
        <i class="fs-1 bi bi-shuffle text-secondary d-lg-none p-2"></i>
        <i class="fs-1 bi bi-play-circle-fill p-2" id="btnPlay"></i>
      </div>
    </div>

    <div class="container text-center d-none d-lg-block">
      <div class="row border-bottom text-secondary">
        <div class="col-1">
          #
        </div>
        <div class="col-6 text-start">
          TITOLO
        </div>
        <div class="col-4">
          RIPRODUZIONI
        </div>
        <div class="col-1">
          <i class="bi bi-clock"></i>
        </div>
      </div>
    </div>
  </div>  <!-- questo div bordo giallo -->
  <div class="text-center">
  <div id="dinamico"></div>
  </div>
</div>
        
        `
        paginaAlbum.innerHTML = templateStatic



       const arrayTracks = data.tracks.data
       console.log(arrayTracks)
       const trackListContainer = document.querySelector("#dinamico")
       for(let i = 1; i < 11; i++){
        const indice = i
        const titleTrack = arrayTracks[i].title
        const artistTrack = arrayTracks[i].artist.name
        const riprodTrack = arrayTracks[i].rank
        const durationTrack = arrayTracks[i].duration

        const templateDinamic = `
        <div class="d-lg-none"> 
        <div class="row justify-content-between px-3">
          <div class="col text-start">
            <p class="m-0 text-white">${titleTrack}</p>
            <p class="m-0 text-secondary">${artistTrack}</p>
          </div>
          <div class="col text-end">
            <i class="fs-1 bi bi-three-dots-vertical text-secondary"></i>
          </div>
        </div> 
      </div> 
        <div class="row align-items-center d-none d-lg-flex">
          <div class="col-1 text-white">
            ${indice} 
          </div>
          <div class="col-6 text-start text-white">
            <div>
              <p class="m-0">${titleTrack}</p>
              <p class="m-0 text-secondary">${artistTrack}</p>
            </div>
          </div>
          <div class="col-4 text-white">
            ${riprodTrack}
          </div>
          <div class="col-1 text-white">
            ${durationTrack/100}
          </div>
        </div>
        `
        trackListContainer.innerHTML += templateDinamic
       }

    })




