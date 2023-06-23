import MainSlider from "./modules/sliders/slider-main";

import VideoPlayer from "./modules/player";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new MainSlider({ btns: ".next", page: ".page" });
  slider.render();

  const player = new VideoPlayer(".showup .play", ".overlay");
  player.init();
});
