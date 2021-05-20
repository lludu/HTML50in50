const panels = document.querySelectorAll('.panel');


//add the active class from the panel to grow it and bring it into view
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

//remove the active class from the panel to shrink it
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}