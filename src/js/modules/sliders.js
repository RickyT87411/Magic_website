export default class Slider {
  constructor(page, btns) {
    this.page = document.querySelector(page);
    this.slides = this.page.children;
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1;
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.slides.length; //равен последнему элементу
    }

    Array.from(this.slides).forEach((slide) => {
      slide.style.display = "none";
    });
    this.slides[this.slideIndex - 1].style.display = "flex";
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n)); //контроль передвижения слайдов
  }

  render() {
    console.log(this.page, this.slides);

    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.plusSlides(1); // так как стрелка пока одна
      });
      btn.parentNode.previousElementSibling.addEventListener("click", (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    this.showSlides(this.slideIndex); //обращение к методу внутри экземляра класса
  }
}
