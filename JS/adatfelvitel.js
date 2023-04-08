export function felvitel() {
  const NEV = $("#neve");
  const FAJTA = $("#fajt");
  const KOR = $("#kora");
  const GOMB = $("#kuld");

 /*  GOMB.on("click", function () {
    NEV.push(lista.nev)
    FAJTA.push(lista.fajta);
    KOR.push(lista.kor);
  }); */
  $(document).ready(function(){
    $("#kuld").click(function(){
      $("#neve").push(lista.név);
      $("#fajt").push(lista.fajta);
      $("#kora").push(lista.kor);
    });
})
}
