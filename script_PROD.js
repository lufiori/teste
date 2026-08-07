async function carregarProdutos(categoria, destino){

    const resposta = await fetch("produtos.json");
    const produtos = await resposta.json();

    const produtosCategoria = categoria === "Todos"
        ? produtos
        : produtos.filter(produto => produto.categoria === categoria);

    if (destino === "catalogo") {
        document.getElementById("tituloCategoria").innerText = categoria;
        document.getElementById("quantidadeProdutos").innerText =
            produtosCategoria.length + " produtos encontrados";
    }

    const catalogo = document.getElementById(destino);
    if (!catalogo) return;

    catalogo.innerHTML = "";

    produtosCategoria
        .slice(0, destino === "catalogo" ? 9999 : 8)
        .forEach(produto => {

            catalogo.innerHTML += `




                            <div class="col-md-6 col-lg-4 col-xl-3">
                                <div class="rounded position-relative fruite-item">
                                    <div class="fruite-img">
                                        <img src="${produto.imagem}" alt="Image" class="img-fluid w-100 rounded-top">
                                    </div>

                                    <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">
                                        ${produto.categoria}
                                    </div>

                                    <div class="p-4 border border-secondary border-top-0 rounded-bottom">

                                        <p>${produto.nome}</p>

                                        <h4> $ ${produto.preco} </h4>

                                        <a href="${produto.link}" target="_blank" class="btn border border-secondary rounded-pill px-3 text-rosa-escuro">
                                            <i class="fa fa-shopping-bag me-2 text-rosa-escuro"></i>  Ver ${produto.loja}</a>
                                        </div>

                                    </div>
                                </div>
                            </div>




            `;
        });
}


const params = new URLSearchParams(window.location.search);
const categoria = params.get("cat") || "Todos";

if(document.getElementById("catalogo")){
    carregarProdutos(categoria, "catalogo");
}

if(document.getElementById("catalogo-todos")){
    carregarProdutos("Todos", "catalogo-todos");
}

if(document.getElementById("catalogo-beleza")){
    carregarProdutos("Beleza", "catalogo-beleza");
}

if(document.getElementById("catalogo-casa")){
    carregarProdutos("Casa e Organização", "catalogo-casa");
}

if(document.getElementById("catalogo-cozinha")){
    carregarProdutos("Cozinha", "catalogo-cozinha");
}

if(document.getElementById("catalogo-fitness")){
    carregarProdutos("Fitness e Saúde", "catalogo-fitness");
}

if(document.getElementById("catalogo-moda")){
    carregarProdutos("Moda e Acessórios", "catalogo-moda");
}

if(document.getElementById("catalogo-pets")){
    carregarProdutos("Pets", "catalogo-pets");
}

if(document.getElementById("catalogo-tecnologia")){
    carregarProdutos("Tecnologia", "catalogo-tecnologia");
}

if(document.getElementById("catalogo-utilidades")){
    carregarProdutos("Utilidades", "catalogo-utilidades");
}

if(document.getElementById("catalogo-eletro")){
    carregarProdutos("Eletroeletronicos e Eletrodomésticos", "catalogo-eletro");
}

