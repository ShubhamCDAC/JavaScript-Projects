
// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggle class


let navbar = document.querySelector('.navbar');

document.querySelector('#nav-toggle').onclick = () =>{
    navbar.classList.toggle('active');
}


