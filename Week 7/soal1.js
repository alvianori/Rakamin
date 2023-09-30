let calculate = require("./luasKeliling");

// Persegi
let sisi = 5;

// Persegi Panjang
let panjang = 8;
let lebar = 5;

// menghitung luas persegi
console.log("Luas persegi adalah : " + calculate.luasPersegi(sisi));

// menghitung keliling persegi
console.log("Keliling persegi adalah : " + calculate.kelilingPersegi(sisi));

// menghitung luas persegi panjang
console.log("Luas persegi panjang adalah : " + calculate.luasPersegiPanjang(panjang, lebar));

// menghitung keliling persegi panjang
console.log("Keliling persegi panjang adalah : " + calculate.kelilingPersegiPanjang(panjang, lebar));
