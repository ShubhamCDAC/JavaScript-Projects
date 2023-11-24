
// topic covered

// objects
// DOMContentLoaded
// addEventListener()
// array.length
// textContent


//local reviews data

const reviews = [
    {
        id:1,
        name: "Susan Smith",
        job: "web-developer",
        img: "https://instasize.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmunkee%2Fimage%2Fupload%2Fw_1000%2Cc_fill%2Car_1%3A1%2Cg_auto%2Cr_max%2Fv1682630058%2Finstasize-website%2Flearn%2Fblonde-girl-sitting-down-pink-jacket.webp&w=640&q=75",
        text:
        "Hi, I'm Susan! I'm a web developer with in-depth experience in UI/UX design. In a nutshell, I create websites that help organizations address business challenges and meet their needs."    
    },
    {
        id: 2,
        name:"Anna Johnson",
        job: "web designer",
        img: "https://instasize.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmunkee%2Fimage%2Fupload%2Fw_1000%2Cc_fill%2Car_1%3A1%2Cg_auto%2Cr_max%2Fv1681855894%2Finstasize-website%2Flearn%2Fblonde-woman-selfie-instagram-influencer.webp&w=640&q=75",
        text: 
        "Hi myself Anna, As a web designer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites. Solving code problems. Editing & Design with designing team in the company to build perfect web designs."
    },
    {
        id: 3,
        name:"Drew Novelle",
        job: "Data Analyst",
        img: "https://www.esnleuven.be/sites/default/files/imce/kaan_ekiz-modified.png",
        text: 
        "Drew here, A data analyst is responsible for organizing data related to sales numbers, market research, logistics, linguistics, or other behaviors. They utilize technical expertise to ensure data is accurate and high-quality."
    },
    {
        id: 4,
        name:"Noah Sean",
        job: "UI Designer",
        img: "https://www.esnleuven.be/sites/default/files/imce/saan_bollens-modified.png",
        text: 
        "Noah Sean here , A User Interface (UI) Designer is a professional who collaborates with a User Experience (UX) designer to create an intuitive and visually appealing interface for product design. They focus on the look and feel of the interface to ensure a seamless user experience."
    }
    
]

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info  = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded',()=>{
    // this displays complete data
   showPerson(currentItem);
})


// shows person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show prev person
prevBtn.addEventListener('click',()=>{
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    showPerson(currentItem);
})


// show next person
nextBtn.addEventListener('click',()=>{
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})


// show random person
randomBtn.addEventListener('click', ()=>{
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})
