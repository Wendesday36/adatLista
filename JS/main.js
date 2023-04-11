import { ADATLISTA } from "./adat.js";
import { osszeAllit } from "./osszeAllit.js";
import { rendezes } from "./rendezesek.js";
import { szures } from "./szuresek.js";
let rendezesiSzempontKulcs = "nev";
let rendezesiIrany = -1;
$(function () {
  init();

  const KULD = document.querySelector("#kuld");
  KULD.addEventListener("click",  function () {
    ADATLISTA.push(UJLISTAELEM)
    TABLAZAT = osszeAllit(ADATLISTA)
  });
 /*  const UJLISTAELEM = { nev: $("#neve"), kor: $("#kora"), fajta: $("#fajt") }; */
 
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
  AdatFelv()
}

function AdatFelv(){
  const UJ = {}
  const NevInputElem = document.querySelector("#neve");
  UJ.nev = NevInputElem.value;

  const KorInputElem = document.querySelector("#kora");
  UJ.kor = KorInputElem.value;

  const FajtaInputElem = document.querySelector("#fajt");
  UJ.fajta = FajtaInputElem.value;


  ADATLISTA.push(UJ)
  osszeAllit(ADATLISTA)


}
