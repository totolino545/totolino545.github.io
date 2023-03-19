//Funcion mostrar info respomsivo

let info = document.getElementById("toggle-switch");
let div = document.getElementById("miperfil");
let lista = document.getElementById("nav");
function showContent() {
  if (info.checked) {
    div.style.display='';
    lista.style.display='none'
  }
  else {
    div.style.display='none';
    lista.style.display=''
  }
}
// Script Menu deslizable responsivo
const bodyEl = document.body
const menuEl = document.querySelector('.granmenu')
const mainEl = document.main

menuEl.addEventListener('click', () => {

	bodyEl.classList.toggle('active')  
        lista.style.display='' 
        div.style.display='none'
        info.checked = false;
})

// Script Esconderperfil
  window.addEventListener("resize", function(){
   if (screen.width < 1000){    
          div.style.display = 'none';}
      else{
          div.style.display = '';
          lista.style.display=''
      }
 })

   // Script scrollspy
   let links = document.querySelectorAll('ul li');
   let sections = document.querySelectorAll('section');
   
   // add class active & go to section When navigate Links
   links.forEach((link)=>{
     link.addEventListener('click',(e)=>{
       let ele = document.querySelector(`section.${e.target.id}`)
       
       ele.scrollIntoView({
        
         behavior:"smooth"
       })
       links.forEach(el=>{el.classList.remove('active')})
       e.target.classList.add('active')
     })
   })
   
   // add class active & go to section When scroll Links
   window.onscroll = ()=>{
     sections.forEach(section =>{
       if(window.scrollY >= section.offsetTop && window.scrollY < section.offsetTop + section.offsetHeight){
   
         let ele = document.querySelector(`#${section.classList[0]}`)
   
         links.forEach(li=>{
           li.classList.remove('active')
         })
         ele.classList.add('active')
       }
     })
   }
   
