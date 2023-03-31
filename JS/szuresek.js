export function szures(lista, kulcs, szuresiFeltetel) {
  const SZURTLISTA = lista.filter(function (a) {
    return a[kulcs].includes(szuresiFeltetel);
  });
  return SZURTLISTA;
}
const NEVINPUTELEM = $("knev");
const KORINPUTELEM = $("kkor");
const FAJTAINPUTELEM = $("kfajta");
NEVINPUTELEM.on("keyup", function () {
  let nevErtek = NEVINPUTELEM.val();
  let szurtList = szures(ADATLISTA, "nev", nevErtek);
  console.log(szurtList);
});
KORINPUTELEM.on("keyup", function () {
  let korErtek = KORINPUTELEM.val();
  let szurtList = szures(ADATLISTA, "kor", korErtek);
  console.log(szurtList);
});
FAJTAINPUTELEM.on("keyup", function () {
  let fajtaErtek = FAJTAINPUTELEM.val();
  let szurtList = szures(ADATLISTA, "fajta", fajtaErtek);
  console.log(szurtList);
});
