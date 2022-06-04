const sum = document.getElementById('sum')
const sub = document.getElementById('sub')
let counter = 0
let counterDisplay = document.getElementById('counterNumber')

function classChange(event) {
    event.currentTarget.classList.toggle('active')
}

function verification() {
    let startNumber = Number(document.getElementById('startNumber').value)    
    if(startNumber == 0) {
        startNumber = 1
    }
    return startNumber
}

function sumValue() {
    let sum = verification()
    counter += sum
    counterDisplay.value = counter
}

function subtractValue() {
    let sub = verification()
    counter -= sub
    counterDisplay.value = counter
}

sum.addEventListener('click', classChange)
sub.addEventListener('click', classChange)
sum.addEventListener('click', sumValue)
sub.addEventListener('click', subtractValue)