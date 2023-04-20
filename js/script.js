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