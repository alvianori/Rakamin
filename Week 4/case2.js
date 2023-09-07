/**
 * TODO :
 * Gunakan nilai random untuk mendapatkan bilangan array
 * tentukan total, rata - rata, min, max
 * jangan gunakan function bawaan dari javascript
 */

let arrayBilangan = [];
let total = 0;
let rataRata;
let min;
let max;

// memasukkan nilai random kedalam array menggunakan perulangan
for (let x = 1; x <= 10; x++) {
  arrayBilangan.push(Math.round(Math.random() * 100 + 1));
}
console.log("Isi dari array \n" + arrayBilangan);

//menjumlahkan satu per satu value dari array kedalam total menggunakan for of
for (val of arrayBilangan) {
  total += val;
}
console.log("Nilai total : " + total);

// menghitung rata-rata dengan cara total dibagi panjang array
rataRata = total / arrayBilangan.length;
console.log("Nilai rata-rata : " + rataRata);

// inisialisasi nilai minimum pada array pertama
min = arrayBilangan[0];

for (val of arrayBilangan) {
  if (val < min) {
    min = val;
  }
}
console.log("Nilai Minimum : " + min);

// inisialisasi nilai maxsimum pada array terakhir
max = arrayBilangan[arrayBilangan.length - 1];

for (val of arrayBilangan) {
  if (val > max) {
    max = val;
  }
}
console.log("Nilai Maksimum : " + max);
