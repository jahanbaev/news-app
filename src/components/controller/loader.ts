import { ArticlesType, SourcesType } from "../interfaces";

class Loader {
  baseLink: string;
  options: object;

  constructor(baseLink: string, options: object) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp<T extends SourcesType | ArticlesType>(
    data: { endpoint: string; options?: {} },
    callback: (data: T) => void = () => {
      console.error("No callback for GET response");
    }
  ): void {
    this.load("GET", data.endpoint, callback, data.options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(
          `Sorry, but there is ${res.status} error: ${res.statusText}`
        );
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: { [key: string]: string }, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load<T extends SourcesType | ArticlesType>(
    method: string,
    endpoint: string,
    callback: (data: T) => void,
    options = {}
  ) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
