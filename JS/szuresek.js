export function szures(lista, kulcs, szuresiFeltetel) {
  const SZURTLISTAK = lista.filter(function (a) {
    return a[kulcs].includes(szuresiFeltetel);
  });
  return SZURTLISTAK;
}
