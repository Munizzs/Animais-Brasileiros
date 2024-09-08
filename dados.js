let dados = [
    {
        nome: "Arara-Azul",
        especie: "Anodorhynchus hyacinthinus",
        descricao: "A arara-azul é uma ave psitaciforme da família Psittacidae. É uma das aves mais cobiçadas do mundo, devido à sua beleza e ao seu tamanho. A arara-azul é uma ave de grande porte, medindo cerca de 100 cm de comprimento e pesando entre 1,2 e 1,7 kg.",
        link: "https://brasilescola.uol.com.br/animais/arara-azul.htm",
        local: "Mato Grosso do Sul",
        tags: "Arara Ave Azul Mato Grosso do Sul",
        extincao: true 
    },
    {
        nome: "Onça-Pintada",
        especie: "Panthera onca",
        descricao: "A onça-pintada é um mamífero carnívoro da família Felidae. É o maior felino das Américas e o terceiro maior do mundo, depois do tigre e do leão. A onça-pintada é um animal solitário e territorial, que caça principalmente à noite.",
        link: "https://www.infoescola.com/animais/onca-pintada/",
        local: "Pantanal",
        tags: "Onça Pintada Felino Pantanal Carnívoro Territorial",
        extincao: true 
    },
    {
        nome: "Tucano",
        especie: "Ramphastos",
        descricao: "O tucano é uma ave piciforme da família Ramphastidae. É uma das aves mais exóticas e coloridas do mundo, devido ao seu bico grande e colorido. O tucano é uma ave de médio porte, medindo cerca de 50 cm de comprimento e pesando entre 300 e 500 g.",
        link: "https://brasilescola.uol.com.br/animais/tucano.htm",
        local: "Amazônia",
        tags: "Tucano Ave Amazônia Bico Grande Colorido Exótico",
        extincao: false 
    },
    {
        nome: "Mico-Leão-Dourado",
        especie: "Leontopithecus rosalia",
        descricao: "O mico-leão-dourado é um primata da família Callitrichidae. É uma das espécies de primatas mais ameaçadas de extinção do mundo, devido à destruição do seu habitat natural e ao tráfico ilegal de animais. O mico-leão-dourado é um animal pequeno, medindo cerca de 30 cm de comprimento e pesando entre 300 e 400 g.",
        link: "https://www.infoescola.com/animais/mico-leao-dourado/",
        local: "Rio de Janeiro",
        tags: "Mico Leão Dourado Primata Callitrichidae Extinção Tráfico Ilegal Rio de Janeiro",
        extincao: true 
    },
    {
        nome: "Preguiça",
        especie: "Bradypus variegatus",
        descricao: "A preguiça é um mamífero da ordem Pilosa. É um animal de porte médio, medindo cerca de 60 cm de comprimento e pesando entre 3 e 4 kg. A preguiça é um animal solitário e arborícola, que passa a maior parte do tempo dormindo ou descansando.",
        link: "https://www.biologianet.com/biodiversidade/bicho-preguica.htm",
        local: "Amazônia",
        tags: "Preguiça Mamífero Pilosa Arborícola Dormindo Descansando Amazônia Bicho Preguiça",
        extincao: false 
    },
    {
        nome: "Lobo-Guará",
        especie: "Chrysocyon brachyurus",
        descricao: "O lobo-guará é o maior canídeo da América do Sul, com pernas longas e pelagem avermelhada. Vive em áreas abertas como o Cerrado e é conhecido por seu hábito alimentar onívoro, consumindo tanto plantas quanto animais.",
        link: "https://www.infoescola.com/animais/lobo-guara/",
        local: "Cerrado",
        tags: "Lobo Guará Canídeo Cerrado Onívoro",
        extincao: true 
    },
    {
        nome: "Tamanduá-Bandeira",
        especie: "Myrmecophaga tridactyla",
        descricao: "O tamanduá-bandeira é um mamífero da ordem Pilosa, caracterizado por seu focinho longo e língua pegajosa, usada para capturar formigas e cupins. Pode ser encontrado em várias regiões do Brasil, principalmente em áreas abertas e savanas.",
        link: "https://www.infoescola.com/animais/tamandua-bandeira/",
        local: "Pantanal",
        tags: "Tamanduá Bandeira Mamífero Formigas Cupins Pantanal",
        extincao: true 
    },
    {
        nome: "Peixe-Boi",
        especie: "Trichechus inunguis",
        descricao: "O peixe-boi é um mamífero aquático encontrado nos rios da Amazônia. É um dos maiores mamíferos aquáticos do Brasil, conhecido por seu comportamento tranquilo e herbívoro, alimentando-se de plantas aquáticas.",
        link: "https://www.infoescola.com/animais/peixe-boi/",
        local: "Amazônia",
        tags: "Peixe Boi Mamífero Aquático Herbívoro Amazônia",
        extincao: true 
    },
    {
        nome: "Ararajuba",
        especie: "Guaruba guarouba",
        descricao: "A ararajuba é uma ave psitaciforme da família Psittacidae, conhecida por sua plumagem amarelo-vivo com as pontas das asas verdes. Vive nas florestas tropicais do norte do Brasil e é muito apreciada como ave de estimação.",
        link: "https://www.wikiaves.com.br/wiki/ararajuba",
        local: "Amazônia",
        tags: "Ararajuba Ave Psitaciforme Amazônia Amarelo Verde",
        extincao: false 
    },
    {
        nome: "Jararaca",
        especie: "Bothrops jararaca",
        descricao: "A jararaca é uma serpente venenosa da família Viperidae, encontrada em várias regiões do Brasil. É responsável por um grande número de acidentes ofídicos, mas também desempenha um papel importante no controle de populações de roedores.",
        link: "https://www.infoescola.com/animais/jararaca/",
        local: "Mata Atlântica",
        tags: "Jararaca Serpente Venenosa Viperidae Mata Atlântica",
        extincao: false 
    },
    {
        nome: "Boto-Cor-de-Rosa",
        especie: "Inia geoffrensis",
        descricao: "O boto-cor-de-rosa é um mamífero aquático da família Iniidae, encontrado nos rios da Amazônia. Conhecido por sua coloração rosada, é uma das espécies mais emblemáticas da fauna brasileira, associada a várias lendas locais.",
        link: "https://www.infoescola.com/animais/boto-cor-de-rosa/",
        local: "Amazônia",
        tags: "Boto Cor de Rosa Mamífero Aquático Amazônia Lendas",
        extincao: true 
    },
    {
        nome: "Cágado-de-Hogei",
        especie: "Mesoclemmys hogei",
        descricao: "O cágado-de-hogei é uma espécie de tartaruga endêmica do Brasil, encontrada em rios e lagos de Mata Atlântica. Esta espécie está em grave risco de extinção devido à destruição de seu habitat e à poluição dos corpos d'água.",
        link: "https://amda.org.br/especie-da-vez/2664-cagado-de-hogei-esta-criticamente-ameacado-de-extincao/",
        local: "Mata Atlântica",
        tags: "Cágado de Hogei Tartaruga Mata Atlântica Extinção",
        extincao: true 
    },
    {
        nome: "Pica-pau-do-parnaíba",
        especie: "Celeus obrieni",
        descricao: "O pica-pau-do-parnaíba é uma espécie rara de pica-pau encontrada no Cerrado brasileiro. Possui uma plumagem vermelha e preta e é conhecido por ser extremamente difícil de avistar na natureza.",
        link: "https://ebird.org/species/caawoo1?siteLanguage=pt_BR",
        local: "Cerrado",
        tags: "Pica Pau Parnaíba Ave Cerrado Raro",
        extincao: true 
    },
    {
        nome: "Cervo-do-pantanal",
        especie: "Blastocerus dichotomus",
        descricao: "O cervo-do-pantanal é o maior cervídeo da América do Sul, encontrado em áreas alagadas como o Pantanal. Este cervo é conhecido por sua majestosa galhada e por ser uma espécie vulnerável à extinção.",
        link: "https://oncafari.org/especie_fauna/cervo-do-pantanal/",
        local: "Pantanal",
        tags: "Cervo Pantanal Cervídeo Extinção",
        extincao: true 
    },
    {
        nome: "Capivara",
        especie: "Hydrochoerus hydrochaeris",
        descricao: "A capivara é o maior roedor do mundo, encontrado em áreas úmidas de toda a América do Sul. São animais sociais que vivem em grupos próximos a corpos d'água e se alimentam de plantas aquáticas.",
        link: "https://www.infoescola.com/animais/capivara/",
        local: "Pantanal",
        tags: "Capivara Roedor Pantanal Áreas Úmidas Social",
        extincao: false
    },
    {
        nome: "Sabiá-Laranjeira",
        especie: "Turdus rufiventris",
        descricao: "O sabiá-laranjeira é uma ave símbolo do Brasil, conhecida por seu canto melodioso. Pode ser encontrada em diversas regiões do país e é famosa por sua capacidade de adaptação a ambientes urbanos.",
        link: "https://www.wikiaves.com.br/wiki/sabia-laranjeira",
        local: "Regiões Urbanas",
        tags: "Sabiá Laranjeira Ave Símbolo Brasil Canto Melodioso Urbano",
        extincao: false
    },
    {
        nome: "Macaco-Prego",
        especie: "Sapajus apella",
        descricao: "O macaco-prego é um primata conhecido por sua inteligência e habilidade de usar ferramentas. Vive em florestas tropicais e é uma das espécies de macacos mais comuns no Brasil.",
        link: "https://www.infoescola.com/animais/macaco-prego/",
        local: "Amazônia",
        tags: "Macaco Prego Primata Ferramentas Inteligente Floresta Tropical",
        extincao: false
    },
    {
        nome: "Tamanduá-Mirim",
        especie: "Tamandua tetradactyla",
        descricao: "O tamanduá-mirim é um mamífero menor que o tamanduá-bandeira, encontrado em florestas e áreas abertas. Alimenta-se principalmente de formigas e cupins e é conhecido por sua habilidade de escalar árvores.",
        link: "https://oncafari.org/especie_fauna/tamandua-mirim/",
        local: "Cerrado",
        tags: "Tamanduá Mirim Mamífero Formigas Cupins Escalar Árvores",
        extincao: false
    },
    {
        nome: "Jabuti-Piranga",
        especie: "Chelonoidis carbonarius",
        descricao: "O jabuti-piranga é uma espécie de tartaruga terrestre encontrada em várias regiões do Brasil. É conhecida por sua longevidade e por ser um animal herbívoro, alimentando-se de frutas e vegetais.",
        link: "https://butantan.gov.br/bubutantan/jabuti-piranga-um-quelonio-pacifico-e-que-gosta-de-sombra-e-agua-fresca",
        local: "Mata Atlântica",
        tags: "Jabuti Piranga Tartaruga Terrestre Herbívoro Longevidade",
        extincao: false
    },
    {
        nome: "Caititu",
        especie: "Pecari tajacu",
        descricao: "O caititu, também conhecido como porco-do-mato, é um mamífero de porte médio que vive em grupos nas florestas brasileiras. Alimenta-se de raízes, frutos e pequenos invertebrados, desempenhando um papel importante no ecossistema.",
        link: "https://pt.wikipedia.org/wiki/Caititu",
        local: "Florestas",
        tags: "Caititu Porco do Mato Mamífero Florestas Grupos Herbívoro",
        extincao: false
    },
    {
        nome: "Gavião-Real",
        especie: "Harpia harpyja",
        descricao: "O gavião-real, também conhecido como harpia, é uma das maiores e mais poderosas aves de rapina do mundo. Habita florestas tropicais e é conhecida por sua incrível força e habilidade de caçar grandes presas.",
        link: "https://www.wikiaves.com/wiki/gaviao-real",
        local: "Amazônia",
        tags: "Gavião Real Harpia Ave de Rapina Floresta Tropical Caça",
        extincao: true
    },
    {
        nome: "Quati",
        especie: "Nasua nasua",
        descricao: "O quati é um mamífero da família dos guaxinins, encontrado em várias regiões do Brasil. É conhecido por seu focinho alongado e por sua habilidade de vasculhar o solo em busca de alimento.",
        link: "https://oncafari.org/especie_fauna/quati/",
        local: "Cerrado",
        tags: "Quati Mamífero Guaxinim Focinho Alongado Vasculhar Solo",
        extincao: false
    },
    {
        nome: "Ariranha",
        especie: "Pteronura brasiliensis",
        descricao: "A ariranha é um mamífero aquático encontrado em rios e lagos do Pantanal e da Amazônia. É um dos maiores membros da família dos mustelídeos e vive em grupos, sendo conhecida por sua socialização e vocalização intensa.",
        link: "https://www.infoescola.com/animais/ariranha/",
        local: "Pantanal",
        tags: "Ariranha Mamífero Aquático Mustelídeo Socialização Vocalização",
        extincao: true
    },
    {
        nome: "Perereca-de-Folhagem",
        especie: "Phyllomedusa bicolor",
        descricao: "A perereca-de-folhagem é um anfíbio conhecido por sua pele verde vibrante e olhos grandes. Vive nas árvores da Amazônia e é noturna, alimentando-se principalmente de insetos.",
        link: "https://www.bioventura.com.br/perereca-das-folhagens",
        local: "Amazônia",
        tags: "Perereca de Folhagem Anfíbio Verde Noturna Insetos",
        extincao: false
    }
];
