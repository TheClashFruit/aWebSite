let navStatus = false;

function toggleNav() {
  if (!navStatus) {
    navStatus = true;

    document.getElementById('toggle-icon').innerHTML = 'close';
    document.getElementsByClassName('navBar-menu')[0].setAttribute('style', 'display: flex;');
  } else {
    navStatus = false;

    document.getElementById('toggle-icon').innerHTML = 'menu';
    document.getElementsByClassName('navBar-menu')[0].setAttribute('style', '');
  }
}