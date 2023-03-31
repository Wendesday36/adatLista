import { ADATLISTA } from "./adat.js";

function szures(lista, kulcs, szuresiFeltetel) {
    const SZURTLISTA = lista.flter(function (a) {
      return a[kulcs].includes(szuresiFeltetel);
    });
    return SZURTLISTA;
  }
  const NEVINPUTELEM = $("nev");
  const FAJTAINPUTELEM = $("fajta");
  NEVINPUTELEM.on("keyup", function () {
    let nevErtek = NEVINPUTELEM.val();
    let szurtList = szures(ADATLISTA, "nev", nevErtek);
    console.log(szurtList);
  });
