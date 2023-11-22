
    //  Key concepts covered:

    // arrays
    // document.getElementById()
    // document.querySelector()
    // addEventListener()
    // document.body.style.backgroundColor
    // Math.floor()
    // Math.random()
    // array.length 

    const colors = ["green", "yellow", "beige", "cyan"];

    const btn = document.getElementById('btn');


    btn.addEventListener('click', ()=>{
        // get random number between 0-3 coz our colors arr lenght is 4

        const randomNumber = getRandomNumber();
        console.log(randomNumber);
        
        document.body.style.backgroundColor = colors[randomNumber];
    })


    function getRandomNumber(){
        return Math.floor(Math.random() * colors.length);
    }

