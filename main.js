// Navbar

let navBar = document.querySelector('#navBar');
let logo = document.querySelector('.logo');
let navContainer = document.querySelector('#navBar .container');
let navLi = document.querySelectorAll('.navLi');
let navA = document.querySelectorAll('.navLi a');
let burger = document.querySelector('.burger');
let screen = window.matchMedia('(max-width: 767px)');

screenChange(screen);
screen.addListener(screenChange);

function screenChange(screen) {
  if (screen.matches) {
    burger.style.display = 'flex';
    navLi.forEach(li => {
      li.style.transform = 'translateX(-100vw)';
    });
    navBar.style.cssText = 'height: 50px;background-color: rgba(0, 0, 0, 0.6);';
    logo.style.cssText = 'width:30px; height: 30px;';
    navContainer.style.cssText = 'grid-auto-rows: 50px 0px';
  } else {
    burger.style.display = 'none';
    burger.classList.remove('toggle');
    navLi.forEach(li => {
      li.style.transform = 'translateX(0vw)';
    });
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navBar.style.cssText =
        'height: 60px;background-color: rgba(0, 0, 0, 0.6);';
      logo.style.cssText = 'width:40px; height: 40px;';
      navContainer.style.cssText = 'grid-auto-rows: 60px 0px';
    } else {
      navBar.style.cssText =
        'height: 100px;background-color: rgba(0, 0, 0, 0);';
      logo.style.cssText = 'width:80px; height: 80px;';
      navContainer.style.cssText = 'grid-auto-rows: 100px 0px';
    }
    window.onscroll = function(x) {
      scrollFunction();
    };
  }
}

function showNav() {
  burger.classList.add('toggle');
  navLi.forEach((li, index) => {
    li.style.transform = 'translateX(0vw)';
    li.style.transitionDelay = `${0.1 + index / 10}s`;
  });
}

function hideNav() {
  if (screen.matches) {
    burger.classList.remove('toggle');
    navLi.forEach((li, index) => {
      li.style.transform = 'translateX(-100vw)';
      li.style.transitionDelay = `${0.4 - index / 10}s`;
    });
  }
}

burger.addEventListener('click', () => {
  if (navLi[0].style.transform == 'translateX(-100vw)') {
    showNav();
  } else {
    hideNav();
  }
});

navA.forEach(li => {
  li.addEventListener('click', () => {
    hideNav();
  });
});

function scrollFunction() {
  if (
    window.matchMedia('(min-width: 768px)').matches &&
    (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
  ) {
    navBar.style.cssText = 'height: 60px;background-color: rgba(0, 0, 0, 0.6);';
    logo.style.cssText = 'width:40px; height: 40px;';
    navContainer.style.cssText = 'grid-auto-rows: 60px 0px';
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    navBar.style.cssText = 'height: 100px;background-color: rgba(0, 0, 0, 0);';
    logo.style.cssText = 'width:80px; height: 80px;';
    navContainer.style.cssText = 'grid-auto-rows: 100px 0px';
  }
}

// Color change

let img = document.querySelector('.colorImg');
let colorForm = document.querySelectorAll('[name=color');

colorForm.forEach(color => {
  color.addEventListener('change', () => {
    changeColor(color.value);
  });
});

function changeColor(col) {
  if (img.style.transform != 'rotateY(360deg)') {
    img.src = `img/redmi-${col}.png`;
    img.style.transform = 'rotateY(360deg)';
  } else {
    img.src = `img/redmi-${col}.png`;
    img.style.transform = 'rotateY(0deg)';
  }
}

// Gallery

let next = document.querySelector('#nextImg');
let prev = document.querySelector('#prevImg');
let nextModal = document.querySelector('#nextImgModal');
let prevModal = document.querySelector('#prevImgModal');
let galImg = document.querySelectorAll('.galImg');
let modalImg = document.querySelector('img.modalImg');
let modal = document.querySelector('.modal');
let position = 8;

[next, nextModal].forEach(function(element) {
  element.addEventListener('click', () => {
    for (i = 0; i < 9; i++) {
      let x = (i + position) % 9;
      Object.assign(galImg[i].style, {
        'background-image': 'url("img/' + x + '.jpg")'
      });
    }
    let y = galImg[8].style.backgroundImage;
    Object.assign(modalImg.style, {
      'background-image': y
    });
    if (position == 1) {
      position = 9;
    } else {
      position--;
    }
  });
});

[prev, prevModal].forEach(function(element) {
  element.addEventListener('click', () => {
    for (i = 0; i < 9; i++) {
      let x = (i + position + 2) % 9;
      Object.assign(galImg[i].style, {
        'background-image': 'url("img/' + x + '.jpg")'
      });
    }
    let y = galImg[8].style.backgroundImage;
    Object.assign(modalImg.style, {
      'background-image': y
    });
    if (position == 9) {
      position = 1;
    } else {
      position++;
    }
  });
});

[galImg[8], modalImg].forEach(function(element) {
  element.addEventListener('click', () => {
    modal.classList.toggle('block');
  });
});

// Contact Us

let input = document.querySelectorAll('input');
let textArea = document.querySelector('textarea');
let contact = document.querySelector('.contactForm');
let mouseOver = false;

function show() {
  contact.style.opacity = '1';
}
function hide() {
  if (
    input[3] !== document.activeElement &&
    textArea !== document.activeElement &&
    mouseOver === false
  ) {
    contact.style.opacity = '0';
  }
}

contact.addEventListener('mouseover', () => {
  mouseOver = true;
  show();
});
contact.addEventListener('mouseout', () => {
  mouseOver = false;
  hide();
});
textArea.addEventListener('focusout', hide);
input[3].addEventListener('focusout', hide);
