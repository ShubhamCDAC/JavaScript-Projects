
// Key concepts covered:

// document.querySelectorAll()
// forEach()
// addEventListener()
// currentTarget property
// classList
// textContent



//set initial count
let count = 0;

// select avlue and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(btns);


btns.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else if (styles.contains('reset')) {
            count = 0;
        }



        value.textContent = count;


    });
})
