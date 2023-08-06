import { default as resumeData } from "./data.json";
import { blockTitleCSS, divCSS, ulCSS } from "./dataHandler";
import { createHr, createListItem } from "./dataHandler";
import { INFO_BLOCK_IDENTIFIER } from "./dataHandler";

export const seq: string[] = [
  "summary",
  "experience",
  "education",
  "certification",
];

export function start() {
  let resultHTML: HTMLDivElement[] = [];
  for (let key of seq) {
    const data = resumeData[key];
    resultHTML.push(generateDiv(key, data));
  }
  // get the root home-info-block div element
  const parentDiv = document.getElementById(INFO_BLOCK_IDENTIFIER);
  for (let html of resultHTML) {
    parentDiv!.appendChild(html);
  }
}

// generate div according to resumeData
function generateDiv(key: string, data: object): HTMLDivElement {
  const rootDiv: HTMLDivElement = createDivBlock(key);
  const titleDiv: HTMLDivElement = createTitle(key);
  let subtitleDiv: HTMLDivElement = document.createElement("div");
  let timeframeDiv: HTMLDivElement = document.createElement("div");
  let contentDiv: HTMLDivElement = document.createElement("div");

  // handle: 1 without subtitle and timeframe, 2 with subtitle and timeframe
  if (typeof data[0] === "object") {
    // TODO: handle data with subtitle and timeframe
  } else {
    contentDiv = createContent(Object.values(data));
  }

  rootDiv.appendChild(titleDiv);
  rootDiv.appendChild(contentDiv);
  return rootDiv;
}

/*
  Information part contains 4 parts: title, subtitle, timeframe, content

  ------------------------
  | title                |
  ------------------------
  | subtitle   timeframe |
  | content              |
  ------------------------

  one block contains ONE title, and ONE or MORE other parts

  .block-title {
    text-align: left;
    font-size: 2rem;
    font-weight: bold;
    margin: 0.2rem auto;
  }
*/

// create div block for each part
function createDivBlock(id: string) {
  const idString = id + "-block";
  const div = document.createElement("div");
  div.id = idString;
  return div;
}

// create block title part
function createTitle(title: string) {
  const titleString: string = title[0].toUpperCase() + title.slice(1);
  const div = document.createElement("div");

  const innerDiv = document.createElement("div");
  innerDiv.innerText = titleString;
  div.appendChild(innerDiv);
  div.appendChild(createHr());

  // apply css
  div.style.cssText = blockTitleCSS;

  return div;
}

// create subtitle part
function createSubtitle(subtitle: string) {}

// create timeframe part
function createTimeframe(timeframe: string) {}

// create content part
function createContent(content: string[]): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  const ul: HTMLUListElement = document.createElement("ul");

  for (let c of content) {
    ul.appendChild(createListItem(c));
  }

  div.style.cssText = divCSS;
  ul.style.cssText = ulCSS;
  div.appendChild(ul);
  return div;
}
