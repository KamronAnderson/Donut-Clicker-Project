function donutSetup(){
    this.clicks = 0
    this.tracker = document.querySelector("tracker")
    this.autoClickers = 0
    this.donut_price = 10
    this.amount = 0
    this.price = 10
}

function donutWork() {
    this.clicks = this.clicks + this.clicks
}

function getDonuts() {
    return this.clicks
}

function buyAutoClicker() {
    if(this.clicks >= this.donut_price) {
        this.clicks = this.clicks - this.donut_price
        this.autoClickers++
        this.autoClickerCost()
    }
}

function autoClickerCost() {
    this.donut_price = this.donut_price + this.donut_price * 0.1
}

function getAutoClickers() {
    return this.autoClickers
}

function getDonutPrice() {
    return this.donut_price
}

function activeClicker() {
    this.clicks = this.clicks + this.autoClickers * this.tracker
}

function multiplierAttach() {
    if(this.clicks >= this.price){
        this.clicks = this.clicks - this.price
        this.amount++
        this.bumpUpMultiplier()
        this.addTrackerRate()
    }
}

function getAmount() {
    return this.amount
}

function getAutoClickerPrice() {
    return this.price
}

