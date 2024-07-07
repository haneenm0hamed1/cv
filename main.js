// fixed navbar
window.addEventListener('scroll',function(){
    var nav= document.getElementById('nav');
    nav.classList.toggle('sticky',window.scrollY >0)
})

// to top
const Totop= document.querySelector('.to-top');
window.addEventListener('scroll',function(){
    if(this.window.scrollY > 100){
        Totop.classList.add('active')
    } else{
        Totop.classList.remove('active')
    }
})

// animation
let sections = document.querySelectorAll('section')


 window.onscroll= () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offest = sec.offsetTop -150;
        let height = sec.offsetHeight;

if( top >= offest && top < offest + height +40){
    sec.classList.add('show-animate');

}
else{
    sec.classList.remove('show-animate');

}
    })
 }
