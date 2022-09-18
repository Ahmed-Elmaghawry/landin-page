/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.getElementsByTagName('section');
const frag = document.createDocumentFragment();
const ul = document.getElementById('navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (let x=0 ; x<sections.length ; x++){

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.id=`sec${x+1}`;
    li.appendChild(a);
    a.textContent = sections[x].dataset.nav;
    a.setAttribute('href',`#${sections[x].id}`);
    a.setAttribute('class','menu__link');
    frag.appendChild(li);
    
}

ul.appendChild(frag);

// Add class 'active' to section when near top of viewport

function activeSection (){

    for (let section of sections){

        const scrollPosition = section.getBoundingClientRect();

        if (scrollPosition.top>=(-0.25*window.innerHeight) && scrollPosition.top<= (window.innerHeight*0.6)){
            section.classList.add('your-active-class');
            document.getElementById(`sec${section.id.slice(-1)}`).classList.add('active__link');
            document.getElementById(`sec${section.id.slice(-1)}`).classList.remove('menu__link');
        }else{
            section.classList.remove('your-active-class');
            document.getElementById(`sec${section.id.slice(-1)}`).classList.remove('active__link');
            document.getElementById(`sec${section.id.slice(-1)}`).classList.add('menu__link');
        }
    }
}

// Scroll to anchor ID using scrollIntoView event

function scrollSmooth (e){

    const scrollObject = document.getElementById(`section${e.target.textContent.slice(-1)}`);
    e.preventDefault();
    scrollObject.scrollIntoView({
        behavior: "smooth",
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

ul.addEventListener('click',scrollSmooth);

// Set sections as active

document.addEventListener('scroll',activeSection);
