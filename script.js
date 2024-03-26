document.addEventListener("DOMContentLoaded", function() {
    // Função para carregar os vídeos na playlist
    function loadVideos() {
        const playlistArea = document.querySelector(".playlist");

        videoList.forEach((video, index) => {
            const div = document.createElement("div");
            div.classList.add("playlist-video");
            if (index === 0) {
                div.classList.add("active");
            }

            div.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail">
                <label class="playlist-video-info">${video.title}</label>
            `;
            div.addEventListener("click", () => selectVideo(div));

            playlistArea.appendChild(div);
        });
    }

    // Função para selecionar um vídeo da playlist
    function selectVideo(videoElement) {
        const playlistVideos = document.querySelectorAll(".playlist-video");
        playlistVideos.forEach(video => video.classList.remove("active"));
        videoElement.classList.add("active");

        const mainVideo = document.querySelector(".main-video-content video");
        const mainVideoInfo = document.querySelector(".main-video-content label");
        mainVideo.src = videoElement.querySelector(".thumbnail").src;
        mainVideoInfo.innerHTML = videoElement.querySelector("label").innerHTML;
    }

    // Função para adicionar evento de clique aos vídeos da playlist
    function addOnClick() {
        const playlistVideos = document.querySelectorAll(".playlist-video");

        playlistVideos.forEach((item) => {
            item.addEventListener("click", () => {
                const videoMain = document.querySelector(".main-video-content");
                selectVideo(item);
            });
        });
    }

    // Chamando as funções necessárias ao carregar a página
    loadVideos();
    addOnClick();

    // Carregar o primeiro vídeo na main-video-content ao carregar a página
    const firstVideo = document.querySelector('.playlist-video');
    if (firstVideo) {
        const videoMain = document.querySelector(".main-video-content");
        selectVideo(firstVideo);
    }
});


// function snipperYtbPlay(evt) {
//     evt.currentTarget.removeEventListener('click', snipperYtbPlay);

//     evt.currentTarget.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${evt.currentTarget.dataSet.id}?autoplay=1" 
//     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
//     picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
// }