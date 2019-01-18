const toggleMenu = (menuId) => {
    const nav = document.querySelector(`#${menuId}`);
    nav.classList.toggle('nav--hidden');
}
