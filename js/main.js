// Mendefinisikan kelas DataController untuk mengelola data dan perhitungan
class DataController {
  constructor() {
    // Inisialisasi data sebagai array kosong
    this.data = [];
  }

  // Metode async untuk menambahkan data baru ke dalam dataController
  async addData(nama, umur, uangSaku) {
    return new Promise((resolve, reject) => {
      // Memeriksa validitas data sebelum menambahkannya
      if (nama.length > 10 && umur >= 25 && uangSaku >= 100000 && uangSaku <= 1000000) {
        const newData = {
          nama: nama,
          umur: umur,
          uangSaku: uangSaku,
        };
        // Menambahkan data baru ke dalam dataController
        this.data.push(newData);
        resolve(newData);
      } else {
        // Jika data tidak valid, kirimkan pesan kesalahan
        reject("Data tidak valid");
      }
    });
  }

  // Metode untuk menghitung rata-rata umur dan uang saku dari data yang ada
  calculateAverage() {
    const numRows = this.data.length;
    let totalUmur = 0;
    let totalUangSaku = 0;

    // looping foreach untuk setiap elemen pada array this.data
    this.data.forEach((item) => {
      totalUmur += item.umur;
      totalUangSaku += item.uangSaku;
    });

    const rataRataUmur = (totalUmur / numRows).toFixed(2); // membatasi angka desimal menjadi dua digit.
    const rataRataUangSaku = (totalUangSaku / numRows).toFixed(2); // membatasi angka desimal menjadi dua digit.

    return {
      rataRataUmur: parseFloat(rataRataUmur), // Mengonversi kembali ke angka dari string
      rataRataUangSaku: parseFloat(rataRataUangSaku), // Mengonversi kembali ke angka dari string
    };
  }
}

// Membuat instance dari kelas DataController
const dataController = new DataController();

// Fungsi untuk memvalidasi formulir, menambahkan data, dan menghitung rata-rata
async function validationForm() {
  // Mendapatkan nilai dari input formulir
  const namaInput = document.getElementById("inputName").value;
  const umurInput = parseInt(document.getElementById("inputAge").value);
  const uangSakuInput = parseInt(document.getElementById("inputUangSaku").value);

  // Validasi tambahan
  if (!namaInput || !umurInput || !uangSakuInput) {
    const invalidDataToast = new bootstrap.Toast(document.getElementById("invalidDataToastAll"));
    invalidDataToast.show();
  } else if (namaInput.length < 10) {
    const invalidDataToast = new bootstrap.Toast(document.getElementById("invalidDataToastName"));
    invalidDataToast.show();
  } else if (umurInput < 25) {
    const invalidDataToast = new bootstrap.Toast(document.getElementById("invalidDataToastAge"));
    invalidDataToast.show();
  } else if (uangSakuInput < 100000 || uangSakuInput > 1000000) {
    const invalidDataToast = new bootstrap.Toast(document.getElementById("invalidDataToastUang"));
    invalidDataToast.show();
  }

  try {
    // Menambahkan data baru menggunakan method addData
    const newData = await dataController.addData(namaInput, umurInput, uangSakuInput);

    // Membuat elemen baru untuk menampilkan data di dalam tabel
    const newRow = document.createElement("tr");
    const cellNama = document.createElement("td");
    const cellUmur = document.createElement("td");
    const cellUangsaku = document.createElement("td");

    // Mengisi sel-sel dengan data baru
    cellNama.textContent = newData.nama;
    cellUmur.textContent = newData.umur;
    cellUangsaku.textContent = newData.uangSaku;

    // Menambahkan sel-sel ke dalam baris baru
    newRow.appendChild(cellNama);
    newRow.appendChild(cellUmur);
    newRow.appendChild(cellUangsaku);

    // Menambahkan baris baru ke dalam tabel
    document.querySelector("tbody").appendChild(newRow);

    // Mengosongkan isian input formulir
    document.getElementById("inputName").value = "";
    document.getElementById("inputAge").value = "";
    document.getElementById("inputUangSaku").value = "";

    // Menghitung rata-rata dari data yang ada dan menampilkannya
    const averageData = dataController.calculateAverage();
    document.querySelector("caption").textContent = `Rata-rata pendaftar memiliki uang saku sebesar ${averageData.rataRataUangSaku} dengan rata-rata umur ${averageData.rataRataUmur}`;
    // Menampilkan pesan toast "data masuk" jika data sesuai
    const dataSubmittedToast = new bootstrap.Toast(document.getElementById("dataSubmittedToast"));
    dataSubmittedToast.show();
  } catch (error) {
    // Menampilkan pesan toast "data tidak sesuai" jika terjadi kesalahan
    const invalidDataToast = new bootstrap.Toast(document.getElementById("invalidDataToast"));
    invalidDataToast.show();
  }
}
