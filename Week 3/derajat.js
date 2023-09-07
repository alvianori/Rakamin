/*

Homework Week 3 Javascript Fundamental

Nama     : Alviano Ricky Setyawan
Kelas    : 5A
Kelompok : 1
*/

/*
Soal 1
Diketahui air memiliki kondisi tertentu kapan cair, uap maupun beku, berikut
rentangnya
- Beku suhu minus -100 sampai 0
- Cair suhu 1 sampai 100
- Uap suhu 101 sampai 500
- Suhu selain rentang tersebut tidak terdefinisi 
*/

// Tentukan variabel apa saja yang dibutuhkan
// let suhu

// Implementasi case tersebut pada javascript

// 1. menggunakan ternary operator
function suhuTernary(derajat) {
  let suhu = derajat >= -100 && derajat <= 0 ? "Beku" : derajat >= 1 && derajat <= 100 ? "Cair" : derajat >= 101 && derajat <= 500 ? "Uap" : "Tidak Terdefinisi";
  console.log(suhu);
}

suhuTernary(-50);
suhuTernary(5);
suhuTernary(101);
suhuTernary(1000);

// 2. menggunakan if else
function suhuIfElse(derajat) {
  if (derajat >= -100 && derajat <= 0) {
    console.log("Beku");
  } else if (derajat >= 1 && derajat <= 100) {
    console.log("Cair");
  } else if (derajat >= 101 && derajat <= 500) {
    console.log("Uap");
  } else {
    console.log("Suhu tidak terdefinisi");
  }
}
suhuIfElse(-50);
suhuIfElse(5);
suhuIfElse(101);
suhuIfElse(1000);

/* 
Soal 2
Diketahui SPBU memiliki logika sebagai berikut
- Jika plat kuning atau motor maka BBM subsidi
- Jika mobil CC kurang dari 1500 maka PERTAMAX
- Jika mobil CC diatas atau sama dengan 1500 maka pertamax turbo
*/

// Tentukan variabel apa saja yang dibutuhkan

// Implementasi case tersebut pada javascript

// 1. menggunakan ternary operator
function spbuTernary(plat = "Hitam", jenisKendaraan = "Mobil", ccMobil = 500) {
  let jenisBBM = jenisKendaraan === "motor" || plat === "kuning" ? "BBM Subsidi" : ccMobil < 1500 ? "PERTAMAX" : "PERTAMAX Turbo";
  console.log(jenisBBM);
}

spbuTernary("putih");
spbuTernary("kuning", "motor");
spbuTernary("putih", "mobil", 1600);

// 2. menggunakan if else
function spbuIfElse(plat = "Hitam", jenisKendaraan = "Mobil", ccMobil = 500) {
  let jenisBBM;
  if (jenisKendaraan === "motor" || plat === "kuning") {
    jenisBBM = "BBM Subsidi";
  } else if (ccMobil < 1500) {
    jenisBBM = "PERTAMAX";
  } else {
    jenisBBM = "PERTAMAX Turbo";
  }
  console.log(jenisBBM);
}

spbuIfElse("putih");
spbuIfElse("kuning", "motor");
spbuIfElse("putih", "mobil", 1600);
