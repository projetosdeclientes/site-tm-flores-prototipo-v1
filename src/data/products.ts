export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  category: 'buques' | 'plantas' | 'buques-mistos' | 'cestas-chocolates';
  tagline?: string;
  badge?: string;
}

export const products: Product[] = [
  { 
    id: "rosa-unitaria", 
    name: "Rosa Unitária", 
    description: "Uma rosa. Uma mensagem. Um sentimento profundo. Escolhida a dedo para garantir o frescor e a beleza.", 
    price: "R$ 10,00", 
    images: ["/products/images/rosa-unitaria-1.png", "/products/images/rosa-unitaria-2.png", "/products/images/rosa-unitaria-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-1-rosa", 
    name: "Buquê com 1 Rosa", 
    description: "Às vezes, um único gesto fala mais do que mil palavras. A expressão pura da delicadeza.", 
    price: "R$ 34,90", 
    images: ["/products/images/buque-1-rosa-1.png", "/products/images/buque-1-rosa-2.png", "/products/images/buque-1-rosa-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-2-rosas", 
    name: "Buquê com 2 Rosas", 
    description: "Simples, elegante e cheio de significado. Perfeito para gestos delicados e declarações sinceras.", 
    price: "R$ 54,90", 
    images: ["/products/images/buque-2-rosas-1.png", "/products/images/buque-2-rosas-2.png", "/products/images/buque-2-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-3-rosas", 
    name: "Buquê com 3 Rosas", 
    tagline: "Um gesto simples, mas cheio de emoção.",
    description: "Encante com um gesto cheio de significado. O Buquê Três Rosas representa um sentimento completo: amor, respeito e admiração. Composto por três rosas frescas e selecionadas, acompanhadas de folhagens verdes e acabamento refinado, é a escolha ideal para expressar carinho verdadeiro. Com embalagem delicada e um toque de sofisticação, esse buquê é perfeito para aniversários, agradecimentos, início de relacionamento ou apenas para surpreender alguém especial.", 
    price: "R$ 69,90", 
    images: ["/products/images/buque-3-rosas-1.png", "/products/images/buque-3-rosas-2.png", "/products/images/buque-3-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-4-rosas", 
    name: "Buquê com 4 Rosas", 
    tagline: "Um buquê discreto, mas cheio de significado — porque às vezes, menos é mais.",
    description: "Delicado e cheio de charme, o Buquê Quatro Rosas é perfeito para quem deseja expressar carinho com sutileza e bom gosto. Composto por quatro rosas frescas e vibrantes, acompanhadas por folhagens ornamentais e uma embalagem sofisticada, esse arranjo transmite atenção, afeto e intenção verdadeira. Ideal para surpreender em datas especiais, aniversários, pequenos gestos românticos ou simplesmente dizer que está pensando em alguém.", 
    price: "R$ 84,90", 
    images: ["/products/images/buque-4-rosas-1.png", "/products/images/buque-4-rosas-2.png", "/products/images/buque-4-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-5-rosas", 
    name: "Buquê com 5 Rosas", 
    tagline: "Cinco rosas, cinco motivos para encantar quem você ama.",
    description: "O Buquê Cinco Rosas é a combinação perfeita entre beleza, elegância e emoção. Com cinco rosas selecionadas cuidadosamente, acompanhadas de folhagens frescas e embaladas com delicadeza, esse arranjo transmite sentimentos sinceros com um charme único. Ideal para celebrar momentos especiais, surpreender alguém querido ou demonstrar carinho de forma delicada e marcante.", 
    price: "R$ 99,90", 
    images: ["/products/images/buque-5-rosas-1.png", "/products/images/buque-5-rosas-2.png", "/products/images/buque-5-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-6-rosas", 
    name: "Buquê com 6 Rosas", 
    tagline: "Simples, direto e cheio de estilo — como o amor deve ser.",
    description: "Seis rosas frescas e selecionadas com cuidado para expressar sentimentos de forma elegante e marcante. Com visual moderno e acabamento clean, este buquê é perfeito para presentear em momentos especiais ou surpreender no cotidiano. Acompanhado de folhagens naturais e embalado com papel decorativo contemporâneo e laço de cetim, ele transmite charme, afeto e estilo.", 
    price: "R$ 119,90", 
    images: ["/products/images/buque-6-rosas-1.png", "/products/images/buque-6-rosas-2.png", "/products/images/buque-6-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-7-rosas", 
    name: "Buquê com 7 Rosas", 
    tagline: "Simples, marcante e inesquecível — como quem recebe.",
    description: "Com 7 rosas frescas e selecionadas à mão, este buquê é a escolha ideal para transmitir sentimentos sinceros com delicadeza e elegância. Acompanhado de folhagens naturais e embalado em papel decorativo com acabamento em laço de cetim, ele une beleza, sofisticação e emoção em um só presente. Perfeito para aniversários, surpresas românticas, agradecimentos ou qualquer momento especial.", 
    price: "R$ 134,90", 
    images: ["/products/images/buque-7-rosas-1.png", "/products/images/buque-7-rosas-2.png", "/products/images/buque-7-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-8-rosas", 
    name: "Buquê com 8 Rosas", 
    tagline: "Mais que flores — uma forma de dizer o que palavras não conseguem.",
    description: "Elegante e cheio de significado, este buquê com 8 rosas frescas é perfeito para quem quer surpreender com estilo. Cada rosa é cuidadosamente selecionada e combinada with folhagens verdes que destacam sua beleza natural. A embalagem sofisticada e o laço em cetim completam o arranjo com um toque de charme. Ideal para momentos especiais como aniversários, celebrações, declarações de amor ou simplesmente para transformar o dia de alguém.", 
    price: "R$ 149,90", 
    images: ["/products/images/buque-8-rosas-1.png", "/products/images/buque-8-rosas-2.png", "/products/images/buque-8-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-10-rosas", 
    name: "Buquê com 10 Rosas", 
    tagline: "Mais do que flores — um gesto que emociona.",
    description: "Com 10 rosas frescas, vibrantes e selecionadas com rigor, este buquê é a escolha ideal para quem deseja causar uma impressão marcante. Cada flor representa carinho, admiração e intensidade, criando um arranjo visualmente forte e emocionalmente significativo. Finalizado com folhagens nobres, embalagem moderna e laço em cetim, é perfeito para aniversários, pedidos de desculpas, datas românticas ou conquistas importantes.", 
    price: "R$ 174,90", 
    images: ["/products/images/buque-10-rosas-1.png", "/products/images/buque-10-rosas-2.png", "/products/images/buque-10-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-12-rosas", 
    name: "Buquê com 12 Rosas", 
    tagline: "Um gesto clássico que diz tudo — sem precisar de palavras.",
    description: "O buquê com 12 rosas é um verdadeiro símbolo de amor, admiração e elegância. Cada rosa é cuidadosamente escolhida para compor um arranjo harmonioso e impactante, perfeito para declarações românticas, aniversários, pedidos de desculpas ou qualquer momento que mereça ser inesquecível. Acompanhado de folhagens verdes e acabamento refinado com papel decorativo e laço de cetim, esse buquê une tradição e sofisticação em um presente que impressiona.", 
    price: "R$ 234,90", 
    images: ["/products/images/buque-12-rosas-1.png", "/products/images/buque-12-rosas-2.png", "/products/images/buque-12-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-15-rosas", 
    name: "Buquê com 15 Rosas", 
    tagline: "Mais que flores — é sentimento entregue em forma de beleza.",
    description: "Impressione com intensidade e beleza. Este buquê é composto por 15 rosas frescas, selecionadas com cuidado para criar um arranjo marcante, romântico e cheio de significado. Ideal para celebrações especiais, aniversários, pedidos importantes ou para surpreender alguém que merece o melhor. Com folhagens verdes e acabamento sofisticado em papel decorativo e laço de cetim, ele une elegância e emoção em cada detalhe.", 
    price: "R$ 255,90", 
    images: ["/products/images/buque-15-rosas-1.png", "/products/images/buque-15-rosas-2.png", "/products/images/buque-15-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-20-rosas", 
    name: "Buquê com 20 Rosas", 
    tagline: "Presenteie com flores que impressionam e emocionam.",
    description: "Um presente grandioso para momentos que merecem ser inesquecíveis. Com 20 rosas frescas e deslumbrantes, este buquê transmite sentimentos profundos com intensidade, elegância e beleza. Ideal para celebrar o amor, marcar datas especiais ou surpreender com estilo e sofisticação. A composição é finalizada com folhagens selecionadas, embalagem refinada e laço em cetim, resultando em um arranjo de alto impacto visual e emocional.", 
    price: "R$ 299,90", 
    images: ["/products/images/buque-20-rosas-1.png", "/products/images/buque-20-rosas-2.png", "/products/images/buque-20-rosas-3.png"],
    category: 'buques'
  },
  { 
    id: "buque-25-rosas", 
    name: "Buquê com 25 Rosas", 
    tagline: "Mais que flores — um verdadeiro espetáculo de sentimentos.",
    badge: "✦ Premium",
    description: "Um gesto imponente para quem deseja impressionar e emocionar. Este buquê reúne 25 rosas frescas e deslumbrantes, formando um arranjo exuberante, cheio de charme e significado. É perfeito para momentos únicos: pedidos de namoro, aniversários de relacionamento, declarações especiais ou para presentear alguém inesquecível. Com folhagens ornamentais e acabamento sofisticado em papel decorativo e laço de cetim, o buquê transmite luxo, romantismo e intensidade em cada detalhe.", 
    price: "R$ 354,90", 
    images: ["/products/images/buque-25-rosas-1.png", "/products/images/buque-25-rosas-2.png", "/products/images/buque-25-rosas-3.png"],
    category: 'buques'
  },
  {
    id: "buque-misto-rosas-cravos",
    name: "Buquê Misto Premium",
    description: "Buquê sofisticado com um mix harmonioso de rosas vermelhas vibrantes e cravos rosa delicados. A composição é complementada por ramos de gypsophila, que trazem leveza e volume ao arranjo. Envolto em uma embalagem elegante com acabamento em tela vermelha e um imponente laço acetinado.",
    price: "Sob consulta",
    images: ["/products/images/buque-misto-especial-1.png", "/products/images/buque-misto-especial-2.png", "/products/images/buque-misto-especial-3.png"],
    category: 'buques-mistos'
  },
  {
    id: "buque-misto-girassol",
    name: "Buquê Misto Alegria",
    description: "Um arranjo vibrante e cheio de vida que combina a energia solar dos girassóis com a delicadeza de margaridas e crisântemos em tons de branco, rosa e laranja. Esta composição multicolorida é envolta em uma embalagem verde oliva moderna e finalizada com um laço de ráfia natural, criando um contraste elegante e rústico.",
    price: "Sob consulta",
    images: ["/products/images/buque-misto-girassol-1.png", "/products/images/buque-misto-girassol-2.png", "/products/images/buque-misto-girassol-3.png"],
    category: 'buques-mistos'
  },
  {
    id: "buque-misto-encanto",
    name: "Buquê Misto Encanto",
    description: "Um arranjo exuberante e sofisticado que celebra a diversidade floral. Esta composição única destaca o contraste vibrante entre lírios em tons de rosa e amarelo, girassóis majestosos e alstroemérias coloridas. O mix é delicadamente finalizado com gypsophila branca e folhagens variadas, criando uma harmonia de cores e texturas envolta em uma embalagem clássica branca com laço de ráfia natural.",
    price: "Sob consulta",
    images: ["/products/images/buque-misto-encanto-1.png", "/products/images/buque-misto-encanto-2.png", "/products/images/buque-misto-encanto-3.png"],
    category: 'buques-mistos'
  },
  {
    id: "buque-misto-sol-radiante",
    name: "Buquê Misto Sol Radiante",
    description: "Uma composição luminosa e sofisticada que une o brilho majestoso de um girassol central à elegância clássica de rosas brancas impecáveis. Envolto em uma nuvem de gypsophila delicada e folhagens de eucalipto, este arranjo é finalizado em uma embalagem de papel Kraft texturizado com laço de cetim amarelo, transmitindo calor, pureza e alegria.",
    price: "Sob consulta",
    images: ["/products/images/buque-misto-sol-radiante-1.png", "/products/images/buque-misto-sol-radiante-2.png", "/products/images/buque-misto-sol-radiante-3.png"],
    category: 'buques-mistos'
  },
  {
    id: "cesta-cafe-chocolates",
    name: "Coração Ouro Branco & Sonho de Valsa",
    tagline: "Uma declaração doce em formato de coração com os bombons mais amados do Brasil.",
    description: "Caixa especial em formato de coração dividida em duas bandas irresistíveis: de um lado, os clássicos bombons Ouro Branco com seu recheio cremoso de chocolate branco e castanhas; do outro, os inconfundíveis Sonho de Valsa, com wafer crocante e recheio de avelãs. Uma combinação perfeita para presentear quem você ama em datas românticas, aniversários, Dia dos Namorados, Dia das Mães ou simplesmente para transformar um dia comum em um momento inesquecível.",
    price: "R$ 79,90",
    images: ["/products/images/cesta-cafe-chocolates-1.png"],
    category: 'cestas-chocolates'
  },
  {
    id: "coracao-pelucia-bombons",
    name: "Coração Encantado com Pelúcia e Bombons",
    tagline: "Um presente delicado, divertido e cheio de carinho para surpreender quem você ama.",
    description: "Cesta especial em formato de coração, montada com bombons selecionados Sonho de Valsa e Ouro Branco, laço decorativo, embalagem transparente e um toque especial de fofura com pelúcia temática. Uma opção charmosa e romântica para presentear em aniversários, Dia dos Namorados, Dia das Mães, datas comemorativas ou simplesmente para demonstrar carinho de um jeito doce e inesquecível.",
    price: "R$ 65,00",
    images: [
      "/products/images/coracao-pelucia-bombons-1.png",
      "/products/images/coracao-pelucia-bombons-2.png"
    ],
    category: 'cestas-chocolates'
  },
  {
    id: "cesta-amor-pelucia-bombons",
    name: "Cesta Amor com Pelúcia e Bombons",
    tagline: "Um gesto doce e carinhoso para encantar quem você ama.",
    description: "Encantadora e cheia de carinho, esta cesta de vime traz uma composição romântica com embalagem em celofane transparente, grande laço vermelho, ursinho de pelúcia marrom com coração vermelho escrito \"AMOR!\", chocolates Ferrero Rocher, item sabor morango e bombons embalados em tons vibrantes. O visual transmite afeto, cuidado e delicadeza em cada detalhe. Ideal para aniversários, Dia dos Namorados, declarações, agradecimentos ou para surpreender alguém especial.",
    price: "R$ 240,00",
    images: [
      "/products/images/cesta-amor-pelucia-bombons-1.png",
      "/products/images/cesta-amor-pelucia-bombons-2.png"
    ],
    category: 'cestas-chocolates'
  },
  {
    id: "cesta-chocolamor-pelucia-bombons",
    name: "Cesta Chocolamor com Pelúcia e Bombons",
    tagline: "Um presente doce e afetuoso — perfeito para agradecer com carinho.",
    description: "Encantadora e cheia de ternura, esta cesta de vime reúne ursinho de pelúcia bege com coração vermelho \"Te Amo\", chocolates Lacta Obrigado, Bis, Kinder Bueno White, Ferrero Rocher, Ouro Branco e bombons variados. A embalagem em celofane transparente e o grande laço pink deixam a composição delicada, alegre e especial. Ideal para aniversários, agradecimentos, declarações, Dia dos Namorados ou para surpreender alguém especial.",
    price: "R$ 160,00",
    images: [
      "/products/images/cesta-chocolamor-pelucia-bombons-1.png",
      "/products/images/cesta-chocolamor-pelucia-bombons-2.png"
    ],
    category: 'cestas-chocolates'
  },
  {
    id: "cesta-abraco-amor-doce",
    name: "Cesta Abraço de Amor Doce",
    tagline: "Um presente que traduz carinho em cada detalhe com delicadeza.",
    description: "Encantadora e afetiva, esta cesta de vime apresenta uma composição romântica com ursinho de pelúcia segurando coração vermelho escrito \"Amor\", acompanhada de chocolates Hershey's, Ouro Branco e Sonho de Valsa. O balão em formato de coração com a mensagem \"Te amo\" destaca a proposta apaixonada do presente. A embalagem em celofane transparente com laço decorativo completa o visual elegante e delicado. Ideal para aniversários, Dia dos Namorados, declarações de amor e momentos especiais de surpresa.",
    price: "R$ 99,90",
    images: [
      "/products/images/cesta-abraco-amor-doce-1.png",
      "/products/images/cesta-abraco-amor-doce-2.png"
    ],
    category: 'cestas-chocolates'
  },
  {
    id: "cesta-love-choco",
    name: "Cesta Love Choco",
    tagline: "Um presente doce e romântico para declarar amor com delicadeza.",
    description: "Encantadora e romântica, esta cesta de vime traz uma composição especial com ursinho de pelúcia amarelo segurando coração vermelho e xadrez com a palavra \"Amor\". A seleção de chocolates inclui caixa Lacta Te Adoro, barra de chocolate Suflair e bombons Sonho de Valsa. O acabamento em celofane transparente e o laço vermelho completam a apresentação com elegância. Ideal para aniversários, Dia dos Namorados, declarações de amor e surpresas especiais.",
    price: "R$ 140,00",
    images: [
      "/products/images/cesta-love-choco-1.png",
      "/products/images/cesta-love-choco-2.png"
    ],
    category: 'cestas-chocolates'
  },
];

