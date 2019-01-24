const allIcons = document.querySelectorAll('.nav__circle');
allIcons.forEach(icon => {
    if(icon.dataset.iconname) {
        icon.classList.add(`nav__circle--${icon.dataset.iconname}`);
        icon.querySelector('a').innerHTML = `
            <img src=img/icons/${icon.dataset.iconname}_active.svg  class="nav__icon--active"/>
            <img src=img/icons/${icon.dataset.iconname}.svg  class="nav__icon"/>
            `
        // icon.addEventListener('mouseover', ()=> {
        //     icon.style = `background-image: url('img/icons/${icon.dataset.iconname}_active.svg')`;
        // });
        // icon.addEventListener('mouseout', () => {
        //     icon.style = `background-image: url('img/icons/${icon.dataset.iconname}.svg')`;
        // })
    }
})
