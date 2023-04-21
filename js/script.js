// Mobile responsive naverbar sticky
const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100);
});

// About Tab
var tablink = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){

for(tablinks of tablink){
    tablinks.classList.remove("active-link");
}
for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}

// Contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyh_X6-SAzE5NXblht9txkXBj6eYrQa9kJqkI970WgqSYR35DwFE_Ymw2rqrMZogKPRoA/exec'
  const form = document.forms['submit-to-google-sheet']
  const nsg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
          msg.innerHTML = "Message sent successfully"
          setTimeout(function(){
              
            msg.innerHTML=""
          }, 5000)
          form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

//  Menu list
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};