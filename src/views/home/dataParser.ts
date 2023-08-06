import { default as resumeData } from "./data.json";
import {
  blockTitleCSS,
  contentTitleCSS,
  divCSS,
  flexCSS,
  ulCSS,
  subtitleCSS
} from "./dataHandler";
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
function generateDiv(key: string, data: object[]): HTMLDivElement {
  // shared div element, title
  const rootDiv: HTMLDivElement = createDivBlock(key);
  const titleDiv: HTMLDivElement = createTitle(key);
  // deticated div element. May contain different number of div depends on different data
  let subblockDiv: HTMLDivElement = document.createElement("div");

  rootDiv.appendChild(titleDiv);

  for (let d of data) {
    subblockDiv = generateSubBlock(d);
    rootDiv.appendChild(subblockDiv);
  }

  return rootDiv;
}

// generate sub-block content
function generateSubBlock(data: object): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  let contentDiv: HTMLDivElement;

  if (data["contentTitle"] !== undefined) {
    div.appendChild(
      createContentTitle(data["contentTitle"], data["timeframe"])
    );
  }
  if (data["subtitle"] !== undefined) {
    div.appendChild(createSubtitle(data["subtitle"]));
  }
  if (data["content"] !== undefined) {
    contentDiv = createContent(data["content"]);
    div.appendChild(contentDiv);
  }

  return div;
}

/*
  Information part contains 5 parts: title, contentTitle, subtitle, timeframe, content

  -----------------------------
  | title                     |
  ------------------------------
  | contentTitle    timeframe | // job title, uni, cert name, etc.
  | subtitle                  | // workplace, degree, issued from, etc.
  | content                   | // details
  -----------------------------

  one block contains ONE title, and ONE or MORE sub-block
  sub-block means items for separate for different block

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

// create contentTitle and timeframe part
function createContentTitle(
  contentTitle: string,
  timeframe: string
): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  div.style.cssText = flexCSS;

  const contentTitleDiv: HTMLDivElement = document.createElement("div");
  contentTitleDiv.innerText = contentTitle;
  contentTitleDiv.style.cssText = contentTitleCSS;
  div.appendChild(contentTitleDiv);

  if (timeframe !== undefined) {
    const timeframeDiv: HTMLDivElement = document.createElement("div");
    timeframeDiv.innerText = timeframe;
    div.appendChild(timeframeDiv);
  }

  return div;
}

// create subtitle part
function createSubtitle(subtitle: string): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  if (subtitle !== undefined) {
    div.innerText = subtitle;
  }

  div.style.cssText = subtitleCSS;
  return div;
}

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
