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

  for (let index = 0; index < lista.length; index++) {
    txt += `<div class="container row mt-3">`;
    txt += `<div class="card border col-sm-3" > `;
    txt += `<div class="card-body">`;
    txt += `<h4 class="card-title">${lista[index].nev}</h4>`;
    txt += `<p class="card-text">${lista[index].kor}</p>`;
    txt += `<p class="card-text">${lista[index].fajta}</p>`;
    /* for (let index = 0; index < lista.length; index++) {
      
      
    } */
    txt += `</div>
      </div>`;
  }

  
  return txt;
}

/*  <h2>Card Image</h2>
          <p>Image at the top (card-img-top):</p>
          <div class="card" style="width:400px">
            <img class="card-img-top" src="../bootstrap4/img_avatar1.png" alt="Card image" style="width:100%">
            
              John Doe
              Some example text some example text. John Doe is an architect and engineer
             
          <br></br> */
