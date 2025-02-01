document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelector(".bars-menu");
    const menu = document.querySelector(".menu");
    const to_top = document.querySelector(".to-top-item");
    const home = document.querySelector(".home-section");
    const button = document.querySelectorAll(".sec2-btn");
    let  cur = 0
    button.forEach((btn)=>{
        btn.addEventListener("click",() =>{
          cur++
          alert(`What you have selected has been added to the cart(quantity of your choice was ${cur}), but because you do not have a page, you cannot see`)
        })
    })
    bars.addEventListener("click", function(){
        menu.classList.toggle("showMenu");
    });
    window.addEventListener('scroll', () =>{
        const homeSection = home.offsetTop;
        const scrollValue = window.scrollY;
        if(scrollValue > homeSection){
            to_top.classList.add("activeTop");
        }else{
            to_top.classList.remove("activeTop");
        }
    })
})
