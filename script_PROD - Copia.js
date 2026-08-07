async function carregarProdutos(categoria, destino){

    const resposta = await fetch("produtos.json");
    const produtos = await resposta.json();

    const produtosCategoria = produtos.filter(produto => produto.categoria === categoria);

if (destino === "catalogo") {

    document.getElementById("tituloCategoria").innerText = categoria;

    document.getElementById("quantidadeProdutos").innerText =
        produtosCategoria.length + " produtos encontrados";

}    

    const catalogo = document.getElementById(destino);



    



    catalogo.innerHTML = "";

    produtos
        produtosCategoria
        .slice(0, destino === "catalogo" ? 9999 : 500)
        .forEach(produto=>{

            catalogo.innerHTML += `

                    <div class="row g-4">
                        <div class="col-lg-12">
                            <div class="row g-4">
                                <div class="col-md-6 col-lg-4 col-xl-3">
                                    <div class="rounded position-relative fruite-item">
                                        <div class="fruite-img">
                                            <img src="${produto.imagem}" alt="Image" class="img-fluid w-100 rounded-top" alt="">
                                        </div>

                                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">
                                                ${produto.categoria}
                                            </div>
                                        
                                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                                                <h4>${produto.nome}</h4>
                                                <p>${produto.descricao}</p>
                                            
                                                    <div class="d-flex justify-content-between flex-lg-wrap">
                                                        <p class="text-dark fs-5 fw-bold mb-0">$ ${produto.preco}</p>
                                                        <a href="${produto.link}" target="_blank" class="btn border border-secondary rounded-pill px-3 text-rosa-escuro"><i class="fa fa-shopping-bag me-2 text-rosa-escuro"></i> Ver ${produto.loja}</a>
                                                    </div>
                                            </div>
                                    </div>

                                    
                                </div>            
                            </div>
                        </div>
                    </div>
            `;



            

        });

}

if(document.getElementById("catalogo-beleza")){
    carregarProdutos("Beleza","catalogo-beleza");
    carregarProdutos("Casa e Organização","catalogo-casa");
    carregarProdutos("Cozinha","catalogo-cozinha");
    carregarProdutos("Fitness e Saúde","catalogo-fitness");
    carregarProdutos("Moda e Acessórios","catalogo-moda");
    carregarProdutos("Pets","catalogo-pets");
    carregarProdutos("Tecnologia","catalogo-tecnologia");
    carregarProdutos("Utilidades","catalogo-utilidades");
    carregarProdutos("Eletroeletronicos e Eletrodomésticos","catalogo-eletro");
}


