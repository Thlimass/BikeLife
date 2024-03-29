// Aguarde o conteúdo HTML ser carregado
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos do DOM que você precisa
    const videoContent = document.querySelector('.video-content');
    const playlist = document.querySelector('.playlist');

    // Função para carregar o primeiro item da lista ao carregar a página
    function loadFirstItem() {
        const firstItem = videoList[0];
        renderVideo(firstItem);
    }

    // Função para renderizar o vídeo na div de conteúdo do vídeo
    function renderVideo(video) {
        videoContent.innerHTML = `<iframe width="560" height="315" src="${video.url}" frameborder="0" allowfullscreen></iframe>`;
    }

    // Função para renderizar a playlist na div de playlist
    function renderPlaylist() {
        playlist.innerHTML = '';
        videoList.forEach((video, index) => {
            const listItem = document.createElement('div');
            listItem.classList.add('playlist-item');
            // Adiciona a numeração ao título do vídeo
            listItem.textContent = `${index + 1}. ${video.title}`;
            // Adiciona um evento de clique em cada item da lista
            listItem.addEventListener('click', () => {
                renderVideo(video);
                // Remove a classe 'selected' de todos os itens da playlist
                document.querySelectorAll('.playlist-item').forEach(item => {
                    item.classList.remove('selected');
                });
                // Adiciona a classe 'selected' ao item clicado
                listItem.classList.add('selected');
            });
            playlist.appendChild(listItem);
        });
    }


    // Renderiza a playlist e o primeiro vídeo ao carregar a página
    renderPlaylist();
    loadFirstItem();
});
