document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-transaksi');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const data = {
                nama: form.nama.value,
                produk: form.produk.value,
                jumlah: form.jumlah.value,
                alamat: form.alamat.value,
                metode: form.metode_pembayaran.value
            };
            localStorage.setItem('transaksi', JSON.stringify(data));
            Swal.fire({
                icon: 'success',
                title: 'Pesanan Berhasil!',
                text: 'Data pesanan Anda telah tersimpan.',
                confirmButtonText: 'Lihat Invoice'
            }).then(() => {
                window.location.href = 'invoice.html';
            });
        });
    }

    // Tampilkan data invoice
    const invoiceBox = document.getElementById('invoice-box');
    if (invoiceBox) {
        const data = JSON.parse(localStorage.getItem('transaksi'));
        if (data) {
            invoiceBox.innerHTML = `
                <div class="invoice-frame fade-in">
                    <h2>Struk Pemesanan</h2>
                    <div class="invoice-detail">
                        <p><span>Nama:</span> ${data.nama}</p>
                        <p><span>Produk:</span> ${data.produk}</p>
                        <p><span>Jumlah:</span> ${data.jumlah}</p>
                        <p><span>Alamat:</span> ${data.alamat}</p>
                        <p><span>Metode Pembayaran:</span> ${data.metode}</p>
                    </div>
                    <hr>
                    <div class="invoice-info">
                        <p style="color:#8D6E63;"><b>Terima kasih telah berbelanja di Davy Fragrance Store!</b></p>
                        <p style="font-size:0.97em; color:#5D4037;">
                            Pesanan Anda akan segera diproses dan dikirim.<br>
                            Untuk pertanyaan, silakan hubungi WhatsApp: <b>0821-1820-9415</b>
                        </p>
                    </div>
                    <a href="index.html"><button type="button" class="action-btn">Kembali ke Beranda</button></a>
                </div>
            `;
        }
    }

    // Newsletter
    const newsletterForm = document.querySelector('form[action="#newsletter"]');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            Swal.fire({
                icon: 'success',
                title: 'Terima kasih!',
                text: 'Anda berhasil berlangganan newsletter.',
                timer: 2000,
                showConfirmButton: false
            });
            newsletterForm.reset();
        });
    }

    // Animasi fade-in saat scroll
    document.querySelectorAll('.fade-in').forEach(el => {
        function checkVisible() {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add('visible');
            }
        }
        window.addEventListener('scroll', checkVisible);
        checkVisible();
    });
});