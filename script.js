/* =========================
   HIỆU ỨNG KHI CUỘN TRANG
========================= */

window.addEventListener("scroll", function () {

    let sections = document.querySelectorAll(".section");

    sections.forEach(function (section) {

        let viTri = section.getBoundingClientRect().top;

        let chieuCaoManHinh = window.innerHeight;

        if (viTri < chieuCaoManHinh - 100) {

            section.classList.add("hien-thi");

        }

    });

});


/* =========================
   NÚT VỀ ĐẦU TRANG
========================= */

window.addEventListener("scroll", function () {

    let btnTop = document.getElementById("btnTop");

    if (window.scrollY > 400) {

        btnTop.style.display = "block";

    } else {

        btnTop.style.display = "none";

    }

});


function veDauTrang() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}