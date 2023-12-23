if (document . readyState == 'loading') {
    document. addEventListener('DOMContentLoaded', ready);
}else{
    ready()
}





function ready(){
const itemsAllRemoveBtn = document.querySelectorAll(".cart-rows td button");
for( var i =0; i<itemsAllRemoveBtn.length; i++){
    let eachItemsRemoveBtn = itemsAllRemoveBtn[i];
    eachItemsRemoveBtn.addEventListener("click", removeItm);
};


const cartQuantityInputs = document.getElementsByClassName('cart-quantity-input');
for( var i =0; i<cartQuantityInputs.length; i++){
    let eachQuantityInput = cartQuantityInputs[i];
    eachQuantityInput.addEventListener('change', quantityChanged)
};


const addToCartBtn = document.getElementsByClassName('grocery-card-button');
for( var i =0; i<addToCartBtn.length; i++){
    addToCartBtn[i].addEventListener('click', eachCartBtn);
}


};

function eachCartBtn(event){
    let eachBtn = event.target.parentElement;
    let eachItemName = eachBtn.getElementsByClassName('cart-item-text')[0].innerHTML;
    let eachItemPrice = +eachBtn.querySelector('p').lastChild.data.replace('$','');
    console.log(eachItemName, eachItemPrice);

    addToCartRow(eachItemName, eachItemPrice);
    updateAllPrice()
}


function addToCartRow(eachItemName, eachItemPrice){
    
    let cartBody = document.querySelector('.items-cart-box tbody');
    let cartItemsName = document.getElementsByClassName('cart-item-title');
    for( var i =0; i<cartItemsName.length; i++){
        if (cartItemsName[i].innerHTML ==eachItemName) {
            alert("This Item Already Exsists, If you want more Edit the Quantity on Your Cart");

            return
        };

    };

    let cartRowContent = `
            <tr class="cart-rows">
                <td class="cart-item-title">${eachItemName}</td>
                <td class="cart-price">$${eachItemPrice}</td>
                <td><Button class="cart-remove-btn">Remove</Button></td>
                <td><input class="cart-quantity-input" type="number" min="0" max="99" value="1"></td>
            </tr>
        `;

    cartBody.innerHTML += cartRowContent;

    
    ready()
};










function quantityChanged(e){
    let input = e.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 0;
        updateAllPrice()
    }
    else if(input.value >= 99){
        input.value = 99;
        updateAllPrice()
    }
    //add more if you are having isssu with user.
    else{
        updateAllPrice()
    }
};

function removeItm(onClickEachRemoveBtn){
    let removeItem  = onClickEachRemoveBtn.target;
    removeItem.parentElement.parentElement.remove();
    updateAllPrice();
};

let timeId = setInterval(t=>{
    updateAllPrice()
}, 100);


function updateAllPrice(){
    let cartItemContainer = document.getElementsByClassName('items-cart-box')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-rows');
    let totalItemPrice = 0;

    for( var i = 0; i < cartRows.length; i++){
        let cartRow = cartRows[i]
        let cartPrice = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        
        let price = parseFloat(cartPrice.innerHTML.replace('$', ''));
        let quantity = +quantityElement.value;
        totalItemPrice = totalItemPrice + (price * quantity);
        // console.log(price, quantity, totalItemPrice);

        
        
        // console.log(finalPrice);
    }
    totalItemPrice = Math.round(totalItemPrice * 100) / 100; //this is for if any price has 39.59999999 then it will cut the value to 39.59. NOTE it wont go 

    let finalPrice = document.getElementsByClassName('final-items-price')[0].innerHTML= "$" + totalItemPrice;
}
