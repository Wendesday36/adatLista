import { ADATLISTA } from "./adat.js";
import { osszeAllitDivbe } from "./osszeAllit.js";
$(function () {
  init();
});

function init() {
  const articleElem = $("article");
  articleElem.html(osszeAllitDivbe(ADATLISTA));
}

function MegTekint(index, ADATLISTA) {
  console.log(event.target); /**ez az elem valtotta ki az esemenyt */
  const MEGNYIT = document.querySelectorAll("article div");
  console.log(MEGNYIT);
  MEGNYIT[0] = ADATLISTA[index];
}
