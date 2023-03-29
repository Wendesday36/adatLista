import { ADATLISTA } from "./adat.js";
$(function () {
  const articleElem = $("article");
  articleElem.append(osszeAllit(ADATLISTA));
  articleElem.append(rendezes)
  // jQuery methods go here...
});
console.log(osszeAllit(ADATLISTA));
function osszeAllit(lista) {
  let txt = "";

  txt += `<table class="table table-stripped ">`;
  txt += `<tr class="table-dark"><th>név</th>
    <th>kor</th>
    <th>fajta</th></tr>`;
  for (let index = 0; index < lista.length; index++) {
    txt += `<tr>`;
    for (const key in lista[index]) {
      txt += `<td>${lista[index][key]}</td>`;
    }
    `</tr>`;
  }
  txt += `</table>`;
  console.log(txt);
  return txt;
}
function rendezesNevSzerint(lista, kulcs) {
  lista.sort(function (a, b) {
    let ertek = 1;
    if (a[kulcs] < b[kulcs]) {
      ertek = -1;
    }
    return ertek;
  });
}

function rendezesKorSzerint(lista) {
  lista.sort(function (a, b) {
    return a.kor - b.kor;
  });
}

export function rendezes(lista, kulcs) {
  let rendezesiSzempontKulcs = "nev";
  let rendezesiIrany = true;
  const RENDEZESIIRANYOK = {
    nev :1,
    kor:1,
    fajta:1
  }
  if (typeof lista[0][kulcs] === "number") {
    rendezesKorSzerint(lista);
  } else {
    rendezesNevSzerint(lista, kulcs);
  }
}
