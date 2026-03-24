export function filterItemInput (inputValue, cardapio){
    return cardapio.filter( el => el.nome.toLowerCase().includes(inputValue.toLowerCase()))
}