/**
 * Buatlah case dimana mengenerate bilangan random kemudian melakukan perulangan bilangan random hingga ketemu bilangan tersebut.
 * hasil output adalah bilangan random yang digenerate dan berapa jumlahh perulangan.
 */

// membuat  bilangan random dari 1 - 100
let bilRandom = Math.round(Math.random() * 100 + 1);

console.log("Bilangan yang ingin dicari : " + bilRandom);
let hasil;
//membuat perulangan untuk mencari bilangan random tersebut
for (let x = 1; x <= 100; x++) {
  hasil = x;
  if (x === bilRandom) {
    break;
  }
}
console.log("Jumlah perulangan : " + hasil);
