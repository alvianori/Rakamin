// class Person {
//   constructor(nama, umur, uangSaku) {
//     this.nama = nama;
//     this.umur = umur;
//     this.uangSaku = uangSaku;
//   }
// }

function validationForm() {
  let namaInput = document.getElementById("inputName").value;
  let umurInput = document.getElementById("inputAge").value;
  let uangSakuInput = document.getElementById("inputUangSaku").value;

  if (namaInput.length > 10 && umurInput > 25 && uangSakuInput >= 100000 && uangSakuInput <= 1000000) {
    // membuat row baru
    let newRow = document.createElement("tr");
    //membuat sel data untuk nama
    let cellNama = document.createElement("td");
    cellNama.textContent = namaInput;
    //membuat sel data untuk umur
    let cellUmur = document.createElement("td");
    cellUmur.textContent = umurInput;
    //membuat sel data untuk uang saku
    let cellUangsaku = document.createElement("td");
    cellUangsaku.textContent = uangSakuInput;

    //memasukkan sel data kedalam row
    newRow.appendChild(cellNama);
    newRow.appendChild(cellUmur);
    newRow.appendChild(cellUangsaku);

    //memasukkan row baru kedalam baris tabel
    document.querySelector("tbody").appendChild(newRow);

    //mengosongkan isian input
    document.getElementById("inputName").value = "";
    document.getElementById("inputAge").value = "";
    document.getElementById("inputUangSaku").value = "";
    average();
    return false;
  } else {
    alert("Data tidak masuk. Silahkan masukkan input dengan benar");
  }
}

function average() {
  // Mengakses elemen tabel berdasarkan ID
  var tabel = document.getElementById("tableData");
  var numRows = tabel.rows.length - 1; // Mengurangkan 1 untuk mengabaikan header

  var totalUmur = 0;
  var totalUangSaku = 0;

  // Meloop melalui baris data (mulai dari 1 untuk mengabaikan header)
  for (var i = 1; i <= numRows; i++) {
    var row = tabel.rows[i];
    var umur = parseInt(row.cells[1].textContent); // Mengambil umur dari kolom kedua
    var uangSaku = parseInt(row.cells[2].textContent); // Mengambil uang saku dari kolom ketiga

    totalUmur += umur;
    totalUangSaku += uangSaku;
  }

  // Menghitung rata-rata umur dan uang saku
  var rataRataUmur = totalUmur / numRows;
  var rataRataUangSaku = totalUangSaku / numRows;

  // Menampilkan hasil rata-rata pada elemen HTML
  document.querySelector("caption").textContent = `Rata-rata pendaftar memiliki uang saku sebesar ${rataRataUangSaku} dengan rata - rata umur ${rataRataUmur}`;
}

function result() {
  validationForm();
  average();
}
