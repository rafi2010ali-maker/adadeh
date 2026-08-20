// ==========================================
// PENGATURAN
// ==========================================

const PASSWORD = "16";

// Menyimpan jenis yang sedang ditambahkan
let uploadType = "";


// ==========================================
// TOMBOL KEMBALI
// ==========================================

function goBack() {

    window.history.back();

}


// ==========================================
// PASSWORD
// ==========================================

function openPassword(type) {

    // Simpan apakah foto atau video
    uploadType = type;

    const modal =
        document.getElementById("passwordModal");

    modal.classList.add("active");

    document
        .getElementById("passwordInput")
        .focus();
}


function closePassword() {

    const modal =
        document.getElementById("passwordModal");

    modal.classList.remove("active");

    document
        .getElementById("passwordInput")
        .value = "";

    document
        .getElementById("errorMessage")
        .textContent = "";

}


// ==========================================
// CEK PASSWORD
// ==========================================

function checkPassword() {

    const input =
        document.getElementById("passwordInput").value;

    const error =
        document.getElementById("errorMessage");


    if (input === PASSWORD) {

        closePassword();


        // ==================================
        // JIKA TAMBAH FOTO
        // ==================================

        if (uploadType === "photo") {

            const photoInput =
                document.getElementById("photoInput");

            if (photoInput) {
                photoInput.click();
            }

        }


        // ==================================
        // JIKA TAMBAH VIDEO
        // ==================================

        if (uploadType === "video") {

            const videoInput =
                document.getElementById("videoInput");

            if (videoInput) {
                videoInput.click();
            }

        }


    } else {

        error.textContent =
            "❌ Sandi salah. Silakan coba lagi.";

        document
            .getElementById("passwordInput")
            .value = "";

    }

}


// ==========================================
// ENTER UNTUK PASSWORD
// ==========================================

const passwordInput =
    document.getElementById("passwordInput");


if (passwordInput) {

    passwordInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                checkPassword();

            }

        }
    );

}


// =====================================================
// TAMBAH FOTO
// =====================================================

const photoInput =
    document.getElementById("photoInput");


if (photoInput) {

    photoInput.addEventListener(
        "change",
        function () {

            const files = this.files;


            if (!files || files.length === 0) {
                return;
            }


            const gallery =
                document.getElementById("photoGallery");


            if (!gallery) {
                return;
            }


            Array.from(files).forEach(
                function (file) {


                    // Pastikan file gambar
                    if (
                        !file.type.startsWith("image/")
                    ) {
                        return;
                    }


                    const reader =
                        new FileReader();


                    reader.onload =
                        function (event) {


                            // =========================
                            // CARD
                            // =========================

                            const card =
                                document.createElement(
                                    "div"
                                );

                            card.className =
                                "photo-card";


                            // =========================
                            // IMAGE BOX
                            // =========================

                            const imageBox =
                                document.createElement(
                                    "div"
                                );

                            imageBox.className =
                                "image-box";


                            // =========================
                            // IMAGE
                            // =========================

                            const img =
                                document.createElement(
                                    "img"
                                );

                            img.src =
                                event.target.result;

                            img.alt =
                                file.name;


                            img.onclick =
                                function () {

                                    openImage(
                                        this.src
                                    );

                                };


                            // =========================
                            // INFO
                            // =========================

                            const info =
                                document.createElement(
                                    "div"
                                );

                            info.className =
                                "photo-info";


                            // =========================
                            // TITLE
                            // =========================

                            const title =
                                document.createElement(
                                    "h3"
                                );

                            title.textContent =
                                file.name;


                            // =========================
                            // DELETE BUTTON
                            // =========================

                            const deleteButton =
                                document.createElement(
                                    "button"
                                );

                            deleteButton.className =
                                "delete-button";

                            deleteButton.textContent =
                                "Hapus";


                            deleteButton.onclick =
                                function () {

                                    deletePhoto(
                                        this
                                    );

                                };


                            // =========================
                            // GABUNGKAN
                            // =========================

                            imageBox.appendChild(
                                img
                            );

                            info.appendChild(
                                title
                            );

                            info.appendChild(
                                deleteButton
                            );

                            card.appendChild(
                                imageBox
                            );

                            card.appendChild(
                                info
                            );

                            gallery.appendChild(
                                card
                            );

                        };


                    reader.readAsDataURL(file);

                }
            );


            // Reset input
            this.value = "";

        }
    );

}


// =====================================================
// HAPUS FOTO
// =====================================================

