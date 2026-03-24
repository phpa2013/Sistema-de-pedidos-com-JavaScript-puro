export function renderCartItems(container, cartItems, subtotalCart){

    
    container.textContent = "";

    const total = cartItems.reduce( (acc,atual) => {
        return acc + (atual.preco * atual.qtd);
    },0)

    const fragment = document.createDocumentFragment()

    cartItems.forEach(el => {


    const li = document.createElement("li");
    li.dataset.id = el.id
    li.className = "liItem";

    const img = document.createElement("img");
    img.className = "imgFluid";
    img.alt = el.nome;
    img.src = el.imagem;

    const productTitle = document.createElement("p");
    productTitle.className = "productTitle";
    productTitle.textContent = `${el.nome} - ${el.preco}`;

    const subTotal = el.preco * el.qtd;
    const itemSubtotal = document.createElement("p");
    itemSubtotal.className = "itemSubtotal";
    
    itemSubtotal.textContent = `X${el.qtd} ${subTotal.toLocaleString("pt-BR", {
        style:"currency", currency:"BRL"
    })}`

    const productDescription = document.createElement("p");
    productDescription.className = "productDescription";
    productDescription.textContent = el.descricao;

    const divBtn = document.createElement("div");
    divBtn.className = "divBtn";

    const increaseQuantityButton = document.createElement("button");
    increaseQuantityButton.setAttribute("aria-label", "aumentar quantidade");
    increaseQuantityButton.dataset.action = "increaseQuantity";
    increaseQuantityButton.className = "btnMais";
    increaseQuantityButton.textContent = " + ";


    const decreaseQuantityButton = document.createElement("button");
    decreaseQuantityButton.setAttribute("aria-label", "diminuir quantidade");
    decreaseQuantityButton.dataset.action = "decreaseQuantity"
    decreaseQuantityButton.className = "btnMenos";
    decreaseQuantityButton.textContent = " - ";    


    divBtn.append(increaseQuantityButton, decreaseQuantityButton);

    li.append(img, productTitle, productDescription, itemSubtotal, divBtn);

    fragment.appendChild(li)

     });

     container.appendChild(fragment)

     subtotalCart.textContent = total.toLocaleString("pt-BR", {
        style:"currency", currency:"BRL"
     })

    }