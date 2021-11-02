const func = () => {
  console.log("some cool function");
};

console.log("some new string");

class API {
  static URL = "https://github/";

  async getPublicData() {
    const data = await fetch(API.URL);
    return data.json();
  }
}
