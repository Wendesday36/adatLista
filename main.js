import { ADATLISTA } from "./adat.js";
$(function () {
  const articleElem = $("article");
  articleElem.append(osszeAllit(ADATLISTA));

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
