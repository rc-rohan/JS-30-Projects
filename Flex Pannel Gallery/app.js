const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    /* this here refers to panels variable  as it is called from there arrow func. */
    this.classList.toggle('open')

}

function toggleActive(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click',toggleOpen));

/* now listening for the transitionend event to add the text from top and bottom of the flex card */
panels.forEach(panel=>panel.addEventListener('transitionend',toggleActive));