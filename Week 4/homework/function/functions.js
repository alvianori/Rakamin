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
    arrayBilangan.push(Math.floor(Math.random() * 50 + 1));
  }
  return arrayBilangan;
}

// fungsi untuk memecah array menjadi 2 berdasarkan index
function arraySlice(arr) {
  let arrayGenap = [];
  let arrayGanjil = [];

  for (let i = 0; i < arr.length; i++)
    if (i % 2 === 0) {
      arrayGenap.push(arr[i]);
    } else {
      arrayGanjil.push(arr[i]);
    }
  return { genap: arrayGenap, ganjil: arrayGanjil };
}

// fungsi untuk menghitung total dari array
function total(arr) {
  let total = 0;
  for (val of arr) {
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

function comparison(komparasi, genap, ganjil) {
  if (genap == ganjil) {
    console.log(komparasi + " memiliki nilai sama antara array genap dan ganjil");
  } else if (genap > ganjil) {
    console.log(komparasi + " lebih besar array genap");
  } else {
    console.log(komparasi + " lebih besar array ganjil");
  }
}

module.exports = {
  arrayRand,
  arraySlice,
  total,
  average,
  minArray,
  maxArray,
  comparison,
};
