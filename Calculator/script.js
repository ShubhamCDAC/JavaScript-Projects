let input = document.getElementById("inputBox");

//we using queryselector for selecting all buttons
let buttons = document.querySelectorAll('button');

// creating empty string for storing results
let string = "";

//  creating array of buttons by predefind function
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {  // this means everytime we click 'e' will perform 
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
        string += e.target.innerHTML;
        input.value = string;
        }
    })
})