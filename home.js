document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to Our Beautiful Memories ❤️");

    // Membuat love secara otomatis
    function createLove() {

        const love = document.createElement("div");

        love.classList.add("floating-love");

        // Isi love
        love.innerHTML = "❤️";

        // Posisi horizontal acak
        love.style.left =
            Math.random() * 100 + "vw";

        // Ukuran acak
        const size =
            Math.random() * 20 + 15;

        love.style.fontSize =
            size + "px";

        // Durasi animasi acak
        const duration =
            Math.random() * 5 + 5;

        love.style.animationDuration =
            duration + "s";

        // Tambahkan ke halaman
        document.body.appendChild(love);

        // Hapus setelah animasi selesai
        setTimeout(function () {

            love.remove();

        }, duration * 1000);

    }


    // Membuat love setiap 700ms
    setInterval(createLove, 700);

});