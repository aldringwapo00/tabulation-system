const addButton = document.getElementById('addButton');
const overlay = document.getElementById('overlay');
const Form = document.getElementById('eventForm');
const closeButton = document.getElementById('closeButton');

addButton.addEventListener('click', function(){
   overlay.style.display = "block";
   Form.style.display = "block";
});

closeButton.addEventListener('click', function(){
    overlay.style.display = "none";
    Form.style.display = "none";
 });

overlay.addEventListener('click', function(eventForm) {
    if(event.target === overlay){
        overlay.style.display = "none";
        Form.style.display = "none";
    }
 });
