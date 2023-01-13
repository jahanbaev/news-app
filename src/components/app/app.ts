import AppController from "../controller/controller";
import { ArticlesType, SourcesType, IApp } from "../interfaces";
import { AppView } from "../view/appView";


class App implements IApp {
  controller: AppController;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  
  }

  start(): void {
    document
      .querySelector(".sources")!
      .addEventListener("click", (e) =>
        this.controller.getNews(e, (data: ArticlesType) =>
          this.view.drawNews(data)
        )
      );
    this.controller.getSources((data: SourcesType) =>
      this.view.drawSources(data)
    );
  }
}

export default App;
