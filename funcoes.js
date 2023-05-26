var planos = [
    {
        "plano": "Plano Basic",
        "preco_anual": 129.00,
        "preco_mensal": 15.00,
        "texto": "a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut",
      
    },
    {
        "plano": "Plano Premium",
        "preco_anual": 200.00,
        "preco_mensal": 30.00,
        "texto": "a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut",
      
    },
    {
        "plano": "Plano Ultimate",
        "preco_anual": 500.00,
        "preco_mensal": 65.00,
        "texto": "a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut",
      
    },
]
console.log(planos);
for (var i = 0; i<planos.length;i++){
    var conteudo = "";
    conteudo += "<div class='cards'>"
    conteudo += `<div class='cards_titulo'><h1>${planos[i].plano}</h1></div>`;
    conteudo += "<div class='cards_texto'>";
    conteudo += `<p>Preço Mensal:  R$ ${planos[i].preco_mensal}</p>`;
    conteudo += `<p>Preço Anual:   R$ ${planos[i].preco_anual}</p>`;
    conteudo += `<p2>${planos[i].texto}</p></div>`;
    conteudo += "<button class='cards_botao' onclick='assinar()'>Assinar</button></div>";
    document.getElementById("base").innerHTML  += conteudo;
}
function assinar(){
    alert("Assinou")
}