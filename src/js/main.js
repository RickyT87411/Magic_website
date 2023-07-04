import MainSlider from "./modules/sliders/slider-main";
import VideoPlayer from "./modules/player";
import MiniSlider from "./modules/sliders/mini_sliders";
import Difference from "./modules/difference";
import Form from "./modules/form";
import ShowInfo from "./modules/showInfo";
import Download from "./modules/download";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new MainSlider({ btns: ".next", container: ".page" });
  slider.render();

  new VideoPlayer(".showup .play", ".overlay").init();
  new VideoPlayer(".module__video-item .play", ".overlay").init();

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

  new Form(".form").init();

  new ShowInfo(".plus__content").init();
  new Download(".download").init();
});
