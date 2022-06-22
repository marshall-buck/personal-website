
const codeSection = document.querySelector('#code');
const codeMain = document.querySelector('#code-main');
const codeMask = document.querySelector('#code > .mask');

const nav = document.querySelector('nav');
const navText = document.querySelectorAll('nav, nav  a');

const codePlayNavLink = document.querySelector('.link-container');


const formContainer = document.querySelector("#contact");
const closeForm = document.querySelector("#contact > div");


const playSection = document.querySelector('#play');
const playMask = document.querySelector('#play > .mask');

const carousel = document.querySelector('#carousel');



// UI STATE
const active = { currentPage: 'landing', isContactFormVisible: false, codePlayLinkVisible: false };

// EVENT LISTENERS
// turn on transition's after page loads
window.addEventListener('load', () => {
  document.querySelector('body').classList.remove('preload');
});

closeForm.addEventListener('click', () => {

  formContainer.classList.toggle("invisible");
  active.isContactFormVisible = false;

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

});
codeMask.addEventListener('click', () => {
  codeLinkClick();
});

playMask.addEventListener('click', () => {
  playLinkClick();
});
// Listener for codePlayNavLink
codePlayNavLink.addEventListener('click', (e) => {
  const els = Array.from(e.target.children);
  els.forEach(element => {
    element.classList.toggle('small-link');
  });
  if (active.currentPage === 'code-link') playLinkClick();
  else codeLinkClick();



});

/*TODO: Create func to loop through nav links and set active class*/
function setNavText(color) {
  for (let e of navText) {
    e.style.color = color;
  }
}

function showCodePlayNavLink() {

  codePlayNavLink.classList.remove('nav-link-hide');
  if (active.currentPage === 'code-link') {
    codePlayNavLink.lastElementChild.classList.add('small-link');
  } else {
    codePlayNavLink.firstElementChild.classList.add('small-link');
  }


}

function codeLinkClick() {
  active.currentPage = 'code-link';
  active.codePlayLinkVisible = true;
  if (codeSection.classList.contains('full-page')) return;
  setNavText('var(--dark-purple)');
  playSection.setAttribute('class', "container zero-page");
  codeSection.setAttribute('class', 'container full-page');
  carousel.setAttribute('class', 'container zero-page');
  codeMask.setAttribute('class', 'play-invisible');
  codeMain.setAttribute('class', 'container');
  showCodePlayNavLink();


}

function playLinkClick() {
  active.codePlayLinkVisible = true;
  active.currentPage = 'play-link';
  if (playSection.classList.contains('full-page')) return;
  setNavText('var(--dark-yellow)');
  codeSection.setAttribute('class', "container zero-page");
  playSection.setAttribute('class', 'container full-page');
  playMask.setAttribute('class', 'play-invisible');
  carousel.setAttribute('class', 'container');

  showCodePlayNavLink();

}

function homeLinkClick() {
  active.codePlayLinkVisible = false;
  active.currentPage = 'home-link';
  setNavText('var(--dark-purple)');
  codeSection.setAttribute('class', "container half-page");
  playSection.setAttribute('class', 'container half-page');
  formContainer.setAttribute('class', 'container invisible');
  carousel.setAttribute('class', 'container zero-page');
  playMask.setAttribute('class', 'mask');
  codeMask.setAttribute('class', 'mask');
  codeMain.setAttribute('class', 'container zero-page');

  codePlayNavLink.classList.add('nav-link-hide');
}

