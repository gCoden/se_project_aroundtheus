export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._element = document.querySelector(`.${containerSelector}`);
  }
  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }
  addItems(element) {
    this._element.append(element);
  }
}
