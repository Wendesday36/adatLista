import { ADATLISTA } from "./adat.js";
import { osszeAllitDivbe } from "./osszeAllit.js";
$(function () {
  init();
});

function init() {
  const articleElem = $("article");
  articleElem.html(osszeAllitDivbe(ADATLISTA));
  MegTekint()
}

function MegTekint() {
  const NEZGOMB = $(".nez")
  const TARTALOM = $(".tartalom-card")
  NEZGOMB.on("click",function(){
    const NEZ = $(event.target).attr("id")
    
    console.log(NEZ)
  })
 

  
}
