let carts = document.querySelectorAll('.add_plant');
//console.log(carts.length);

let plants = [
    {
        name: 'Lily' ,
        tag: 'lily',
        price: 33.00,
        inCart:0
    },
    {
        name: 'Pencil Plant' ,
        tag: 'pencilplant',
        price: 22.00,
        inCart:0
    },
    {
        name: 'Alocasia' ,
        tag: 'alocasia',
        price: 28.00,
        inCart:0
    },
    {
        name: 'Snake' ,
        tag: 'snake',
        price: 22.00,
        inCart:0
    },
    {
        name: 'Orchid' ,
        tag: 'orchid',
        price: 44.00,
        inCart:0
    },
    {
        name: 'Pink Calathea' ,
        tag: 'pinkcalathea',
        price: 33.00,
        inCart:0
    },
    {
        name: 'Maiden Hair' ,
        tag: 'maidenhair',
        price: 18.00,
        inCart:0
    },
    {
        name: 'Cactus' ,
        tag: 'cactus',
        price: 88.00,
        inCart:0
    },
    {
        name: 'Fern' ,
        tag: 'fern',
        price: 16.00,
        inCart:0
    },
    {
        name: 'Palm' ,
        tag: 'palm',
        price: 38.00,
        inCart:0
    },
    {
        name: 'Bird of Paradise' ,
        tag: 'birdofparadise',
        price: 55.00,
        inCart:0
    },
    {
        name: 'Monstera' ,
        tag: 'monstera',
        price: 44.00,
        inCart:0
    },
    {
        name: 'Small Cactus' ,
        tag: 'smallcactus',
        price: 44.00,
        inCart:0
    },
    {
        name: 'Rubber Tree' ,
        tag: 'rubbertree',
        price: 33.00,
        inCart:0
    },
    {
        name: 'Birds Nest' ,
        tag: 'birdsnest',
        price: 22.00,
        inCart:0
    },
    {
        name: 'Ginger' ,
        tag: 'ginger',
        price: 33.00,
        inCart:0
    },
    {
        name: 'Agave' ,
        tag: 'agave' ,
        price: 21.00,
        inCart:0
    },
    {
        name: 'Begonia' ,
        tag: 'begonia' ,
        price: 39.00,
        inCart:0
    }
];
 for (let i=0; i < carts.length; i++){
	carts[i].addEventListener('click', () =>{
        //console.log("added to cart");
        cartNumbers(plants[i]);
        totalPrice(plants[i])
    })
}

function onLoadCartNumbers() {
    let plantNumbers = localStorage.getItem('cartNumbers');

    if(plantNumbers){
        document.querySelector('.cart span').textContent= plantNumbers;
    }

}

function cartNumbers(plant) {
    //console.log("The product Clicked is", plant);
    let plantNumbers = localStorage.getItem('cartNumbers');
    //console.log(productNumbers);
    plantNumbers = parseInt(plantNumbers);
    if(plantNumbers){
        localStorage.setItem('cartNumbers',plantNumbers + 1);
        document.querySelector('.cart span').textContent= plantNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent=1;
    }
    setItems(plant);
}
function setItems(plant){
    // console.log("Inside of  SetItems function");
    // console.log("My plant is",plant);
    let cartItems = localStorage.getItem('plantsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[plant.tag] == undefined){
            cartItems={
                ...cartItems,
                [plant.tag]:plant
            }
        }
        cartItems[plant.tag].inCart += 1;
    }else{
        plant.inCart = 1;

        cartItems ={
            [plant.tag]: plant
        }
    }
    //console.log("My cartItems are", cartItems);

    localStorage.setItem("plantsInCart",JSON.stringify(cartItems));
}
function totalPrice(plant){
    //console.log("The plant price is", plant.price);
    let cartPrice = localStorage.getItem('totalPrice');
    console.log("My cartPrice is",cartPrice);
    console.log(typeof cartPrice);

    if(cartPrice != null){
        cartPrice = parseInt(cartPrice);
        localStorage.setItem("totalPrice",cartPrice + plant.price);
    }else{
        localStorage.setItem("totalPrice",plant.price);
    }
}

function deleteItem(itemTag){

  let cartItems = localStorage.getItem('plantsInCart');
  cartItems = JSON.parse(cartItems);

  var price = cartItems[itemTag].price * cartItems[itemTag].inCart;
  console.log(price);

  let cartPrice = parseInt(localStorage.getItem('totalPrice'))-price;
  localStorage.setItem("totalPrice",cartPrice);

  let plantNumbers = parseInt(localStorage.getItem('cartNumbers'))- cartItems[itemTag].inCart;
  localStorage.setItem('cartNumbers',plantNumbers);

  delete cartItems[itemTag];
  localStorage.setItem("plantsInCart",JSON.stringify(cartItems));
  displayCart();
  location.reload();
}


function displayCart(){
     let cartItems= localStorage.getItem("plantsInCart");
     cartItems = JSON.parse(cartItems);

     let plantContainer = document.querySelector(".plants");
     let cartPrice = localStorage.getItem('totalPrice');
     console.log(cartItems);
     if (cartItems && plantContainer){
         plantContainer.innerHTML = '';
         Object.values(cartItems).map(item => {
            plantContainer.innerHTML += `
            <div class = "product">
            <img src="./media/close.png" class="delete_btn" onclick="deleteItem('${item.tag}')">
            <img src="./media/${item.tag}.png" class="image">
            <span>${item.name}</span>
            </div>
            <div class="plant_price">$${item.price},00</div>
            <div class="quantity">
                <img src="./media/add.png">
                <span>${item.inCart}</span>
                <img src="./media/minus.png">
            </div>
            <div class="total">
                $${item.inCart * item.price},00
            </div>
           `

        });
        plantContainer.innerHTML += `
            <div class="cartTotalContainer">
                <h4 class="cartTotalTitle">
                    Cart Total
                </h4>
                <h4 class="cartTotal">
                    $${cartPrice},00

        `
    }
    
}
onLoadCartNumbers();
displayCart();
