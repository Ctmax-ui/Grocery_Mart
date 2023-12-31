
//For the items cart...................
const itemsBtnBox = document.querySelector(".items-cart-btn");
const itemBox = document.querySelector(".items-cart-container");

function onclickItems() {
    itemBox.style.display= 'block';
    const itemsCloseIcn = document.querySelector(".items-cart-close-icn")
    itemsCloseIcn.addEventListener("click", (f) => {
        itemBox.style.display = 'none'
    });
};

itemsBtnBox.addEventListener("click", onclickItems);

let btnProduct= document.querySelectorAll('.product-card-button')
    btnProduct.forEach(e=>{
        e.addEventListener('click', onclickItems)
    });

// itemsBtnBox.addEventListener("click", onclickItems => {
//     itemBox.style = "display: block; !importent";
//     const itemsCloseIcn = document.querySelector(".items-cart-close-icn")
//     itemsCloseIcn.addEventListener("click", (f) => {
//         itemBox.style = "";
//     });
// });
// console.log(btnProduct);





//For the search modal...............
const searchModal = document.querySelector(".search-modal-btn");
const userSearch = document.querySelector(".search-modal-container");
searchModal.addEventListener("click", onclickSearch => {
    // console.log(onclickSearch);
    // console.log(userSearch);
    userSearch.style = "display: block; !importent";

    document.addEventListener("click", (f) => {
        if (f.target === userSearch && f.target !== userSearch.children[0]) {
            userSearch.style = "";
        }
    });
});



//For The User Login And Password Modal..............
const userLoginModal = document.querySelector(".user-login-modal");
const userModal = document.querySelector(".user-modal");

userLoginModal.addEventListener("click", (userOnclick) => {
    userOnclick.stopPropagation();
    userModal.classList.toggle("user-modal-show");
});

document.addEventListener("click", (clickEvent) => {

    if (clickEvent.target === userModal && clickEvent.target !== userModal.children[0]) {
        userModal.classList.remove("user-modal-show");
    }
});



//For the login and create Account tab/pill
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

// for the items preview box

let allItemsPreviewbox = document.querySelectorAll('.product-slider-preview-box');

let itemsPreviewModalContainer = document.querySelector('.items-preview-modal-container');
let previewModalBtn = document.querySelector('#preview-modal-btn');


let modalPreviewImg = document.querySelector('.product-preview-image-box img');
let modalPreviewName = document.querySelector('.product-preview-name');
let modalPreviewNPrice = document.querySelector('.product-preview-price p');
let modalPreviewNAddBtn = document.querySelector('.product-preview-add-cart-btn');

previewModalBtn.addEventListener('click', function () {
    itemsPreviewModalContainer.style = 'display:none;'
});







// console.log(allItemsPreviewbox);

for (let i = 0; i < allItemsPreviewbox.length; i++) {
    let allItemsPreviewboxParent = allItemsPreviewbox[i].parentElement;
    let allItemsPreviewB = allItemsPreviewbox[i];


    allItemsPreviewB.addEventListener('click', function () {

        // console.log(allItemsPreviewboxParent.nextElementSibling.children[2].outerHTML);

        modalPreviewImg.src = allItemsPreviewboxParent.querySelector('img').src
        modalPreviewName.innerHTML = allItemsPreviewboxParent.nextElementSibling.children[0].outerHTML;
        modalPreviewNPrice.innerText = allItemsPreviewboxParent.nextElementSibling.children[1].innerText.slice(4).trim();
        modalPreviewNAddBtn.innerHTML = allItemsPreviewboxParent.nextElementSibling.children[2].outerHTML

        itemsPreviewModalContainer.style = 'display:block;'
    });


};








//For The Header Section.............

window.addEventListener('scroll', function () {
    let header = document.querySelector('.site-navigation-header');
    header.classList.toggle('sticky', window.scrollY > 125);
    let headerTexts = document.querySelectorAll('.nav-navigation-text');
    headerTexts.forEach(function (e) {
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