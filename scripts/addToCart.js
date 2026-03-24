export function addToCart(id, cartItems, cardapio){
    
    const product = cardapio.find( el => String(el.id) === String(id));
    if(!product) return;    

    const indexItem = cartItems.findIndex( el => String(el.id) === String(id) )


    if(indexItem > -1){
        cartItems[indexItem].qtd++
        return
    }
    
    cartItems.push(
        {
            id: product.id,
            imagem: product.imagem,
            nome: product.nome,
            preco: product.preco,
            descricao: product.descricao,
            qtd: 1

        }
    )
}