let mobileWidth = window.innerWidth;
let mobileHeight = window.innerHeight;

function changeText() {
    document.querySelector(".text-mobile").textContent = "Материал мелкого размера применяют для производства сухих смесей. Песок с частицами средней величины используют при изготовлении бетонов для всех типов растворов. Крупные фракции используют для создания покрытий, оснований и несущих конструкций, испытывающих мощные нагрузки";
}

if (mobileWidth < mobileHeight) {
    changeText();
}