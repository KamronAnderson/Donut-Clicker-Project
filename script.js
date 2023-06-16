// Variables

let clicks = 0
let donutClickers = 0
let amount = 0
let price = 100


donutClicker();

// Functions


function donutClicker() {
    tracker.innerHTML =clicks 
    autoTracker.innerHTML = donutClickers
    cost.innerHTML = price
    removeDisable(clicks >= price, autoClicker);
}

function Increase() {
    clicks = clicks + 1
    donutClicker()
    }

submit.addEventListener("click",Increase)


function IncreaseClicks() {
    if (donutClickers >= 0){
        donutClickers = donutClickers + 1
        setInterval(function() {
            submit.click()
        },1000);
    } else {
        end
    }
    donutClicker();
    }

autoClicker.addEventListener("click",() => {

    IncreaseClicks();
    subtractAmount();
    updatePrice();
    autoClickerCost();
    IncreaseClicks();
    donutClicker();
})

function subtractAmount() {
    if(clicks >= price) {
        clicks = clicks - price
        amount++
        autoClickerCost()
    }
}

function updatePrice (price, donutClickers) {
    const upgradeCost = document.querySelector('cost');
    const upgradeAmount = document.querySelector('autoTracker')
    upgradeCost.innerHTML = price
    upgradeAmount.innerHTML = donutClickers
    donutClickers++
}

function autoClickerCost() {
    price = Math.round(price + (price * 0.1))
}

function removeDisable(allowed,btn){
    if(allowed){
        btn.removeAttribute("disabled", btn)
    }
    else {
        btn.setAttribute("disabled", btn)
    }
}

function resetAll(){
    location.reload()
}


clear.addEventListener("click",resetAll)

// Collapsible buttons

let menu = document.getElementsByClassName("headerButtons");
let i;

for (i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function() {
      let headerInfo = this.nextElementSibling;
      if (headerInfo.style.display === "block") {
        headerInfo.style.display = "none";
      } else {
        headerInfo.style.display = "block";
      }
    });
  }

  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}