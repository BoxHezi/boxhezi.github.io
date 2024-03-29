import {default as resumeData} from "./data.json";

export interface ResumeData {
  key: string;
  data?: Data[];
}

interface Data {
  contentTitle?: string;
  timeframe?: string;
  subtitle?: string;
  contents: string[];
  links?: string[];
}

const INFO_BLOCK_IDENTIFIER = "home-info-block";

export function initResumeData(): ResumeData[] {
  const SEQ: string[] = ["summary", "experience", "project", "education", "certification"]
  let data2parse: ResumeData[] = [];

  for (let key of SEQ) {
    const d = resumeData[key];
    let dList: Data[] = [];
    for (let i of d) {
      let dd: Data = {
        contentTitle: i["contentTitle"],
        timeframe: i["timeframe"],
        subtitle: i["subtitle"],
        contents: i["contents"],
        links: i["links"]
      };
      dList.push(dd);
    }
    const rd: ResumeData = {key: key, data: dList};
    data2parse.push(rd);
  }
  return data2parse;
}

function createHR() {
  const hrCSS: string = "margin: 0.2rem auto";
  const hr: HTMLHRElement = document.createElement("hr");
  hr.style.cssText = hrCSS;
  return hr;
}

/*
  pass link as contents when the contents is a link
 */
function createListItem(contents: string, isLink: boolean = false): HTMLLIElement {
  const liCSS: string = "margin: 0.1rem auto; text-align: justify";
  const li: HTMLLIElement = document.createElement("li");
  if (!isLink) {
    li.innerText = contents;
  } else {
    li.appendChild(createAnchorItem(contents));
  }
  li.style.cssText = liCSS;
  return li;
}

function createAnchorItem(link: string): HTMLAnchorElement {
  const aCSS: string = "color: #ffffff; margin: 0.1rem auto";
  const anchor: HTMLAnchorElement = document.createElement("a");
  anchor.href = link;
  anchor.innerText = link;
  anchor.target = "_blank";
  anchor.style.cssText = aCSS;

  return anchor
}

export function data2HTML(rd: ResumeData) {
  const blockRootDiv: HTMLDivElement = generateBlockRootDiv(rd.key)

  const parentDiv = document.getElementById(INFO_BLOCK_IDENTIFIER)!;
  parentDiv!.appendChild(blockRootDiv);

  for (let i: number = 0; i < rd.data!.length; i++) {
    const subBlock: HTMLDivElement = generateSubBlockDiv(rd.data![i]);
    parentDiv!.appendChild(subBlock);
    if (i !== rd.data!.length - 1) {
      parentDiv!.appendChild(document.createElement("br"));
    }
  }
}

function generateBlockRootDiv(key: string): HTMLDivElement {
  const blockRoot: HTMLDivElement = createBlockRootDiv(key); // <block-name>-block
  blockRoot.appendChild(createTitleDiv(key))
  return blockRoot;
}

// sub-block to hold data from ResumeData
// each block may contain several sub-blocks
function generateSubBlockDiv(data: Data): HTMLDivElement {
  const div = document.createElement("div");

  if (data.contentTitle !== undefined) {
    div.appendChild(createContentTitle(data.contentTitle, data.timeframe));
  }
  if (data.subtitle !== undefined) {
    div.appendChild(createSubtitleDiv(data.subtitle));
  }
  if (data.contents !== undefined) {
    div.appendChild((createContentDiv(data.contents, data.links)));
  }

  return div;
}

/*
  Information part contains 5 parts: title, contentTitle, subtitle, timeframe, contents

  -----------------------------
  | title                     |
  -----------------------------
  | contentTitle    timeframe | // job title, uni, cert name, etc.
  | subtitle                  | // workplace, degree, issued from, etc.
  | contents                   | // details
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

// block root, create div with <block name>-block, e.g. summary-block, experience-block, etc.
// only run once for each block
function createBlockRootDiv(id: string): HTMLDivElement {
  const div: HTMLDivElement = document.createElement("div");
  div.id = id + "-block";
  return div;
}

function createTitleDiv(title: string): HTMLDivElement {
  const blockTitleCSS: string =
    "text-align: left; font-size: 2rem; font-weight: bold; margin: 0.5rem auto";
  const div: HTMLDivElement = document.createElement("div");
  div.innerText = title[0].toUpperCase() + title.slice(1);
  div.appendChild(createHR());

  div.style.cssText = blockTitleCSS;
  return div;
}


// sub block items
// may run several times depends on different number of data
function createContentTitle(contentTitle: string, timeframe?: string): HTMLDivElement {
  const contentTitleCSS: string = "font-size: 1.2rem; font-weight: bold; margin: 0.2rem";
  const flexDisplayCSS: string =
    "display: flex; justify-content: space-between; align-items: center";

  const div: HTMLDivElement = document.createElement("div");
  const ctDiv: HTMLDivElement = document.createElement("div"); // contentTitle div
  ctDiv.innerText = contentTitle;
  ctDiv.style.cssText = contentTitleCSS;
  div.appendChild(ctDiv);

  if (timeframe !== undefined) {
    const timeframeDiv: HTMLDivElement = document.createElement("div");
    timeframeDiv.innerText = timeframe;
    div.appendChild(timeframeDiv);
  }

  div.style.cssText = flexDisplayCSS;
  return div;
}

function createSubtitleDiv(subtitle: string): HTMLDivElement {
  const subtitleCSS: string = "color: #a0a0a0; margin: 0.2rem; text-align: left";
  const div: HTMLDivElement = document.createElement("div");
  div.innerText = subtitle;

  div.style.cssText = subtitleCSS;
  return div;
}

function createContentDiv(contents: string[], links?: string[]): HTMLDivElement {
  const ulCSS: string = "margin: 0.2rem auto; list-style-type: none";
  const divCSS: string = "text-align: left";

  const div: HTMLDivElement = document.createElement("div");
  const ul: HTMLUListElement = document.createElement("ul");

  for (let c of contents) {
    ul.appendChild(createListItem(c));
  }

  if (links !== undefined) {
    for (let link of links) {
      ul.appendChild(createListItem(link, true));
    }
  }

  div.style.cssText = divCSS;
  ul.style.cssText = ulCSS;
  div.appendChild(ul);
  return div;
}
