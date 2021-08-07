let a = document.querySelector("footer a");

console.log(a.getAttribute('href'));

let link = 'https://www.josemalcher.net';

a.setAttribute('href', link);

console.log(a.getAttribute('href'));
