function panggilSort() {
  let bilangan = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  console.log("Sebelumnya : " + bilangan);
  bilangan.sort(function (a, b) {
    return a - b;
  });
  console.log("Ascending : " + bilangan);
  bilangan.sort(function (a, b) {
    return b - a;
  });
  console.log("Descending : " + bilangan);

  let coba = bilangan.filter(function (bilangan) {
    return bilangan >= 10;
  });
  console.log("Filter > 10 :" + coba);
}
panggilSort();
