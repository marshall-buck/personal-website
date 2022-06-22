const workLink = document.querySelector('.work-link');
const workSection = document.querySelector('#work');
const workMain = document.querySelector('#work-main');
const workMask = document.querySelector('#work > .mask');

const nav = document.querySelector('nav');
const navText = document.querySelectorAll('nav, nav > a');

const formContainer = document.querySelector("#contact");
const closeForm = document.querySelector("#contact > div");

const playMain = document.querySelector('#play-main');
const playLink = document.querySelector('.play-link');
const playSection = document.querySelector('#play');
const playMask = document.querySelector('#play > .mask');

const carousel = document.querySelector('#carousel');



// UI STATE
const active = { currentPage: 'landing', isContactFormVisible: false };

// EVENT LISTENERS
// turn on transition's after page loads
window.addEventListener('load', () => {
  document.querySelector('body').classList.remove('preload');
});

closeForm.addEventListener('click', () => {

  formContainer.classList.toggle("invisible");
  active.isContactFormVisible = false;
  console.log(active);
});

nav.addEventListener('click', (e) => {
  const list = e.target.classList;

  if (list.contains('home-link')) {
    homeLinkClick();
  }
  if (list.contains('contact-link')) {
    formContainer.classList.toggle("invisible");
    active.isContactFormVisible = true;
  }
  if (list.contains('work-link')) {
    workLinkClick();
  }
  if (list.contains('play-link')) {
    playLinkClick();
  }

  console.log(e, active);

});
workMask.addEventListener('click', (e) => {
  workLinkClick(e);
});

playMask.addEventListener('click', (e) => {
  console.log(e);
});

/*TODO: Create func to loop through nav links and set active class*/
function setNavText(color) {
  for (let e of navText) {
    e.style.color = color;
  }
}

function workLinkClick() {
  active.currentPage = 'work-link';
  if (workSection.classList.contains('full-page')) return;
  setNavText('var(--dark-purple)');
  playSection.setAttribute('class', "container zero-page");
  workSection.setAttribute('class', 'container full-page');
  carousel.setAttribute('class', 'container zero-page');
  workMask.setAttribute('class', 'play-invisible');
  workMain.setAttribute('class', 'container');
}

function playLinkClick() {
  active.currentPage = 'play-link';
  if (playSection.classList.contains('full-page')) return;
  setNavText('var(--dark-yellow)');
  workSection.setAttribute('class', "container zero-page");
  playSection.setAttribute('class', 'container full-page');
  playMask.setAttribute('class', 'play-invisible');
  carousel.setAttribute('class', 'container');

}

function homeLinkClick() {
  active.currentPage = 'home-link';
  setNavText('var(--dark-purple)');
  workSection.setAttribute('class', "container half-page");
  playSection.setAttribute('class', 'container half-page');
  formContainer.setAttribute('class', 'container invisible');
  carousel.setAttribute('class', 'container zero-page');
  playMask.setAttribute('class', 'mask');
  workMask.setAttribute('class', 'mask');
  workMain.setAttribute('class', 'container zero-page');
}

