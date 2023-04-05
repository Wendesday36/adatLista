import { ADATLISTA } from "./adat.js";
import { rendezes } from "./rendezesek.js";
import { szures,szuresKorSzerint } from "./szuresek.js";
let rendezesiSzempontKulcs = "nev";
let rendezesiIrany = -1;
$(function () {
  init();

  const NEVINPUTELEM = $("#knev");
  const KORINPUTELEM = $("#kkor");
  const FAJTAINPUTELEM = $("#kfajta");
  NEVINPUTELEM.on("click", function () {
    let nevErtek = NEVINPUTELEM.val().toLowerCase();
    let szurtList = szures(ADATLISTA, "nev", nevErtek);
    console.log(szurtList);
  });
  KORINPUTELEM.on("click", function () {
    let korErtek = KORINPUTELEM.val();
    let szurtList = szures(ADATLISTA, "kor", korErtek);
    console.log(szurtList);
  });
  FAJTAINPUTELEM.on("click", function () {
    let fajtaErtek = FAJTAINPUTELEM.val().toLowerCases();
    let szurtList = szures(ADATLISTA, "fajta", fajtaErtek);
    console.log(szurtList);
  });
});
function init() {
  const articleElem = $("article");
  articleElem.html(osszeAllit(ADATLISTA));
  const FEJLEC = $("th");
  FEJLEC.on("click", function () {
    rendezesiSzempontKulcs = event.target.id;
    rendezes(ADATLISTA, rendezesiSzempontKulcs, rendezesiIrany);
    rendezesiIrany *= -1;
    init();
  });
  const TOROL = $(".torolgomb");
  TOROL.on("click", function () {
    let torolt = event.target.id;
    //kitroroljuk a listabol
    ADATLISTA.splice(torolt, 1);
    //ujraepitjuk az o9ldalbol
    init();
  });
}
function osszeAllit(lista) {
  let txt = "";

  txt += `<table class="table table-stripped ">`;
  txt += `<tr class="table-dark"><th id ="nev">név</th>
    <th id ="kor">kor</th>
    <th id ="fajta">fajta</th>
    <th>törlés</th></tr>`;
  for (let index = 0; index < lista.length; index++) {
    txt += `<tr>`;
    for (const key in lista[index]) {
      txt += `<td>${lista[index][key]} </td>`;
    }
    txt += `<td><button id="t${index}" class="torolgomb" type="button">𝑥</button> </td>`;
    `</tr>`;
  }
  txt += `</table>`;

  return txt;
}
