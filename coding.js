const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    // Mencegah halaman melakukan reload
    event.preventDefault();

    // Mengambil nilai input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Username dan password
    const usernameBenar = "azzadin";
    const passwordBenar = "16";

    // Mengecek login
    if (
        username === usernameBenar &&
        password === passwordBenar
    ) {

        // Jika benar, masuk ke halaman utama
        window.location.href = "home.html";

    } else {

        // Jika salah
        alert("Username atau password salah!");

    }

});