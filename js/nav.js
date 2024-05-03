const btnNav = document.getElementById('btn_nav');
const sideNav = document.getElementById('sideNav');
const mainContent = document.getElementById('mainContent');
const logoName = document.getElementById('logoName');
const logoIcon = document.getElementById('logoIcon');
const linkNames = document.querySelectorAll('.link-name');
const toolTip = document.getElementById('toolTip');
const dropdown = document.getElementById('dropdown_content');


let isNavOpen = false;

btnNav.addEventListener('click', () => {
    if (isNavOpen) {
        sideNav.style.width = '250px';
        mainContent.style.left = '250px';
        logoIcon.style.opacity = '1';
        logoName.style.opacity = '1';
        linkNames.forEach(linkName => {
            linkName.style.opacity = '1';
        });
    } 
    else {
        sideNav.style.width = '70px';
        mainContent.style.left = '70px';
        logoIcon.style.opacity = '0';
        logoName.style.opacity = '0';
        dropdown.style.display = 'none';
        
        linkNames.forEach(linkName => {
            linkName.style.opacity = '0';
        });
    }
    isNavOpen = !isNavOpen;
   
});

// btnNav.addEventListener('click', () => {

// if (sideNav.style.width === '70px') {
//         toolTip.style.opacity = '1';
//         toolTip.style.display = 'none';
//     }

// else if (sideNav.style.width === '250px') {
//         toolTip.style.opacity = '0';
//         toolTip.style.display = 'none';
//     }        

// });


function updateDateTime() {
    const datetimeDisplay = document.getElementById("datetime-display");
    const now = new Date();

    // Format the date and time as needed (e.g., using toLocaleString()).
    const formattedDateTime = now.toLocaleString();

    datetimeDisplay.textContent = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);




// const dropDown = document.getElementById('dropdown_content');
// const dropdown_btn = document.getElementById('dropdown_btn');

// dropdown_btn.addEventListener('click', function(){
//     dropDown.classList.toggle("open-dropdown");

//     // Check if dropdown is closed, then hide it
//     if (!dropDown.classList.contains("open-dropdown")) {
//         dropDown.style.display = "none";
//     }
// });


const dropDown = document.getElementById('dropdown_content');
const dropdown_btn = document.getElementById('dropdown_btn');

dropdown_btn.addEventListener('click', function(){
    // Toggle the dropdown visibility
    dropDown.classList.toggle("open-dropdown");

    // If the dropdown is open, hide it; if it's closed, show it
    if (dropDown.classList.contains("open-dropdown")) {
        dropDown.style.display = "block";
    } else {
        dropDown.style.display = "none";
    }
});

