import { getBands } from "./database.js";

const bands = getBands();

export const CurrentBands = () => {
  let html = "";
  html = "<ul>";

  for (const band of bands) {
    html += `<li>${band.name}</li>`;
  }

  html += "</ul>";
  return html;
};
