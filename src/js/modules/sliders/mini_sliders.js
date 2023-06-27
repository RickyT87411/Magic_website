import Slider from "./sliders";
export default class MiniSlider extends Slider {
  constructor(container, next, prev, activeClass, animate, autoplay) {
    super(container, next, prev, activeClass, animate, autoplay);
  }

  decorizeSlide() {
    Array.from(this.slides).forEach((slide) => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        this.slides[0].querySelector(".card__title").style.opacity = "0.4";
        this.slides[0].querySelector(".card__controls-arrow").style.opacity =
          "0";
      }
    });

    this.slides[0].add(this.activeClass);
    if (this.animate) {
      this.slides[0].querySelector(".card__title").style.opacity = "1";
      this.slides[0].querySelector(".card__controls-arrow").style.opacity = "1";
    }
  }

  bindTriggers() {
    this.next.addEventListener("click", () => {
      this.container.appendChild(this.slides[0]); //первый элемент помещается в конец слайдера
      this.decorizeSlide();
    });

    this.prev.addEventListener("click", () => {
      let active = this.slides[this.slides.length - 1]; //обращаемся к последнему слайду
      this.container.insertBefore(active, this.slides[0]); //помещаем последний после первого
      this.decorizeSlide();
    });
  }

  init() {
    this.container.style.cssText = `
     display:flex;
     flex-wrap:wrap;
     overflow:hidden;
     align-items:flex-start;
     `;

    this.bindTriggers();
    this.decorizeSlide();
  }
}
