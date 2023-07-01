export default class Download {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
    this.path = "assets/img/mainbg.jpg";
  }

  downloadItem(path) {
    const element = document.createElement("a"); //создание ссылки
    element.setAttribute("href", path);
    element.setAttribute("download", "nice_picture"); //скачиваниеы

    element.style.display = "none";
    document.body.appendChild(element);

    element.click(); //вызываем клик

    document.body.removeChild(element); //после завершения действия ссылка удаляется
  }

  init() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.downloadItem(this.path);
      });
    });
  }
}
