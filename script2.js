// const donut_image = document.getElementById('clicker');

// const donut_counter = document.getElementById('tracker');

// const multiplierUpdate = document.querySelector('cost');


let clicks = 0;

let autoClickers = 0;
let donut_price = 10;

let amount = 0;
let price = 10;

donutClicker();

submit.addEventListener('click',Increase);

function Increase() {
    clicks = clicks + 1
    donutClicker()
    }

function donutClicker() {
    donut_image.innerHTML = clicks
    multiplierUpdate.innerHTML = autoClickers
    setUpdateView(clicks >= amount, price)
    removeDisable(clicks >= price, multiplierUpdate)
}

multiplierUpdate.addEventListener('click', () => {
    clicks -= price;
    autoClickers++;
    price *= .10;
    donutClicker();
})

function removeDisable(allowed,btn){
    if(allowed){
        btn.removeAttribute("disabled", btn)
    }
    else {
        btn.setAttribute("disabled", btn)
    }
}

function setUpdateView(id, clickAmount, cost) {
    const amount_display = document.querySelector('#'+id+'>.clickAmount');
    const price_display = document.querySelector('#'+id+' .cost');
    amount_display.innerHTML = level;
    price_display.innerHTML = price;
};