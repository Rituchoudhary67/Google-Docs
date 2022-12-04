const buttons = document.querySelector(".right-nav-btn");


/*step1 :- adding event listener on button and make one fun*/
buttons.addEventListener('mouseover',btnHover);

/*step2 :- make one function for mouseover*/
function btnHover(e){
      e.target.style.backgroundColor = " rgb(238, 236, 236)";
}
/*step1 :- adding event listner on removeing background color*/
buttons.addEventListener('mouseout',btnHoverOut);

/*step2 :- make a fun for mouseout*/
function btnHoverOut(e) {
    e.target.style.backgroundColor = "white";
}