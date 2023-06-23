import Slider from "./modules/sliders";
import VideoPlayer from "./modules/player";
window.addEventListener("DOMContentLoaded", () => {
  const slider = new Slider(".page", ".next");
  slider.render();

  const player = new VideoPlayer(".showup .play", ".overlay");
  player.init();
});
