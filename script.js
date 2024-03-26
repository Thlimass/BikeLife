import videosTips from "./videosTips";

function loadVideos() {
    const playlist_area = document.querySelector(".playlist");

    videosTips.forEach((video, index) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <div class"playlist-video ${index + 1 === 1 && "active"}">
        video src=${videosTips.src} muted></video>
        <label class="playlist-video-info">${videosTips.title}</label>
        </div>
        `;

        playlist_area.appendChild(div);
    });

    function addOnClick() {
        const video_main = document.querySelector(".main-video-content");
        const playlist_video = document.querySelectorAll(".playlist-video");

        playlist_video.forEach((item, i) => {
            if (!i) {
                setVideo(video_main, item);
            }

            item.onClick = () => {
                playlist_video.forEach((video) => video.classList.remove("active"));
                item.classList.add("active");

                setVideo(video_main, item);
            };
        });
    }

    function setVideo(video_main, item) {
        video_main.children[0].src = item.children[0].getAttribute("src");
        video_main.children[1].innerHTML = item.children[1].innerHTML;
    }

    loadVideos();
}