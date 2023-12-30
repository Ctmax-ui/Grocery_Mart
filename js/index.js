
//For the items cart...................
const itemsBtnBox = document.querySelector(".items-cart-btn");
const itemBox = document.querySelector(".items-cart-container");
itemsBtnBox.addEventListener("click", onclickItems => {
    itemBox.style = "display: block; !importent";
    const itemsCloseIcn = document.querySelector(".items-cart-close-icn")
    itemsCloseIcn.addEventListener("click", (f) => {
        itemBox.style = "";
    });
});



//For the search modal...............
const searchModal = document.querySelector(".search-modal-btn");
const userSearch = document.querySelector(".search-modal-container");
searchModal.addEventListener("click", onclickSearch => {
    // console.log(onclickSearch);
    // console.log(userSearch);
    userSearch.style = "display: block; !importent";
    userSearch.addEventListener("click", (f) => {
        userSearch.style = "";
    });
});




//For The User Login And Password Modal..............
const userLoginModal = document.querySelector(".user-login-modal");

userLoginModal.addEventListener("click", userOnclick => {
    const userModal = document.querySelector(".user-modal");
    // console.log(userModal);
    userModal.classList.add("user-modal-show");
    userModal.addEventListener("click", (f) => {
        userModal.classList.remove("user-modal-show");
    });
});


//For the login and create Account tap/pill
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











//For The Header Section.............

window.addEventListener('scroll', function () {
    let header = document.querySelector('.site-navigation-header');
    header.classList.toggle('sticky', window.scrollY > 125);
    let headerTexts = document.querySelectorAll('.nav-navigation-text');
    headerTexts.forEach(function(e){
        e.classList.toggle('sticky', window.scrollY > 125);
    });
});







//For the owl carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});