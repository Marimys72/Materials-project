let windWidth = window.innerWidth;

let mobileTitle = document.querySelector(".subtitle-mobile");

window.addEventListener("resize", changeText);

function changeText() {
    mobileTitle.textContent = "Аренда техники";
};

if(windWidth < 381) {
    changeText();
}

function render() {
    if (windWidth < 381) {
    document.querySelector(".box-mobile").insertAdjacentHTML("afterbegin", `
    <div class="info-box__price box-price">
        <div class="stroke-wrapper">
            <div class="box-price__stroke stroke">
                <p class="stroke__title">Аренда экскаватора</p>
                <hr class="stroke__line">
            </div>
            <div class="box-price__stroke stroke">
                <p class="stroke__title">Аренда бульдозера</p>
                <hr class="stroke__line">
            </div>
            <div class="box-price__stroke stroke">
                <p class="stroke__title">Аренда манипулятора</p>
                <hr class="stroke__line">
            </div>
            <div class="box-price__stroke stroke">
                <p class="stroke__title">Аренда автокрана</p>
                <hr class="stroke__line">
            </div>
            <div class="box-price__stroke stroke">
                <p class="stroke__title">Аренда погрузчика</p>
                <hr class="stroke__line">
            </div>
        </div>
        <div class="price-wrapper">
            <p class="price-wrapper__price">от <span class="price-color">15 000 ₽ </span>смена</p>
            <p class="price-wrapper__price">от <span class="price-color">15 000 ₽ </span>смена</p>
            <p class="price-wrapper__price">от <span class="price-color">10 000 ₽ </span>смена</p>
            <p class="price-wrapper__price">от <span class="price-color">10 000 ₽ </span>смена</p>
            <p class="price-wrapper__price">от <span class="price-color">12 000 ₽ </span>смена</p>
        </div>
    </div>    
    `)
    } else {
        document.querySelector(".box-mobile").remove;
    }
};

render();








