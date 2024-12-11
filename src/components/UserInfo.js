export default class UserInfo {
  constructor(profileSelector, jobSelector) {
    this._profileElement = profileSelector;
    this._jobElement = jobSelector;
  }

  getUserInfo() {
    return {
      title: this._profileElement.textContent,
      description: this._jobElement.textContent,
    };
  }

  setUserInfo({ title, description }) {
    this._profileElement.textContent = title;
    this._jobElement.textContent = description;
  }
}
