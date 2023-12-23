// export const allProducts = [
//         {
//             name: "Ladies Finger",
//             price: 350,
//         },
//         {
//             name: "Ladies Finger",
//             price: 350,
//         },
//         {
//             name: "Ladies Finger",
//             price: 350,
//         },
    
//         // Add other products and their prices here if needed
//     ];














    
const mainItemBox = document.querySelector(".items-cart-box table ");


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
