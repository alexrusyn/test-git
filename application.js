import { API } from "./const";

const func = () => {
  console.log("some cool function");
};

console.log("some new string");

console.log("new str");

class API {
  static URL = "https://github/";

  async getPublicData() {
    const data = await fetch(API.URL);
    return data.json();
  }
}

class Gitlab_API {
  static = API.GITLAB;

  async getData() {
    const data = await fetch(Gitlab_API.URL);
    return data.json();
  }

  async getOtherData(id) {
    const data = await fetch(`${Gitlab_API.URL}/${id}`);
    return data.json();
  }
}
