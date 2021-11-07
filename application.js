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

class API_2 {
  static = "https://gitlab/";

  async getData() {
    const data = await fetch(API_2.URL);
    return data.json();
  }
}
