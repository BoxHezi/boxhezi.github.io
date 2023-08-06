export const blockTitleCSS: string =
  "text-align: left; font-size: 2rem; font-weight: bold; margin: 0.2rem auto";
export const ulCSS: string =
  "margin: 0.2rem auto; list-style-type: none";
export const divCSS: string =
  "text-align: left; margin: 1rem auto";

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
