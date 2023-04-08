export function rendezes(lista, kulcs, rendezesiIrany) {
  lista.sort(function (a, b) {
    let ertek = 1;
    if (a[kulcs] < b[kulcs]) {
      ertek = -1;
    }
    ertek *= rendezesiIrany;
    return ertek;
  });
}
