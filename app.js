function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(campoPesquisa == ""){
        section.innerHTML = "<p class='aviso'>Digite um nome de animal para pesquisar.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    console.log(section);

    let resultados = "";
    
    
        for (let dado of dados) {
            let nome = dado.nome.toLowerCase();
            let especie = dado.especie.toLowerCase();
            let descricao = dado.descricao.toLowerCase();
            let local = dado.local.toLowerCase();
            let tags = dado.tags.toLowerCase();

            if (nome.includes(campoPesquisa) || especie.includes(campoPesquisa) || local.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                let classeExtinto = dado.extincao ? "extinto" : "";
                if(dado.extincao){
                    resultados += `
                        <div class="item-resultado ${classeExtinto}">
                            <h2>
                                <a href="${dado.link}" target="_blank">${dado.nome} (Risco de Extinção) <span class="txt_especie">${dado.especie}</span></a>
                            </h2>
                            <p class="descricao-meta">${dado.descricao}</p>
                            <a href="${dado.link}" target="_blank">Mais Informações</a>
                            <p>Local: ${dado.local}</p>
                        </div>
                    `;
                }else{
                    resultados += `
                        <div class="item-resultado ${classeExtinto}">
                            <h2>
                                <a href="${dado.link}" target="_blank">${dado.nome} <span class="txt_especie">${dado.especie}</span></a>
                            </h2>
                            <p class="descricao-meta">${dado.descricao}</p>
                            <a href="${dado.link}" target="_blank">Mais Informações</a>
                            <p>Local: ${dado.local}</p>
                        </div>
                    `;
                }    
            }
        }
    

    section.innerHTML = resultados;
}

function pesquisarTodos() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = ""; 

    for (let dado of dados) {
        let classeExtinto = dado.extincao ? "extinto" : "";
        resultados += `
            <div class="item-resultado ${classeExtinto}">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.nome} <span class="txt_especie">${dado.especie}</span></a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais Informações</a>
                <p>Local: ${dado.local}</p>
            </div>
        `;
    }

    section.innerHTML = resultados; 
}

function RiscoExtincao() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = ""; 

    for (let dado of dados) {
        if (dado.extincao) {
            resultados += `
                <div class="item-resultado extinto">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.nome} (Risco de Extinção) <span class="txt_especie">${dado.especie}</span></a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais Informações</a>
                    <p>Local: ${dado.local}</p>
                </div>
            `;
        }
    }

    section.innerHTML = resultados;
}