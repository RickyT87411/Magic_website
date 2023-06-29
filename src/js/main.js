import MainSlider from "./modules/sliders/slider-main";
import VideoPlayer from "./modules/player";
import MiniSlider from "./modules/sliders/mini_sliders";
import Difference from "./modules/difference";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new MainSlider({ btns: ".next", container: ".page" });
  slider.render();

  const player = new VideoPlayer(".showup .play", ".overlay");
  player.init();

  const pageSlider = new MainSlider({ btns: ".next", container: ".moduleapp" });
  pageSlider.render();

  const showUpSlider = new MiniSlider({
    container: ".showup__content-slider",
    prev: ".showup__prev",
    next: ".showup__next",
    activeClass: "card-active",
    animate: true,
    autoplay: true,
  });

  showUpSlider.init();

  const feedSlider = new MiniSlider({
    container: ".feed__slider",
    prev: ".feed__slider .slick-prev",
    next: ".feed__slider .slick-next",
    activeClass: "feed__item-active",
  });
  feedSlider.init();

  const modulesSlider = new MiniSlider({
    container: ".modules__content-slider",
    prev: ".modules__info-btns .slick-prev",
    next: ".modules__info-btns .slick-next",
    activeClass: "card-active",
    animate: true,
  });
  modulesSlider.init();

  new Difference(".officerold", ".officernew", ".officer__card-item").init();
});
