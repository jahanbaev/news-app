import { ArticlesType, SourcesType } from '../interfaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticlesType) {
        this.news.draw(data);
        console.log(data)
    }

    drawSources(data: SourcesType) {
        this.sources.draw(data);
    }
}

export default AppView;
