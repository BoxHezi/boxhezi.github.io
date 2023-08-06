export const blockTitleCSS: string =
  "text-align: left; font-size: 2rem; font-weight: bold; margin: 0.5rem auto";
export const ulCSS: string = "margin: 0.2rem auto; list-style-type: none";
export const divCSS: string = "text-align: left";
export const flexCSS: string =
  "display: flex; justify-content: space-between; align-items: center";
export const contentTitleCSS: string = "font-size: 1.2rem; font-weight: bold; margin: 0.2rem";
export const subtitleCSS: string = "color: #a0a0a0; margin: 0.2rem; text-align: left";

export const hrCSS: string = "margin: 0.2rem auto";

export function createHr() {
  const hr = document.createElement("hr");
  hr.style.cssText = hrCSS;
  return hr;
}

export function createListItem(content: string) {
  const li = document.createElement("li");
  li.innerText = content;
  return li;
}

export const INFO_BLOCK_IDENTIFIER = "home-info-block";
