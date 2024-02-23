let slides = document.getElementsByClassName('slider-div')
let [slide1, slide2, slide3] = slides
let n = 0

slide1.classList.add('vis')
slide2.classList.add('invis')
slide3.classList.add('invis')

setInterval(auto_slider, 6000)

function auto_slider() {
    
    switch(n) {
        case 0: {
            slide1.classList.toggle('invis')
            slide1.classList.toggle('vis')
            slide2.classList.toggle('vis')
            slide2.classList.toggle('invis')
            break
        }
        case 1: {
            slide2.classList.toggle('invis')
            slide2.classList.toggle('vis')
            slide3.classList.toggle('vis')
            slide3.classList.toggle('invis')
            break
        }
        case 2: {
            slide3.classList.toggle('invis')
            slide3.classList.toggle('vis')
            slide1.classList.toggle('vis')
            slide1.classList.toggle('invis')
            break
        }
    }
    n++
    if (n > 2) {
        n = 0
    }
}

var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("close")[0];
var confirmBtn = document.getElementById("confirmBtn");
var phoneNumber = document.getElementById("phoneNumber");

openModalBtn.onclick = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
})

phoneNumber.onclick = () => {
    phoneNumber.value = '+'
}

phoneNumber.onblur = () => {
    if (phoneNumber.value == '+') {
        phoneNumber.value = ''
    }
}

confirmBtn.onclick = () => {
    var phoneNumberInput = document.getElementById("phoneNumber");
    var phoneNumber = phoneNumberInput.value;
    if (phoneNumber) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
    else {
        alert('Введите номер телефона')
    }
}

var modal2 = document.getElementById("myModal2");
var openModalBtn2 = document.getElementById("openModalBtn2");
var closeBtn2 = document.getElementsByClassName("close")[1];
var confirmBtn2 = document.getElementById("confirmBtn2");
var phoneNumber2 = document.getElementById("phoneNumber2");

openModalBtn2.onclick = () => {
    modal2.style.display = "block";
    document.body.style.overflow = "hidden";
}

closeBtn2.onclick = () => {
    modal2.style.display = "none";
    document.body.style.overflow = "auto";
}

window.addEventListener('click', function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
        document.body.style.overflow = "auto";
    }
})

phoneNumber2.onclick = () => {
    phoneNumber2.value = '+'
}

phoneNumber2.onblur = () => {
    if (phoneNumber2.value == '+') {
        phoneNumber2.value = ''
    }
}

confirmBtn2.onclick = () => {
    var phoneNumberInput = document.getElementById("phoneNumber2");
    var phoneNumber = phoneNumberInput.value;
    if (phoneNumber) {
        modal2.style.display = "none";
        document.body.style.overflow = "auto";
    }
    else {
        alert('Введите номер телефона')
    }
}

let mob_dropdown = document.getElementById('mob-dropdown'), content = document.getElementById('mob-dropdown-content')

mob_dropdown.onclick = () => {
    content.classList.toggle('disp')
}