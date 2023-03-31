import { ADATLISTA } from "./adat.js";
import { rendezes } from "./rendezesek.js";
 import { szures } from "./szuresek.js"; 
let rendezesiSzempontKulcs = "nev";
let rendezesiIrany = true;
$(function () {
  init();
 
});
function init() {
  const articleElem = $("article");
  articleElem.html(osszeAllit(ADATLISTA));
  const FEJLEC = $("th");
  FEJLEC.on("click", function () {
    console.log(event.target.id);
    rendezesiSzempontKulcs = event.target.id;
    rendezes(ADATLISTA, rendezesiSzempontKulcs);
    init();
  });
  
}
function osszeAllit(lista) {
  let txt = "";

  txt += `<table class="table table-stripped ">`;
  txt += `<tr class="table-dark"><th id ="nev">név</th>
    <th id ="kor">kor</th>
    <th id ="fajta">fajta</th></tr>`;
  for (let index = 0; index < lista.length; index++) {
    txt += `<tr>`;
    for (const key in lista[index]) {
      txt += `<td>${lista[index][key]}</td>`;
    }
    `</tr>`;
  }
  txt += `</table>`;

  return txt;
}
