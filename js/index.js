//For The User Login And Password Modal
const userLoginModal = document.querySelector(".user-login-modal");

userLoginModal.addEventListener("click", userOnclick => {
const userModal= document.querySelector(".user-modal");
console.log(userModal);
userModal.style= "display: block; !importent";
    userModal.addEventListener("click", (f)=>{
        userModal.style= "";
    });
});



const btnGroup = document.querySelectorAll(".zx-btn");
        const tabGroup = document.querySelectorAll(".zx-tabs");

        tabGroup.forEach((eachTabs) => {

            btnGroup.forEach((eachBtn) => {

                eachBtn.addEventListener("click", () => {

                    eachTabs.classList.remove("zx-tabs-show");
                    //console.log(eachBtn);

                    if (+eachBtn.dataset.fortab === +eachTabs.dataset.tab) {
                        btnGroup.forEach(btn => { btn.classList.remove("btn-show") });

                        eachTabs.classList.add("zx-tabs-show");
                        eachBtn.classList.add("btn-show");
                    };
                });
            });
        });













/*
const allCartBtn = document.querySelectorAll(".grocery-card-button");
console.log(allCartBtn);

allCartBtn.forEach( e =>{
    
    e.addEventListener("click", s=>{
        console.log(s);
    });

});
*/















//For The Header Section.............

const headerSection = document.querySelector(".section-first-header");
// console.log(headerSection);

const mainNav = document.querySelector(".site-navigation-header");
const mainNavText = document.querySelectorAll(".nav-navigation-text");

const observeSect = new IntersectionObserver((entities)=>{
    // console.log(entities[0].isIntersecting);

    mainNav.classList.toggle("fixed-top", !entities[0].isIntersecting);
    mainNav.classList.toggle("bg-white", !entities[0].isIntersecting);

    // console.log(mainNav);
    mainNavText.forEach(element => {
        element.classList.toggle("text-white", entities[0].isIntersecting);
        element.classList.toggle("red-nav", !entities[0].isIntersecting);
        mainNav.classList.toggle("pt-3", !entities[0].isIntersecting);
        mainNav.classList.toggle("pb-3", !entities[0].isIntersecting);
        element.classList.toggle("text-black", !entities[0].isIntersecting);
    });

}, {/*rootMargin: "1px"*/});     


observeSect.observe(headerSection);




//For the owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout: 2000,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});