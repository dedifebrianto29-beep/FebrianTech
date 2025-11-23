// Menunggu dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // Logic untuk Form WhatsApp
    const form = document.getElementById('waForm');

    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah halaman refresh

            // 1. Ambil data dari form
            const nama = document.getElementById('nama').value;
            const layanan = document.getElementById('layananInput').value;
            const pesanTambahan = document.getElementById('pesanInput').value;

            // 2. Nomor WhatsApp Tujuan (GANTI DENGAN NOMOR ANDA)
            // Format: KodeNegara+Nomor (tanpa 0 di depan). Contoh: 628123456789
            const nomorWA = "6283111960360"; 

            // 3. Format Pesan (Menggunakan %0A untuk baris baru)
            const text = `Halo Febrian-Tech,%0A%0ASaya ingin memesan layanan:%0A` +
                         `👤 *Nama:* ${nama}%0A` +
                         `🛠 *Layanan:* ${layanan}%0A` +
                         `📝 *Pesan:* ${pesanTambahan}%0A%0A` +
                         `Mohon info lebih lanjut. Terima kasih!`;

            // 4. Buka Link WhatsApp
            const url = `https://wa.me/${nomorWA}?text=${text}`;
            window.open(url, '_blank');
        });
    }

    // Logic Tambahan: Toggle Menu Mobile (Opsional jika ingin menu bar berfungsi)
    // Anda bisa menambahkan logika klik tombol menu hamburger di sini nanti.
});