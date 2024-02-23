let imgs = document.getElementsByClassName('ololo')

for (let i of imgs) {
    i.onclick = () => {
        i.classList.toggle('trans')
    }
}

let mob_dropdown = document.getElementById('mob-dropdown'), content = document.getElementById('mob-dropdown-content')

mob_dropdown.onclick = () => {
    content.classList.toggle('disp')
}