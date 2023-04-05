export function szures(lista, kulcs, szuresiFeltetel) {
  const SZURTLISTAK = lista.filter(function (a) {
    return a[kulcs].includes(szuresiFeltetel);
  });
  return SZURTLISTAK;
}
export function szuresKorSzerint(lista, kulcs, szuresiFeltetel) {
  let szurtLista = lista.filter(function (kulcs) {
    console.log(kulcs + szuresiFeltetel);
    return eval(kulcs + szuresiFeltetel);
  });
  console.log(szurtLista);
  return szurtLista;
}
