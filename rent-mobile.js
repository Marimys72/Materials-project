let mobileWidth = window.innerWidth;
let mobileHeight = window.innerHeight;

function changeText() {
    document.querySelector(".subtitle-mobile").textContent = "Аренда техники";
}

if (mobileWidth < mobileHeight) {
    changeText();
}