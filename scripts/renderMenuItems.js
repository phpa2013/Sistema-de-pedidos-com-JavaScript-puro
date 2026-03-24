export function renderMenuItems(container, list){
    container.textContent = "";

    const fragment = document.createDocumentFragment();

    list.forEach(el => {
        const li = document.createElement("li");
        li.dataset.id = el.id;
        li.className = "liItem"

        const img = document.createElement("img");
        img.className = "imgFluid"
        img.alt = el.nome;
        img.src = el.imagem;


        const productTitle = document.createElement("p");
        productTitle.className = "productTitle";
        productTitle.textContent = `${el.nome} ${el.preco.toLocaleString("pt-BR" , {
            style:"currency", currency: "BRL"
        })}`


        const productDescription = document.createElement("p");
        productDescription.className = "productDescription";
        productDescription.textContent = el.descricao;

        const divBtn = document.createElement("div");
        divBtn.className = "divBtn"

        const addToCartButton = document.createElement("button");
        addToCartButton.setAttribute("aria-label", "adicionar no carrinho")
        addToCartButton.dataset.action = "addToCart"
        addToCartButton.className = "btnMais";
        addToCartButton.textContent = " + "

        divBtn.appendChild(addToCartButton);

        li.append(img, productTitle, productDescription, divBtn);

        fragment.appendChild(li);
    });

    container.appendChild(fragment);
}