export default class Difference {
  constructor(oldOfficer, newOfficer, cards) {
    this.oldOfficer = document.querySelector(oldOfficer);
    this.newOfficer = document.querySelector(newOfficer);
    if (cards) {
      this.oldItems = this.oldOfficer.querySelectorAll(cards);
      this.newItems = this.newOfficer.querySelectorAll(cards);
      this.cards = cards;
      this.oldCounter = 0;
      this.newCounter = 0;
    }
  }

  bindTriggers(container, items, counter) {
    container.querySelector(".plus").addEventListener("click", () => {
      if (counter !== items.length - 2) {
        items[counter].style.display = "flex";
        counter++; //показываем два первых элемента
      } else {
        items[counter].style.display = "flex";
        items[items.length - 1].remove(); // на последней карточке удаляется кнопка
      }
    });
  }

  hideCards(cards) {
    cards.forEach((card, i, arr) => {
      if (i !== arr.length - 1) {
        card.style.display = "none";
      }
    });
  }

  init() {
    try {
      this.hideCards(this.oldItems);
      this.hideCards(this.newItems);
      this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
      this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
    } catch (e) {}
  }
}
