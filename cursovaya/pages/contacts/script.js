let mob_dropdown = document.getElementById('mob-dropdown'), content = document.getElementById('mob-dropdown-content')

mob_dropdown.onclick = () => {
    content.classList.toggle('disp')
}