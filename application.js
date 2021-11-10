import { API } from "./const";

const func = () => {
  console.log("some cool function");
};

console.log("new str");

class API {
  static URL = API.GITHUB;

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

console.log("some code");

class newClassImplementation {
  someMethods = (a, b) => a + b;
  someMethods2 = (a, b) => a * b;
  someMethods3 = (a, b) => a - b;
  someMethods4 = (a, b) => a / b;
}
