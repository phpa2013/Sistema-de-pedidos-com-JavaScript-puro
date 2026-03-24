import { cardapio } from "./dados.js";
import { renderMenuItems } from "./renderMenuItems.js";
import { addToCart } from "./addToCart.js";
import { renderCartItems } from "./renderCartItems.js";
import { editCart } from "./editCart.js";
import { filterRadiosProduct } from "./filterRadiosProduct.js";
import { filterItemInput } from "./filterInput.js";


//Variáveis
const listaCardapio = document.querySelector(".listaCardapio");
const listaCarrinho = document.querySelector(".listaCarrinho");
const subtotalCart = document.querySelector(".info p");
const filterRadios = document.querySelector(".filterRadios");
const txtFilter = document.querySelector("#txtFilter");
let cartItems = [];



//funções
renderMenuItems(listaCardapio, cardapio)



//eventos

//evento para saber se o usuário adicionou um ou mais itens 
listaCardapio.addEventListener("click", (event)=> {
    const btn = event.target.closest("button");
    if(!btn) return;

    const li = btn.closest("li");
    if(!li) return;

    const id = li.dataset.id

    addToCart(id, cartItems, cardapio);    
    localStorage.setItem("cartItemsSave", JSON.stringify(cartItems))
    renderCartItems(listaCarrinho, cartItems, subtotalCart)

})

//evento pra saber qual botão dos itens que estão no carrinho foi clicado
listaCarrinho.addEventListener("click", (event)=> {
    const btn = event.target.closest("button");
    if(!btn) return;

    const li = btn.closest("li");
    if(!li) return

    const id = li.dataset.id;

    const actionButton = btn.dataset.action

    editCart(actionButton, id, cartItems);    
    localStorage.setItem("cartItemsSave", JSON.stringify(cartItems))
    renderCartItems(listaCarrinho, cartItems, subtotalCart)

})

window.addEventListener("DOMContentLoaded", ()=> {
    try{
       cartItems = JSON.parse(localStorage.getItem("cartItemsSave")) || [];     
    }catch{
        cartItems = [];
    }
    renderCartItems(listaCarrinho, cartItems, subtotalCart)
    
})

//filtrar cardápio quando os input radios forem marcados
filterRadios.addEventListener("change", (event)=> {
    const input = event.target.closest("input[type='radio']");
    if(!input) return

    const inputValue = input.value

    const result = filterRadiosProduct(inputValue, cardapio);

    renderMenuItems(listaCardapio, result);
})

//evento no campo de busca do input
txtFilter.addEventListener("input", (event)=> {
    const input = event.target.closest("input");
    if(!input) return

    const valueInput = input.value;

    const response = filterItemInput(valueInput, cardapio);

    renderMenuItems(listaCardapio, response)  


})