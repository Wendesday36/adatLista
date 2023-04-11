import { ADATLISTA } from "./adat.js";
$(function () {
  init();
});

function init() {
  const articleElem = $("article");
  articleElem.html(osszeAllit(ADATLISTA));
  /* let mostaniIndex = 0;
  for (let index = 0; index < ADATLISTA.length; index++) {
    osszeAllit[ADATLISTA[index]].on("click", function () {
      MegTekint(index, KEPEKLISTA);
      mostaniIndex = index;
    });
  } */
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
function MegTekint(index, ADATLISTA) {
  console.log(event.target); /**ez az elem valtotta ki az esemenyt */
  const MEGNYIT = document.querySelectorAll("article div");
  console.log(MEGNYIT);
  MEGNYIT[0] = ADATLISTA[index];
}
/* let mostaniIndex = 0;
  const balgomb = document.querySelector(".bal");
  balgomb.addEventListener("click",function () {
    mostaniIndex--;
    if (mostaniIndex < 0) {
      mostaniIndex = ADATLISTA.length-1;
    }
    MegTekint(mostaniIndex, osszeAllit);
  });
  const jobbgomb= document.querySelector(".jobb");
  jobbgomb.addEventListener("click",function () {
    mostaniIndex++;
    if (mostaniIndex>= ADATLISTA.length) {
      mostaniIndex = 0;
    }
    MegTekint(mostaniIndex, osszeAllit);
  }); */

/* 
  for (let index = 0; index < KEPEKLISTA.length; index++) {
    articleElem[0].innerHTML += `<div><img src="${KEPEKLISTA[index]}" alt ="#"></div>`;
  }
  console.log(articleElem);
  /**articleElem.click;*/
/*  const KISKEPEK = document.querySelectorAll("article div img");
  for (let index = 0; index < KISKEPEK.length; index++) {
    KISKEPEK[index].addEventListener("click", function () {
      kepMegnyit(index, KEPEKLISTA);
      mostaniIndex = index;
    });
  } */
