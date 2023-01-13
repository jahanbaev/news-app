export interface ArticlesType {
    articles: IArticle[];
}

export interface SourcesType {
    sources: ISource[];
}

export interface Isource {
    id: string;
    name: string;
  }
export interface IArticle {
    length: number;
    author: string;
    context: string;
    description: string;
    publishedAt: string;
    source: Isource;
    title: string;
    url: string;
    urlToImage: string;
}

export interface ISource {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface IApp {
    controller: AppController;
    view: AppView;
  }