const workLink = document.querySelector('#work-link');
const workSection = document.querySelector('#work');
const navText = document.querySelectorAll('nav, nav > a');
const formContainer = document.querySelector("#contact");
const closeForm = document.querySelector("#contact > div");
const playLink = document.querySelector('#play-link');
const playSection = document.querySelector('#play');
const nav = document.querySelector('nav');
const workMask = document.querySelector('#work > .mask');
const playMask = document.querySelector('#play > .mask');
const carousel = document.querySelector('#carousel');
const workMain = document.querySelector('#work-main');

const active = { currentPage: 'contact-link' };
closeForm.addEventListener('click', () => { formContainer.classList.toggle("invisible"); });

nav.addEventListener('click', (e) => {
  const id = e.target.id;
  active.currentPage = id;


  if (active.currentPage === "home-link") {
    setNavText('var(--dark-purple)');
    workSection.setAttribute('class', "container half-page");
    playSection.setAttribute('class', 'container half-page');
    formContainer.setAttribute('class', 'container invisible');
    carousel.setAttribute('class', 'container zero-page');
    playMask.setAttribute('class', 'mask');
    workMask.setAttribute('class', 'mask');
    workMain.setAttribute('class', 'container zero-page');
  }
  if (active.currentPage === "contact-link") {
    formContainer.classList.toggle("invisible");
  }
  if (active.currentPage === "work-link") {
    if (workSection.classList.contains('full-page')) return;
    setNavText('var(--dark-purple)');
    playSection.setAttribute('class', "container zero-page");
    workSection.setAttribute('class', 'container full-page');
    carousel.setAttribute('class', 'container zero-page');
    workMask.setAttribute('class', 'play-invisible');
    workMain.setAttribute('class', 'container');



  }
  if (active.currentPage === "play-link") {

    if (playSection.classList.contains('full-page')) return;
    setNavText('var(--dark-yellow)');
    workSection.setAttribute('class', "container zero-page");
    playSection.setAttribute('class', 'container full-page');
    playMask.setAttribute('class', 'play-invisible');
    carousel.setAttribute('class', 'container');


  }



});
/*TODO: Create func to loop through nav links and set active class*/
function setNavText(color) {
  for (let e of navText) {
    e.style.color = color;


  }
}

