import { ADATLISTA } from "./adat.js";
import { rendezes } from "./rendezesek.js";
import { szures } from "./szuresek.js";
import { felvitel } from "./adatfelvitel.js";
let rendezesiSzempontKulcs = "nev";
let rendezesiIrany = -1;
$(function () {
  init();

  rendezes(ADATLISTA, "nev");
  rendezes(ADATLISTA, "kor");
  rendezes(ADATLISTA, "fajta");

  const TABLAZAT = $("#admin");
  const NEVINPUTELEM = $("#knev");
  const KORINPUTELEM = $("#kkor");
  const FAJTAINPUTELEM = $("#kfajta");

  let tartalom = osszeAllit(ADATLISTA);
  TABLAZAT.append(tartalom);

  NEVINPUTELEM.on("input", function () {
    let nevErtek = NEVINPUTELEM.val().toLowerCase();
    let szurtlista = szures(ADATLISTA, "nev", nevErtek);
    console.log(szurtlista);
    let tartalom = osszeAllit(szurtlista);
    $("table").replaceWith(tartalom);
  });

  KORINPUTELEM.on("input", function () {
    let korErtek = KORINPUTELEM.val();
    let szurtlista = szures(ADATLISTA, "kor", korErtek);
    console.log(szurtlista);
    let tartalom = osszeAllit(szurtlista);
    $("table").replaceWith(tartalom);
  });

  FAJTAINPUTELEM.on("input", function () {
    let fajtaErtek = FAJTAINPUTELEM.val().toLowerCase();
    let szurtlista = szures(ADATLISTA, "fajta", fajtaErtek);
    console.log(szurtlista);
    let tartalom = osszeAllit(szurtlista);
    $("table").replaceWith(tartalom);
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
  articleElem.html(felvitel(ADATLISTA));
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
    txt += `<td><button id="t${index}" class="torolgomb" type="button">ჯ</button> </td>`;
    `</tr>`;
  }
  txt += `</table>`;

  return txt;
}
