var toggleButton=document.querySelector('.sidebar');
var sidebarOpen=document.querySelector('.display_nav');
var sidebarclose=document.querySelector('.main_button');
console.log(toggleButton);
console.log(sidebarOpen);
toggleButton.addEventListener("click", function() {
    sidebarOpen.style.display='block';
})
sidebarclose.addEventListener("click",function(){
    sidebarOpen.style.display='none';
})