const open=document.querySelector('.menu-open');
const close=document.querySelector('.menu-close');
const menu=document.querySelector('nav');

open.addEventListener('click',()=>{

    close.style.display="block";
    open.style.display="none";
    menu.style.right="0";
    
})

close.addEventListener('click',()=>{

    close.style.display="none";
    open.style.display="block";
    menu.style.right="-300px";

})