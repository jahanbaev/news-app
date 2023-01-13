import { SourcesType, ISource } from "../../interfaces";
import "./sources.css";

class Sources {
  draw(data: SourcesType) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector(
      "#sourceItemTemp"
    ) as HTMLTemplateElement;
    const sources = data.sources ? data.sources : [];

    sources.forEach((item: ISource) => {
      const sourceClone = sourceItemTemp.content.cloneNode(
        true
      ) as HTMLDivElement;

      sourceClone.querySelector(".source__item-name")!.textContent = item.name;
      sourceClone
        .querySelector(".source__item")!
        .setAttribute("data-source-id", item.id);

      fragment.append(sourceClone);
    });

    document.querySelector(".sources")?.append(fragment);
  }
}

export default Sources;
