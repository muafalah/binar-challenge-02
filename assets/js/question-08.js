const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
];

function getInfoPenjualan(dataPenjualan) {
    // Mencari Total Keuntungan
    let totalKeuntungan = 0;
    for (let i=0; i<dataPenjualan.length; i++) {
      totalKeuntungan += (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) * dataPenjualan[i].totalTerjual
    }

    // Mencari Total Modal
    let totalModal = 0;
    for (let i=0; i<dataPenjualan.length; i++) {
      totalModal += dataPenjualan[i].hargaBeli * (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok)
    }

    // Mencari Presentase Keuntungan
    let presentaseKeuntungan = 0;
    presentaseKeuntungan = (totalKeuntungan / totalModal) * 100

    // Mencari Produk Buku Terlaris & Penulsi Terlaris
    let buku = [];
    for (let i=0; i<dataPenjualan.length; i++) {
      buku[i] = dataPenjualan[i].totalTerjual
    }

    let maxBuku = Math.max.apply(Math, buku)
    for (let i=0; i<dataPenjualan.length; i++) {
      if (maxBuku === dataPenjualan[i].totalTerjual) {
        maxBuku = i
      }
    }
    let produkBukuTerlaris = dataPenjualan[maxBuku].namaProduk
    let penulisTerlaris = dataPenjualan[maxBuku].penulis

    // Mengubah Total Keuntungan Menjadi Rupiah
    var	number_string = totalKeuntungan.toString(),
	  sisa 	= number_string.length % 3,
	  rupiah 	= number_string.substr(0, sisa),
	  ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
		
    if (ribuan) {
      separator = sisa ? '.' : '';
      totalKeuntungan = "Rp. " + rupiah + separator + ribuan.join('.');
    }

    // Mengubah Total Modal Menjadi Rupiah
    var	number_string = totalModal.toString(),
	  sisa 	= number_string.length % 3,
	  rupiah 	= number_string.substr(0, sisa),
	  ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
		
    if (ribuan) {
      separator = sisa ? '.' : '';
      totalModal = "Rp. " + rupiah + separator + ribuan.join('.');
    }

    // Mengubah Presentase Keuntungan Menjadi Persen
    presentaseKeuntungan = presentaseKeuntungan.toFixed() + "%"

    return {
        totalKeuntungan: totalKeuntungan,
        totalModal: totalModal,
        presentaseKeuntungan: presentaseKeuntungan,
        produkBukuTerlaris: produkBukuTerlaris,
        penulisTerlaris: penulisTerlaris
    }
}

console.log(getInfoPenjualan(dataPenjualanNovel))