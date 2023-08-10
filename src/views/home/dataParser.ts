import {
  initResumeData, ResumeData, data2HTML
} from "./dataHandler";

export function start() {
  let rd: ResumeData[] = initResumeData();
  for (let data of rd) {
    data2HTML(data);
  }
}