function deletePhoto(button) {

    const card =
        button.closest(".photo-card");


    if (!card) {
        return;
    }


    const yakin =
        confirm(
            "Apakah kamu yakin ingin menghapus foto ini?"
        );


    if (!yakin) {
        return;
    }


    card.style.opacity = "0";

    card.style.transform =
        "scale(.8)";


    setTimeout(
        function () {

            card.remove();

        },
        300
    );

}


// =====================================================
// FULL IMAGE
// =====================================================

function openImage(src) {

    const modal =
        document.getElementById("imageModal");

    const fullImage =
        document.getElementById("fullImage");


    if (!modal || !fullImage) {
        return;
    }


    fullImage.src = src;

    modal.classList.add("active");

}


function closeImage() {

    const modal =
        document.getElementById("imageModal");


    if (modal) {

        modal.classList.remove(
            "active"
        );

    }

}


// =====================================================
// TAMBAH VIDEO
// =====================================================

const videoInput =
    document.getElementById("videoInput");


if (videoInput) {

    videoInput.addEventListener(
        "change",
        function () {

            const files = this.files;


            if (!files || files.length === 0) {
                return;
            }


            const gallery =
                document.getElementById(
                    "videoGallery"
                );


            if (!gallery) {
                return;
            }


            Array.from(files).forEach(
                function (file) {


                    // Pastikan file video
                    if (
                        !file.type.startsWith("video/")
                    ) {
                        return;
                    }


                    const videoURL =
                        URL.createObjectURL(
                            file
                        );


                    // =========================
                    // CARD
                    // =========================

                    const card =
                        document.createElement(
                            "div"
                        );

                    card.className =
                        "video-card";


                    // =========================
                    // VIDEO BOX
                    // =========================

                    const videoBox =
                        document.createElement(
                            "div"
                        );

                    videoBox.className =
                        "video-box";


                    // =========================
                    // VIDEO
                    // =========================

                    const video =
                        document.createElement(
                            "video"
                        );

                    video.src =
                        videoURL;

                    video.controls =
                        true;

                    video.preload =
                        "metadata";


                    // Klik video
                    video.onclick =
                        function () {

                            openVideo(
                                videoURL
                            );

                        };


                    // =========================
                    // INFO
                    // =========================

                    const info =
                        document.createElement(
                            "div"
                        );

                    info.className =
                        "video-info";


                    // =========================
                    // TITLE
                    // =========================

                    const title =
                        document.createElement(
                            "h3"
                        );

                    title.textContent =
                        file.name;


                    // =========================
                    // DELETE BUTTON
                    // =========================

                    const deleteButton =
                        document.createElement(
                            "button"
                        );

                    deleteButton.className =
                        "delete-button";

                    deleteButton.textContent =
                        "Hapus";


                    deleteButton.onclick =
                        function () {

                            deleteVideo(
                                this,
                                videoURL
                            );

                        };


                    // =========================
                    // GABUNGKAN
                    // =========================

                    videoBox.appendChild(
                        video
                    );

                    info.appendChild(
                        title
                    );

                    info.appendChild(
                        deleteButton
                    );

                    card.appendChild(
                        videoBox
                    );

                    card.appendChild(
                        info
                    );

                    gallery.appendChild(
                        card
                    );

                }
            );


            // Reset input
            this.value = "";

        }
    );

}


// =====================================================
// HAPUS VIDEO
// =====================================================

function deleteVideo(
    button,
    videoURL
) {

    const card =
        button.closest(".video-card");


    if (!card) {
        return;
    }


    const yakin =
        confirm(
            "Apakah kamu yakin ingin menghapus video ini?"
        );


    if (!yakin) {
        return;
    }


    // Hentikan dan hapus URL sementara
    if (videoURL) {

        URL.revokeObjectURL(
            videoURL
        );

    }


    card.style.opacity = "0";

    card.style.transform =
        "scale(.8)";


    setTimeout(
        function () {

            card.remove();

        },
        300
    );

}


// =====================================================
// FULL VIDEO
// =====================================================

function openVideo(src) {

    const modal =
        document.getElementById(
            "videoModal"
        );

    const fullVideo =
        document.getElementById(
            "fullVideo"
        );


    if (!modal || !fullVideo) {
        return;
    }


    fullVideo.src = src;

    modal.classList.add(
        "active"
    );


    fullVideo.play().catch(
        function () {}
    );

}


function closeVideo() {

    const modal =
        document.getElementById(
            "videoModal"
        );

    const fullVideo =
        document.getElementById(
            "fullVideo"
        );


    if (fullVideo) {

        fullVideo.pause();

        fullVideo.src = "";

    }


    if (modal) {

        modal.classList.remove(
            "active"
        );

    }

}


// =====================================================
// TOMBOL ESC
// =====================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeImage();

            closeVideo();

            closePassword();

        }

    }
);