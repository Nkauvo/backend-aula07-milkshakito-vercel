let categorias = [
    { id:1, nome: "Classicos"},
    { id:2, nome: "Especiais"}
];

let produtos = [
    {
        categoriaId: 1,
        nome: "Chocolate belga",
        descrição: "Milk shake com calda artesanal",
        preco: 18.00,
        imagem: "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2022/09/12/istock-926990564-rkxaa4wkac6t.jpg"
    },
    {
        categoriaId: 1,
        nome: "Morango silvestre",
        descrição: "Milk shake com frutas frescas batidas na hora",
        preco: 18.00,
        imagem: "https://cdn.midiamax.com.br/wp-content/uploads/2023/03/unnamed-file-4.jpg"
    },
    {
        categoriaId: 2,
        nome: "Ninho com Nutella",
        descrição: "A combinação favorita da casa",
        preco: 22.00,
        imagem: "https://g3ultron.com.br/imagens//produtos/444a0f91-8f0d-4ac1-ac9c-1d0f982a59e0.jpg"
    },  
    {
        categoriaId: 2,
        nome: "Cookies 'n Cream",
        descrição: "Crocante e muito cremoso",
        preco: 22.00,
        imagem: "https://thehungrykitchenblog.com/wp-content/uploads/2022/08/Boozy-Cookies-and-Cream-Milkshake-1-2.jpg"
    }
];

module.exports = { categorias, produtos };