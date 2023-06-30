export default class VideoPlayer {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);

    this.overlay = document.querySelector(overlay);

    this.close = this.overlay.querySelector(".close");

    this.onPlayerStateChange = this.onPlayerStateChange.bind(this); //привязали контекст вызова к методу и к классу
  }

  bindTriggers() {
    this.btns.forEach((btn, i) => {
      this.activeBtn = btn;
      const blockedElem = this.activeBtn.closest(
        ".module__video-item"
      ).nextElementSibling;

      if (i % 2 === 0) {
        //проверяем каждый второй элемент
        blockedElem.setAttribute("data-disabled", "true");
      }

      btn.addEventListener("click", () => {
        if (
          btn.closest(".module__video-item").getAttribute("data-disabled") !==
          "true"
        ) {
          if (document.querySelector("iframe#frame")) {
            this.overlay.style.display = "flex";
            if (this.path !== btn.getAttribute("data-url")) {
              this.path = btn.getAttribute("data-url"); //показывает какое именно видео проигрывается
              this.player.loadVideoById({ videoId: this.path }); //загрузить видео по определенному id
            }
          } else {
            this.path = btn.getAttribute("data-url");

            this.createPlayer(this.path);
          }
        }
      });
    });
  }

  bindCloseBtn() {
    this.close.addEventListener("click", () => {
      this.overlay.style.display = "none";
      this.player.stopVideo();
    });
  }

  createPlayer(videoId) {
    this.player = new YT.Player("frame", {
      height: "100%",
      width: "100%",
      videoId,
      events: {
        onStateChange: this.onPlayerStateChange,
      },
    });

    this.overlay.style.display = "flex";
  }

  onPlayerStateChange(state) {
    const blockedElem = this.activeBtn.closest(
      ".module__video-item"
    ).nextElementSibling; //получаем первого родителя

    const playBtn = this.activeBtn.querySelector("svg").cloneNode(true); //копируем svg

    if (state.data === 0) {
      if (
        blockedElem.querySelector(".play__circle").classList.contains("closed")
      ) {
        blockedElem.querySelector(".play__circle").classList.remove("closed");
        blockedElem.querySelector("svg").remove();
        blockedElem.querySelector(".play__circle").appendChild(playBtn);
        blockedElem.querySelector(".play__text").textContent = "play video";
        blockedElem.querySelector(".play__text").classList.remove("attention");
        blockedElem.style.opacity = 1;
        blockedElem.style.filter = "none";

        blockedElem.setAttribute("data-disabled", "false");
      }
    }
  }

  init() {
    if (this.btns.length > 0) {
      const tag = document.createElement("script");

      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      this.bindTriggers();
      this.bindCloseBtn();
    }
  }
}
