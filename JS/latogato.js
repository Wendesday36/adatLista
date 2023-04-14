import { ADATLISTA } from "./adat.js";
import { osszeAllitDivbe } from "./osszeAllit.js";
$(function () {
  init();
});

function init() {
  const articleElem = $("article");
  articleElem.html(osszeAllitDivbe(ADATLISTA));
  MegTekint();
}
const TARTALOM = $(".tartalom-card");
function AktualisElemMegj(NEZ){
 
  const elem = [];
    elem.push(ADATLISTA[NEZ]);
    console.log(elem);
    TARTALOM.html(osszeAllitDivbe(elem));
    console.log(NEZ);
}
function MegTekint() {
  const NEZGOMB = $(".nez");
  const MEGJ = $(".megjelenito")
  NEZGOMB.on("click", function (event) {
    const NEZ = $(event.target).attr("id");
    mostaniIndex = NEZ
    AktualisElemMegj(NEZ)
    MEGJ.append('<div class="bezar"><input type="button" value="X"></div>')
    MEGJ.append('<div class="bal_leptetogomb"><input type="button" value="⇠"></div>')
    
    MEGJ.append(' <div class="jobb_leptetogomb"> <input type="button" value="⇢"></div>')
  });
}
  let mostaniIndex = 0;

  const KISIKONOK = $("article div");
  for (let index = 0; index < KISIKONOK.length; index++) {
    KISIKONOK[index].addEventListener("click", function () {
      MegTekint(index, ADATLISTA);
      mostaniIndex = index;
    });
  }
  const balgomb = $(".bal_leptetogomb");
  balgomb.on("click", function () {
   
    mostaniIndex--;
    if (mostaniIndex < 0) {
      mostaniIndex = ADATLISTA.length - 1;
    }
    AktualisElemMegj(mostaniIndex)
  });
  const jobbgomb = $(".jobb_leptetogomb");
  jobbgomb.on("click", function () {
    mostaniIndex++;
    if (mostaniIndex >= KISIKONOK.length) {
      mostaniIndex = 0;
    }
    AktualisElemMegj(mostaniIndex)
  });
  const bezar= $(".bezar")
  bezar.on("click",function(){
    $(TARTALOM).hide()
  })
  
