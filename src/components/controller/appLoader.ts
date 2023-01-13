import Loader from "./loader";

class AppLoader extends Loader {
  constructor() {
    super("https://newsapi.org/v2/", {
      apiKey: "d6a714bd8e3a4302a9e183a9183ace98",
    });
  }
}

export default AppLoader;
