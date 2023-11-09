
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    // to display the underline whenever i click education/skills/experience
    event.currentTarget.classList.add("active");

    // to change the tab whenver i click with the id data
    document.getElementById(tabname).classList.add('active-tab');
}
