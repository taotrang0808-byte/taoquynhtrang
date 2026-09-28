/* =========================
   HIỆU ỨNG KHI CUỘN TRANG
========================= */

function hienThiSections() {

    let sections = document.querySelectorAll(".section");

    sections.forEach(function (section) {

        let viTri = section.getBoundingClientRect().top;
        let chieuCaoManHinh = window.innerHeight;

        if (viTri < chieuCaoManHinh - 100) {
            section.classList.add("hien-thi");
        }

    });

}


/* Chạy ngay khi trang được mở */
window.addEventListener("load", function () {

    hienThiSections();

});


/* Chạy khi cuộn trang */
window.addEventListener("scroll", function () {

    hienThiSections();

});


/* =========================
   NÚT VỀ ĐẦU TRANG
========================= */

window.addEventListener("scroll", function () {

    let btnTop = document.getElementById("btnTop");

    /* Nếu không tìm thấy nút thì không làm gì */
    if (!btnTop) {
        return;
    }

    if (window.scrollY > 400) {

        btnTop.style.display = "block";

    } else {

        btnTop.style.display = "none";

    }

});


/* =========================
   HÀM VỀ ĐẦU TRANG
========================= */

function veDauTrang() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
