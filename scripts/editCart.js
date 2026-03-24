export function editCart( actionButton, id, cartItems ){
    
    const product = cartItems.find( el => String(el.id) === String(id));
    if(!product) return;

    const index = cartItems.findIndex( el => String(el.id) === String(id) )

    if(actionButton === "increaseQuantity"){
        product.qtd++
    }else if( actionButton === "decreaseQuantity"){
        if(product.qtd === 1){
            cartItems.splice(index, 1)
            return
        }
        product.qtd--
    }
}