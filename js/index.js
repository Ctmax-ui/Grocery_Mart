
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


const mainItemBox = document.querySelector(".items-cart-box table ");


// import { allProducts } from './itemsDetails.js';
// console.log(allProducts);

const allProducts = [
    {
        name: "Ladies Finger 500g",
        price: 350,
    },
    {
        name: "Brinjal long 500g",
        price: 300,
    },
    {
        name: "Palak 250g",
        price: 245,
    },

    // Add other products and their prices here if needed
];


const allCartBtn = document.querySelectorAll(".grocery-card-button");
allCartBtn.forEach(eachCartBtn => {

    eachCartBtn.addEventListener("click", onClickEachBtn => {
        // console.log(typeof eachCartBtn.dataset.items, eachCartBtn.dataset.items);

        let dataSetValue = eachCartBtn.dataset.items;
        console.log(dataSetValue);

        /*<------------------->*/
        // 1 Ladies Finger value.
        const ladiesFingerProduct = allProducts.find(product => product.name === "Ladies Finger 500g");
        const ladiesFingerHTML = `<tr><td>${ladiesFingerProduct.name}</td><td>x1</td><td>$${ladiesFingerProduct.price}</td></tr>`;
        
        // add more value.
        const brinjalLongProduct = allProducts.find(product => product.name === "Brinjal long 500g");
        const brinjalLongHTML = `<tr><td>${brinjalLongProduct.name}</td><td>x1</td><td>$${brinjalLongProduct.price}</td></tr>`;


        /*<------------------->*/


        if (onClickEachBtn.dataset = 0) {
            console.log("Nothing = Null");
        }

        /* <----------All Product If else---------->*/

        else if (dataSetValue === "ladiesFinger") {

            // const existingProductRow = mainItemBox.innerText;
            const existingladiesFingerRow = Array.from(mainItemBox.children).find(row => row.innerHTML.includes(ladiesFingerProduct.name));
            if (existingladiesFingerRow) {
                const countladiesFinger = existingladiesFingerRow.querySelector('td:nth-child(2)');
                const currentladiesFingerCount = parseInt(countladiesFinger.innerText.slice(1));
                countladiesFinger.innerText = `x${currentladiesFingerCount + 1}`;
                // console.log("Total Ladies Finger:", currentladiesFingerCount + 1); 
            }
            else {
                console.log("ladiesFinger added");
                mainItemBox.innerHTML += ladiesFingerHTML;
                
            };
        }

//         2nd

        else if (dataSetValue === "brinjalLong") {
            
            const existingBrinjalLongRow = Array.from(mainItemBox.children).find(row => row.innerHTML.includes(brinjalLongProduct.name));

            if (existingBrinjalLongRow) {
                const countBrinjalLong = existingBrinjalLongRow.querySelector('td:nth-child(2)');
                const currentBrinjalLongCount = parseInt(countBrinjalLong.innerText.slice(1));
                countBrinjalLong.innerText = `x${currentBrinjalLongCount + 1}`;
                // console.log("Total Ladies Finger:", currentladiesFingerCount + 1); 
            }
            else {
                console.log("brinjalLong added");
                mainItemBox.innerHTML += brinjalLongHTML;
                
            };
        }
        
        
        
        
        
        
        
        
        
        
        else {
            console.log("0");
        }
        
        
    });
});




// mainItemBox.innerHTML +=("<tr><td>Toma Cookies</td><td>x1</td><td>300$</td></tr>");









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

const headerSection = document.querySelector(".section-first-header");
// console.log(headerSection);

const mainNav = document.querySelector(".site-navigation-header");
const mainNavText = document.querySelectorAll(".nav-navigation-text");

const observeSect = new IntersectionObserver((entities) => {
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

}, {/*rootMargin: "1px"*/ });


observeSect.observe(headerSection);




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