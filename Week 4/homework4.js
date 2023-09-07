/**
 * TODO :
 * Buatlah 100 nilai random (1 sampai 50) pada 1 array
- Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan
nilai baru pada array
- Gunakan 2 array yang telah dibuat untuk mendapatkan
- Min
- Max
- Total
- Rata rata
- Bandingkan kedua buah array, contoh
- Min lebih besar array genap
- Max lebih besar array ganjil
- Total memiliki nilai sama antara array genap dan ganjil
- Rata rata lebih besar array ganjil
 */

// fungsi untuk membuat array random dengan jumlah sesuai yang diinginkan
function arrayRand(num) {
  let arrayBilangan = [];

  for (let x = 1; x <= num; x++) {
    arrayBilangan.push(Math.round(Math.random() * 50 + 1));
  }
  return arrayBilangan;
}

// fungsi untuk memecah array menjadi 2 berdasarkan index
function arraySlice(arrayBilangan) {
  let arrayGenap = [];
  let arrayGanjil = [];

  for (let i = 0; i < arrayBilangan.length; i++)
    if (i % 2 === 0) {
      arrayGenap.push(arrayBilangan[i]);
    } else {
      arrayGanjil.push(arrayBilangan[i]);
    }
  return { genap: arrayGenap, ganjil: arrayGanjil };
}

// fungsi untuk menghitung total dari array
function total(x) {
  let total = 0;
  for (val of x) {
    total += val;
  }
  return total;
}

// fungsi untuk menghitung rata-rata dari array
function average(arr) {
  let avg = 0;
  for (val of arr) {
    avg += val;
  }
  return avg / arr.length;
}

// fungsi untuk menghitung nilai minimal dari array
function minArray(arr) {
  let min = arr[0];

  for (val of arr) {
    if (val < min) {
      min = val;
    }
  }
  return min;
}

// fungsi untuk menghitung nilai maksimal dari array
function maxArray(arr) {
  let max = arr[0];

  for (val of arr) {
    if (val > max) {
      max = val;
    }
  }
  return max;
}

let bilanganAcak = arrayRand(100);
let hasilPemecahan = arraySlice(bilanganAcak);
let totalBil = total(bilanganAcak);
let totalBilGenap = total(hasilPemecahan.genap);
let totalBilGanjil = total(hasilPemecahan.ganjil);
let avg = average(bilanganAcak);
let avgGenap = average(hasilPemecahan.genap);
let avgGanjil = average(hasilPemecahan.ganjil);
let min = minArray(bilanganAcak);
let minGenap = minArray(hasilPemecahan.genap);
let minGanjil = minArray(hasilPemecahan.ganjil);
let max = maxArray(bilanganAcak);
let maxGenap = maxArray(hasilPemecahan.genap);
let maxGanjil = maxArray(hasilPemecahan.ganjil);

console.log("Array:", bilanganAcak);
console.log("Array Genap:", hasilPemecahan.genap);
console.log("Array Ganjil:", hasilPemecahan.ganjil);
console.log("Total Nilai Array:", totalBil);
console.log("Total Nilai Array Genap:", totalBilGenap);
console.log("Total Nilai Array Ganjil:", totalBilGanjil);
console.log("Average:", avg);
console.log("Average Genap:", avgGenap);
console.log("Average Ganjil:", avgGanjil);
console.log("Min:", min);
console.log("Min Genap:", minGenap);
console.log("Min Ganjil:", minGanjil);
console.log("Max:", max);
console.log("Max Genap:", maxGenap);
console.log("Max Ganjil:", maxGanjil);
