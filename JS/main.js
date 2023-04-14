import { ADATLISTA } from "./adat.js";
import { osszeAllit } from "./osszeAllit.js";
import { rendezes } from "./rendezesek.js";
import { szures,szuresKorra } from "./szuresek.js";
let rendezesiSzempontKulcs = "nev";
let rendezesiIrany = -1;
$(function () {
  init();
  AdatFelv();
 
  const TABLAZAT = $("#admin");
  const NEVINPUTELEM = $("#knev");
  const KORINPUTELEM = $("#kkor");
  const FAJTAINPUTELEM = $("#kfajta");

  let tartalom = osszeAllit(ADATLISTA);
  TABLAZAT.append(tartalom);

  NEVINPUTELEM.on("input", function () {
    let nevErtek = NEVINPUTELEM.val();
    let szurtlista = szures(ADATLISTA, "nev", nevErtek);
    console.log(szurtlista);
    let tartalom = osszeAllit(szurtlista);
    $("table").replaceWith(tartalom);
  });

  KORINPUTELEM.on("change", function () {
    let korErtek = KORINPUTELEM.val();
    let szurtlista = szuresKorra(ADATLISTA, "kor", korErtek);
    console.log(szurtlista);
    let tartalom = osszeAllit(szurtlista);
    $("table").replaceWith(tartalom);
  });

  FAJTAINPUTELEM.on("input", function () {
    let fajtaErtek = FAJTAINPUTELEM.val();
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
}

function AdatFelv() {
 
  const NEV = $("#neve");
  const KOR = $("#kora");
  const FAJTA = $("#fajt");
  const KULD = $("#kuld");
  KULD.on("click", function (event) {
    event.preventDefault()
    const UJ = {
      nev: NEV.val(),
      kor: KOR.val(),
      fajta: FAJTA.val(),
    };
    ADATLISTA.push(UJ);
    init()
  });

  /*  const UJLISTAELEM = { nev: $("#neve"), kor: $("#kora"), fajta: $("#fajt") }; */
}
