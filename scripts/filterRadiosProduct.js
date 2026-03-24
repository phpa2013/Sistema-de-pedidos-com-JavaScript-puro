export function filterRadiosProduct(inpRadio, cardapio){
   return( inpRadio === "todos"
    ? cardapio
    : cardapio.filter( el => el.categoria === inpRadio) 
    )
}