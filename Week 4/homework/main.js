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

const { arrayRand, arraySlice, total, average, minArray, maxArray, comparison } = require("./function/functions.js");

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

// Print Array
console.log("Array:", bilanganAcak, "\n \nArray Genap:", hasilPemecahan.genap, "\n \nArray Ganjil:", hasilPemecahan.ganjil);

//Hasil untuk seluruh array
console.log("\n \nArray \nTotal Nilai Array:", totalBil, "\nAverage:", avg, "\nMin:", min, "\nMax:", max, "\n \n");

// Hasil untuk seluruh array genap
console.log("Array Genap \nTotal Nilai Array Genap:", totalBilGenap, "\nAverage:", avgGenap, "\nMin:", minGenap, "\nMax:", maxGenap, "\n \n");

// Hasil untuk seluruh array ganjil
console.log("Array Ganjil \nTotal Nilai Array Ganjil:", totalBilGanjil, "\nAverage:", avgGanjil, "\nMin:", minGanjil, "\nMax:", maxGanjil, "\n \n");

// komparasi total, rata-rata, minimal, maksimal
comparison("Total", totalBilGenap, totalBilGanjil);
comparison("Rata-rata", avgGenap, avgGanjil);
comparison("Nilai minimal", minGenap, minGanjil);
comparison("Nilai maksimal", maxGenap, maxGanjil);
