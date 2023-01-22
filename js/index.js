// Write your Pizza Builder JavaScript in this file.

// import { link } from "fs";

// Constants
const basePrice = 10;
let total = 13;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};


// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  let pepperoniPrice = document.querySelector('.panel.price ul li:first-child');

  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
      pepperoniPrice.innerHTML = '$' + ingredients.pepperoni.price + ' pepperoni';
    } 
    else {
      onePep.style.visibility = 'hidden';
      pepperoniPrice.innerHTML = '';
    }
  });

}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  let mushroomsPrice = document.querySelector('.panel.price ul li:nth-child(2)');

  document.querySelectorAll('.mushroom').forEach((oneCap) => {
    if (state.mushrooms) {
      oneCap.style.visibility = 'visible';
      mushroomsPrice.innerHTML = '$' + ingredients.mushrooms.price + ' mushrooms';

    } else {
      oneCap.style.visibility = 'hidden';
      mushroomsPrice.innerHTML = '';   
    }
  });
}

function renderGreenPeppers() {
    let greenPeppersPrice = document.querySelector('.panel.price ul li:nth-child(3)');

  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGPep) => {
    if (state.greenPeppers) {
      oneGPep.style.visibility = 'visible';
      greenPeppersPrice.innerHTML = '$' + ingredients.greenPeppers.price + ' green peppers';

    } else {
      oneGPep.style.visibility = 'hidden';
      greenPeppersPrice.innerHTML = '';

    }
  });
}

function renderWhiteSauce() {
  let whiteSaucePrice = document.querySelector('.panel.price ul li:nth-child(4)');

  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  sauce=document.querySelectorAll('.sauce')[0]
  
    if (state.whiteSauce) {
      sauce.classList.add('class', 'sauce-white');
      whiteSaucePrice.innerHTML = '$' + ingredients.whiteSauce.price + ' white sauce';

      
    } else {
      sauce.classList.remove('class', 'sauce-white');
      whiteSaucePrice.innerHTML = '';
     }
  };
 


function renderGlutenFreeCrust() {
  let glutenFreeCrustPrice = document.querySelector('.panel.price ul li:nth-child(5)');

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  crust=document.querySelectorAll('.crust')[0]
  
  if (state.glutenFreeCrust) {
    crust.classList.add('class', 'crust-gluten-free');
    glutenFreeCrustPrice.innerHTML = '$' + ingredients.glutenFreeCrust.price + ' gluten-free crust';
    
  } else {
    crust.classList.remove('class', 'crust-gluten-free');
    glutenFreeCrustPrice.innerHTML = '';
   }
};


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  sauceBtn=document.querySelectorAll('.btn-sauce')[0]
  if (state.whiteSauce) {
    sauceBtn.classList.add('active');
    
  } else {
    sauceBtn.classList.remove('active');
   }


pepperoniBtn=document.querySelectorAll('.btn-pepperoni')[0]
if (state.pepperoni) {
  pepperoniBtn.classList.add('active');
  
} else {
  pepperoniBtn.classList.remove('active');
 };


mushroomsBtn=document.querySelectorAll('.btn-mushrooms')[0]
if (state.mushrooms) {
  mushroomsBtn.classList.add('active');
  
} else {
  mushroomsBtn.classList.remove('active');
 };

 greenPeppersBtn=document.querySelectorAll('.btn-green-peppers')[0]
    if (state.greenPeppers) {
      greenPeppersBtn.classList.add('active');
      
    } else {
      greenPeppersBtn.classList.remove('active');
     }

     crustBtn=document.querySelectorAll('.btn-crust')[0]
     if (state.glutenFreeCrust) {
       crustBtn.classList.add('active');
       
     } else {
       crustBtn.classList.remove('active');
      }   

};


function renderPrice() {

let totalPrice= document.querySelector('.panel.price strong');

totalPrice.innerHTML = '$' + total
};







// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  if (state.pepperoni){
    total-=ingredients.pepperoni.price;
  } else {
    total+=ingredients.pepperoni.price
  }
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  if (state.mushrooms){
    total-=ingredients.mushrooms.price;
  } else {
    total+=ingredients.mushrooms.price;
  }
  state.mushrooms = !state.mushrooms;
 
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  if (state.greenPeppers){
    total-=ingredients.greenPeppers.price;
  } else {
    total+=ingredients.greenPeppers.price;
  }
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  if (state.whiteSauce){
    total-=ingredients.whiteSauce.price;
  } else {
    total+=ingredients.whiteSauce.price
  }
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  if (state.glutenFreeCrust){
    total-=ingredients.glutenFreeCrust.price;
  } else {
    total+=ingredients.glutenFreeCrust.price
  }
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});