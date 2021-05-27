const Scroll = document.getElementById('scroll');

document.querySelector('form').addEventListener('submit', elem => {
    elem.preventDefault();
})

document.addEventListener('scroll', () => {
    if (scrollY >= 300) {
        Scroll.style.opacity = '1';
        Scroll.style.cursor = 'pointer';
        Scroll.removeAttribute('disabled');
        Scroll.onclick = () => {scrollTo(0, 0);}
    }   else if(scrollY <= 200) {
        Scroll.style.opacity = '0';
        Scroll.style.cursor = "auto";
        Scroll.setAttribute('disabled', "disabled")
    }
});
