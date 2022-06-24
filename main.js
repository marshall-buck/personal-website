"use strict";
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
const playMain = document.querySelector('#play-main');


const contact = document.querySelector('#contact-link');

const main = document.querySelector('main');



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

contact.addEventListener('submit', (e) => {
  console.log(e);
  e.preventDefault();
  formContainer.classList.toggle("invisible");
  active.isContactFormVisible = true;

});

nav.addEventListener('click', (e) => {
  const list = e.target.classList;
  if (list.contains('home-link')) {

    homeLinkClick();
  }


});
codeMask.addEventListener('click', () => {
  codeMaskClicked();
});

playMask.addEventListener('click', () => {

  playMaskClicked();
});
// Listener for codePlayNavLink
codePlayNavLink.addEventListener('click', (e) => {
  const els = Array.from(e.target.children);
  els.forEach(element => {
    element.classList.toggle('small-link');
  });
  if (active.currentPage === 'code-link') playMaskClicked();
  else codeMaskClicked();



});


function setNavColor(color) {
  for (let e of navText) {
    e.style.color = color;
  }
  // Needed for nav to cover code section
  if (active.currentPage !== 'play-link') {
    nav.style.backgroundColor = 'var(--dark-yellow)';
    main.style.backgroundColor = 'var(--dark-yellow)';

  } else {
    nav.style.backgroundColor = 'var(--dark-purple)';
    main.style.backgroundColor = 'var(--dark-purple)';
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

function hideCodePlayNavLink() {
  codePlayNavLink.classList.add('nav-link-hide');
  codePlayNavLink.lastElementChild.classList.remove('small-link');
  codePlayNavLink.firstElementChild.classList.remove('small-link');

}

function codeMaskClicked() {
  active.currentPage = 'code-link';
  active.codePlayLinkVisible = true;
  setNavColor('var(--dark-purple)');
  playSection.setAttribute('class', "container zero-page");
  codeSection.setAttribute('class', 'full-page code-scroll');
  codeMain.style.display = 'flex';
  codeMask.setAttribute('class', 'mask-invisible');
  codeMain.setAttribute('class', 'container');
  playMain.setAttribute('class', 'zero-page ');
  playMask.setAttribute('class', 'mask-invisible');
  showCodePlayNavLink();


}

function playMaskClicked() {
  active.codePlayLinkVisible = true;
  active.currentPage = 'play-link';
  setNavColor('var(--dark-yellow)');
  codeSection.setAttribute('class', "container zero-page");
  codeMask.setAttribute('class', 'mask-invisible');
  codeMain.style.display = 'none';
  playSection.setAttribute('class', 'container full-page');
  playMask.setAttribute('class', 'mask-invisible');
  playMain.setAttribute('class', 'container');
  showCodePlayNavLink();

}

function homeLinkClick() {
  active.codePlayLinkVisible = false;
  active.currentPage = 'home-link';
  setNavColor('var(--dark-purple)');
  codeSection.setAttribute('class', "container half-page");
  playSection.setAttribute('class', 'container half-page');
  formContainer.setAttribute('class', 'container invisible');
  playMask.setAttribute('class', 'mask');
  codeMask.setAttribute('class', 'mask');
  codeMain.setAttribute('class', 'container zero-page');
  playMain.setAttribute('class', 'zero-page ');
  hideCodePlayNavLink();

}

