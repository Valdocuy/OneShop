 // Fungsi untuk menampilkan form pemesanan
 function showOrderForm(itemName) {
    document.getElementById('itemName').value = itemName;
    $('#orderFormModal').modal('show');
}

// Fungsi untuk menampilkan detail barang
function showDetail(itemName) {
    var detailContent = document.getElementById('detailContent');
    var detailText = '';

    // Mengisi detailText berdasarkan itemName
    switch(itemName) {
        case 'Amplop Kartun':
            detailText = 'Bahan Kertas: Tebal<br>' +
                         'Ukuran: L 6cm x T 11cm<br>' +
                         'Gambar Kartun Bisa Request<br>'+
                         'Cod Tampa Ongkir <br>'+
                        'Pesanan Sesuai Proses & Antrian';
        break;
        case 'Amplop Kemeja':
            detailText = 'Bahan Kertas: Tipis<br>' +
                         'Ukuran: L 5cm x T 9cm<br>' +
                        'Bentuk Sesuai Gambar';
        break;
        case 'Amplop Original':
            detailText = 'Bahan Kertas: Tipis<br>' +
                        'Ukuran: L 7cm x T 10cm<br>' +
                         'Gambar Random';
                       
        break;
        case 'Paket Hemat':
            detailText =  'Per set isi 10pcs <br>' +
                            'Bisa Request Gambar untuk Yang Kartun <br>' +
                            'cod Tampa Ongkir <br>'+
                            'Pesanan Sesua Proses & Antrian';
            break;
        default:
            detailText = 'Detail tidak tersedia.';
    }

    // Menampilkan detail pada modal
    detailContent.innerHTML = detailText;
    $('#detailModal').modal('show');
}

// Fungsi untuk mengirim pesanan melalui WhatsApp
function sendOrder() {
    var itemName = document.getElementById('itemName').value;
    var quantity = document.getElementById('quantity').value;
    var buyerName = document.getElementById('buyerName').value;
    var address = document.getElementById('address').value;
    var payment = document.getElementById('payment').value;

    var message = "Saya ingin memesan " + quantity + " " + itemName + ".\n" +
                  "Nama Pembeli: " + buyerName + "\n" +
                  "Alamat: " + address + "\n" +
                  "Metode Pembayaran: " + payment;

    var whatsappUrl = "https://api.whatsapp.com/send?phone=6289601991505&text=" + encodeURIComponent(message);
    window.open(whatsappUrl);
    $('#orderFormModal').modal('hide');
}