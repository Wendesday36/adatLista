import { ADATLISTA } from "./adat.js";
$(function () {
  init();
  // jQuery methods go here...
});

function init() {
  const articleElem = $("article");
  articleElem.html(osszeAllit(ADATLISTA));
}
function osszeAllit(lista) {
  let txt = "";
  txt += `<div class="container row mt-4">`;
  for (let index = 0; index < lista.length; index++) {
    txt += `<div class="card border col-sm-3" > `;
    txt += `<div class="card-body">`;
    txt += `<h4 class="card-title">${lista[index].nev}</h4>`;
    txt += `<p class="card-text">${lista[index].kor}</p>`;
    txt += `<p class="card-text">${lista[index].fajta}</p>`;
    txt += `<input type="submit" id="nez" class=" btn btn-sucess	" value="Nézd meg">`;
    txt += `</div>
      </div>`;
  }
  txt += `</div>`;
  return txt;
}
