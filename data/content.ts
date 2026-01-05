
import { Chapter } from '../types';

export const basicModuleContent: Chapter[] = [
  {
    id: 'cap1',
    title: 'CAPÍTULO 1: FÍSICA',
    topics: [
      {
        id: 'intro',
        title: 'INTRODUÇÃO',
        subTopics: [
          {
            id: 'intro-1',
            title: 'Ciência da Matéria e Energia',
            content: `A física é o termo aplicado à área de conhecimento, relativo à natureza básica e fundamental da matéria e energia. Ela não tenciona determinar o comportamento da matéria e da energia na sua relação com o fenômeno físico, mas tão somente como se comportam. As pessoas que cuidam de manutenção e reparo de aeronaves precisam ter conhecimentos de física básica, que é, às vezes, chamada de ciência da matéria e energia.`
          }
        ]
      },
      {
        id: 'materia',
        title: 'MATÉRIA',
        subTopics: [
          {
            id: 'materia-1',
            title: 'Características da matéria',
            content: `Embora a matéria seja a mais fundamental de todas as coisas contidas no campo da física e do mundo material, é difícil de se definir. Matéria é qualquer substância que ocupa espaço e tem peso. Existem três estados de matéria: (1) sólido, (2) líquido e (3) gasoso. Toda matéria possui certas características ou propriedades gerais:
a. Volume - significando ocupar espaço.
b. Massa - é a medição de quantidade de matéria num corpo.
c. Atração - é uma força agindo mutuamente entre partículas de matéria.
d. Peso - a medida de gravidade universal.
e. Densidade - a massa (peso) de uma substância por unidade de volume.
f. Inércia - é a oposição que um corpo oferece a qualquer mudança de movimento.
g. Porosidade - existência de poros ou espaços vazios.
h. Impenetrabilidade - significa que dois corpos não podem ocupar o mesmo espaço ao mesmo tempo.`
          },
          {
            id: 'materia-2',
            title: 'Sistema de medida',
            content: `Os dois sistemas de medição mais comumente usados são: o Sistema Inglês e o Sistema Métrico. As três unidades básicas que requerem unidades de medição são: massa (peso), comprimento (distância) e tempo. O sistema métrico é, às vezes, chamado de Sistema CGS (centímetro, grama, segundo). O sistema inglês usa a libra para peso e o pé para comprimento.`
          }
        ]
      },
      {
        id: 'fluidos',
        title: 'FLUIDOS',
        subTopics: [
          {
            id: 'fluidos-1',
            title: 'Generalidades',
            content: `Líquidos e gases são chamados de fluidos, porque ambos fluem livremente. Um fluido é definido como uma substância que modifica sua forma facilmente. Ambos não têm forma definida e ambos prontamente transmitem pressões. Gases ocupam seus recipientes completamente, são mais leves que líquidos e são altamente compressíveis.`
          },
          {
            id: 'fluidos-2',
            title: 'Densidade e Gravidade Específica',
            content: `A densidade de uma substância é o seu peso por unidade de volume. A gravidade específica é calculada por comparação do peso de um volume definido de uma dada substância, com o peso de um igual volume de água.`
          },
          {
            id: 'fluidos-3',
            title: 'Flutuabilidade (Princípio de Arquimedes)',
            content: `Um corpo sólido pesa menos submerso num líquido ou num gás do que em espaço livre, por causa da força para cima que qualquer fluido exerce sobre um corpo nele submerso. O princípio de Arquimedes afirma que a força de flutuação que um fluido exerce sobre um corpo submerso é igual ao peso do fluido que o corpo desloca.`
          }
        ]
      },
      {
        id: 'temperatura',
        title: 'TEMPERATURA',
        subTopics: [
          {
            id: 'temperatura-1',
            title: 'Generalidades',
            content: 'Temperatura é a medida do grau de calor ou frio de um corpo ou ambiente. É uma medida da energia cinética média das partículas de uma substância. As escalas mais comuns para medir a temperatura são Celsius (°C), Fahrenheit (°F) e Kelvin (K). Na aviação, a temperatura é um fator crucial que afeta a densidade do ar e o desempenho do motor.'
          }
        ]
      },
      {
        id: 'pressao',
        title: 'PRESSÃO',
        subTopics: [
          {
            id: 'pressao-1',
            title: 'Pressão Atmosférica',
            content: `A atmosfera é a massa total de ar que circunda a terra. A pressão atmosférica ao nível do mar é de aproximadamente 14,7 p.s.i. (pounds per square inch). Quando a altitude aumenta, a pressão atmosférica diminui.`
          },
          {
            id: 'pressao-2',
            title: 'Pressão Absoluta',
            content: `A pressão absoluta é medida da pressão zero absoluta, preferivelmente, do que da normal ou da pressão atmosférica. A pressão absoluta é igual a pressão atmosférica mais a pressão do indicador (pressão manométrica).`
          }
        ]
      },
      {
        id: 'compressibilidade',
        title: 'COMPRESSIBILIDADE E EXPANSÃO DE GASES',
        subTopics: [
          {
            id: 'compress-1',
            title: 'Teoria Cinética dos Gases',
            content: 'A teoria cinética afirma que os gases são compostos por um grande número de partículas em movimento constante, rápido e aleatório. A pressão exercida por um gás é o resultado das colisões dessas partículas com as paredes do recipiente.'
          },
          {
            id: 'compress-2',
            title: 'Lei de Boyle',
            content: 'A Lei de Boyle estabelece que, para uma temperatura constante, o volume de uma massa fixa de gás é inversamente proporcional à sua pressão. Matematicamente: P₁V₁ = P₂V₂.'
          },
          {
            id: 'compress-3',
            title: 'Lei de Charles',
            content: 'A Lei de Charles afirma que, para uma pressão constante, o volume de uma massa fixa de gás é diretamente proporcional à sua temperatura absoluta (em Kelvin). Matematicamente: V₁/T₁ = V₂/T₂.'
          },
          {
            id: 'compress-4',
            title: 'Lei Geral dos Gases',
            content: 'A Lei Geral dos Gases combina as leis de Boyle e Charles, relacionando pressão, volume e temperatura de uma massa fixa de gás. Matematicamente: (P₁V₁)/T₁ = (P₂V₂)/T₂.'
          }
        ]
      },
      {
        id: 'transmissao_forcas',
        title: 'TRANSMISSÃO DE FORÇAS ATRAVÉS DE FLUIDOS',
        subTopics: [
          {
            id: 'pascal-1',
            title: 'Lei de Pascal',
            content: 'O princípio de Pascal afirma que uma mudança de pressão aplicada a um fluido incompressível confinado é transmitida integralmente a todas as porções do fluido e às paredes do seu recipiente. Este é o princípio fundamental dos sistemas hidráulicos.'
          },
          {
            id: 'pascal-2',
            title: 'Cálculo de Força, Pressão e Área',
            content: 'A relação fundamental é Pressão (P) = Força (F) / Área (A). A partir desta fórmula, podemos calcular qualquer uma das três variáveis se conhecermos as outras duas. Em sistemas hidráulicos, a pressão é constante em todo o fluido.'
          },
          {
            id: 'pascal-3',
            title: 'Multiplicação de Forças',
            content: 'Sistemas hidráulicos, como os freios e trens de pouso de aeronaves, usam a Lei de Pascal para multiplicar forças. Uma pequena força aplicada a um pistão de pequena área gera uma pressão que, ao atuar sobre um pistão de grande área, produz uma força muito maior.'
          }
        ]
      },
      {
        id: 'atmosfera',
        title: 'ATMOSFERA',
        subTopics: [
          {
            id: 'atm-1',
            title: 'Composição da Atmosfera',
            content: 'A atmosfera terrestre é composta principalmente por Nitrogênio (≈78%) e Oxigênio (≈21%), com pequenas quantidades de outros gases. Esta composição é relativamente constante até altas altitudes.'
          },
          {
            id: 'atm-2',
            title: 'Atmosfera Padrão (ISA)',
            content: 'A Atmosfera Padrão Internacional (ISA) é um modelo idealizado da atmosfera, que define valores de pressão, temperatura e densidade do ar para diferentes altitudes. É usada como referência para a performance de aeronaves.'
          },
          {
            id: 'atm-3',
            title: 'Pressão, Densidade e Temperatura',
            content: 'Com o aumento da altitude, a pressão, a densidade e a temperatura do ar geralmente diminuem. Essas variações afetam diretamente a sustentação, o arrasto e a potência do motor.'
          },
          {
            id: 'atm-4',
            title: 'Umidade',
            content: 'A umidade é a quantidade de vapor de água no ar. O ar úmido é menos denso que o ar seco na mesma temperatura e pressão, o que impacta a performance da aeronave, especialmente na decolagem.'
          }
        ]
      },
      {
        id: 'bernoulli',
        title: 'PRINCÍPIO DE BERNOULLI',
        subTopics: [
            {
                id: 'bernoulli-1',
                title: 'Geral',
                content: `O princípio de Bernoulli estabelece que a pressão de um fluido (líquido ou gás) diminui no ponto onde a velocidade do fluido aumenta. Em um tubo de Venturi, na seção larga, o fluido tem baixa velocidade e alta pressão. Na seção estreita, o fluido acelera, resultando em uma pressão menor.`
            },
            {
                id: 'bernoulli-2',
                title: 'Como uma Asa de Aeronave Reage com a Atmosfera',
                content: `Um aerofólio é projetado para que o ar flua mais rapidamente sobre sua superfície superior (extradorso) do que na inferior (intradorso). De acordo com Bernoulli, a maior velocidade no extradorso cria uma zona de baixa pressão, enquanto a menor velocidade no intradorso resulta em uma pressão maior. Essa diferença de pressão gera uma força para cima, a sustentação.`
            }
        ]
      },
      {
        id: 'maquinas',
        title: 'MÁQUINAS',
        subTopics: [
          {
            id: 'maquinas-1',
            title: 'A Alavanca',
            content: 'Uma alavanca é uma máquina simples que consiste em uma barra rígida que gira em torno de um ponto fixo (fulcro). É usada para multiplicar a força aplicada (vantagem mecânica) ou a distância.'
          },
          {
            id: 'maquinas-2',
            title: 'A Polia',
            content: 'Uma polia é uma roda com um sulco, por onde passa uma corda. Polias são usadas para mudar a direção de uma força ou para criar vantagem mecânica, reduzindo a força necessária para levantar um peso.'
          },
          {
            id: 'maquinas-3',
            title: 'O Plano Inclinado',
            content: 'O plano inclinado é uma superfície plana inclinada que permite levantar objetos pesados com menos força do que seria necessário para levantá-los verticalmente, aumentando a distância percorrida.'
          }
        ]
      },
      {
        id: 'trabalho_potencia_energia',
        title: 'TRABALHO, POTÊNCIA E ENERGIA',
        subTopics: [
          {
            id: 'tpe-1',
            title: 'Trabalho',
            content: 'Em física, trabalho é realizado quando uma força aplicada a um objeto o move por uma distância. Trabalho = Força × Distância. A unidade de trabalho é o Joule (J).'
          },
          {
            id: 'tpe-2',
            title: 'Potência',
            content: 'Potência é a taxa na qual o trabalho é realizado, ou seja, trabalho por unidade de tempo. Potência = Trabalho / Tempo. A unidade de potência é o Watt (W).'
          },
          {
            id: 'tpe-3',
            title: 'Energia',
            content: 'Energia é a capacidade de realizar trabalho. As formas principais são a energia cinética (energia do movimento) e a energia potencial (energia armazenada devido à posição).'
          },
          {
            id: 'tpe-4',
            title: 'Atrito',
            content: 'Atrito é a força que se opõe ao movimento entre superfícies em contato. O atrito consome energia, geralmente convertendo-a em calor, e é um fator importante em sistemas mecânicos.'
          }
        ]
      },
      {
        id: 'movimento',
        title: 'MOVIMENTO DOS CORPOS',
        subTopics: [
          {
            id: 'mov-1',
            title: 'Velocidade e Aceleração',
            content: 'Velocidade é a taxa de variação da posição, incluindo sua direção. Aceleração é a taxa de variação da velocidade. Uma aeronave em voo de cruzeiro tem alta velocidade, mas aceleração nula.'
          },
          {
            id: 'mov-2',
            title: 'Leis de Newton para o Movimento',
            content: 'As três leis de Newton são fundamentais: 1) Inércia. 2) F=ma (a força resultante sobre um corpo produz uma aceleração na mesma direção e sentido). 3) Ação e Reação (o princípio por trás da propulsão a jato).'
          },
          {
            id: 'mov-3',
            title: 'Movimento Circular',
            content: 'Ocorre quando um objeto se move em uma trajetória circular. Uma aeronave em curva está em movimento circular, e a sustentação é inclinada para fornecer a força centrípeta necessária.'
          }
        ]
      },
      {
        id: 'calor',
        title: 'CALOR',
        subTopics: [
          {
            id: 'calor-1',
            title: 'Transferência de Calor',
            content: 'O calor pode ser transferido por condução (contato direto), convecção (movimento de fluidos) e radiação (ondas eletromagnéticas). Estes processos são cruciais para o arrefecimento de motores e sistemas.'
          },
          {
            id: 'calor-2',
            title: 'Calor Específico',
            content: 'É a quantidade de calor necessária para elevar a temperatura de uma unidade de massa de uma substância em um grau. Materiais com alto calor específico podem absorver muito calor com pouca variação de temperatura.'
          },
          {
            id: 'calor-3',
            title: 'Expansão Térmica',
            content: 'A maioria dos materiais se expande quando aquecida. A expansão térmica deve ser considerada no projeto de estruturas e motores para evitar tensões e falhas devido a variações de temperatura.'
          }
        ]
      },
      {
        id: 'som',
        title: 'SOM',
        subTopics: [
          {
            id: 'som-1',
            title: 'Velocidade do Som',
            content: 'A velocidade do som varia com a temperatura do meio. No ar, a 15°C ao nível do mar, é de aproximadamente 340 m/s. Ela diminui com a altitude à medida que a temperatura cai.'
          },
          {
            id: 'som-2',
            title: 'Número Mach',
            content: 'O Número Mach é a razão entre a velocidade de uma aeronave e a velocidade do som local. Mach 1 é a velocidade do som. Voos acima de Mach 1 são supersônicos.'
          },
          {
            id: 'som-3',
            title: 'Frequência e Intensidade',
            content: 'Frequência do som é percebida como tom (agudo/grave) e medida em Hertz (Hz). Intensidade é percebida como volume e medida em decibéis (dB). O ruído dos motores a jato é uma grande preocupação na aviação.'
          }
        ]
      }
    ]
  },
  {
    id: 'cap2',
    title: 'CAPÍTULO 2: PRIMEIROS SOCORROS',
    topics: [
      {
        id: 'ps-intro',
        title: 'Introdução aos Primeiros Socorros',
        subTopics: [
          {
            id: 'ps-intro-1',
            title: 'Definição e Procedimentos Iniciais',
            content: `Os primeiros socorros, como o nome indica, são as primeiras intervenções feitas após uma pessoa sofrer mal súbito ou algum acidente até que o socorre especializado chegue.\n\n"Primeiros socorros são intervenções que devem ser feitas de maneira rápida, logo após o acidente ou mal súbito, que visam a evitar o agravamento do problema até que um serviço especializado de atendimento chegue até o local. Essas intervenções são muito importantes, pois podem evitar complicações e até mesmo evitar a morte de um indivíduo.\n\nAntes de qualquer procedimento de primeiro socorro, é importante que o socorrista tenha em mente a necessidade de:\n• Manter a calma;\n• Afastar os curiosos;\n• Garantir que serviço de emergência seja chamado.\n\nÉ muito importante salientar que algumas pessoas não estão preparadas para realizar os primeiros socorros e, portanto, o ideal é que deixe outra pessoa realizar os procedimentos adequados e auxiliar de outra maneira, como, buscando socorro.`
          },
          {
            id: 'ps-intro-2',
            title: 'Omissão de Socorro',
            content: `A omissão de socorro é considerada crime em nosso país. Segundo o Decreto-Lei N° 2.848, de 7 de dezembro de 1940, deixar de prestar assistência a uma pessoa em risco pode resultar em detenção ou multa. Veja o art. 135 que aborda o tema:\n\n"Art. 135 - Deixar de prestar assistência, quando possível fazê-lo sem risco pessoal, à criança abandonada ou extraviada, ou à pessoa inválida ou ferida, ao desamparo ou em grave e iminente perigo; ou não pedir, nesses casos, o socorro da autoridade pública:\n\nPena - detenção, de um a seis meses, ou multa.\n\nParágrafo único - A pena é aumentada de metade, se da omissão resulta lesão corporal de natureza grave, e triplicada, se resulta a morte."`
          }
        ]
      },
      {
        id: 'ps-queimaduras',
        title: 'Queimaduras',
        subTopics: [
          {
            id: 'ps-queimaduras-1',
            title: 'Primeiros Socorros em Caso de Queimaduras',
            content: `Queimaduras são situações relativamente comuns no nosso dia a dia. Elas são classificadas, de acordo com o dano causado, em queimadura de primeiro grau, queimadura de segundo grau e queimadura de terceiro grau. A queimadura de primeiro grau afeta apenas a epiderme (camada mais externa da pele), já a de segundo grau afeta a derme e epiderme, enquanto a de terceiro grau atinge também o tecido abaixo da pele.\n\nO primeiro passo em caso de queimadura é retirar a pessoa da região próxima à fonte de calor. Feito isso, deve-se avaliar a lesão. Se o dano for leve, recomenda-se lavar o local com água corrente ou colocar compressas de soro fisiológico para reduzir a temperatura do local. Caso apareçam bolhas, elas nunca devem ser furadas.\n\nSe ao avaliar a lesão, você perceber que o dano é grave, é fundamental procurar ajuda médica imediatamente. Outro ponto importante é nunca passar no local nenhuma substância caseira nem mesmo medicamentos sem que sejam recomendados por um médico.`
          },
          {
            id: 'ps-queimaduras-2',
            title: 'Tipos e Causas de Queimaduras',
            content: `As queimaduras são lesões provocadas pelo contato direto com agentes térmicos, químicos elétricos ou radioativos que atuam nos tecidos de revestimento do corpo humano.\n\nEsses agentes podem causar destruição parcial ou total da pele, podendo atingir camadas mais profundas. As queimaduras são classificadas de acordo com a profundidade e o tamanho (1º, 2º e 3º grau), geralmente, mensuradas pelo percentual da superfície acometida.\n\nCausas: Os principais agentes que causam as queimaduras,são: Líquidos superaquecidos, Combustível, Fogo, Superfície superaquecida, Eletricidade, Agentes químicos, Agentes radioativos, Radiação solar, Frio, Fogos de artifícios.\n\nTipos: Os tipos de queimaduras variam entre térmicas, químicas, elétricas ou radioativas – até mesmo causadas por animais (água-viva, por exemplo) e plantas.`
          },
          {
            id: 'ps-queimaduras-3',
            title: 'Classificação por Grau e Tratamento',
            content: `Queimadura de 1º grau: envolvem apenas a epiderme. A lesão é seca e não produz bolhas. Geralmente melhora no intervalo de três a seis dias. Um exemplo clássico é a queimadura de sol.\n\nQueimadura de 2º grau: existem duas classificações, superficial e profundo. A superficial envolve a epiderme e a porção mais superficial da derme, com bolhas e aparência úmida. A profunda acomete toda a derme, sendo mais grave e dolorosa, com risco de destruição das terminações nervosas.\n\nQueimadura de 3º grau: são profundas e, além de acometerem toda a derme, atingem tecidos subcutâneos, com destruição total de nervos, folículos pilosos, glândulas sudoríparas e capilares sanguíneos, podendo atingir músculos e estruturas ósseas. São lesões esbranquiçadas/acinzentadas, secas, indolores e deformantes que não curam sem apoio cirúrgico.\n\nTratamento: varia conforme seu tipo. O ideal é saber o que fazer imediatamente. O agente causador deve ser eliminado. Em casos leves, é indicado esfriar a ferida com água em temperatura ambiente. Queimaduras graves necessitam de hospitalização. Cuidados domiciliares consistem em manter a queimadura limpa para prevenir infecções.`
          },
          {
            id: 'ps-queimaduras-4',
            title: 'O que NÃO fazer e Prevenção',
            content: `Ao sofrer uma queimadura é preciso tomar alguns cuidados e evitar algumas situações, como:\n\n• Tocar a queimadura com as mãos;\n• Furar as bolhas;\n• Tentar descolar tecidos grudados na pele queimada;\n• Retirar corpos estranhos ou graxa do local queimado;\n• Colocar manteiga, pó de café, creme dental ou qualquer outra substância que não seja água sobre.\n\nPrevenção: Para diminuir o risco de queimaduras domésticas comuns, é necessário tomar algumas medidas, como: Nunca deixe itens cozinhando no fogão sem vigilância, vire as alças da panela para a parte traseira do fogão, mantenha líquidos quentes e aparelhos elétricos longe do alcance de crianças, entre outras.`
          }
        ]
      },
      {
        id: 'ps-intoxicacoes',
        title: 'Intoxicações e Envenenamentos',
        subTopics: [
          {
            id: 'ps-intox-1',
            title: 'Primeiros Socorros em Casos de Intoxicações',
            content: `As intoxicações ocorrem em consequência à ingestão, inalação ou contato com a pele de determinadas substâncias. Plantas tóxicas, alimentos contaminados, produtos de limpeza, remédios, soda, inseticidas e formicidas são exemplos de produtos que podem causar intoxicações. As intoxicações podem ser identificadas por causar, por exemplo, irritação nos olhos, garganta e nariz, salivação abundante, vômito, diarreia, convulsões, queda de temperatura, asfixia, tontura e sonolência.\n\nEm caso de intoxicações, o recomendado é identificar o agente causador da intoxicação e solicitar atendimento especializado. A pessoa, nesse momento, deve ser deixada imóvel e caso a intoxicação seja por produtos derivados de petróleo e corrosivos, como soda cáustica, alvejantes, tira ferrugem, amônia, gasolina, querosene e benzina, não se pode provocar vômito.`
          },
          {
            id: 'ps-intox-2',
            title: 'Procedimentos para Venenos Ingeridos',
            content: `1. Decidir se deve ou não induzir o vômito. Se a pessoa estiver inconsciente, não induza. Verifique o rótulo: se for ácido forte, álcali ou derivado de petróleo, não induza ao vômito. Na dúvida, não induza.\n2. Como induzir o vômito: use xarope de ipeca (2 colheres de sopa para adulto). Após o xarope, dê um copo d'água. Se não atuar em 15 minutos, dê uma segunda dose. Ao vomitar, segure a cabeça da pessoa numa posição mais baixa que o tórax.\n3. Procure ajuda médica imediatamente. Leve o recipiente do veneno, a medicação ou a droga restante ao pronto-socorro para análise.\n4. Evite o pânico e o choque. Deite a pessoa de lado para manter as vias aéreas desobstruídas. Cubra a pessoa para mantê-la aquecida.`
          },
          {
            id: 'ps-intox-3',
            title: 'Procedimentos para Venenos Inalados',
            content: `1. Verifique a respiração da pessoa. Caso ela tenha parado de respirar e você recebeu treinamento em RCP, tente ressuscitá-la.\n2. Examine a pele e os olhos da pessoa à procura de queimaduras químicas. Caso haja alguma, lave bem os olhos ou a pele com água. Afrouxe a roupa em torno do pescoço, por exemplo, um colarinho apertado ou uma gravata.\n3. Posicione-se para evitar o aparecimento de choque: Se a pessoa apresentar dificuldades respiratórias, deite-a de costas, com a cabeça e o tórax um pouco elevados. Se a pessoa estiver consciente, respirando bem e não estiver vomitando, deite-a de costas com as pernas elevadas 20 a 30 cm.`
          }
        ]
      },
      {
        id: 'ps-emergencias-biologicas',
        title: 'Emergências Biológicas',
        subTopics: [
          {
            id: 'ps-bio-1',
            title: 'Picada de Serpente Peçonhenta (Ofidismo)',
            content: `Algumas serpentes são capazes de injetar toxinas que podem causar grandes danos ao organismo e até mesmo a morte. Os primeiros socorros consistem em lavar a área da picada com água e sabão, colocar o acidentado em posição confortável, de preferência deixando a vítima deitada com a área afetada em um nível abaixo do coração e levar a vítima ao atendimento médico mais rápido.\n\nÉ fundamental não aplicar qualquer substância, não fazer cortes no local e nem amarrar ou fazer torniquetes. Outro ponto importante é não deixar a vítima locomover-se por meios próprios. Caso seja possível, levar a cobra para a identificação. O uso de garrotes (ou torniquetes) pode favorecer a gangrena e levar a mutilações nos acidentes onde o veneno tem ação local.`
          }
        ]
      },
      {
        id: 'ps-emergencias-respiratorias',
        title: 'Emergências Respiratórias e Cardíacas',
        subTopics: [
          {
            id: 'ps-resp-1',
            title: 'Engasgo e Asfixia',
            content: `O engasgo ocorre quando algum alimento ou um objeto bloqueia as vias respiratórias. Para evitar a morte por asfixia, um socorro rápido é necessário. Inicialmente, acalme a vítima e aplique a manobra de Heimlich: posicione-se atrás da vítima, coloque o braço ao redor do abdome, uma mão fechada sobre a boca do estômago e a outra sobre a primeira, comprimindo para dentro e para cima.\n\nEm bebês, coloque a criança de barriga para baixo sobre seu antebraço e dê cinco pancadas com o punho da mão. Vire a criança para cima e aplique cinco compressões rápidas no tórax. Se não funcionar, peça ajuda rapidamente.\n\nAsfixia: A respiração normal é impedida. Causas comuns incluem compressão do tórax, obstrução das vias aéreas externas, afogamento, corpos estranhos na laringe, estrangulamento, etc. Para socorrer, avalie a situação, realize golpes nas costas e, se necessário, impulsões abdominais (Manobra de Heimlich).`
          },
          {
            id: 'ps-resp-2',
            title: 'Angina e Infarto do Miocárdio',
            content: `O coração é irrigado pelas artérias coronárias. Uma redução no fluxo de sangue (placas de gordura) pode causar um ataque cardíaco. Tipos:\na) Angina - Ocorre quando o tecido cardíaco fica pobre em oxigênio (isquêmico), sem morte celular. Pode ser reversível.\nb) Infarto - É consequência de uma redução drástica no fluxo de oxigênio, que o tecido cardíaco sofre morte celular (necrose), irreversível.\nSintomas de dor cardíaca surgem com incapacidade cardíaca, por obstrução coronária. Angina de peito: dor temporária (até 20 min), precipitada por esforço, emoções, etc. Infarto do miocárdio: dor intensa e prolongada (mais de 20 min), geralmente em repouso. A pessoa deve ser removida para o pronto socorro o mais rápido possível.`
          },
          {
            id: 'ps-resp-3',
            title: 'Parada Respiratória',
            content: `Corresponde à interrupção por mais de 5 minutes das trocas gasosas. Sintomas: ausência de movimentos no tórax, inconsciência, rosto arroxeado, língua e unhas azuladas, ausência de saída de ar pelas narinas, imobilidade. O que fazer: Chamar pela vítima, verificar se está respirando (ouvido perto do nariz e boca, olhando o peito). Se não respira, chamar ajuda médica e iniciar respiração artificial (boca a boca ou nariz-boca). Para respiração boca a boca, deite a vítima, incline a cabeça, levante o queixo, tampe as narinas e sopre o ar para dentro da boca da pessoa.`
          },
          {
            id: 'ps-resp-4',
            title: 'Parada Cardíaca (PC)',
            content: `A parada cardiorrespiratória (parada cardíaca) é quando o coração para de bater ou não bate corretamente. Pode acontecer de repente. Antes, podem surgir sintomas como forte dor no peito, falta de ar, formigamento no braço esquerdo. Se a pessoa não estiver respirando, é importante iniciar a massagem cardíaca e chamar a ajuda médica.\n\nO que fazer: 1. Chamar pela vítima. 2. Verificar se não está respirando. Se não estiver, chamar ajuda médica e iniciar massagem cardíaca. 3. Para fazer a massagem: coloque a pessoa de barriga para cima numa superfície dura; posicione as duas mãos no ponto médio entre os mamilos; faça compressões sobre o peito, com os braços esticados, a um ritmo de 2 compressões por segundo, até a chegada da ajuda médica. Pode-se intercalar 2 respirações boca a boca a cada 30 compressões.`
          },
          {
            id: 'ps-resp-5',
            title: 'Afogamento',
            content: `O afogamento figura como uma das principais causas de morte em todo o mundo entre crianças e jovens. Fases: 1. Angústia: dificuldade para se manter na superfície. 2. Pânico: fadiga, incapaz de manter flutuabilidade. 3. Submersão: submerge e desaparece.\n\nComo socorrer: Chame imediatamente o guarda-vidas ou ligue para o 193 (Corpo de Bombeiros). Se for ajudar, leve um material flutuante (prancha, galho, corda) e estenda para a pessoa se segurar, evitando que ela te agarre. Fora da água, siga as instruções do serviço de emergência.\n\nCuidados para evitar: Crianças sempre sob vigilância de um adulto; banho no mar ou represas somente com guarda-vidas; usar colete salva-vidas em barcos; se consumir álcool, fique fora da água.`
          },
          {
            id: 'ps-resp-6',
            title: 'Distúrbios e Doenças Respiratórias',
            content: `Problemas respiratórios provocam irritações e inflamações nas fossas nasais, faringe, laringe, traqueia, brônquios, etc., podendo obstruir as vias aéreas.\n\nDoenças crônicas: Rinite (inflamação nas mucosas nasais), Asma (inflamação no interior do pulmão), DPOC (Doença Pulmonar Obstrutiva Crônica), Sinusite (obstrução das cavidades ósseas da face), Tuberculose (causada por bactéria, afeta os pulmões).\n\nDoenças agudas: Gripe (causada pelo vírus Influenza), Faringite (infecção na faringe), Pneumonia (infecção nos alvéolos pulmonares).`
          },
          {
            id: 'ps-resp-7',
            title: 'Dispnéia',
            content: `A dispneia é a sensação de falta de ar. Geralmente é acompanhada de cansaço, aperto no peito ou respiração irregular e acelerada. Pode ser causada por doenças cardíacas ou que afetam diretamente os pulmões. Sintomas principais: Dificuldade para respirar, Cansaço, Respiração irregular e acelerada, Tosse. Se a dispneia se mantiver por muito tempo ou for acompanhada de outros sintomas graves, é fundamental procurar atendimento médico de emergência.`
          }
        ]
      },
      {
        id: 'ps-traumas',
        title: 'Traumas e Lesões',
        subTopics: [
          {
            id: 'ps-trauma-1',
            title: 'Traumatologia: Contusões e Ferimentos',
            content: `Trauma é uma lesão provocada pela atuação de algum agente vulnerante sobre o corpo. Contusões: lesão resultante do impacto de algum objeto contra o corpo, mantendo a integridade da pele. No local aparecem edemas (inchaço), dor e, às vezes, equimose (mancha arroxeada) ou hematoma (bolsa ou tumoração). Tratamento: Bolsa de gelo, analgésico, imobilização se for em membros.\n\nFerimentos: 1. Escoriação (ralada). 2. Cortante/inciso (faca). 3. Lacerativo (formato irregular). 4. Perfurantes (prego). 5. Transfixantes (atravessam uma estrutura). 6. Penetrantes (penetram em cavidade natural). Conduta: deter a hemorragia, limpeza com água e sabão, remoção de detritos.`
          },
          {
            id: 'ps-trauma-2',
            title: 'Fraturas, Luxações e Entorses',
            content: `Fraturas: Desconfiar de fratura se a parte suspeita possuir aparência ou função anormais, dor, incapacidade de movimentar, posição anormal. Coloque o membro em posição natural. Ponha talas sustentando o membro (tábua, papelão, revista grossa). Classificação: completa, incompleta, simples (fechada), exposta (aberta). Tratamento de urgência: Imobilizar com talas e não forçar o osso à posição normal.\n\nLuxações: É o deslocamento permanente de duas superfícies articulares que perderam seu contato normal. Pode ser completa ou sub-luxação. Causas: traumatismo direto ou indireto.\n\nEntorses: É o traumatismo das partes moles de uma articulação (músculos e ligamentos), sem perda total da mobilidade, porém com dor ao movimento. Sintomas: Dor, rubor e edema. Tratamento: Elevar a região, imobilizar, aplicar gelo.`
          },
          {
            id: 'ps-trauma-3',
            title: 'Lesões na Coluna',
            content: `• Mantenha a vítima agasalhada e imóvel;\n• Não mexa nem deixe ninguém tocar na vítima com suspeita de lesão na espinha até a chegada do médico ou enfermeiro;\n• Nunca vire uma pessoa com suspeita de fratura na espinha;\n• Observe a sua respiração, esteja pronto para iniciar a respiração boca-boca.. o transporte tem de ser feito em maca dura ou Padiola:\n• Durante o transporte em veículos, evitar balanços e freadas repentinas, para não agravar a lesão;\n• Se a lesão for no pescoço, e de extrema importância não movimentar a cabeça do paciente.\n• Devem ser feitos apoios laterais com travesseiros almofada, etc, em torno do pescoço, para evitar seus movimentos (improvisar o colar de Thomas)`
          },
          {
            id: 'ps-trauma-4',
            title: 'Hemorragias',
            content: `É a saída de sangue dos vasos como consequência de uma ruptura. A quantidade de sangue circulante no corpo humano é de aproximadamente 5 litros. Tipos: 1. Arterial: sangue vermelho vivo, sai em jorro forte e intermitente. 2. Venosa: sangue vermelho muito escuro, sai de forma contínua e sem força. 3. Capilar: sangue de cor intermediária, brota em pequenas gotas ou filetes. Classificação: Externa (origem visível), Interna (em cavidade fechada), Mista. Tratamento: Compressão Digital Direta (lavar, cobrir com pano limpo, comprimir com firmeza, elevar acima do nível do coração). Em último caso, aplicar torniquete.`
          },
          {
            id: 'ps-trauma-5',
            title: 'Aplicação de Torniquete',
            content: `• Encontre um pedaço de pano com pelo menos 5 cm de largura. Nunca utilize faixa estreita, cinto, corda ou arame.\n• Aplique o torniquete acima do ferimento, mas não o toque. Mantenha o pano liso e apertado e enrole-o duas vezes em torno do membro.\n• Amarre as pontas do pano.\n• Coloque um bastão reto e forte no alto do nó.\n• A seguir, dê um nó duplo sobre o bastão.\n• Torça o bastão até o sangramento estancar e pare. Prenda bem o bastão.\n• Em um pedaço de papel ou pano escreva "Torniquete" e a hora de sua aplicação, prendendo-o na roupa da pessoa.\n• Não se deve deixar colocado o torniquete por mais de 20 minutos. Se for necessário, fazê-lo afrouxar uns instantes, cada 15 a 20 minutos. Aplique o torniquete somente em situações que ameacem a vida da vítima e apenas como último recurso.`
          }
        ]
      },
      {
        id: 'ps-condicoes-gerais',
        title: 'Condições Clínicas Gerais',
        subTopics: [
          {
            id: 'ps-geral-1',
            title: 'Desmaios, Síncope e Vertigem',
            content: `Desmaio/Síncope: É a perda repentina e completa dos sentidos, com batimentos cardíacos muito fracos e irregulares ou ausência dos mesmos, e, redução ou parada da respiração. A pupila estará dilatada. Pode apresentar rosto pálido (provável síncope), rosto vermelho (provável hemorragia cerebral) ou rosto azulado-arroxeado (provável asfixia).\n\nVertigem/Lipotimia: Forma leve de síncope. Sintomas: debilidade, sensação de falta de ar, tonteiras, zumbido nos ouvidos e náuseas, seguido de escurecimento da vista. Socorro: Não dobre nem vire o corpo da pessoa se suspeitar de ferimentos no pescoço/costas. Não sacuda nem dê tapinhas. Não use estimulantes. Não tente dar nada para a pessoa beber.`
          },
          {
            id: 'ps-geral-2',
            title: 'Convulsões e Crises Epiléticas',
            content: `Os sinais de convulsão podem ser: Queda; Sialorréia (excesso de salivação); Enrijecimento, movimentos espasmódicos; Perda temporária da respiração; Perda do controle esfincteriano. Como evitar lesões: Pegue a pessoa quando esta cair e deite-a. Retire mobília e objetos duros. Afrouxe roupas apertadas. Coloque apoio na cabeça. Não restringir os movimentos. Lateralizar a cabeça. Após a crise, mantenha a pessoa deitada. Nas convulsões, o importante é o "que não fazer": Não tentar imobilizar, não afastar os dentes nem puxar a língua para baixo, não tente dar ou jogar água fria.`
          },
          {
            id: 'ps-geral-3',
            title: 'Estado de Choque',
            content: `Condição física, falha do coração e da circulação que se seguem a ferimentos graves. Pode ser causado por perda considerável de volume de sangue (Choque hipovolêmico). O cérebro é extremamente sensível a essa perda. Sinais e sintomas: paciente pálido, frio, suando. Pulsação e respiração rápidas e fracas; sente-se nauseado, com sede, prestes a desmaiar. Pode se tornar inquieto, agitado ou em coma.\n\nPrevenção: Faça a hemóstasia. Proporcione descanso em posição confortável. Afrouxe cintos. Mantenha o paciente aquecido. Diminua o desconforto. Fale com o paciente com calma e confiança.`
          },
          {
            id: 'ps-geral-4',
            title: 'Alterações de Pressão e Glicemia',
            content: `Hipertensão arterial: doença frequente, "inimigo silencioso". Interessa ao socorrista a crise hipertensiva, com aumento significativo da pressão.\n\nHipotensão: Característica de pronto restabelecimento com a vítima deitada ou sentada com a cabeça entre os joelhos. Procedimentos como "sal debaixo da língua" não têm base científica, mas funcionam como estímulo psicológico.\n\nHiperglicemia, Diabetes e Hipoglicemia: Glicose é o combustível das células. A insulina, produzida pelo pâncreas, permite que a glicose entre nas células. O diabético tem deficiência na produção de insulina. Tipo I (juvenil) e Tipo II (adulto). Hiperglicemia (elevada taxa de glicose) e Hipoglicemia (baixa taxa de glicose).`
          },
          {
            id: 'ps-geral-5',
            title: 'Dor Abdominal, Vômito e Diarreia',
            content: `Dor abdominal: Comumente se deve a ingestão, intolerância alimentar, ar preso ou cólicas. Na maioria das vezes, é um evento benigno. Porém, se for de forte intensidade ou com outros sintomas, requer avaliação médica.\n\nVômito: Comuns, quase sempre devidos a excessos alimentares ou infecções virais. Sinais de perigo: se forem intensos ou prolongados, ou acompanhados de febre, calafrios, dor intensa ou sangue.\n\nDiarreia: Eliminação urgente e repetida de fezes aquosas. Podem ser causadas por excessos alimentares, comida estragada, alergias, etc. A abstinência de alimentos sólidos e a ingestão de líquido ajudam.`
          },
          {
            id: 'ps-geral-6',
            title: 'Reações Alérgicas',
            content: `Ocorrem com alta frequência, a maioria se resume a alteração da pele (urticária). Às vezes há inchaço do rosto e raramente ocorre o choque anafilático com edema de glote e óbito. Fatores mais comuns: a) Alimentos: carne de porco, frutos do mar, gema de ovo, etc. b) Medicamentos: sulfa, penicilina, analgésica. c) Pó caseiro: poeira, pólen, mofo. d) Cremes de beleza. e) Fatores físicos: frio, exercício.`
          }
        ]
      },
      {
        id: 'ps-corpos-estranhos',
        title: 'Corpos Estranhos',
        subTopics: [
          {
            id: 'ps-ce-1',
            title: 'Olhos, Ouvidos e Nariz',
            content: `Olhos: Sintomas: Dor em queimação ou ferroada, olhos avermelhados, lacrimejamento, sensibilidade à luz. Lave bem as mãos e examine o olho. Se um cisco parece flutuar, tente retirar através de irrigação do local. O próprio lacrimejamento pode soltar o corpo estranho. Se não correr, irrigue com soro fisiológico. Se o objeto está entranhado, cubra ambos os olhos e procure ajuda médica.\n\nOuvidos: Não introduza instrumento. No caso de pequenos insetos, o socorro consiste em colocar éter, gotas de azeite ou óleo comestível no ouvido para imobilizar e matar o inseto. Depois, mude a posição da cabeça para escorrer o azeite.\n\nNariz: Comprima com o dedo a narina não obstruída. Com a boca fechada, tente expelir o ar pela narina em que se encontra o corpo estranho. Não introduza instrumentos. Se não puder ser retirado com facilidade, aguarde o médico.`
          }
        ]
      },
      {
        id: 'ps-alteracao-conduta',
        title: 'Alterações de Conduta',
        subTopics: [
          {
            id: 'ps-ac-1',
            title: 'Alcoolismo e Uso de Drogas',
            content: `Alcoolismo: Uma das principais toxicomanias. Pode ser agudo ou crônico, sendo o primeiro mais interessante ao socorrista. O C.M.S. deve conhecer bem os sinais de alcoolismo agudo devido a alta frequência nas viagens aéreas.\n\nAlteração de Conduta por Droga: As drogas determinam uma variedade enorme de alterações de comportamento, desde um simples ESTADO de sedação até manifestações de extrema agitação com delírio, alucinação, atitudes antissociais, comportamento autodestrutivo e violento. A interação de álcool e droga potencializam os distúrbios. A TRIPULAÇÃO deve ter em mente que a presença de um indivíduo drogado a bordo compromete potencialmente a segurança de voo.`
          }
        ]
      },
      {
        id: 'ps-parto',
        title: 'Parto a Bordo',
        subTopics: [
          {
            id: 'ps-parto-1',
            title: 'Noções Gerais sobre Gestação e Parto',
            content: `A gestação em condições normais desenvolve-se por 9 meses solares ou 10 meses lunares. Fenômenos físicos: aumento do volume dos seios, aparecimento do colostro, aumento do útero e do ventre, etc. Fenômenos fisiológicos: amenorreia (falta de menstruação). Fenômenos psicológicos: náuseas, vômitos, sialorreia, etc.\n\nNomenclatura: Gravidez até 2 meses (Embrionária), a partir de 3 meses (Fetal), 7/8 meses (Parto Prematuro), 9 meses (Parto a Termo).`
          },
          {
            id: 'ps-parto-2',
            title: 'Trabalho de Parto e Cuidados',
            content: `Chama-se Trabalho de Parto (TP) o tempo que a mulher leva para que o seu filho nasça. Dilatação do colo de aproximadamente 10 cm. Sinais e sintomas: Perda do tampão mucoso; Presença de sinais sanguinolentos; Endurecimento do ventre materno; Perda de líquido Amniótico; Contrações rítmicas e frequentes. A bordo, o trabalho de parto deverá ser observado. Fases do Parto: Dilatação, Expulsão, Dequitação. Cuidados especiais com a parturiente: comunicar a ocorrência, procurar médico/enfermeira a bordo, adaptar um local, lavar as mãos, limpar o períneo.`
          },
          {
            id: 'ps-parto-3',
            title: 'Assistência ao Parto e ao Recém-Nascido',
            content: `Após a saída do polo cefálico, passar o dedo indicador por trás do pescoço do feto para verificar circular de cordão. Retirar a placenta da cavidade uterina por massagens, sem tracioná-la. Verificar se houve ou não ruptura do períneo. Se houver sangramento excessivo, fazer massagens manuais ou colocar bolsa de gelo sobre o baixo ventre.\n\nCuidados com o recém-nascido: Ao nascer, coloque o RN mais baixo que a mãe. Desobstruir nariz e boca. Mante-lo de cabeça para baixo. Fazer a ligadura do cordão umbilical. Agasalhá-lo. Colocá-lo na posição inclinada. Se nascer arroxeado (cianosado), fazer oxigenoterapia. Pingar colírio Argirol em cada olho.`
          },
          {
            id: 'ps-parto-4',
            title: 'Cuidados com Gestantes a Bordo',
            content: `1. Numa gravidez até o 3° ou 4° mês o cinto de segurança poderá ser colocado indiferentemente. Em gravidez mais avançada, sobre dois ou mais travesseiros apoiados nas coxas.\n2. Uma gestante no final da gestação deverá ser colocada nas poltronas próximas à cauda do avião.\n3. A locomoção da gestante deve ser sempre acompanhada.\n4. Jamais ofereça cafezinho ou chimarrão.\n5. Somente o médico assistente da gestante poderá autorizar sua viagem. Não é conveniente que gestantes viajassem durante o terceiro trimestre.`
          }
        ]
      },
      {
        id: 'ps-acidente-aereo',
        title: 'Acidente Aeronáutico',
        subTopics: [
          {
            id: 'ps-aa-1',
            title: 'Atendimento aos Sobreviventes',
            content: `Por definição, as vítimas de um acidente desta natureza são considerados politraumatizados. O exame das VÍTIMAS deve ser sumário, visando detectar a presença de hemorragia, choque, obstrução das vias aéreas, fraturas e luxações.\n\nRapidamente, devem ser adotadas medidas na seguinte ordem decrescente de prioridades: desobstrução das vias aéreas; cessação de hemorragias; tratamento do estado de choque; imobilização das fraturas; tratamento dos ferimentos. Os socorristas devem procurar classificar os feridos em leves, estáveis e graves para orientar a pioridade de remoção.\n\nTransportes de acidentados: TRAUMA CRANIANO: Sentados ou em decúbito dorsal. TRAUMA DE COLUNA CERVICAL: Decúbito dorsal com proteção lateral da cabeça e da nuca. Usar maca rígida. TRAUMA DA COLUNA LOMBAR: Decúbito dorsal, maca rígida. TRAUMA DE TÓRAX: Sentada ou semi-sentada. TRAUMA ABDOMINAL: Decúbito dorsal.`
          }
        ]
      }
    ]
  },
  {
    id: 'cap3',
    title: 'CAPÍTULO 3: DESENHO TÉCNICO DE AERONAVES',
    topics: [
      {
        id: 'dt-fundamentos',
        title: 'Fundamentos do Desenho Técnico',
        subTopics: [
          {
            id: 'dt-fundamentos-1',
            title: 'Introdução e Plantas',
            content: `A troca de idéias é essencial para todos. Normalmente, essa troca é executada através da palavra falada ou escrita, mas sob algumas condições o uso dela sozinha é impraticável. Para evitar possíveis erros, a indústria usa desenhos para descrever objetos. Por esta razão, desenho é chamado de "linguagem do desenhista".\n\nPLANTAS: As plantas são o elo entre os engenheiros, que projetam o avião; e entre os homens, que o constrói, mantém e consertam-no. Uma planta pode ser a cópia de um desenho de trabalho para uma peça, grupo de peças, ou para um modelo de um sistema. Elas são feitas pela colocação de traços de desenhos sobre uma folha de papel quimicamente tratado, expondo-o a uma intensa luz. Quando o papel exposto é revelado, ele fica azul onde a luz penetrou. Como as linhas do desenho bloqueiam a luz, elas se mostram como linhas brancas sobre o fundo azul.`
          },
          {
            id: 'dt-fundamentos-2',
            title: 'Tipos de Desenhos de Trabalho',
            content: `Desenhos de trabalho têm que dar informações como: o tamanho do objeto e todas as suas partes; seu formato; especificações como o material a ser usado, como ele deve ser acabado, etc. Podem ser divididos em três partes: (1) Desenhos de detalhes, (2) Desenhos de conjuntos, (3) Desenhos de montagens.\n\nDesenhos de detalhes: É a descrição de uma peça simples. Descreve através de linhas, notas, símbolos, especificações como tamanho, formato, material e método de manufatura.\n\nDesenhos de conjuntos: É uma descrição de um objeto, feito de duas ou mais partes. Sua principal finalidade é mostrar o relacionamento das várias partes. É, normalmente, mais complexo que um desenho detalhado.\n\nDesenhos de montagem: Inclui todas as informações necessárias para a montagem das peças em sua posição final na aeronave. Ele mostra as medidas necessárias para a localização de peças específicas.`
          },
          {
            id: 'dt-fundamentos-3',
            title: 'Bloco de Títulos e Numeração',
            content: `BLOCO DE TÍTULOS: Toda planta tem que ter alguns meios de identificação, provido por um bloco de título. Esta informação é agrupada em um local proeminente na planta, normalmente no canto inferior direito. Embora não sigam uma forma padrão, todos irão apresentar: 1. Um número do desenho; 2. O nome da peça ou conjunto; 3. A escala; 4. A data; 5. O nome da firma; 6. O nome do desenhista, do revisor e da pessoa que aprovou.\n\nNÚMEROS DE DESENHOS OU DE PLANTAS: Todas as plantas são identificadas por um número, que aparece no canto inferior direito do bloco de título. A finalidade da numeração é a rápida identificação da planta. Caso uma planta tenha mais de uma folha, esta informação é incluída no bloco de números indicando o número da página e o número total de páginas.`
          },
          {
            id: 'dt-fundamentos-4',
            title: 'Lista de Materiais e Bloco de Revisão',
            content: `LISTA DE MATERIAL: Uma lista de materiais e peças necessárias à fabricação ou montagem de um componente ou sistema, é, freqüentemente incluída no desenho. A lista, normalmente será em colunas em que são listados os PNs, nome da peça e material do qual deve ser construída, quantidade de material necessário e a origem da peça ou material.\n\nBLOCO DE REVISÃO: Revisões em um desenho são necessárias para mudança de dimensões, modelo ou materiais. As mudanças são normalmente listadas em colunas adjacentes ao bloco de título. Todas as mudanças aprovadas para um desenho devem ser cuidadosamente anotadas. O bloco de revisão, contém o símbolo de identificação (letra ou número), a data, a natureza da revisão; quem autorizou a mudança, e o nome do desenhista, que efetuou a mudança.`
          }
        ]
      },
      {
        id: 'dt-elementos',
        title: 'Elementos do Desenho',
        subTopics: [
          {
            id: 'dt-elementos-1',
            title: 'O Significado das Linhas',
            content: `Todo desenho é composto de linhas. Várias espécies de linhas padronizadas são usadas em desenhos de aeronaves.\n- Linhas de centro: Traços longos e curtos. Indicam o centro do objeto.\n- Linhas de cota: Linha sólida interrompida para colocar a medida. Mostra a origem e o fim da medida.\n- Linhas líderes: Sólidas, com uma seta numa das pontas, indicam uma parte ou porção de uma nota.\n- Linhas de ruptura: Indicam que uma porção do objeto não é mostrada. Longas rupturas são feitas com linhas sólidas e ziguezagues.\n- Linhas fantasmas: Indicam a posição alternada de partes do objeto. Compostas de um longo e dois curtos traços.\n- Linhas de hachuras: Indicam superfícies expostas na vista seccionada.\n- Linhas ocultas: Indicam margens invisíveis ou contornos. Feitas de traços curtos espaçados.\n- Linhas de contorno ou de arestas visíveis: Usadas em todas as linhas do desenho, representando as linhas visíveis do objeto.\n- Linhas ponteadas ou interrompidas: Série de pequenos traços, espaçados regularmente.\n- Linhas de corte e vista de corte: Indicam o plano no qual uma vista seccional do objeto é tomada.`
          },
          {
            id: 'dt-elementos-2',
            title: 'Tolerâncias e Marcas de Acabamento',
            content: `Tolerâncias: Quando uma dimensão dada em uma planta mostra uma variação permitida, o sinal mais (+), indica o máximo; e o sinal menos (-), indica a mínima variação permitida. A soma dos sinais indica a tolerância. Por exemplo, usando .225 + .0025 / -.0005; os sinais mais (+) e menos (-) indicam que a peça será aceitável se não for .0025 maior do que a dimensão dada .225, ou não mais do que .0005 menor. A tolerância pode ser indicada de forma fracionária ou decimal.\n\nMarcas de acabamento: São usadas para indicar as superfícies que devem ter um acabamento por máquina. As superfícies acabadas têm uma aparência melhor e permitem um encaixe mais justo. Não confundir "acabamento por máquina" com aqueles "por pintura, esmalte, cromagem e coberturas semelhantes".`
          },
          {
            id: 'dt-elementos-3',
            title: 'Zoneamento e Números de Estação',
            content: `Zoneamento: É semelhante aos números e letras impressos nas bordas de um mapa. Eles estão ali, para auxiliar a localização de um determinado ponto. Use o mesmo método para localizar partes, seções e vistas em desenhos grandes.\n\nNúmeros de estação: Um sistema de numeração é usado em grandes conjuntos da aeronave para localizar estações como as cavernas da fuselagem. Caverna da estação da fuselagem 185 (Fuselage Frame Sta 185) indica que a caverna está a 185 polegadas do ponto de referência da aeronave. A medição é normalmente tirada a partir do nariz ou estação zero. O mesmo sistema é usado para asas e estabilizadores.`
          },
          {
            id: 'dt-elementos-4',
            title: 'Notas e Referências',
            content: `Notas: São acrescentadas aos desenhos por várias razões. Algumas referem-se aos métodos de montagem ou de construção. Outras dão alternativas. As notas podem ser encontradas ao lado do item, ao qual elas se referem. Se as notas forem muito longas, podem ser colocadas em outros lugares do desenho e identificadas por letras ou números.\n\nReferências e extensões: Números de referências que aparecem no campo título, mostra a um indivíduo o número de outras plantas. Extensões são utilizadas para identificar peças direitas e esquerdas. Em uma aeronave, muitas peças do lado esquerdo se parecem com peças do lado direito, porém invertidas. As peças do lado esquerdo são sempre mostradas no desenho.`
          }
        ]
      },
      {
        id: 'dt-vistas',
        title: 'Vistas e Projeções',
        subTopics: [
          {
            id: 'dt-vistas-1',
            title: 'Desenhos Pictoriais e Projeção Ortográfica',
            content: `Desenhos pictoriais: É similar a uma fotografia. Mostra o objeto como ele aparece aos olhos, mas não é satisfatório para mostrar formas e formatos complexos. São úteis para mostrar a aparência de um objeto.\n\nDesenhos de projeção ortográfica: Para mostrar o exato tamanho e forma de todas as peças de objetos complexos, são necessárias mais de uma vista. Existem seis vistas possíveis de um objeto (frente, cima, parte de baixo, traseira, lado direito e lado esquerdo). Raramente se faz necessário mostrar os seis lados. Os desenhos mais comuns são os de uma, duas e três faces, com a vista frontal sendo a principal.`
          },
          {
            id: 'dt-vistas-2',
            title: 'Vista de Detalhes',
            content: `Uma vista de detalhe mostra apenas parte de um objeto, porém bem detalhado e em escala maior do que a da vista principal. A parte mostrada do detalhe é normalmente destacada com uma linha escura na vista principal. A vista principal mostra o controle completo, enquanto o detalhe é um desenho aumentado de uma parte do controle.`
          },
          {
            id: 'dt-vistas-3',
            title: 'Vistas Seccionadas',
            content: `Uma secção ou vista seccionada é obtida cortando parte do objeto para mostrar a forma e a construção no plano cortado. O corte das partes são mostrados pelo uso de linhas de secção (sombreado).\n\nMeias Secções: O plano de corte é feito somente seccionando o objeto pelo meio, - uma metade do objeto fica como vista exterior. São usadas com vantagem em objetos simétricos.\n\nSecção rebatida: Desenhada diretamente na vista exterior, mostra a forma de corte transversal da parte, como o raio da roda.\n\nSecção removida: Mostram particularidades do objeto. Estão colocadas de um lado e destacam detalhes pertinentes e são frequentemente, desenhadas em uma escala maior que a vista.`
          }
        ]
      },
      {
        id: 'dt-interpretacao',
        title: 'Interpretação e Diagramas',
        subTopics: [
          {
            id: 'dt-interpretacao-1',
            title: 'Interpretando Desenhos',
            content: `Um desenho não pode ser interpretado todo de uma vez. Na abertura de um desenho, leia o número do desenho e a descrição do artigo. Depois cheque qual é o modelo, a última alteração, e o próximo conjunto listado. Na interpretação de um desenho de muitas vistas, primeiro pegue a idéia geral da forma do objeto pela discriminação de todas as vistas, então selecione uma vista para um estudo mais cuidadoso. Após determinar a forma, determine seu tamanho. Informação de dimensão e tolerância são dadas para se ter certeza que o desenho correto será encontrado. As dimensões são indicadas por algarismos, com ou sem marcas de polegadas.`
          },
          {
            id: 'dt-interpretacao-2',
            title: 'Diagramas de Instalação',
            content: `Um diagrama deve ser definido como uma representação gráfica de um conjunto ou sistema; indicando as várias partes e, expressamente, os métodos ou princípios de operação. Diagramas de instalação identificam cada componente no sistema e mostram sua localização na aeronave. São usados extensivamente na manutenção de aeronaves e manuais de reparos.`
          },
          {
            id: 'dt-interpretacao-3',
            title: 'Diagramas Esquemáticos',
            content: `Diagramas esquemáticos não indicam a localização individual de componentes na aeronave, mas localizam os componentes com respeito a cada um dentro do sistema. São usados, principalmente na solução de problemas. Cada linha é codificada para facilitar a leitura e seguir o fluxo. Cada componente é identificado pelo nome, e sua localização no sistema pode ser verificada observando-se as linhas que entram e saem da unidade.`
          }
        ]
      },
      {
        id: 'dt-simbolos',
        title: 'Esboços e Símbolos',
        subTopics: [
          {
            id: 'dt-simbolos-1',
            title: 'Esboços de Desenho',
            content: `Um esboço é um simples desenho de rascunho, que é feito rapidamente e sem muito detalhe. É freqüentemente desenhado para uso na fabricação de um componente substituído, e deve prover todas as informações necessárias. Para fazer um esboço, primeiro determine quais as vistas necessárias para representar o objeto; então esboce estas vistas, usando linhas leves de construção. Em seguida complete os detalhes, escurecendo o contorno do objeto, e esboce as linhas de extensão e de cota. Complete o desenho adicionando observações, dimensões, títulos, datas e o nome de quem fez o esboço.`
          },
          {
            id: 'dt-simbolos-2',
            title: 'Símbolos de Materiais e Formas',
            content: `Os desenhos para um componente contêm uma grande quantidade de símbolos e convenções.\n\nSímbolos de material: Símbolos de linhas de hachuras mostram o tipo de material do qual o componente deverá ser construído. O material pode não ser indicado simbolicamente quando sua exata especificação precisar ser mostrada em outro lugar no desenho.\n\nSímbolos das formas: Podem ser usados com excelente vantagem, quando se deseja mostrar a forma de um objeto. Símbolos de formas são, usualmente, mostrados em um desenho como uma seção rebatida ou removida.`
          },
          {
            id: 'dt-simbolos-3',
            title: 'Símbolos Elétricos',
            content: `Símbolos elétricos representam vários mecanismos elétricos, ao invés de um desenho real das unidades. Após ter-se aprendido os vários símbolos indicados, torna-se relativamente simples olhar um diagrama elétrico e determinar o que é cada unidade, qual sua função, e como é ligada ao sistema.`
          }
        ]
      },
      {
        id: 'dt-manuseio',
        title: 'Manuseio e Ferramentas',
        subTopics: [
          {
            id: 'dt-manuseio-1',
            title: 'Cuidados e Uso de Desenhos',
            content: `Desenhos são caros e valiosos; em consequência, eles devem ser manuseados com cuidado. Abra os desenhos lenta e cuidadosamente para evitar que o papel se rasgue. Para proteger os desenhos, nunca os espalhe no chão ou os coloque em superfícies cobertas de ferramentas ou outros objetos. As mãos devem estar livres de óleo, graxa, ou outras substâncias que possam manchar ou borrar a planta. Nunca faça notas ou marcas em uma planta, a menos que seja autorizado. Quando terminar com um desenho, dobre e devolva-o ao devido lugar.`
          },
          {
            id: 'dt-manuseio-2',
            title: 'Cuidados com Instrumentos de Desenho',
            content: `Bons instrumentos de desenho são ferramentas de precisão caras. Réguas "T", esquadros e réguas graduadas, não devem ser usadas ou colocadas onde suas superfícies ou quinas possam ser danificadas. Use a prancha de desenho somente para os propósitos pretendidos. Compasses e canetas proporcionarão melhores resultados se possuírem forma correta e estiverem afiados. Guarde os instrumentos num lugar seguro. Proteja as pontas do compasso. Nunca guarde as canetas tinteiro sem primeiro limpá-las ou secá-las por completo.`
          },
          {
            id: 'dt-manuseio-3',
            title: 'Microfilme',
            content: `A prática de gravação de desenhos, de catálogos de peças e manutenção de revisão em microfilmes, foi introduzida nos últimos anos. O microfilme, é um filme regular de 16 ou 35 mm. Para ler ou ver desenhos, ou manuais num rolo de filme, você precisa de um projetor portátil, uma leitora ou visor de microfilmes. A vantagem do microfilme, é que diversos rolos requerem somente um pequeno espaço para armazenagem. O microfilme não pode substituir o desenho original, especificamente onde os originais estão modificados e mantidos, atualizados por um longo tempo.`
          }
        ]
      }
    ]
  },
  {
    id: 'cap4',
    title: 'CAPÍTULO 4: FERRAMENTAS MANUAIS E DE MEDIÇÃO',
    topics: [
      {
        id: 'fm-geral',
        title: 'Ferramentas de Uso Geral',
        subTopics: [
          {
            id: 'fm-geral-1',
            title: 'Martelos e Macetes',
            content: `Martelos de cabeça metálica têm suas medidas de acordo com o peso da cabeça. Martelos de face macia (madeira, latão, chumbo, couro, borracha, plástico) devem ser utilizados em metais macios e para bater em superfícies que facilmente se danificam, não devendo ser usados em trabalhos grosseiros.\nO macete é semelhante ao martelo, com cabeça de madeira, couro cru ou borracha, usado para formar partes delgadas de metal sem deixar mossas.\nAo usar um martelo ou macete, escolha o que melhor atende ao trabalho, com cabo firme. Use o antebraço como extensão do cabo, dobrando o cotovelo e não apenas o pulso. Mantenha as faces sempre lisas e sem dentes.`
          },
          {
            id: 'fm-geral-2',
            title: 'Chaves de Fenda',
            content: `São classificadas pelo formato, tipo e comprimento da haste, e feitas para apertar e afrouxar parafusos. Deve-se usar a maior chave que dê boa fixação, preenchendo pelo menos 75% da fenda para não danificar o parafuso.\nTipos comuns de encaixe são Phillips e Reed & Prince, que não são intercambiáveis. O uso do tipo errado resultará em mutilação da ferramenta e do parafuso. A chave em "Z" é útil para locais com espaço vertical limitado. A chave de catraca ou espiral é de ação rápida, mas para serviços leves.\nNunca use uma chave de fenda como alavanca, ferramenta de corte ou para testar circuitos elétricos.`
          },
          {
            id: 'fm-geral-3',
            title: 'Alicates',
            content: `Os tipos mais usados são: diagonal, ajustável, de ponta e bico de pato. O tamanho é determinado pelo comprimento total (5 a 12 polegadas).\n- Bico chato: para fazer flanges.\n- Bico redondo: para torcer metal (não para trabalhos pesados).\n- Bico de pato: para executar frenagens com arame.\n- Diagonal: para cortar arames, fios, rebites e contrapinos.\nRegras importantes: 1 - Não utilizar alicates em trabalhos que excedam sua capacidade. 2 - Não usar alicates para girar porcas, pois isso danifica a porca.`
          },
          {
            id: 'fm-geral-4',
            title: 'Punções',
            content: `São usados para marcar centros, iniciar furos, transferir localizações e remover rebites/pinos. Podem ser sólidos ou ocos.\n- Punção de bico: para fazer marcas de referência no metal. Nunca deve ser golpeado fortemente.\n- Punção de centro: para fazer marcas profundas para início de furação. Possui um ângulo de 60°.\n- Punção extrator (cônico): para extrair rebites e pinos danificados.\n- Tocapinos: semelhante ao extrator, mas com haste paralela, para completar a remoção.\n- Punção de transferência: para marcar orifícios para rebites usando um gabarito.\n- Punção automático: conveniente para marcar um grande número de furos com precisão, com força de golpe ajustável.`
          }
        ]
      },
      {
        id: 'fm-aperto',
        title: 'Chaves de Aperto',
        subTopics: [
          {
            id: 'fm-aperto-1',
            title: 'Chaves de Boca, Colar e Combinada',
            content: `As chaves são destinadas a fixar ou afrouxar porcas e parafusos. Geralmente feitas de aço cromo-vanádio.\n- Chaves de boca: Sólidas, não ajustáveis, com abertura paralela em uma ou ambas as extremidades. A maioria tem um ângulo de 15° para facilitar o uso em locais com pouco espaço para giro.\n- Chaves de colar (ou caixa/estrela): Envolvem completamente a porca/parafuso, sendo ideais para lugares estreitos. Geralmente possuem 12 pontos para permitir o uso com um deslocamento de apenas 15°.\n- Chave combinada: Possui uma ponta de chave colar e outra de boca, ambas da mesma medida, combinando a rapidez da chave de boca com a segurança da chave colar.`
          },
          {
            id: 'fm-aperto-2',
            title: 'Chaves Soquete',
            content: `A chave soquete é feita em duas partes: o soquete (que encaixa na porca) e o punho (cabo). Existem muitos tipos de punhos, extensões e uniões (juntas universais) para possibilitar o uso em quase todas as posições.\nOs punhos destacáveis vêm em conjuntos com vários tipos, como cabo "T", catraca, e arco de velocidade. O encaixe entre o cabo e o soquete é quadrado, mantido por uma pequena esfera com mola.`
          },
          {
            id: 'fm-aperto-3',
            title: 'Chaves Especiais',
            content: `- Chave ajustável: Possui mordentes lisos e é utilizada como uma chave de boca, mas com abertura variável. Não é destinada a substituir as chaves de medida fixa. A força de tração deve ser sempre aplicada no lado do mordente fixo.\n- Chave de gancho: Usada em porcas redondas com entalhes. Pode ser fixa ou ajustável.\n- Chave de torque (Torquímetro): Ferramenta de precisão para aplicar uma força de torção específica. Tipos comuns: barra flexível, estrutura rígida e catraca. Deve ser inspecionada antes do uso e testada periodicamente.\n- Chave Allen: Barra hexagonal em forma de "L" para parafusos com encaixe hexagonal interno.`
          }
        ]
      },
      {
        id: 'fm-corte',
        title: 'Ferramentas de Corte de Metal',
        subTopics: [
          {
            id: 'fm-corte-1',
            title: 'Tesouras Manuais',
            content: `Existem vários tipos: retas, curvas, bico de falcão e de aviação.\n- Tesouras retas: para cortar em linha reta ou curvas externas.\n- Outros tipos: para cortar curvas internas ou raios.\n- Tesouras de aviação: designadas para cortar ligas de alumínio e aço inoxidável. Possuem lâminas com pequenos dentes e punhos que funcionam como alavanca. Existem modelos que cortam da direita para a esquerda e vice-versa.\nAo cortar, as fraturas ocorrem ao longo do corte, por isso os cortes devem ser feitos a 1/32 de polegada da linha marcada, com o acabamento final feito com uma lima.`
          },
          {
            id: 'fm-corte-2',
            title: 'Arcos de Serra',
            content: `Composto por arco, punho e lâmina. As lâminas são montadas com os dentes apontando para frente. São feitas de aço de alto teor ou tungstênio, em dois tipos: dura e flexível. O passo indica o número de dentes por polegada (14, 18, 24, 32 são os mais comuns).\nProcedimento de uso: 1. Selecione a lâmina correta. 2. Instale com os dentes para frente. 3. Tensione a lâmina. 4. Prenda o trabalho firmemente. 5. Faça um sulco guia com uma lima. 6. Mantenha a serra em ângulo. 7. O corte é feito no impulso para frente; alivie a pressão no retorno. 8. Use movimentos longos e constantes (40-50 golpes/minuto).`
          },
          {
            id: 'fm-corte-3',
            title: 'Talhadeiras',
            content: `São ferramentas de corte de aço duro para cortar ou desbastar metais mais macios. O ângulo de corte para uso geral é de 60° a 70°. A parte cortante é ligeiramente convexa para proteger as extremidades.\n- Bedame chato: para cortar cantos em esquadro ou ranhuras.\n- Ponta arredondada: para ranhuras semicirculares e cantos arredondados.\n- Ponta em diamante: para cortar ranhuras e ângulos internos agudos.`
          }
        ]
      },
      {
        id: 'fm-limas',
        title: 'Limas e Técnicas de Limagem',
        subTopics: [
          {
            id: 'fm-limas-1',
            title: 'Tipos e Cortes de Limas',
            content: `A maioria é feita de aço de alto teor, endurecidas e temperadas. São classificadas por: comprimento (excluindo a espiga), forma da seção reta e corte (grossura dos dentes).\nTipos mais usados:\n- Lima de mão: paralela na largura, uma borda lisa.\n- Lima chata: ligeiramente adelgaçada, corta em todas as faces e bordas.\n- Lima MILL: corte simples, para acabamentos em metais macios.\n- Lima quadrada: para ranhuras e encaixes.\n- Lima redonda: para aberturas circulares.\n- Lima triangular: para ângulos internos e afiar serras.\n- Lima meia-cana: um lado plano, outro curvo.\n- Grosa: dentes grossos, para madeira.\n- Lima Vixen: dentes curvos, para serviços rápidos em metais macios e madeira.`
          },
          {
            id: 'fm-limas-2',
            title: 'Uso e Cuidados com Limas',
            content: `Métodos de uso:\n1. Limagem reta (cruzada): movimentar a lima na diagonal sobre a peça, aliviando a pressão no retorno.\n2. Limagem por arrasto (atrito): segurar a lima em cada ponta e movimentar no sentido do comprimento da peça, produzindo um acabamento mais fino.\n3. Quinas arredondadas: usar um movimento de "cadeira de balanço".\n4. Remoção de rebarbas: é essencial para a segurança e a correta montagem das peças.\n\nCuidados: 1. Escolha a lima adequada. 2. Mantenha as limas separadas para não se danificarem. 3. Guarde em locais secos para evitar ferrugem. 4. Mantenha as limas limpas, usando uma escova de arame para remover as limalhas presas entre os dentes.`
          }
        ]
      },
      {
        id: 'fm-furacao',
        title: 'Furação e Acabamento de Furos',
        subTopics: [
          {
            id: 'fm-furacao-1',
            title: 'Máquinas de Furar e Brocas',
            content: `Máquinas de furar portáteis são comuns na aviação. As pneumáticas são preferidas perto de materiais inflamáveis. A broca é a ferramenta que executa o furo, feita de uma barra de aço endurecido com estrias em espiral (canais). O ângulo padrão da ponta para cortar aço e ferro é de 59°. O diâmetro pode ser medido por frações, letras ou números. As brocas devem ser afiadas ao primeiro sinal de perda de corte. O procedimento envolve ajustar o apoio do esmeril, segurar a broca corretamente e manter o ângulo de 59° em relação à pedra do esmeril, girando-a no sentido horário.`
          },
          {
            id: 'fm-furacao-2',
            title: 'Alargadores',
            content: `São ferramentas para ajustar e alargar furos para uma medida exata. O furo deve ser feito com 0,003 a 0,007 polegadas a menos que a medida desejada. São feitos de aço carbono ou aço rápido. Gire o alargador somente na direção do corte.\n- Alargador de expansão: o tipo mais prático para uso geral, ajustável em diâmetro.\n- Alargadores cônicos: usados para orifícios lisos e de exata conicidade.`
          },
          {
            id: 'fm-furacao-3',
            title: 'Escareadores',
            content: `São ferramentas que cortam uma depressão cônica ao redor de um furo, para permitir que um rebite ou parafuso de cabeça escareada fique no mesmo plano da superfície. São feitos com vários ângulos para corresponder às cabeças dos fixadores (o padrão é 100°). Existem modelos com batentes limitadores para ajustar a profundidade do corte. Deve-se ter cuidado para não remover material em excesso, pois isso reduz a resistência da junta.`
          }
        ]
      },
      {
        id: 'fm-medicao',
        title: 'Instrumentos de Medição',
        subTopics: [
          {
            id: 'fm-medicao-1',
            title: 'Réguas e Esquadro Combinado',
            content: `Réguas de aço podem ser rígidas ou flexíveis. A unidade mais comum na aviação é a polegada, dividida em frações (1/2, 1/4, 1/8, 1/16, 1/32, 1/64). As frações também podem ser expressas em decimais.\n\nEsquadro Combinado: ferramenta com várias utilidades. Pode ser usado como um esquadro comum, mas a cabeça desliza e pode ser fixada na régua. Possui um nível de bolha, um riscador, e permite traçar linhas em 45°. A cabeça de centrar é usada para determinar o centro de eixos. O transferidor pode ser usado para conferir e traçar ângulos.`
          },
          {
            id: 'fm-medicao-2',
            title: 'Riscador e Compassos',
            content: `Riscador: usado para marcar linhas em superfícies metálicas. É feito de aço, com pontas finas e pontiagudas. Deve ser ligeiramente inclinado na direção do movimento, mantendo a ponta encostada na borda da régua.\n\nCompassos: usados para desenhar arcos e círculos, transferir medidas e comparar distâncias. Tipos comuns: para medidas internas, para medidas externas e o hermafrodita (para traçar linhas paralelas). Para trabalhos em metal, use compassos de pontas metálicas apenas para riscos que serão removidos pelo corte.`
          },
          {
            id: 'fm-medicao-3',
            title: 'Paquímetro (Calibre Vernier)',
            content: `É um instrumento para medidas de precisão, geralmente feito de aço inoxidável. É usado para verificar medidas externas, internas e de profundidade. Consiste em uma haste (régua) com um bico fixo e um cursor deslizante com o outro bico. A leitura é feita combinando a escala principal (na haste) com a escala do Vernier (no cursor).\nLeitura em mm: Lê-se o número de milímetros inteiros antes do zero do cursor. Depois, verifica-se qual traço do Vernier coincide com um traço da escala principal; esse número corresponde aos décimos de milímetro a serem somados.`
          },
          {
            id: 'fm-medicao-4',
            title: 'Micrômetro',
            content: `Usado quando é necessário medir com mais rigor (milésimos de polegada). Partes fixas: arco, bainha, encosto. Partes móveis: tambor, haste. Ao girar o tambor, a haste se move através de um parafuso micrométrico.\nA leitura é feita em três etapas: 1. Ler o último algarismo na bainha (representando os décimos, ex: 0.100, 0.200). 2. Somar a distância dos traços menores após esse algarismo (cada um vale 0.025). 3. Somar o número da divisão do tambor que coincide com a linha horizontal da bainha (cada divisão vale 0.001). A soma dos três valores é a medida final. Alguns micrômetros possuem uma escala Vernier para leitura de décimos de milésimo.`
          }
        ]
      },
      {
        id: 'fm-roscas',
        title: 'Ferramentas para Abrir Roscas',
        subTopics: [
          {
            id: 'fm-roscas-1',
            title: 'Machos, Cossinetes e Desandadores',
            content: `Macho: ferramenta usada para abrir roscas internas. Vem em conjuntos de três peças: cônico (para iniciar), semicônico e paralelo (para finalizar ou para furos cegos).\n\nCossinete: ferramenta usada para abrir roscas externas. Podem ser sólidos (comuns) ou ajustáveis. O ajustável permite controlar o diâmetro e a folga da rosca.\n\nDesandadores (ou Tarraxa): ferramentas para girar os machos e cossinetes. Existem vários tipos, como o punho "T" e desandadores específicos para machos ou para cossinetes.`
          }
        ]
      }
    ]
  },
  {
    id: 'cap5',
    title: 'CAPÍTULO 5: MANUSEIOS DE SOLO, SEGURANÇA E EQUIPAMENTOS DE APOIO',
    topics: [
      {
        id: 'ms-partida',
        title: 'Manuseio e Partida de Motores',
        subTopics: [
          {
            id: 'ms-partida-1',
            title: 'Procedimentos Gerais Antes da Partida',
            content: `Antes da partida, são válidos para todos os motores (convencionais, turboélices e turbojatos):\n1. Posicionar o avião com o nariz para o vento para melhor refrigeração.\n2. Agir conforme o estabelecido para evitar danos por hélices ou arrasto (jet blast).\n3. Se usar fonte externa, garantir que possa ser removida com segurança.\n4. Manter um bombeiro com extintor próximo ao motor.\n5. Para motores a reação, a área à frente das turbinas deve estar limpa.\n6. Verificar sempre as instruções do fabricante para procedimentos específicos.`
          },
          {
            id: 'ms-partida-2',
            title: 'Partida de Motores Convencionais',
            content: `Sempre usar fontes externas de força elétrica para partida, se disponível, para poupar a bateria. Desligar equipamentos elétricos desnecessários.\nPara motores radiais parados há mais de 30 minutos, girar a hélice 3 ou 4 voltas para detectar calço hidráulico (líquido no cilindro). Isso é indicado por esforço anormal ou parada brusca da hélice. Nunca force a hélice contra um calço hidráulico, pois pode danificar o motor. Para eliminar o calço, remova as velas dos cilindros inferiores e gire a hélice.`
          },
          {
            id: 'ms-partida-3',
            title: 'Procedimento de Partida (Convencional)',
            content: `1. Ligar a bomba auxiliar de combustível, se houver.\n2. Colocar o controle de mistura na posição recomendada (geralmente "marcha lenta" para tipo pressão, "mistura rica" para tipo bóia).\n3. Selecionar a manete para 1000-1200 RPM.\n4. Manter o ar do carburador na posição "frio".\n5. Ligar o motor de partida e, após duas voltas completas da hélice, ligar a ignição.\n6. Ligar o injetor de combustível intermitentemente, se equipado.\nApós a partida, acionar a mistura para "toda rica" e monitorar os instrumentos.`
          },
          {
            id: 'ms-partida-4',
            title: 'Partida Manual',
            content: `Se não houver sistema de partida, o motor pode ser acionado girando a hélice manualmente. A comunicação entre o operador da hélice e o da cabine é crucial. A ignição só deve ser ligada após o comando "contacto" ser repetido pelo operador da cabine.\nPrecauções de segurança: Sempre assuma que a ignição está ligada. Verifique se o local é seguro e firme. Não se incline sobre a hélice. Ao impulsionar, empurre a pá para baixo com a palma da mão, sem curvar os dedos sobre a borda.`
          },
          {
            id: 'ms-partida-5',
            title: 'Operação Após a Partida',
            content: `Imediatamente após a partida, cheque o indicador de pressão do óleo. Se não houver indicação em 30 segundos, corte o motor. A rotação de aquecimento deve estar na faixa de 1.000 a 1.300 RPM. A refrigeração em solo depende do fluxo de ar, portanto, opere o motor com a hélice em passo mínimo e contra o vento. Monitore rigorosamente os instrumentos. Não feche os flapes da capota durante o aquecimento.`
          }
        ]
      },
      {
        id: 'ms-turbina',
        title: 'Operação de Motores a Turbina',
        subTopics: [
          {
            id: 'ms-turbina-1',
            title: 'Partida de Motores Turboélice',
            content: `Remover coberturas de proteção. Inspecionar visualmente o motor, escapamento e entradas de ar. Checar o compressor quanto à livre rotação. Para partida com ar de sangria (bleed air), pode-se usar um GTC (compressor de turbina a gás) ou ar de outro motor já em funcionamento.\nProcedimento: 1. Colocar seletor de partida. 2. Ligar bombas de reforço. 3. Ligar combustível e ignição. 4. Posicionar interruptor de baixa RPM. 5. Manete de potência na posição de partida. 6. Acionar chave de partida. 7. Monitorar luz da bomba e instrumentos. 8. Checar pressão e temperatura do óleo. 9. Desconectar fonte externa.`
          },
          {
            id: 'ms-turbina-2',
            title: 'Partida de Motores Turbojato',
            content: `Verificar se as tampas protetoras foram removidas. Posicionar o avião contra o vento. A área ao redor deve estar livre. Inspecionar visualmente as palhetas e a entrada de ar.\nSequência de partida: 1. Manete em "off" ou "idle" (se tiver reverso). 2. Ligar fonte elétrica. 3. Ligar válvula de corte de combustível. 4. Ligar bomba de reforço. 5. Checar pressão de combustível. 6. Ligar motor de partida e verificar subida da pressão de óleo. 7. Ligar ignição. 8. Mover manete para marcha lenta. 9. Monitorar temperatura dos gases. 10. Estabilizar em marcha lenta e checar limites. 11. Desligar motor de partida. 12. Desligar ignição.`
          },
          {
            id: 'ms-turbina-3',
            title: 'Partidas Problemáticas em Turbojato',
            content: `1. PARTIDA QUENTE: A temperatura dos gases de exaustão excede os limites. Geralmente causada por mistura excessivamente rica. O combustível deve ser cortado imediatamente.\n2. PARTIDA FALSA OU INTERROMPIDA: O motor dá partida, mas não atinge a RPM de marcha lenta. Muitas vezes, é resultado de força insuficiente do motor de partida.\n3. O MOTOR NÃO PEGA: O motor não pega dentro do tempo limite. Pode ser causado por falta de combustível, força elétrica insuficiente ou falha na ignição. Interrompa a partida imediatamente. Continue girando o compressor por cerca de 15 segundos para remover combustível acumulado.`
          }
        ]
      },
      {
        id: 'ms-apoio',
        title: 'Equipamentos de Apoio em Solo',
        subTopics: [
          {
            id: 'ms-apoio-1',
            title: 'Força Elétrica (GPU)',
            content: `Unidades de fonte de força (GPU - Ground Power Unit) podem ser rebocadas ou ter tração própria. Fornecem corrente contínua (C.C.) para partida e sistemas, e corrente alternada (C.A.) em várias voltagens e frequências. Ao usar uma GPU, posicione-a para evitar colisão com a aeronave. Nunca remova os cabos enquanto o gerador estiver fornecendo energia.`
          },
          {
            id: 'ms-apoio-2',
            title: 'Força Hidráulica e Ar Condicionado',
            content: `Bancadas portáteis de testes hidráulicos são usadas para drenar, filtrar, reabastecer e testar os sistemas hidráulicos da aeronave. Operam com energia elétrica e podem fornecer fluido em alta pressão e volume.\nUnidades móveis de ar condicionado e aquecimento (ACU) fornecem ar climatizado para a cabine através de dutos flexíveis. A capacidade de aquecimento é muitas vezes um opcional.`
          },
          {
            id: 'ms-apoio-3',
            title: 'Fontes de Ar para Partida e Pré-Lubrificação',
            content: `Unidades de fonte de ar fornecem ar comprimido para operar motores de partida pneumáticos (em turboélices e turbojatos). Consistem em um GTC (compressor de turbina a gás) que gera o ar comprimido.\nO equipamento de pré-lubrificação é necessário para motores convencionais novos, estocados ou parados por muito tempo. Fornece óleo pré-aquecido sob pressão para garantir a lubrificação adequada antes da partida.`
          }
        ]
      },
      {
        id: 'ms-seguranca',
        title: 'Abastecimento e Segurança Contra Incêndio',
        subTopics: [
          {
            id: 'ms-seguranca-1',
            title: 'Segurança no Abastecimento',
            content: `Não é permitido fumar na aeronave ou ao redor. Proibido o uso de equipamentos que produzam faíscas a menos de 30 metros. Combustível derramado deve ser removido imediatamente. Ao manusear combustível, proteja a pele e os olhos. Roupas molhadas com gasolina devem ser removidas. A aeronave e o caminhão-tanque devem estar devidamente aterrados para evitar centelhas de eletricidade estática.`
          },
          {
            id: 'ms-seguranca-2',
            title: 'Reabastecimento por Pressão',
            content: `Usado em aeronaves modernas, reduz o tempo de abastecimento, os riscos de danos à aeronave, e as chances de contaminação e ignição por eletricidade estática. É um sistema de "ponto único" ou "sub-alar", onde uma única conexão abastece todos os tanques. O operador deve conhecer bem o sistema para identificar panes.`
          },
          {
            id: 'ms-seguranca-3',
            title: 'Classificação de Incêndios',
            content: `Classe A: Fogo em materiais comuns como madeira, papel, tecido.\nClasse B: Fogo em líquidos inflamáveis como graxas, solventes, tintas.\nClasse C: Fogo em equipamentos elétricos energizados.\nClasse D: Fogo em metais inflamáveis (ex: magnésio).`
          },
          {
            id: 'ms-seguranca-4',
            title: 'Agentes Extintores',
            content: `Classe A: Água ou extintores à base de água.\nClasse B: Dióxido de carbono (CO2), hidrocarbonos halogenados (Halons), e pós químicos secos.\nClasse C: CO2 e Halons são muito eficazes. Pó químico é eficaz mas contamina o local. Água e espuma não são adequados.\nClasse D: Pós químicos secos especiais. NUNCA use água, pois pode causar uma explosão.`
          }
        ]
      },
      {
        id: 'ms-manuseio',
        title: 'Manuseio e Movimentação em Solo',
        subTopics: [
          {
            id: 'ms-manuseio-1',
            title: 'Reboque de Aeronaves',
            content: `Rebocar uma aeronave é uma operação perigosa. Uma pessoa qualificada deve estar na cabine para operar os freios em caso de emergência. Garfos de reboque são projetados para resistir à tensão, não à torção. Antes de mover, inspecione os mecanismos de engate. O trator deve manter velocidade moderada. Aeronaves com trem triciclo são rebocadas pela roda do nariz.`
          },
          {
            id: 'ms-manuseio-2',
            title: 'Equipe e Procedimentos de Reboque',
            content: `A equipe deve incluir: 1. Motorista do trator. 2. Pelo menos dois controladores de asa (wing walkers). 3. Uma pessoa qualificada na cabine para operar os freios. 4. Um controlador de cauda para curvas acentuadas. Pessoas não devem transitar entre o trator e a roda do nariz.`
          },
          {
            id: 'ms-manuseio-3',
            title: 'Taxiando a Aeronave',
            content: `Como regra geral, somente pilotos e mecânicos habilitados são autorizados a taxiar. A comunicação com a torre de controle é necessária para cruzar pistas. Sinais de táxi podem ser luminosos (pela torre) ou manuais (por um sinaleiro). O sinaleiro se posiciona à frente e na linha da ponta da asa esquerda da aeronave.`
          },
          {
            id: 'ms-manuseio-4',
            title: 'Ancoragem de Aeronaves',
            content: `A ancoragem protege a aeronave de danos por ventos fortes. Aeronaves leves devem ser ancoradas após cada voo, de frente para o vento predominante. Cordas devem suportar pelo menos 3.000 libras. Aeronaves pesadas devem usar cabos de aço ou correntes e travas nas superfícies de comando. Em previsão de ventos fortes, travas adicionais podem ser instaladas.`
          }
        ]
      },
      {
        id: 'ms-levantamento',
        title: 'Levantamento da Aeronave (Macacos)',
        subTopics: [
          {
            id: 'ms-levantamento-1',
            title: 'Segurança no Levantamento',
            content: `Macacos devem ser inspecionados antes do uso quanto à capacidade, vazamentos e condição geral. A área deve estar livre. Ninguém deve permanecer na aeronave durante o levantamento, a menos que exigido pelo manual. A aeronave deve estar nivelada e protegida do vento. Use os pontos de levantamento especificados pelo fabricante.`
          },
          {
            id: 'ms-levantamento-2',
            title: 'Procedimento de Levantamento Completo',
            content: `Use macacos do tipo tripé sob os pontos de levantamento designados. Centralize-os perfeitamente. Opere os macacos simultaneamente para manter a aeronave nivelada e evitar sobrecarga. Não levante a aeronave mais do que o necessário. Use cavaletes ou suportes para segurança se a aeronave for permanecer suspensa por muito tempo.`
          },
          {
            id: 'ms-levantamento-3',
            title: 'Levantando Apenas uma Roda',
            content: `Quando apenas uma roda precisa ser levantada (para troca de pneu ou serviço de rolamento), um macaco pequeno de base simples pode ser usado. Antes de levantar, as outras rodas devem ser calçadas na frente e atrás para evitar que a aeronave se movimente. A roda deve ser suspensa apenas o suficiente para livrar a superfície do solo.`
          }
        ]
      },
      {
        id: 'ms-tempo-frio',
        title: 'Operações em Tempo Frio',
        subTopics: [
          {
            id: 'ms-tempo-frio-1',
            title: 'Proteção e Preparação',
            content: `Em temperaturas extremamente frias, instale todas as capas de motores, entradas de ar e tubos de pitot para evitar acúmulo de gelo e neve. Estacionar sobre pranchas de madeira pode evitar que os pneus congelem no solo. Recolha flapes e freios aerodinâmicos. Drene o sistema de água e lixo.`
          },
          {
            id: 'ms-tempo-frio-2',
            title: 'Remoção de Gelo e Neve (De-Icing)',
            content: `Remova a neve varrendo ou com uma corda. Cuidado para não danificar superfícies. É crucial que todas as superfícies estejam completamente livres de gelo antes da decolagem. Pode-se usar fluidos de degelo, como compostos à base de etileno e propileno glicol (MIL-A-8243A), ou ar quente de uma unidade de solo. Inspecione os mecanismos de bordo de fuga para garantir que água do degelo não tenha penetrado e recongelado.`
          },
          {
            id: 'ms-tempo-frio-3',
            title: 'Procedimentos Adicionais em Frio',
            content: `Após o voo, o óleo deve ser diluído nos motores convencionais, se a temperatura estiver próxima ou abaixo de zero. Ao reabastecer, deixe de 3 a 5% de espaço no tanque para expansão térmica do combustível. Infle os pneus para a carga padrão. Se um pneu estiver colado no gelo, libere-o com ar ou água quente. Ao rebocar na neve, puxe a aeronave por cabos fixados às pernas de força do trem de pouso para não sobrecarregar a roda do nariz.`
          }
        ]
      }
    ]
  },
  {
    id: 'cap6',
    title: 'CAPÍTULO 6: QUEROSENE DE AVIAÇÃO',
    topics: [
        {
            id: 'qav-definicao',
            title: 'DEFINIÇÃO E COMPOSIÇÃO',
            subTopics: [
                {
                    id: 'qav-definicao-1',
                    title: 'Composição e Características',
                    content: `O combustível querosene de aviação é um derivado de petróleo obtido por destilação direta com faixa de temperatura de 150 °C a 300 °C, com predominância de hidrocarbonetos parafínicos de 9 a 15 átomos de carbono, utilizado em turbinas aeronáuticas. Para que esse derivado de petróleo apresente características adequadas à geração de energia para motores de turbina a gás, diversos critérios físico-químicos são requeridos durante a sua produção, que incluem desde fluidez (escoamento), estabilidade (estocagem) até a adequada combustão para esses motores.`
                }
            ]
        },
        {
            id: 'qav-tipos',
            title: 'TIPOS DE QUEROSENE DE AVIAÇÃO',
            subTopics: [
                {
                    id: 'qav-tipos-1',
                    title: 'Querosene Civil e Militar',
                    content: `No Brasil, a Agência Nacional do Petróleo, Gás Natural e Biocombustíveis (ANP) é o órgão regulador responsável pela especificação dos querosenes de aviação para uso na aviação civil: JET A, JET A-1 (antigo QAV-1) e JET C. O JET A difere do JET A-1 apenas na propriedade de ponto de congelamento; o JET C é composto pela mistura de um único tipo de JET alternativo com o JET A ou com o JET A-1, nas proporções definidas pela resolução da ANP (RANP N° 856/2021).\n\nO querosene de aviação para uso militar, conhecido pela sigla QAV-5, segue a especificação da Resolução CNP n°9/1987, DOU 09/04/1987. A diferença básica entre os combustíveis para uso civil (JET A e JET A-1) e uso militar (QAV-5) está na maior restrição com relação à presença de compostos leves no QAV-5, de forma a garantir a segurança no manuseio e na estocagem do produto em embarcações.`
                }
            ]
        },
        {
            id: 'qav-motores',
            title: 'MOTORES AERONÁUTICOS',
            subTopics: [
                {
                    id: 'qav-motores-1',
                    title: 'Tipos de Motores',
                    content: `Os motores aeronáuticos são projetados para utilizar a expansão do ar e dos gases de combustão produzidas pela queima do querosene de aviação como força motriz.\n\nExistem quatro tipos de motores aeronáuticos: TURBOJET, TURBOSHAFT, TURBOPROP e TURBOFAN, que tem como diferença básica o tipo de acionador para geração do empuxo:\n\na) TURBOJET: a energia gerada pelos gases de exaustão é aproveitada de forma que o empuxo seja todo ele devido à saída dos gases pela parte posterior da turbina. Parte da energia gerada pelos gases é utilizada internamente para mover a turbina e o compressor, entre outros equipamentos. Exemplo: aviões militares e caças.\n\nb) TURBOSHAFT: onde a maior parte da energia dos gases é convertida em energia mecânica para acionamento da hélice, acionando também a turbina e o compressor. Exemplo: helicópteros.\n\nc) TURBOPROP: 90% do empuxo é proveniente da energia mecânica fornecida pela hélice e os outros 10% do empuxo vem da descarga dos gases. “Prop” é uma abreviatura da palavra inglesa propeler, que significa hélice. Por exemplo, as aeronaves turbo-hélice (Electra, Fokker, etc).\n\nd) TURBOFAN: as mais utilizadas atualmente na aviação comercial, com melhor rendimento e economia de combustível, onde cerca de 80% do empuxo é proveniente da energia mecânica do FAN (“hélice” visível na entrada da turbina) e cerca de 20% do empuxo vem da descarga dos gases.`
                },
                {
                    id: 'qav-motores-2',
                    title: 'Funcionamento Básico',
                    content: `O motor aeronáutico tem como principais componentes o fan, o compressor, o combustor e as turbinas de alta e baixa pressão.\n\nEm linhas gerais, o funcionamento do motor aeronáutico ocorre basicamente como se segue:\n\n• Partida de uma unidade auxiliar pneumática para geração de pressão para acionamento do fan. Quando a rotação do fan atinge a taxa de compressão de 60% da sua capacidade, a unidade auxiliar deixa de atuar. O ar succionado da atmosfera pelo fan é comprimido para o compressor, numa relação de 80% passando externamente ao compressor e 20% do ar induzido comprimido e canalizado para câmara de combustão;\n\n• A expansão dos gases produzidos na câmara de combustão irá rotacionar a turbina de alta e baixa pressão;\n\n• Esse ar aquecido e os gases da combustão produzem a energia mecânica que é transmitida ao eixo da turbina que se encontra acoplada ao compressor;\n\n• A mistura de gases produzidos pela combustão é, então, descarregada para a atmosfera movimentando a aeronave.`
                }
            ]
        },
        {
            id: 'qav-qualidade',
            title: 'REQUISITOS DE QUALIDADE',
            subTopics: [
                {
                    id: 'qav-qualidade-1',
                    title: 'Visão Geral',
                    content: `As exigências de qualidade do combustível para uso em turbinas aeronáuticas são:\n• Proporcionar máxima autonomia de voo;\n• Proporcionar queima limpa e completa com mínimo de formação de resíduos;\n• Proporcionar partidas fáceis, seguras e com facilidade de reacendimento;\n• Escoar em baixas temperaturas;\n• Ser estável química e termicamente;\n• Não ser corrosivo aos materiais da turbina;\n• Apresentar mínima tendência a solubilização de água;\n• Ter aspecto límpido indicando ausência de sedimentos;\n• Não apresentar água livre para evitar o desenvolvimento de microrganismos e formação de depósitos que possam obstruir filtros;\n• Ofecer segurança no manuseio e estocagem.`
                },
                {
                    id: 'qav-qualidade-2',
                    title: 'Escoamento a Baixa Temperatura',
                    content: `Essa característica é avaliada pelos ensaios de ponto de congelamento e viscosidade, que têm como objetivo garantir que o combustível seja perfeitamente bombeado e com escoamento contínuo durante o voo em grandes altitudes, onde a temperatura externa alcança valores da ordem de -50 °C, e que seja disperso adequadamente na câmara de combustão.\n\nO ponto de congelamento é a temperatura na qual os cristais de hidrocarbonetos formados pelo resfriamento da amostra desaparecem quando esta é sujeita a reaquecimento, sob agitação constante, enquanto a viscosidade do produto, por sua vez, é a medida da resistência do fluido ao escoamento.`
                },
                {
                    id: 'qav-qualidade-3',
                    title: 'Estabilidade Térmica',
                    content: `Na aeronave, o querosene de aviação atua tanto como combustível quanto como fluido lubrificante, hidráulico e de arrefecimento.\n\nPelas trocas térmicas realizadas, a temperatura do querosene de aviação pode atingir 150°C, e ao retornar ao tanque de armazenamento pode favorecer a degradação térmica do combustível armazenado, produzindo depósitos que podem afetar o fluxo de combustível, a transferência de calor nos trocadores e a combustão pela obstrução de injetores.\n\nA análise de Estabilidade Térmica simula as condições de pressão e temperatura a que se submete o combustível na aeronave, de forma a garantir a estabilidade térmica do combustível.`
                },
                {
                    id: 'qav-qualidade-4',
                    title: 'Combustão',
                    content: `A qualidade de combustão é avaliada pelas propriedades de poder calorífico, massa específica, ponto de fuligem e teor de aromáticos. Estas características estão ligadas aos seguintes requisitos:\n\n• Poder calorífico e massa específica: garantem que o combustível utilizado produza energia necessária para uma determinada autonomia de voo;\n• Ponto de fuligem e teor de aromáticos: permitem a geração de uma chama que não ocasione formação significativa de fuligem e de depósitos, preservando a vida útil da câmara de combustão.`
                },
                {
                    id: 'qav-qualidade-5',
                    title: 'Corrosividade e Dissolução de Elastômeros',
                    content: `Essas características devem ser avaliadas no querosene de aviação para evitar que ocorram danos aos metais do sistema de abastecimento de combustível e nos elastômeros empregados na vedação das conexões.\n\nPara esse fim, são utilizadas as análises de corrosividade ao cobre para avaliar a presença de H2S e de enxofre elementar que possam atacar os metais, enquanto a tendência de ataque dos elastômeros é avaliada pelo teor de enxofre mercaptídico.`
                },
                {
                    id: 'qav-qualidade-6',
                    title: 'Água e Segurança',
                    content: `ÁGUA: A presença de água no combustível pode acarretar diversos problemas, entre os quais: cristalização a baixas temperaturas, possibilidade de crescimento de microrganismos no armazenamento e formação de H2SO4, que ocasionará corrosão em equipamentos.\n\nSEGURANÇA: Como qualquer combustível líquido considerado como inflamável, práticas básicas de segurança devem ser adotadas para o querosene de aviação, tais como aterrar equipamentos durante bombeio do produto (evitar formação de cargas estáticas), operar em ambiente aerado (evitar concentração de vapores de combustível) e em locais com ausência de fontes de ignição (faíscas, chamas expostas, entre outros).\n\nUma análise de laboratório que especifica o limite de risco de inflamabilidade do combustível (teor de compostos leves) é o ponto de fulgor, que assegura o manuseio e estocagem do produto.`
                }
            ]
        },
        {
            id: 'qav-producao',
            title: 'PRODUÇÃO',
            subTopics: [
                {
                    id: 'qav-producao-1',
                    title: 'Processo de Refino',
                    content: `O querosene de aviação é produzido utilizando como processo de refino a destilação atmosférica seguido de tratamento de acabamento (cáustico regenerativo ou hidrotratamento).`
                }
            ]
        },
        {
            id: 'qav-manutencao',
            title: 'CUIDADOS PARA A MANUTENÇÃO DA QUALIDADE',
            subTopics: [
                {
                    id: 'qav-manutencao-1',
                    title: 'Cuidados no Armazenamento',
                    content: `Para evitar possível degradação do querosene de aviação durante seu armazenamento devem-se ter os seguintes cuidados:\n\n• Evitar presença de água livre: os tanques devem ser drenados periodicamente para evitar que a presença de água livre favoreça a degradação do combustível por microrganismos;\n\n• Evitar contato do produto com componentes de cobre, zinco e suas ligas: esses metais catalisam a reação de degradação do combustível;\n\n• Adotar rotina de inspeção e limpeza nos sistemas de armazenagem do produto: verificar estado de conservação do interior dos tanques, sucção flutuante, conexões, suspiros e presença de ponto morto onde possa ocorrer acúmulo de água livre.`
                }
            ]
        },
        {
            id: 'qav-seguranca',
            title: 'ASPECTOS DE SEGURANÇA, MEIO AMBIENTE E SAÚDE',
            subTopics: [
                {
                    id: 'qav-seguranca-1',
                    title: 'Manuseio e Transporte',
                    content: `As recomendações de armazenamento, manuseio e utilização segura estão contidas na correspondente Ficha de Informação de Segurança do Produto Químico (FISPQ).\n\nPara efeito de transporte, a Agência Nacional de Transportes Terrestres (ANTT) classifica o querosene de aviação com número ONU 1863 e classe de risco 3 (líquido inflamável).\n\nSendo considerado como carga perigosa, o seu transporte, carga e descarga devem ser realizados por profissionais devidamente treinados para realizar tais operações.\n\nPara sua manipulação e uso deve-se adotar os seguintes cuidados:\n• Evite inalar névoas, vapores e produtos de combustão;\n• Manipule combustíveis somente em local aberto e ventilado;\n• Evite contato com a pele e com os olhos;\n• Utilize luvas de PVC em atividades que demandam contato das mãos com o produto;\n• Não deixe ao alcance de crianças ou de animais domésticos. Sua ingestão, mesmo em pequenas quantidades, pode ser fatal;\n• Não armazene em residências;\n• Não exponha o produto ao calor, faíscas ou chamas expostas.`
                }
            ]
        }
    ]
  },
  {
    id: 'cap7',
    title: 'CAPÍTULO 7: PESO E BALANCEAMENTO DE AERONAVES',
    topics: [
      {
        id: 'pb-teoria',
        title: 'TEORIA E TERMINOLOGIA',
        subTopics: [
          {
            id: 'pb-teoria-1',
            title: 'Introdução ao Peso e Balanceamento',
            content: `A finalidade principal do controle do peso e balanceamento das aeronaves, é a segurança. Como finalidade secundária, podemos citar a maior eficiência durante o vôo.\n\nUm carregamento inadequado reduz a eficiência da aeronave com respeito ao teto, manobrabilidade, razão de subida, velocidade, e consumo de combustível; podendo ser motivo para interrupção de um vôo, ou mesmo de seu cancelamento. Uma possível perda de vida e destruição de equipamento de valor, pode ser o resultado de uma estrutura sobrecarregada ou de uma modificação súbita na carga, com a conseqüente modificação nas características de vôo.\n\nEmbora a aeronave não precise ser pesada, ela deve ser carregada, de modo que os limites máximos de peso e c.g. não sejam ultrapassados durante a operação. As aeronaves de empresas aéreas (regulares ou não) que transportam passageiros ou carga, estão sujeitas a certos regulamentos, que exigem que seus proprietários apresentem provas de que elas estão sendo carregadas adequadamente, e que os limites de peso e balanceamento não estão sendo excedidos.`
          },
          {
            id: 'pb-teoria-2',
            title: 'Teoria da Alavanca',
            content: `A teoria do peso e balanceamento é extremamente simples. Ela é a teoria da alavanca, que está em equilíbrio ou balanceada quando está em repouso sobre o fulcro, em posição nivelada.\n\nA influência do peso depende diretamente de sua distância do fulcro. Para balancear a alavanca, o peso deve ser distribuído a fim de que o efeito de rotação seja o mesmo em ambos os lados do fulcro. De modo geral, o peso menor mais distante do fulcro tem o mesmo efeito que um peso maior mais próximo do fulcro. A distância entre o fulcro e qualquer objeto é chamada de braço da alavanca. O braço da alavanca multiplicado pelo peso do objeto nos dá o efeito de rotação em torno do fulcro. este efeito de rotação é chamado de momento.\n\nSimilarmente, uma aeronave está balanceada se ela permanecer nivelada, suspensa por um ponto imaginário. Este ponto é a localização ideal de seu c.g. Uma aeronave balanceada não precisa permanecer perfeitamente nivelada, mas sua posição deve permanecer relativamente próximo desta. A obtenção deste balanceamento é apenas uma questão de se colocar as cargas, de modo que, o braço médio da aeronave carregada fique dentro da faixa do c.g.`
          },
          {
            id: 'pb-teoria-3',
            title: 'Fontes de Dados',
            content: `Os dados de peso e balanceamento podem ser obtidos das fontes seguintes:\na. especificações da aeronave;\nb. limitações operacionais da aeronave;\nc. manual de vôo da aeronave; e\nd. registro de peso e balanceamento da aeronave.\n\nEm caso de perda dos registros de peso e balanceamento, e na impossibilidade de se obter uma cópia, a aeronave deve ser repesada. Novos registros de peso e balanceamento devem, então, ser computados e compilados.`
          },
          {
            id: 'pb-teoria-4',
            title: 'Plano de Referência',
            content: `O plano de referência é um plano vertical imaginário, a partir do qual, todas as medidas são tomadas horizontalmente para fins de balanceamento com a aeronave em atitude de vôo nivelado. Este plano está em ângulo reto em relação ao eixo longitudinal da aeronave.\n\nTodas as localizações de equipamentos, tanques, compartimento de bagagem, assentos, motores, hélices, etc., estão incluídas nas especificações técnicas da aeronave, ou nas folhas de dados de certificação de tipo, com as respectivas distâncias em relação ao plano de referência.\n\nNão existe uma regra fixa para a localização do plano de referência. Na maioria dos casos ele está localizado no nariz da aeronave, ou em algum ponto da estrutura, estando em outros casos um pouco adiante do nariz da aeronave.`
          },
          {
            id: 'pb-teoria-5',
            title: 'Braço e Momento',
            content: `BRAÇO: O Braço é a distância horizontal entre um equipamento e o plano de referência. O comprimento do braço é sempre dado ou medido em polegadas; e, exceto nos casos em que a localização seja exatamente sobre o plano de referência (0), ele é precedido do sinal positivo (+) ou negativo (-). O sinal positivo indica uma posição para trás do plano de referência, e o sinal negativo indica uma posição adiante do plano de referência.\n\nMOMENTO: O momento é o resultado da multiplicação de um peso pelo seu braço. O momento de um item em torno do plano de referência é obtido pela multiplicação do peso deste item, pela distância horizontal, entre este item e o plano de referência. Um peso de 20 libras localizado a 30 polegadas de distância do plano de referência teria um momento de 20 x 30 ou 600/lb.pol. O sinal positivo ou negativo, que precede o valor, vai depender de sua localização em relação ao plano de referência. Qualquer peso adicionado à aeronave, em qualquer lado do plano de referência será positivo. Qualquer peso removido será negativo. Ao se fazer a multiplicação de um peso por um braço, o momento resultante será positivo se os sinais forem iguais, ou negativo se os sinais forem desiguais.`
          },
          {
            id: 'pb-teoria-6',
            title: 'Centro de Gravidade (C.G.)',
            content: `O c.g. de uma aeronave é o ponto sobre o qual os momentos de nariz pesado, ou de cauda pesada, são exatamente iguais em magnitude. Uma aeronave suspensa por este ponto, não deve ter tendência de rotação para qualquer dos lados do nariz ou da cauda. Este é o ponto no qual o peso da aeronave ou de qualquer objeto está concentrado.`
          }
        ]
      },
      {
        id: 'pb-definicoes',
        title: 'DEFINIÇÕES DE PESO E C.G.',
        subTopics: [
          {
            id: 'pb-definicoes-1',
            title: 'Peso Máximo e Peso Vazio',
            content: `PESO MÁXIMO: O peso máximo é o permitido de uma aeronave e seu conteúdo, e está indicado nas especificações. Para muitas aeronaves, existem variações no peso máximo permissível, dependendo da finalidade e condições em que deve ser operada.\n\nPESO VAZIO: O peso vazio de uma aeronave inclui todos os equipamentos operacionais que possuem localização fixa e, que estejam realmente instalados na aeronave. Este peso inclui o peso da célula, grupo motopropulsor, equipamentos necessários, lastro fixo, fluido hidráulico, óleo e combustível residuais.`
          },
          {
            id: 'pb-definicoes-2',
            title: 'Carga Útil',
            content: `A carga útil da aeronave é determinada pela subtração do peso vazio do peso bruto máximo permissível. Para as aeronaves homologadas nas categorias normal e utilitária, deve haver duas cargas úteis nos registros de peso e balanceamento.\n\nA carga útil consiste do máximo de óleo, combustível, bagagem, piloto, co-piloto e membros da tripulação. A redução no peso de um item, quando possível, poderá ser necessária para que a aeronave permaneça dentro do peso máximo permitido para a categoria em que estiver operando. A determinação destes pesos é chamada de verificação do peso.`
          },
          {
            id: 'pb-definicoes-3',
            title: 'Centro de Gravidade do Peso Vazio (CGPV)',
            content: `O centro de gravidade do peso vazio, abreviado por CGPV, é o c.g. de uma aeronave em sua condição de peso vazio. Ele é parte essencial do registro de peso e balanceamento da aeronave. Por si, ele não tem qualquer utilidade, mas serve como base para outras computações, e não, como uma indicação do que será o c.g. carregado. O CGPV é computado quando da pesagem da aeronave, utilizando-se fórmulas específicas para aeronaves com trem de nariz e para aeronaves com bequilha.`
          },
          {
            id: 'pb-definicoes-4',
            title: 'Passeios do Centro de Gravidade',
            content: `PASSEIO DO C.G. DO PESO VAZIO: O passeio do CGPV é uma variação permissível dentro dos limites do c.g. Quando o CGPV da aeronave cai dentro desta faixa, fica impossível exceder os limites do CGPV utilizando-se os arranjos de carregamento da especificação padrão. Nem todas aeronaves possuem estas faixas especificadas.\n\nPASSEIO DO C.G. OPERACIONAL: O passeio do c.g. operacional é a distância compreendida entre os limites dianteiro e traseiro do c.g., indicado na Especificação da Aeronave. Estes limites, determinados durante as fases de projeto e fabricação, são posições extremas do c.g. carregado permissíveis. A localização do c.g. da aeronave carregada deve permanecer dentro destes limites em qualquer tempo.`
          },
          {
            id: 'pb-definicoes-5',
            title: 'Corda Aerodinâmica Média (CAM)',
            content: `CAM é a corda média da asa. A secção transversal da asa, (do bordo de ataque ao bordo de fuga é uma secção de aerofólio). Uma corda é uma linha imaginária traçada paralela ao aerofólio, do bordo de ataque ao bordo de fuga da secção. Qualquer desvio do plano retangular da asa afetará o comprimento da CAM e a distância resultante entre o bordo de ataque da CAM e o bordo de ataque da asa da aeronave.\n\nO c.g. da aeronave normalmente é colocado na posição dianteira máxima do centro de pressão da CAM, para que se obtenha a estabilidade desejada. A localização do c.g. normalmente é expresso em relação à asa. Isto é feito especificando-se o c.g. em porcentagem da CAM da asa.`
          }
        ]
      },
      {
        id: 'pb-pesagem',
        title: 'PROCEDIMENTOS DE PESAGEM',
        subTopics: [
          {
            id: 'pb-pesagem-1',
            title: 'Nivelamento e Pontos de Pesagem',
            content: `MEIOS DE NIVELAMENTO: Existem pontos de referência para o nivelamento da aeronave no solo. O procedimento mais comum é executado, colocando-se um nível de bolha em pontos determinados na estrutura da aeronave. Algumas aeronaves possuem escalas especiais de nivelamento.\n\nPONTOS DE PESAGEM: Ao se fazer a pesagem de uma aeronave, o ponto sobre a balança, na qual o peso está concentrado, é chamado de ponto de pesagem. Ao se fazer a pesagem de aeronaves leves e médias, as rodas são normalmente colocadas sobre as balanças.`
          },
          {
            id: 'pb-pesagem-2',
            title: 'Combustível Mínimo e Peso Combustível Zero',
            content: `PESO DE COMBUSTÍVEL ZERO: O peso de Combustível Zero é o peso máximo permissível de uma aeronave carregada sem combustível. No peso de combustível zero está incluído o peso da carga, dos passageiros e da tripulação. Todos os pesos que excederem o peso de combustível zero, devem consistir de combustível utilizável.\n\nCOMBUSTÍVEL MÍNIMO: Combustível mínimo, tal como aplicado em peso e balanceamento, é a quantidade que deve ser apresentada no relatório de peso e balanceamento, quando a aeronave é carregada para uma verificação de condição extrema. Para uma aeronave pequena, com motor convencional, é baseada na potência do motor (Fórmula: 1/12 galão por HP, ou 1/2 lb por HP).`
          },
          {
            id: 'pb-pesagem-3',
            title: 'Tara e Óleo Total',
            content: `ÓLEO TOTAL: O óleo total é a quantidade de óleo, apresentada como a capacidade de óleo nas Especificações da Aeronave. Ao se fazer a pesagem de uma aeronave com o tanque de óleo cheio, o peso do óleo deve ser subtraído da leitura obtida para se chegar ao peso vazio real. O relatório de peso e balanceamento deve indicar se os pesos incluem o óleo ou se o óleo foi drenado.\n\nTARA: A tara inclui os pesos de todos os itens extras; tais como macacos e calços, sobre a plataforma da balança de pesagem; exceto o peso do item que estiver sendo pesado. O peso desses itens, quando incluídos na leitura da balança, deve ser deduzido para se obter o peso real da aeronave.`
          },
          {
            id: 'pb-pesagem-4',
            title: 'Preparação da Aeronave para Pesagem',
            content: `A aeronave deve ser pesada em um hangar fechado. Devemos drenar o sistema de combustível até que a indicação de quantidade seja zero. Somente o combustível não utilizável (residual) é considerado como sendo parte do peso vazio. Se possível, drenar todo o óleo do reservatório. A posição de itens, tais como spoilers, slats, flapes é um fator importante. Consulte sempre as instruções do fabricante. Remova qualquer excesso de sujeira, óleo, graxa e umidade.`
          },
          {
            id: 'pb-pesagem-5',
            title: 'Executando Medições',
            content: `A distância entre o plano de referência e a linha de centro do ponto de pesagem principal; e a distância entre o ponto de pesagem principal e a linha de centro do ponto de pesagem da cauda (ou do nariz), devem ser conhecidas. Depois que a aeronave for colocada sobre as balanças, e nivelada, coloca-se os prumos no plano de referência e nos pontos de pesagem para marcar o piso. Registramos os pesos indicados em cada balança, e fazemos as medições necessárias com a aeronave nivelada.`
          }
        ]
      },
      {
        id: 'pb-calculo',
        title: 'CÁLCULO DE PESO E BALANCEAMENTO',
        subTopics: [
          {
            id: 'pb-calculo-1',
            title: 'Cômputo do Peso Vazio e C.G.',
            content: `Para se obter o peso bruto e a localização do c.g. de uma aeronave carregada, primeiramente determinamos o peso vazio e a localização do CGPV. O peso vazio de uma aeronave é determinado, adicionando-se o peso líquido em cada ponto de pesagem. O peso líquido é a leitura real da balança menos a tara. Depois dividimos a soma dos momentos pelo total de pesos envolvidos para encontrar o C.G. (c.g. = Momento total / Peso total).`
          },
          {
            id: 'pb-calculo-2',
            title: 'Exemplo de Formulário de Pesagem',
            content: `O formulário de pesagem é um registro padronizado que documenta todos os dados coletados e calculados durante o processo de pesagem de uma aeronave. Ele inclui leituras da balança, tara, pesos líquidos, braços, e os momentos calculados para cada ponto de pesagem (ex: Trem Principal Esquerdo/Direito, Bequilha/Nariz). Também inclui ajustes para itens como óleo e combustível, resultando no Peso Vazio final e na localização do C.G. do Peso Vazio (CGPV).`
          }
        ]
      },
      {
        id: 'pb-extremos',
        title: 'CONDIÇÕES EXTREMAS E LASTRO',
        subTopics: [
          {
            id: 'pb-extremos-1',
            title: 'Verificação de C.G. Dianteiro (Carga Mínima)',
            content: `As condições extremas do peso e balanceamento representam as posições dianteira e traseira máximas do c.g. da aeronave. Deve-se fazer uma verificação para certificar-se de que o c.g. não ultrapassará os limites quando a tripulação, passageiros, carga e pesos consumíveis são adicionados ou removidos. A verificação de C.G. dianteiro simula uma condição de carregamento com peso mínimo, tipicamente apenas com piloto e combustível mínimo, para garantir que o C.G. não fique à frente do limite permitido.`
          },
          {
            id: 'pb-extremos-2',
            title: 'Verificação de C.G. Traseiro (Carga Máxima)',
            content: `A verificação de C.G. traseiro simula uma condição de carregamento com peso máximo, com passageiros e bagagem posicionados o mais para trás possível, e tanques de combustível cheios. O objetivo é garantir que, mesmo na condição mais crítica de "cauda pesada", o C.G. da aeronave permaneça dentro do limite traseiro especificado, assegurando a estabilidade e o controle durante o voo.`
          },
          {
            id: 'pb-extremos-3',
            title: 'Instalação e Cálculo de Lastro',
            content: `O lastro é usado para se obter o balanceamento do c.g. desejado. O lastro permanente é instalado para compensar a remoção ou instalação de equipamentos e afeta o peso vazio. O lastro removível (temporário), como sacos de areia, é usado para satisfazer certas condições de carregamento. Se o c.g. estiver fora do limite, a quantidade de lastro necessária é calculada pela fórmula: Peso do Lastro = (Peso da Aeronave x Distância do Excesso) / (Braço entre a localização do lastro e o limite afetado).`
          }
        ]
      },
      {
        id: 'pb-graficos',
        title: 'MÉTODOS GRÁFICOS',
        subTopics: [
          {
            id: 'pb-graficos-1',
            title: 'Cartas de Carregamento e Envelopes de C.G.',
            content: `O sistema de computação de peso e balanceamento, comumente chamado de sistema de envelope do c.g. e carta de carregamento, é um método excelente e rápido para se determinar a localização do c.g. para os vários arranjos de carregamento. A carta de carregamento é usada para determinar o número índice (momento) de qualquer item. Em seguida, os pesos e os momentos de todos os itens são somados.`
          },
          {
            id: 'pb-graficos-2',
            title: 'Exemplo de Uso do Envelope de C.G.',
            content: `Conhecendo o peso total e o momento total (índice), localiza-se o ponto correspondente no gráfico do envelope do C.G. Se o ponto estiver dentro da área do envelope, o arranjo de carregamento satisfaz todos os requisitos de peso e balanceamento. Se o ponto cair fora do envelope, a aeronave está fora dos limites de peso ou de C.G., e o carregamento precisa ser ajustado.`
          }
        ]
      },
      {
        id: 'pb-especiais',
        title: 'EQUIPAMENTOS E CASOS ESPECIAIS',
        subTopics: [
          {
            id: 'pb-especiais-1',
            title: 'Equipamento Eletrônico de Pesagem',
            content: `O equipamento eletrônico de pesagem simplificou o procedimento para aeronaves grandes. Células de carga (indicadores de tensão) são colocadas entre o macaco e o ponto de apoio da aeronave. A célula reflete a carga como uma variação de voltagem, que é indicada em uma escala calibrada em libras. Cada célula deve ser "zerada" antes de aplicar o peso.`
          },
          {
            id: 'pb-especiais-2',
            title: 'Peso e Balanceamento de Helicópteros',
            content: `Os princípios são os mesmos, mas o passeio do c.g. dos helicópteros é muito mais restrito, às vezes dentro de três polegadas. A localização do c.g. geralmente se estende a uma distância curta para a frente e para trás do rotor principal. Idealmente, o helicóptero deve ter um balanceamento perfeito, para que a fuselagem permaneça na posição horizontal durante uma flutuação. Se o c.g. estiver fora do ponto ideal, será necessário um controle cíclico excessivo para manter a flutuação estacionária.`
          }
        ]
      }
    ]
  },
  {
    id: 'cap8',
    title: 'CAPÍTULO 8: SEGURANÇA OPERACIONAL',
    topics: [
      {
        id: 'so-intro',
        title: 'SIPAER E O FATOR HUMANO',
        subTopics: [
          {
            id: 'so-intro-1',
            title: 'CENIPA',
            content: `É o órgão do Comando da Aeronáutica responsável pelo Sistema de Investigação e Prevenção de Acidentes Aeronáuticos (SIPAER). As investigações são embasadas no Anexo 13 à Convenção Internacional de Aviação Civil da ICAO – International Civil Aviation Organization, órgão de referência mundial, que normatiza as leis sobre aviação civil internacional.\n\nÉ da análise técnico-científica do acidente ou incidente aeronáutico que se retiram valiosos ensinamentos. Esse aprendizado, transformado em linguagem apropriada, é traduzido em recomendações de segurança específicas e objetivas para os fatos analisados, acarretando ao seu destinatário (proprietário, operador de equipamento, fabricante, piloto, oficina, órgão governamental, entidade civil, etc.) o cumprimento de ação ou medida que possibilite o aumento da segurança.`
          },
          {
            id: 'so-intro-2',
            title: 'Fadiga Humana',
            content: `Segundo Caldwell et al (2009), a fadiga não é um fenômeno unidimensional, mas a consequência de vários fatores relacionados às necessidades fisiológicas de sono e aos ritmos biológicos internos.\n\n"A fadiga de voo pode ser definida como um estado determinado pela atividade aérea que deteriora a condição psicofisiológica, ocasionando diminuição progressiva do desempenho. Numa abordagem multifatorial, as principais situações geradoras de fadiga de voo podem ser classificadas em Fatores Operacionais (ambientais, ergonomia, quantidade de etapas, distribuição de tarefas, duração e horário do voo, jornada de voo, voos transmeridionais, meteorologia, comunicações, tráfego aéreo, falhas materiais e/ou operacionais) e Fatores Individuais, fisiológicos, psicológicos e profissionais. (KANASHIRO, 2013, p. 191)”\n\nSegundo Rayol (2015), as causas mais frequentes do sintoma de fadiga humana, afetando as condições físicas dos pilotos, são: poucas horas de sono, distúrbios durante o sono, interrupção do ritmo circadiano, stress mental ou emocional relacionado a problemas de família, ansiedade ou mesmo o stress de um check de equipamento, problemas de saúde, entre outros.`
          },
          {
            id: 'so-intro-3',
            title: 'Consequências da Fadiga',
            content: `Mota, Cruz e Pimenta (2005) expõem as principais consequências relacionadas à fadiga de voo, caracterizando-as como sendo extremamente problemáticas para os tripulantes, visto que podem comprometer a segurança operacional de voo. São elas: cansaço; exaustão; desgaste; alteração da capacidade funcional, falta de recursos/ energia; letargia; sonolência; diminuição da motivação, atenção, concentração e mal-estar.`
          }
        ]
      },
      {
        id: 'so-gravadores',
        title: 'GRAVADORES DE VOO',
        subTopics: [
          {
            id: 'so-gravadores-1',
            title: 'Origem e Tipos Principais',
            content: `Concebida, em 1953, pelo cientista David Warren, do Laboratório de Pesquisa Aeronáutica da Austrália, a caixa-preta representou o avanço na elucidação de acidentes. Warren idealizou o sistema que gravasse a comunicação na cabine dos pilotos após o estudo da primeira queda de avião comercial de passageiros no mundo, o Comet, em 1953. Foi no final dos anos 60 que o gravador de voo viria a ser essencial em rotas comerciais.`
          },
          {
            id: 'so-gravadores-2',
            title: 'Flight Data Recorder (FDR)',
            content: `Um gravador de dados de voo (FDR) é um dispositivo instalado em aeronaves para capturar e registrar vários parâmetros e eventos durante as operações de voo. Esses parâmetros incluem altitude, velocidade no ar, aceleração vertical, inclinação, rotação, rumo e dados de desempenho do motor, entre outros. Os FDRs geralmente estão localizados na cauda de uma aeronave, onde têm maior probabilidade de sobreviver em caso de acidente. São projetados para suportar condições extremas, como altas forças de impacto, fogo e imersão em água.`
          },
          {
            id: 'so-gravadores-3',
            title: 'Cockpit Voice Recorder (CVR)',
            content: `O CVR grava as vozes da tripulação de voo, bem como outros sons dentro da cabine. O "microfone da área da cabine" do gravador geralmente está localizado no painel de instrumentos suspenso entre os dois pilotos. Os sons de interesse para um investigador podem ser ruído do motor, avisos de estol, extensão e retração do trem de pouso e outros cliques e estalos. A partir desses sons, parâmetros como rpm do motor, falhas do sistema, velocidade e o tempo em que certos eventos ocorrem podem ser determinados. Comunicações com o Controle de Tráfego Aéreo, briefings meteorológicos e conversas entre pilotos e tripulação também são gravadas.`
          },
          {
            id: 'so-gravadores-4',
            title: 'Cockpit Voice and Data Recorder (CVDR)',
            content: `É uma espécie de junção do CVR com o FDR em um único dispositivo de gravação. Normalmente, é capaz de armazenar duas horas de áudio, em alta qualidade, em quatro canais simultâneos e permite o armazenamento de no mínimo 25 horas para os dados de voo.`
          }
        ]
      },
      {
        id: 'so-sgso',
        title: 'GERENCIAMENTO DA SEGURANÇA (SGSO)',
        subTopics: [
          {
            id: 'so-sgso-1',
            title: 'Sistema de Gerenciamento (SGSO)',
            content: `O Sistema de Gerenciamento da Segurança Operacional está consolidado como um padrão em toda aviação mundial. O SGSO para os provedores de serviços da aviação civil e o Programa de Segurança Operacional Brasileiro - PSO-BR irão integrar o gerenciamento de risco dentro dos modernos conceitos de gestão, de maneira a garantir a segurança operacional de forma proativa. O SGSO enfatiza a gestão da segurança como um processo de negócio fundamental.`
          },
          {
            id: 'so-sgso-2',
            title: 'Processos-Chave do SGSO',
            content: `Os processos-chave de um SGSO são:\n• Reporte de Eventos de Segurança Operacional (ESO) – processo de aquisição de dados e informações relacionados à segurança operacional.\n• Identificação de Perigos: conjunto de atividades voltadas para identificação de perigos relacionados com sua organização.\n• Gerenciamento de Riscos: processo padronizado para avaliação e definição de medidas de controle de riscos.\n• Medição de Desempenho: ferramentas gerenciais definidas para avaliar se os objetivos de segurança operacional da organização estão sendo atingidos.\n• Garantia da Segurança Operacional: conjunto de atividades voltadas para padronização da prestação do serviço conforme critérios estabelecidos de desempenho.`
          },
          {
            id: 'so-sgso-3',
            title: 'Mecanismos e Indicadores (BAIST)',
            content: `O Grupo Brasileiro de Segurança Operacional de Infraestrutura Aeroportuária (BAIST) monitora os seguintes eventos:\n• Incursão em Pista: relacionado com o número total de eventos de incursão em pista, considerando o número de incursões em pista envolvendo aeronaves e o número de incursões em pista envolvendo veículos ou pessoas.\n• Excursão de Pista: relacionado com o número total de eventos de excursão de pista envolvendo aeronaves, considerando eventos de saída lateral e eventos de saída ao final da pista.\n• Colisão com Aves com Danos: relacionado com o número total de eventos de colisões entre aeronaves e aves dos quais resultaram danos à aeronave.\n• Ocorrências de Solo: todo evento que envolva aeronave no solo, do qual resulte dano e/ou lesão, desde que não haja intenção de realizar voo ou, havendo esta intenção, o(s) fato(s) motivador(es) esteja(m) diretamente relacionado(s) aos serviços de rampa.`
          }
        ]
      },
      {
        id: 'so-combustiveis',
        title: 'COMBUSTÍVEIS E LUBRIFICANTES',
        subTopics: [
          {
            id: 'so-combustiveis-1',
            title: 'Gasolina de Aviação (AvGas)',
            content: `Mistura de hidrocarbonetos, destilada entre 30° e 170°C. O alto valor do número de octanas permite ao motor de alta compressão fornecer a máxima potência sem detonação prematura. Atualmente, existem dois tipos principais: Avgas 100LL (azul) e Avgas 100 (verde). Vale ressaltar, que os resíduos da evaporação da AvGas, originam a "goma” e pode provocar entupimento dos filtros e bicos injetores contribuindo para falha do motor em voo.`
          },
          {
            id: 'so-combustiveis-2',
            title: 'Querosene de Aviação (QAv)',
            content: `Constituído de hidrocarbonetos obtidos do petróleo, destilado entre 150 e 300°C. Alguns inibidores podem ser adicionados para reduzir a corrosão e oxidação durante o uso continuado. Da mesma forma, são adicionados aditivos anti gelo para evitar o congelamento do combustível, durante a operação.`
          },
          {
            id: 'so-combustiveis-3',
            title: 'Lubrificantes de Aviação',
            content: `Os lubrificantes são as substâncias que, interpostas a duas superfícies, em deslocamento relativo, diminuem a resistência ao movimento. A principal função é evitar o contato metálico entre as peças, reduzir o atrito e, consequentemente o desgaste, bem como refrigerar o sistema. Os principais fatores que exercem influência na lubrificação são: Velocidade, Temperatura e Pressão.\n\nTipos:\n- Líquidos: São os mais usados por seu poder de penetração e por atuarem como agente removedor de calor. Compreende os óleos minerais, óleos graxos e água. Aproximadamente, 95% dos lubrificantes são líquidos.\n- Pastosos: São as graxas comuns e também as composições betuminosas. Sua principal característica é promover vedação e não escorrer.`
          },
          {
            id: 'so-combustiveis-4',
            title: 'Manuseio de Óleo e Graxa',
            content: `De uma maneira geral, os seguintes aspectos devem ser observados na utilização de óleo lubrificante e graxa de aviação:\n• usar a viscosidade recomendada pelo fabricante do motor, para a faixa de temperatura prevista;\n• nunca usar aditivos estranhos ao óleo, pois estes já contêm os necessários, na proporção correta;\n• cuidados com as latas abertas. Elas podem causar contaminação. estrita aplicação nos motores do óleo e da graxa especificados nos manuais;\n• cumprimento da carta de lubrificação da aeronave;\n• armazenamento em ambiente seco e com temperatura controlada; uso de EPI durante a manipulação desses materiais.`
          }
        ]
      },
      {
        id: 'so-procedimentos',
        title: 'PROCEDIMENTOS OPERACIONAIS',
        subTopics: [
          {
            id: 'so-procedimentos-1',
            title: 'Procedimentos para Abastecimento',
            content: `• Acionar a empresa contratada para o abastecimento;\n• Garantir que os motores da aeronave estejam desligados;\n• Garantir que existe, pelo menos, um extintor de incêndio, adequado, em posição de rápido uso;\n• Garantir que não há pessoa fumando ou qualquer outro tipo de ocorrência que possa produzir faíscas;\n• Garantir que não haja rádios ligados ou outros equipamentos que possam produzir faíscas;\n• Manter um caminho livre para permitir uma rápida evacuação do carro de abastecimento;\n• Observar que o carro de abastecimento e a aeronave estejam, adequadamente, conectados ao “terra”;\n• Garantir que os equipamentos elétricos não sejam operados durante o abastecimento;\n• Verificar a presença de água em suspensão no combustível;\n• Conferir, assinar e receber o recibo de abastecimento;\n• Garantir que as tampas dos tanques estejam adequadamente fechadas e travadas;\n• Acionar as autoridades em caso de emergência.`
          },
          {
            id: 'so-procedimentos-2',
            title: 'Vazamento de Combustível',
            content: `Se durante o abastecimento for detectado vazamento de combustível, recomenda-se:\n• Interromper imediatamente o reabastecimento;\n• Afastar as pessoas da área próxima e evitar que objetos que produzam faíscas sejam utilizados no local;\n• Preparar os extintores de incêndio;\n• Caso seja possível, afastar a aeronave do local, com os motores desligados;\n• Acionar o sistema de emergência aeroportuária;\n• Aguardar que a área seja descontaminada para continuar o abastecimento.\nEm dias de chuva, se o abastecimento for estritamente necessário, alguns cuidados especiais se fazem necessários.`
          }
        ]
      },
      {
        id: 'so-planos',
        title: 'PLANOS E PROGRAMAS DE SEGURANÇA',
        subTopics: [
          {
            id: 'so-planos-1',
            title: 'PSO-BR',
            content: `O Plano de Segurança Operacional para a Aviação Civil Brasileira foi elaborado pelo Comitê de Segurança Operacional da Aviação Civil Brasileira composto por membros da Agência Nacional de Aviação Civil (ANAC) e do Comando da Aeronáutica (COMAER). Ele define os objetivos e algumas ações específicas em relação à Segurança Operacional da Aviação Civil Brasileira conforme o previsto no Programa Brasileiro para a Segurança Operacional da Aviação Civil (PSO-BR).`
          },
          {
            id: 'so-planos-2',
            title: 'PNAVSEC',
            content: `O Programa Nacional de Segurança da Aviação Civil contra Atos de Interferência Ilícita (PNAVSEC) tem como objetivo disciplinar a aplicação de medidas de segurança destinadas a garantir a integridade de passageiros, tripulantes, pessoal de terra, público em geral, aeronaves e instalações de aeroportos brasileiros, a fim de proteger as operações da aviação civil contra atos de interferência ilícita cometidos no solo ou em voo.`
          },
          {
            id: 'so-planos-3',
            title: 'ANSAC, PSA e PSTA',
            content: `ANSAC: A ANAC é a Autoridade de Aviação Civil brasileira responsável pela normatização e fiscalização das atividades de aviação civil e de infraestrutura aeronáutica e aeroportuária.\n\nPSA: O Programa de Segurança Aeroportuária (PSA) é um documento que descreve os recursos organizacionais, materiais, humanos e procedimentais que são aplicados pelo operador de aeródromo para fazer cumprir os requisitos da regulamentação AVSEC.\n\nPSTA: É um programa de segurança que toda transportadora que opera no Brasil deve possuir.`
          }
        ]
      },
      {
        id: 'so-prevencao',
        title: 'PREVENÇÃO DE ACIDENTES E INCIDENTES',
        subTopics: [
          {
            id: 'so-prevencao-1',
            title: 'Definições',
            content: `PREVENÇÃO DE ACIDENTES E INCIDENTES AERONÁUTICOS: Conjunto de ações que têm a finalidade de reduzir a probabilidade de lesões às pessoas ou de danos aos bens resultantes de ocorrências aeronáuticas.\n\nINCIDENTE AERONÁUTICO: Toda ocorrência, inclusive de tráfego aéreo, associada à operação de uma aeronave, havendo intenção de voo, que não chegue a se caracterizar como um acidente, mas que afete ou possa afetar a segurança da operação.\n\nINCIDENTE GRAVE: Incidente ocorrido sob circunstâncias em que um acidente quase ocorreu. A diferença entre o incidente grave e o acidente está apenas nas consequências.\n\nOCORRÊNCIA DE SOLO: Toda ocorrência envolvendo aeronave e não havendo intenção de voo, da qual resulte dano ou lesão.`
          },
          {
            id: 'so-prevencao-2',
            title: 'Pirâmides de Risco (Bird e Heinrich)',
            content: `A Análise Comparativa por Bird, Heinrich ou Bradley buscam alertar quanto a níveis de ocorrências que por estudos, indicam fatores de eventos gradativos desde a um incidente ou acidente leve, sem afastamento, até um acidente fatal, inclusive com consequências de elevada perda material. Bird e Heinrich realizaram análises de acidentes chegando a resultados que vão da eliminação de acidentes menores a fatores comportamentais, correlacionando Atos Inadequados e Condições Inadequadas como fatores desencadeantes.`
          },
          {
            id: 'so-prevencao-3',
            title: 'Curva de Bradley e Foco Comportamental',
            content: `Na estrutura da Curva de Bradley a Dupont aborda cinco pontos importantes:\n1. Liderança Visível e Percebida: A Liderança deve estar visível e ser percebida em todo o processo.\n2. Responsabilidade de Linha: Engajamento da Liderança ao Cargo mais simples que todos fazem parte de uma única empresa.\n3. Gestão no Nível dos Desvios: Desvios são o resultado dos Atos e Condições Inadequadas que são permitidos e negligenciados. A Gestão deve focar na aplicação destes pontos eliminando assim os Desvios.\n4. Foco Comportamental: A tratativa deve incluir os Fatores Ergonômicos Cognitivo / Psicossocial. A mudança de comportamento demanda análise, estudo, intervenções assertivas e tempo.\n5. Disciplina Operacional: Chegar neste nível demanda o envolvimento multisetorial de uma empresa.`
          }
        ]
      },
      {
        id: 'so-filosofia',
        title: 'FILOSOFIA E CULTURA DE SEGURANÇA',
        subTopics: [
          {
            id: 'so-filosofia-1',
            title: 'Sistema e Filosofia SIPAER',
            content: `SIPAER elabora o Relatório Final de acidentes, um documento ostensivo, formal e oficial do Comando da Aeronáutica. O produto mais importante de uma investigação de acidente aeronáutico – IAA – é o conjunto de recomendações advindas dele, e não a declaração das causas e responsabilidades civis e criminais.\n\nAs atividades de prevenção de ocorrências aeronáuticas devem ser planejadas e executadas com base em oito Princípios da Filosofia SIPAER:\na) todo acidente aeronáutico deve ser evitado.\nb) todo acidente aeronáutico resulta de vários eventos e nunca de uma causa isolada.\nc) todo acidente aeronáutico tem um precedente.\nd) a prevenção de acidentes requer mobilização geral.\ne) o propósito da prevenção de acidentes não é restringir a atividade aérea, mas estimular o seu desenvolvimento com segurança.\nf) a alta direção é a principal responsável pela prevenção de acidentes aeronáuticos.\ng) em prevenção de acidentes não há segredos nem bandeiras.\nh) acusações e punições de erros humanos agem contra os interesses da prevenção de acidentes.`
          },
          {
            id: 'so-filosofia-2',
            title: 'Princípios da Filosofia de Segurança',
            content: `Prevenção de Acidentes é uma Tarefa que Requer Mobilização Geral: Para alcançar seus objetivos, todos, sem distinção, têm que se integrar no esforço global e ao mesmo tempo, têm que se conscientizar de que segurança deve ser algo inerente, integrante de tudo que fazemos.\n\nO Propósito da Prevenção não é Restringir a Atividade Aérea: a prevenção de acidentes pretende, pela elevação dos índices de segurança, estimular e incrementar a atividade aérea em todas as suas modalidades.\n\nOs Comandantes, Diretores e Chefes são os Principais Responsáveis: Fazer com que os Comandantes, os Diretores, e os Chefes se engajem na Segurança de Voo e invistam em prevenção.\n\nEm Prevenção de Acidentes não há Segredos nem Bandeiras: A troca de informações exclusivas de prevenção é uma missão nobre. Ela não visa nada mais que a segurança de todos.\n\nAcusações e Punições Agem Diretamente Contra os Interesses da Prevenção: É dos princípios básicos da Segurança de Voo faz com que os Comandantes, Diretores e Chefes ainda cometam perseguições e punições contra seus subordinados, agindo completamente contra a prevenção de acidentes.`
          },
          {
            id: 'so-filosofia-3',
            title: 'Manutenção e Cultura de Segurança',
            content: `Aviões em operação em todo mundo pedem manutenção adequada para garantir a segurança de voo e qualidade. O erro humano foi documentado como o principal contribuinte para mais de 70% dos acidentes com perda de casco de aviões comerciais.\n\nA cultura de segurança da aviação é um conjunto de crenças, valores e regras - formais ou não - sobre segurança da aviação que todas as pessoas em uma organização compartilham. Ao promover uma cultura que prioriza a segurança, você pode evitar que as pessoas cortem custos e tomem decisões que possam levar a riscos desnecessários.\n\nPara incentivar respostas significativas de todos os trabalhadores, a pesquisa deve ser anônima. Os resultados da pesquisa devem ser mantidos em sigilo para uso da organização. Uma vez coletados e revisados, os resultados devem ser usados para ajudar a resolver quaisquer deficiências que a organização tenha com sua cultura de segurança.`
          }
        ]
      }
    ]
  },
  {
    id: 'cap9',
    title: 'CAPÍTULO 9: TUBULAÇÕES E CONEXÕES',
    topics: [
      {
        id: 'tc-intro',
        title: 'INTRODUÇÃO E MATERIAIS',
        subTopics: [
          {
            id: 'tc-intro-1',
            title: 'Conceitos Gerais e Tipos',
            content: `O termo "tubulações de aeronaves", não se refere somente a mangueiras, tubos e conexões usados em aeronave; mas, também, aos processos de formação e instalação deles. Se um tubo estourar ou rachar, isto geralmente é o resultado de uma severa vibração, instalação imprópria, ou dano.\n\nAs linhas de tubulações de aeronaves, usualmente são feitas de tubos de metal e ou conexões; ou de tubos flexíveis (mangueiras). As tubulações de metal são amplamente usadas para as linhas de combustível, óleo, fluido refrigerante, oxigênio, instrumentos e sistemas hidráulicos. As tubulações flexíveis são, geralmente, usadas com partes móveis, ou onde a tubulação esteja sujeita a vibração considerável.`
          },
          {
            id: 'tc-intro-2',
            title: 'Materiais Metálicos',
            content: `Geralmente, as tubulações de liga de alumínio ou de aço resistente à corrosão, têm substituído as tubulações de cobre devido ao alto fator de fadiga do cobre. A maneabilidade, a resistência à corrosão, e o baixo peso do alumínio são os principais fatores para sua adoção.\n\nEm algumas instalações hidráulicas especiais de alta pressão (3.000 p.s.i.), são usadas as tubulações de aço resistente à corrosão. Este aumento da resistência à tensão permite o uso de tubulações com paredes finas; em consequência, o peso final da instalação não é muito maior do que àquela, com tubulações de liga de alumínio.`
          },
          {
            id: 'tc-intro-3',
            title: 'Identificação de Materiais',
            content: `Antes de efetuar reparos, é importante efetuar uma acurada identificação do material. Ligas de alumínio ou aço podem ser identificadas pela observação. Para determinar o tipo específico (aço carbono vs. inoxidável, ou ligas de alumínio 1100, 3030, 5052-0, 2024-T), pode ser necessário testar amostras. O teste do imã é o método mais simples para distinguir entre o aço inoxidável recozido austenítico (não magnético) e o ferrítico (fortemente magnético).\n\nAs tubulações também são identificadas por um código de cores, com faixas pintadas nas extremidades, para identificar a liga de alumínio (ex: Branca para 1100, Vermelha para 2024, etc.).`
          }
        ]
      },
      {
        id: 'tc-flexiveis',
        title: 'TUBULAÇÕES FLEXÍVEIS (MANGUEIRAS)',
        subTopics: [
          {
            id: 'tc-flex-1',
            title: 'Materiais Sintéticos',
            content: `Os materiais sintéticos mais usados na fabricação de tubos flexíveis são:\n- Buna-N: Excelente resistência a produtos do petróleo. Não usar com fluidos base fosfato éster (Skydrol).\n- Neoprene: Boa resistência abrasiva, mas menor resistência a petróleo que o Buna-N.\n- Butyl: Excelente para uso com fluidos hidráulicos base fosfato éster (Skydrol). Não usar com derivados do petróleo.\n- Teflon: Resina de tetrafluoroetileno com extensa gama de temperaturas de operação (-54°C a +230°C), compatível com quase todas as substâncias.`
          },
          {
            id: 'tc-flex-2',
            title: 'Classificação e Tipos',
            content: `Mangueiras de borracha consistem em um tubo interno sintético, coberto com camadas de algodão trançado e malha de arame. São classificadas pela pressão:\n1. Baixa pressão: abaixo de 250 p.s.i.\n2. Média pressão: até 3.000 p.s.i. (medidas menores até 1.500 p.s.i.).\n3. Alta pressão: até 3.000 p.s.i.\n\nMangueiras de Teflon são projetadas para altas temperaturas e pressões. São cobertas com fios de aço inoxidável trançados para resistência e proteção. Não são afetadas por combustíveis, óleos, álcoois ou solventes.`
          },
          {
            id: 'tc-flex-3',
            title: 'Identificação e Tamanhos',
            content: `As marcas de identificação (linhas, letras, números) impressas nas mangueiras fornecem informações como medida, fabricante, data e limites de pressão/temperatura. A medida é determinada pelo seu diâmetro interno, em incrementos de 1/16 de polegada, correspondendo às tubulações metálicas com as quais podem ser usadas.`
          }
        ]
      },
      {
        id: 'tc-conexoes',
        title: 'CONEXÕES E IDENTIFICAÇÃO DE LINHAS',
        subTopics: [
          {
            id: 'tc-conexoes-1',
            title: 'Identificação das Linhas de Fluido',
            content: `As linhas de fluido são identificadas por marcações em código de cores, palavras e símbolos geométricos que indicam função, conteúdo e perigo. Na maioria das vezes, são marcadas com decalques ou tiras. Em compartimentos de motor, onde decalques podem ser sugados pelo sistema, usa-se pintura ou etiquetas de aço.\n\nAs marcações indicam o sistema (ex: FUEL, OIL, HYDRAULIC) e perigos (ex: FLAM para inflamável, PHDAN para fisicamente perigoso).`
          },
          {
            id: 'tc-conexoes-2',
            title: 'Tipos de Conexões',
            content: `Os conectores unem pedaços de tubo entre si ou a uma unidade. São de quatro tipos: (1) conexões flangeadas, (2) conexões sem flange, (3) friso e braçadeira, e (4) estampadas. A pressão do sistema é o fator de decisão na seleção.\n\nConexões Flangeadas (AN e AC): A conexão flangeada consiste de uma luva e uma porca. A porca, quando apertada, puxa a luva e o flange do tubo contra a superfície em cone da conexão, formando um selo. As conexões AN (Army Navy) são o padrão atual, substituindo as antigas AC (Air Corps). As diferenças incluem o ângulo do flange (AN 37°, AC 35°), o passo da rosca e o formato da luva.`
          },
          {
            id: 'tc-conexoes-3',
            title: 'Conexões sem Flange e Desconexão Rápida',
            content: `As conexões sem flange MS (Military Standard) eliminam o flangeamento. A conexão consiste de um corpo, uma luva e uma porca. Ao apertar, o bordo cortante da luva penetra na parte externa do tubo, criando uma vedação segura.\n\nAcoplamentos de desconexão rápida (auto-selantes) são usados onde as linhas são frequentemente desconectadas. Cada metade contém uma válvula que fecha quando o acoplamento é desconectado, evitando perda de fluido e entrada de ar.`
          }
        ]
      },
      {
        id: 'tc-formacao',
        title: 'FORMAÇÃO E REPARO DE TUBOS',
        subTopics: [
          {
            id: 'tc-formacao-1',
            title: 'Corte e Dobragem',
            content: `CORTE: As tubulações devem ser cortadas com um cortador de tubos ou um arco de serra para produzir uma extremidade em esquadro e livre de rebarbas. Após o corte, todas as rebarbas das partes interna e externa devem ser removidas cuidadosamente.\n\nDOBRAGEM: O objetivo é obter uma curva suave, sem achatamento. Tubos com diâmetro inferior a 1/4 de polegada podem ser dobrados à mão. Para maiores, um dobrador manual é usado. O menor diâmetro de uma porção achatada não pode ser menor que 75% do diâmetro original. Para tubos de material duro ou grande diâmetro, podem-se usar máquinas ou encher o tubo com areia ou uma liga fusível para evitar o colapso durante a dobragem.`
          },
          {
            id: 'tc-formacao-2',
            title: 'Flangeamento',
            content: `Duas espécies de flanges são usadas: o simples e o duplo. O flange deve ser corretamente formado para evitar vazamentos. Um flange muito curto produzirá uma junta deficiente; se muito longo, interferirá com a rosca da conexão. A ferramenta de flangear para aeronaves produz flanges de 35° a 37°. Nunca use uma ferramenta automotiva, que produz um flange de 45°.\n\nO flange duplo é usado em tubulações de liga de alumínio (5052-0 e 6061-T) de 1/8 a 3/8 de polegada para evitar o corte do flange sob pressão.`
          },
          {
            id: 'tc-formacao-3',
            title: 'Frisamento e Pré-montagem sem Flange',
            content: `FRISAMENTO: As tubulações podem ser frisadas com uma ferramenta manual ou máquina para criar um pequeno ressalto (friso) perto da extremidade. Isso é usado em sistemas de baixa pressão com mangueiras e braçadeiras, onde o friso ajuda a reter a mangueira.\n\nCONJUNTO SEM FLANGE: A montagem de uma conexão sem flange requer uma operação de pré-colocação. O tubo é inserido na conexão e a porca é apertada até que a luva "morda" o tubo. Após este ponto, a porca é apertada um número específico de voltas (ex: 1/6 a 1/2 de volta) para completar a vedação.`
          },
          {
            id: 'tc-formacao-4',
            title: 'Reparos em Linhas Metálicas',
            content: `Arranhões ou cortes com menos de 10% da espessura da parede em tubos de alumínio podem ser reparados, se não estiverem na curva de uma dobradura. Mossas menores que 20% do diâmetro do tubo são aceitáveis, se não estiverem na curva. Uma linha severamente danificada pode ser reparada cortando-se a seção danificada e inserindo-se uma nova seção de tubo com o uso de uniões padronizadas.`
          }
        ]
      },
      {
        id: 'tc-instalacao',
        title: 'INSTALAÇÃO E MANUTENÇÃO',
        subTopics: [
          {
            id: 'tc-instalacao-1',
            title: 'Instalação de Tubulações Rígidas',
            content: `Antes da instalação, inspecione todas as tubulações. O conjunto deve estar alinhado adequadamente antes do aperto. A instalação não deve ser forçada com o torque na porca. Selantes nunca são aplicados nas faces de uma conexão flangeada. Aperte as porcas com o torque especificado. Para conexões sem flange, aperte com a mão até encontrar resistência, depois use uma chave para o aperto final (geralmente 1/6 a 1/3 de volta).`
          },
          {
            id: 'tc-instalacao-2',
            title: 'Instalação de Tubulações Flexíveis',
            content: `Mangueiras devem ser inspecionadas periodicamente. Sinais de deterioração incluem vazamento, separação de camadas, rachaduras ou perda de flexibilidade. Ao instalar, nunca deixe a mangueira torcida; a linha de identificação ("lay line") deve permanecer reta. Deixe uma folga de 5 a 8% do comprimento total para permitir a contração sob pressão e absorver vibrações. Evite raios de curvatura muito agudos. Use suportes de fixação a cada 24 polegadas, ou mais próximos se necessário.`
          },
          {
            id: 'tc-instalacao-3',
            title: 'Teste Após Montagem',
            content: `Todas as tubulações flexíveis devem ser testadas após a montagem. Bloqueia-se uma das extremidades e aplica-se pressão no interior com um líquido ou gás apropriado (fluido hidráulico para sistemas hidráulicos, nitrogênio para sistemas de ar). Ao testar com gás, o conjunto é submerso em água para detectar vazamentos. O teste de pressão deve ser mantido por, no mínimo, 30 segundos.`
          },
          {
            id: 'tc-instalacao-4',
            title: 'Suportes e Braçadeiras',
            content: `Braçadeiras de fixação são usadas para suportar as linhas dos sistemas. A braçadeira protegida com borracha é usada para fixar linhas em áreas sujeitas a vibração. A braçadeira plana é para áreas sem vibração. Para a fixação de tubulações metálicas, usam-se braçadeiras sem isolamento para garantir a continuidade da "massa" (aterramento elétrico). Todas as tubulações devem ser fixadas em intervalos especificados para evitar falhas por vibração.`
          }
        ]
      }
    ]
  },
  {
    id: 'cap10',
    title: 'CAPÍTULO 10: REGULAMENTOS (RBAC 65)',
    topics: [
        {
            id: 'rbac-geral',
            title: 'DISPOSIÇÕES GERAIS',
            subTopics: [
                {
                    id: 'rbac-geral-1',
                    title: 'Aplicabilidade e Definições (65.1 e 65.2)',
                    content: `65.1 APLICABILIDADE: Este regulamento estabelece os requisitos para a emissão das licenças de mecânico de manutenção aeronáutica, além das regras gerais de operação a serem seguidas.\n\n65.2 DEFINIÇÕES:\n(7) Habilitação: autorização associada a uma licença, na qual são especificadas as qualificações, condições especiais e prerrogativas.\n(9) Licença: documento emitido pela ANAC que indica a especialidade aeronáutica do titular e formaliza sua certificação.`
                },
                {
                    id: 'rbac-geral-2',
                    title: 'Condutas Não Autorizadas em Exames (65.18)',
                    content: `O candidato a um exame teórico não pode:\n(1) ajudar ou receber ajuda;\n(2) utilizar material não autorizado;\n(3) desobedecer às orientações dos fiscais;\n(4) causar, dar assistência ou participar de ato ilícito;\n(5) copiar ou retirar o conteúdo do exame;\n(6) fornecer ou receber cópia do exame;\n(7) tomar parte no exame em nome de outra pessoa.\n\nIncorrer nessas situações resultará em anulação do exame e impedimento de obter licença por 1 ano.`
                },
                {
                    id: 'rbac-geral-3',
                    title: 'Falsificação e Alteração de Registros (65.20)',
                    content: `É vedado fazer, induzir ou instigar que seja feito:\n(1) qualquer declaração fraudulenta ou intencionalmente falsa em qualquer solicitação de uma licença ou habilitação;\n(2) qualquer anotação fraudulenta ou intencionalmente falsa em livros de registro ou relatórios;\n(3) qualquer reprodução, com objetivos fraudulentos, de qualquer licença ou habilitação; ou\n(4) qualquer alteração em qualquer licença ou habilitação emitida.`
                }
            ]
        },
        {
            id: 'rbac-licenca',
            title: 'LICENÇA E HABILITAÇÕES DE MMA',
            subTopics: [
                {
                    id: 'rbac-licenca-1',
                    title: 'Pré-requisitos para Concessão (65.71)',
                    content: `Para obter uma licença de mecânico de manutenção aeronáutica, o requerente deve:\n(1) ter completado 18 (dezoito) anos;\n(2) ter concluído o ensino médio ou equivalente;\n(3) ser capaz de ler, escrever, falar e compreender o idioma português;\n(4) ter sido aprovado no curso de formação de MMA em escola de aviação civil certificada (RBAC nº 141);\n(5) ter sido aprovado no exame teórico para a habilitação solicitada (65.75);\n(6) ter cumprido a experiência prática requerida (65.77); e\n(7) ter sido aprovado no exame prático para a habilitação solicitada (65.79).`
                },
                {
                    id: 'rbac-licenca-2',
                    title: 'Validade e Recadastramento (65.72)',
                    content: `(a) A licença de mecânico de manutenção aeronáutica é permanente. As prerrogativas não podem ser exercidas se a licença tiver sido suspensa, revogada ou cassada.\n(c) A validade das habilitações é indefinida, porém o exercício é condicionado à experiência recente (65.83).\n(d) Recadastramento de titular de licença: A cada 3 (três) anos, o titular deve efetuar seu recadastramento junto à ANAC.`
                },
                {
                    id: 'rbac-licenca-3',
                    title: 'Habilitações (65.73)',
                    content: `As seguintes habilitações podem ser emitidas para uma licença de mecânico de manutenção aeronáutica:\n(1) célula (CEL);\n(2) grupo motopropulsor (GMP); e\n(3) aviônico (AVI).`
                }
            ]
        },
        {
            id: 'rbac-requisitos',
            title: 'CONHECIMENTOS E EXPERIÊNCIA',
            subTopics: [
                {
                    id: 'rbac-requisitos-1',
                    title: 'Conhecimentos Teóricos (65.75)',
                    content: `O requerente deve ser aprovado em exame teórico, que inclui:\n(1) direito aeronáutico e requisitos de aeronavegabilidade;\n(2) ciências naturais e conhecimento geral de aeronaves (matemática, física, química);\n(3) engenharia aeronáutica (materiais, estruturas, fixação, motores, sistemas);\n(4) manutenção aeronáutica (métodos para revisão, reparo, inspeção, substituição, alteração);\n(5) fatores humanos.`
                },
                {
                    id: 'rbac-requisitos-2',
                    title: 'Experiência Prática (65.77)',
                    content: `O requerente deve apresentar declaração de experiência profissional que comprove experiência prática com os procedimentos, métodos, materiais, ferramentas e equipamentos, pelo prazo mínimo de:\n(1) 18 (dezoito) meses, no caso da comprovação de experiência prática para uma única habilitação; ou\n(2) 30 (trinta) meses, no caso da comprovação da experiência prática concomitante para mais de uma habilitação.`
                },
                {
                    id: 'rbac-requisitos-3',
                    title: 'Habilidade (Exame Prático) (65.79)',
                    content: `O requerente deve ser aprovado em exames oral e prático na habilitação requerida. O exame prático verifica as habilidades práticas do candidato na execução de tarefas objeto do exame teórico.`
                },
                {
                    id: 'rbac-requisitos-4',
                    title: 'Experiência Recente (65.83)',
                    content: `O titular de uma licença somente pode exercer as prerrogativas se nos últimos 24 (vinte e quatro) meses ele tiver, por pelo menos 6 (seis) meses:\n(1) trabalhado na habilitação relacionada com a sua licença; ou\n(2) supervisionado tecnicamente outros mecânicos; ou\n(3) supervisionado gerencialmente a manutenção; ou\n(4) atuado no treinamento técnico de pessoal.`
                }
            ]
        },
        {
            id: 'rbac-prerrogativas',
            title: 'PRERROGATIVAS E LIMITAÇÕES',
            subTopics: [
                {
                    id: 'rbac-prerrogativas-1',
                    title: 'Prerrogativas e Limitações Gerais (65.81)',
                    content: `(a) O titular de licença de mecânico de manutenção aeronáutica pode executar ou supervisionar a manutenção, manutenção preventiva ou uma alteração em um produto aeronáutico para o qual possui habilitação técnica.\n(b) O titular de licença de mecânico de manutenção aeronáutica somente pode exercer as prerrogativas de sua licença se entender e compreender as instruções de aeronavegabilidade continuada, incluindo os manuais de manutenção.`
                },
                {
                    id: 'rbac-prerrogativas-2',
                    title: 'Prerrogativas Adicionais - Célula (65.85)',
                    content: `O titular de licença com habilitação em célula pode, considerando cursos e treinamentos, aprovar o retorno ao serviço de uma célula, ou qualquer equipamento ou componente relacionado, após ter executado, supervisionado ou inspecionado sua manutenção.`
                },
                {
                    id: 'rbac-prerrogativas-3',
                    title: 'Prerrogativas Adicionais - GMP (65.87)',
                    content: `O titular de licença com habilitação em grupo motopropulsor pode, considerando cursos e treinamentos, aprovar o retorno ao serviço de um motor, hélice, unidade auxiliar de energia, ou qualquer equipamento ou componente relacionado.`
                },
                {
                    id: 'rbac-prerrogativas-4',
                    title: 'Prerrogativas Adicionais - Aviônico (65.88)',
                    content: `O titular de licença com habilitação em aviônico pode, considerando cursos e treinamentos:\n(1) aprovar o retorno ao serviço de um instrumento mecânico, elétrico ou eletrônico;\n(2) realizar serviços em equipamentos e sistemas eletrônicos, de instrumentos de voo, de motores e de navegação;\n(3) realizar remoções e instalações de equipamentos elétricos ou eletrônicos em aeronaves.`
                }
            ]
        }
    ]
  },
  {
    id: 'cap11',
    title: 'CAPÍTULO 11: ELETRICIDADE BÁSICA',
    topics: [
      {
        id: 'eb-fundamentos',
        title: 'Fundamentos da Matéria e Eletricidade Estática',
        subTopics: [
          {
            id: 'eb-fund-1',
            title: 'Matéria, Molécula e Átomo',
            content: `A matéria pode ser definida como algo que possui massa (peso) e ocupa espaço. A menor partícula de matéria é a molécula. Substâncias compostas por um único tipo de átomo são elementos. O átomo é a parte constitutiva básica da matéria, consistindo em um ou mais elétrios orbitando um núcleo.`
          },
          {
            id: 'eb-fund-2',
            title: 'Estrutura Atômica e Carga Elétrica',
            content: `O átomo mais simples é o de hidrogênio (um elétron e um próton). Um elétron representa a carga elétrica negativa. Elétrons "livres" em órbitas externas podem se mover facilmente. Prótons no núcleo têm carga positiva e nêutrons não têm carga. O peso do átomo é determinado pelos prótons e nêutrons.`
          },
          {
            id: 'eb-fund-3',
            title: 'Íons e Eletricidade Estática',
            content: `Um átomo com carga neutra tem número igual de elétrons e prótons. Se um átomo perde elétrons, torna-se um íon positivo. Se ganha elétrons, torna-se um íon negativo. Eletricidade estática refere-se à deficiência ou excesso de elétrons. É produzida por fricção (transferência de elétrons), como ao passar um pente no cabelo.`
          },
          {
            id: 'eb-fund-4',
            title: 'Campo Eletrostático e Carga por Indução',
            content: `A lei fundamental da eletricidade: cargas iguais se repelem e diferentes se atraem. Um corpo carregado cria um campo de força ao seu redor, o campo eletrostático. É possível carregar um objeto por indução, aproximando um corpo carregado sem tocá-lo, o que causa a separação de cargas no objeto neutro.`
          },
          {
            id: 'eb-fund-5',
            title: 'Distribuição de Carga e Aplicações',
            content: `A carga elétrica se distribui uniformemente sobre a superfície de um condutor de formato regular. Em formatos irregulares, a carga se concentra nas extremidades ou áreas de maior curvatura. Em aeronaves, cargas estáticas geradas pelo atrito com o ar podem causar interferência. Para evitar isso, peças são "unidas" (bonding) para criar um caminho de baixa resistência, e a aeronave é aterrada durante o reabastecimento.`
          }
        ]
      },
      {
        id: 'eb-cc-fem',
        title: 'Corrente Contínua: FEM, Fluxo e Resistência',
        subTopics: [
          {
            id: 'eb-cc-1',
            title: 'Força Eletromotriz (FEM) e Voltagem',
            content: `O fluxo de elétrons de um ponto negativo para um positivo é a corrente elétrica. Ela flui devido a uma diferença de pressão elétrica, chamada força eletromotriz (f.e.m.) ou diferença de potencial. A unidade de medida é o VOLT (V).`
          },
          {
            id: 'eb-cc-2',
            title: 'Fluxo de Corrente (Ampère)',
            content: `Corrente elétrica é formada por elétrons em movimento. O fluxo em uma única direção é chamado de corrente contínua. A quantidade de carga é medida em Coulomb (6,28 x 10^18 elétrons). Quando um Coulomb passa por um ponto em um segundo, temos uma corrente de 1 AMPÈRE (A).`
          },
          {
            id: 'eb-cc-3',
            title: 'Resistência (Ohm)',
            content: `A propriedade que limita ou restringe o fluxo de corrente é a resistência (R), medida em OHM (Ω). Condutores (prata, cobre, ouro, alumínio) têm baixa resistência. Isolantes (borracha, vidro, cerâmica) têm alta resistência. 1 Ohm de resistência limitará o fluxo de corrente a 1 ampère quando a voltagem aplicada for de 1 volt.`
          },
          {
            id: 'eb-cc-4',
            title: 'Fatores que Afetam a Resistência',
            content: `Quatro fatores afetam a resistência: 1. Tipo de material (cobre é melhor condutor que alumínio). 2. Comprimento (quanto mais comprido, maior a resistência). 3. Área da seção transversal (quanto maior a área, menor a resistência). 4. Temperatura (na maioria dos condutores, a resistência aumenta com a temperatura).`
          }
        ]
      },
      {
        id: 'eb-circuitos-basicos',
        title: 'Componentes e Circuitos Básicos',
        subTopics: [
          {
            id: 'eb-cb-1',
            title: 'Componentes e Símbolos de um Circuito',
            content: `Um circuito prático contém uma fonte de F.E.M. (bateria), condutores (fios), e uma resistência (lâmpada). Componentes são representados por símbolos em diagramas esquemáticos.`
          },
          {
            id: 'eb-cb-2',
            title: 'Fontes de Força: Baterias e Geradores',
            content: `Fontes de força incluem geradores (mecânica), baterias (química), células fotoelétricas (luz) e fontes térmicas (calor). Células de bateria podem ser conectadas em série para maior voltagem ou em paralelo para maior capacidade de corrente.`
          },
          {
            id: 'eb-cb-3',
            title: 'Dispositivos de Proteção e Controle',
            content: `Fusíveis são dispositivos de segurança que se fundem para interromper o fluxo sob corrente excessiva. Interruptores (chaves) são usados para abrir ou fechar um circuito. O símbolo de "terra" (massa) representa um ponto de referência comum de potencial zero.`
          },
          {
            id: 'eb-cb-4',
            title: 'Resistores e Código de Cores',
            content: `Resistores limitam o fluxo de corrente. Podem ser fixos ou variáveis. São feitos de fios especiais, grafite (carvão) ou filme metálico. O valor de resistores de carvão é frequentemente identificado por um código de cores, com faixas que representam os dígitos, o multiplicador e a tolerância.`
          }
        ]
      },
      {
        id: 'eb-ohm-potencia',
        title: 'Lei de Ohm e Potência Elétrica',
        subTopics: [
          {
            id: 'eb-op-1',
            title: 'Lei de Ohm',
            content: `A Lei de Ohm estabelece a relação entre voltagem (E), corrente (I) e resistência (R). A fórmula é I = E / R. Conhecendo-se dois dos valores, o terceiro pode ser calculado. Por exemplo, com 24V e 3Ω, a corrente será de 8A.`
          },
          {
            id: 'eb-op-2',
            title: 'Potência Elétrica (Watt)',
            content: `Potência (P) é a razão com que um trabalho é efetuado, medida em WATT (W). É calculada pelo produto da voltagem pela corrente: P = E x I. A potência dissipada em forma de calor numa resistência é P = I² x R.`
          }
        ]
      },
      {
        id: 'eb-circuitos-cc',
        title: 'Circuitos de Corrente Contínua',
        subTopics: [
          {
            id: 'eb-cc-1',
            title: 'Circuitos em Série',
            content: `Em um circuito em série, há um único caminho para a corrente. A corrente é a mesma em todos os pontos. A resistência total (RT) é a soma das resistências individuais (RT = R1 + R2 + ...).`
          },
          {
            id: 'eb-cc-2',
            title: 'Queda de Voltagem e Leis de Kirchhoff',
            content: `Queda de voltagem é a perda de pressão elétrica ao forçar elétrons através de uma resistência. A soma das quedas de voltagem em um circuito em série é igual à voltagem total aplicada (Lei da Voltagem de Kirchhoff). A soma das correntes que entram em um nó é igual à soma das que saem (Lei da Corrente de Kirchhoff).`
          },
          {
            id: 'eb-cc-3',
            title: 'Circuitos em Paralelo',
            content: `Em um circuito em paralelo, há múltiplos caminhos para a corrente. A voltagem é a mesma em todos os ramos. A corrente total é a soma das correntes de cada ramo. A resistência total é sempre menor que a menor resistência individual.`
          },
          {
            id: 'eb-cc-4',
            title: 'Circuitos Série-Paralelo',
            content: `São circuitos combinados, contendo grupos de resistores em paralelo conectados em série com outros resistores. Para analisá-los, simplifica-se cada grupo em paralelo para uma resistência equivalente e, em seguida, resolve-se o circuito em série resultante.`
          }
        ]
      },
      {
        id: 'eb-ca-principios',
        title: 'Corrente Alternada (C.A.) e Componentes',
        subTopics: [
          {
            id: 'eb-ca-1',
            title: 'Geração e Características da C.A.',
            content: `A corrente alternada (C.A.) muda de direção em intervalos regulares, formando uma onda senoidal. As principais características são: ciclo (uma série completa de mudanças), frequência (ciclos por segundo, em Hertz) e fase (relação de tempo entre duas ondas).`
          },
          {
            id: 'eb-ca-2',
            title: 'Valores de C.A.',
            content: `Existem três valores a considerar: instantâneo (valor em qualquer momento), máximo (pico da onda) e efetivo (ou RMS). O valor efetivo de uma C.A. produz o mesmo efeito de aquecimento que um valor de C.C. equivalente e é o que os multímetros medem. Valor Efetivo = 0,707 x Valor Máximo.`
          },
          {
            id: 'eb-ca-3',
            title: 'Indutância e Reatância Indutiva (XL)',
            content: `Indutância (L) é a propriedade de uma bobina que se opõe a mudanças na corrente, medida em Henrys (H). Essa oposição em um circuito C.A. é chamada de reatância indutiva (XL), medida em ohms. A reatância indutiva aumenta com a frequência.`
          },
          {
            id: 'eb-ca-4',
            title: 'Capacitância e Reatância Capacitiva (XC)',
            content: `Capacitância (C) é a propriedade de um capacitor de armazenar energia em um campo elétrico, medida em Farads (F). A oposição à passagem da C.A. é a reatância capacitiva (XC), medida em ohms. A reatância capacitiva diminui com o aumento da frequência.`
          },
          {
            id: 'eb-ca-5',
            title: 'Impedância e Ressonância',
            content: `Impedância (Z) é a oposição total ao fluxo de corrente em um circuito C.A., combinando resistência, reatância indutiva e reatância capacitiva. É calculada usando o teorema de Pitágoras. Ressonância ocorre na frequência em que XL = XC, fazendo com que o circuito se comporte como puramente resistivo.`
          }
        ]
      },
      {
        id: 'eb-dispositivos',
        title: 'Dispositivos de Circuitos e Semicondutores',
        subTopics: [
          {
            id: 'eb-dev-1',
            title: 'Transformadores',
            content: `Um transformador modifica o nível de voltagem C.A. por indução mútua entre um enrolamento primário e um secundário. A relação de espiras entre as bobinas determina se a voltagem será aumentada ou diminuída.`
          },
          {
            id: 'eb-dev-2',
            title: 'Baterias de Acumuladores',
            content: `Baterias convertem energia química em elétrica. Os tipos comuns em aeronaves são chumbo-ácido e níquel-cádmio. A capacidade é medida em ampères-hora. A condição de uma bateria de chumbo-ácido é verificada pela densidade do eletrólito com um densímetro.`
          },
          {
            id: 'eb-dev-3',
            title: 'Retificadores e Filtros',
            content: `Retificadores convertem C.A. em C.C. Diodos de estado sólido são comumente usados. Circuitos de meia onda ou onda completa são possíveis. Filtros (usando capacitores e indutores) são usados para suavizar a C.C. pulsante resultante da retificação.`
          },
          {
            id: 'eb-dev-4',
            title: 'Transistores',
            content: `Transistores são semicondutores que podem amplificar sinais ou atuar como chaves. Existem dois tipos principais: NPN e PNP. Eles substituíram as válvulas a vácuo na maioria das aplicações devido ao seu tamanho, eficiência e durabilidade.`
          },
          {
            id: 'eb-dev-5',
            title: 'Instrumentos de Medição',
            content: `Instrumentos de medição de C.C. incluem o amperímetro (mede corrente, em série), o voltímetro (mede voltagem, em paralelo) e o ohmímetro (mede resistência, com o circuito desenergizado). O multímetro combina essas três funções. Medidores para C.A. usam mecanismos diferentes, como o eletrodinamômetro ou a aleta de ferro móvel.`
          }
        ]
      }
    ]
  },
  {
    id: 'cap12',
    title: 'CAPÍTULO 12: GERADORES E MOTORES ELÉTRICOS',
    topics: [
      {
        id: 'cap12-t1',
        title: 'GERADORES DE CORRENTE CONTÍNUA (CC)',
        subTopics: [
          {
            id: 'cap12-t1-s1',
            title: 'Teoria de Operação e Gerador Básico',
            content: `A energia para a operação de muitos equipamentos elétricos de uma aeronave depende da energia elétrica fornecida por um gerador. Gerador é qualquer máquina que transforma energia mecânica em energia elétrica, pela indução eletromagnética. Quando linhas de força magnética são cortadas por um condutor, uma voltagem é induzida no condutor. A intensidade da voltagem induzida depende da velocidade do condutor e da intensidade do campo magnético. Pela substituição dos anéis coletores do gerador básico por dois semicilindros, chamados segmentos coletores, obtem-se um gerador CC básico. A ação dos segmentos coletores produz uma voltagem CC pulsante.`
          },
          {
            id: 'cap12-t1-s2',
            title: 'Construção do Gerador CC',
            content: `As partes principais de um gerador CC são a carcaça (estrutura do campo), o induzido e um conjunto de escovas. A carcaça completa o circuito magnético entre os pólos e atua como suporte mecânico. O induzido consiste de bobinas enroladas em um núcleo de ferro laminado e um coletor. O coletor é feito de segmentos de cobre isolados por mica e transfere a corrente das bobinas para as escovas.`
          },
          {
            id: 'cap12-t1-s3',
            title: 'Tipos de Excitação (Série, Paralelo, Misto)',
            content: `Há três tipos de geradores CC: série, paralelo, série-paralelo ou misto. A diferença entre eles depende de como a bobina de campo é ligada em relação ao circuito externo.\n- Gerador em Série: O enrolamento de campo é ligado em série com o circuito externo (carga). Possui poucas voltas de fio grosso e tem má regulagem de voltagem.\n- Gerador em Paralelo (Shunt): O enrolamento de campo é ligado em paralelo com o circuito externo. Contém muitas voltas de fio fino. A voltagem de saída diminui à medida que a carga aumenta.\n- Gerador Misto (Compound): É uma combinação do enrolamento em série e em paralelo, de tal modo que se obtenha um bom rendimento. As bobinas do campo em série auxiliam a força magnetomotriz do campo paralelo.`
          },
          {
            id: 'cap12-t1-s4',
            title: 'Reação do Induzido e Interpolos',
            content: `A corrente que flui através do induzido cria campos eletromagnéticos que tendem a distorcer ou inclinar o fluxo magnético principal do gerador. Esta distorção é chamada de reação do induzido e pode causar faíscas nas escovas. Para corrigir esta condição, as escovas podem ser deslocadas para o novo plano neutro, ou, mais comumente, são usados interpolos. Interpolos são pequenos pólos localizados entre os pólos principais, que geram um campo magnético para anular o efeito da reação do induzido.`
          }
        ]
      },
      {
        id: 'cap12-t2',
        title: 'REGULAÇÃO E CONTROLE DE GERADORES CC',
        subTopics: [
          {
            id: 'cap12-t2-s1',
            title: 'Reguladores de Voltagem',
            content: `Para manter uma voltagem constante, a intensidade da corrente do campo deve ser controlada. Reguladores de voltagem fazem isso.\n- Regulador Vibratório: Usa um solenóide que, ao atingir uma voltagem crítica, abre um contato e insere um resistor no circuito de campo, reduzindo a corrente e a voltagem. O ciclo se repete rapidamente.\n- Regulador de Pilha de Carvão: Utiliza uma pilha de discos de carvão cuja resistência varia inversamente com a pressão aplicada. Um eletroímã, sensível à voltagem do gerador, controla a pressão na pilha, regulando a corrente de campo.`
          },
          {
            id: 'cap12-t2-s2',
            title: 'Regulador de Três Unidades',
            content: `Este tipo de regulador consiste em um regulador de voltagem, um limitador de corrente e um interruptor de corrente reversa. O regulador de voltagem funciona de forma vibratória. O limitador de corrente protege o gerador de sobrecargas. O interruptor de corrente reversa desliga a bateria do gerador quando a voltagem do gerador é menor que a da bateria, evitando a "motorização".`
          },
          {
            id: 'cap12-t2-s3',
            title: 'Operação em Paralelo e Equalização',
            content: `Para que múltiplos geradores distribuam a carga igualmente, um circuito de equalização é necessário. Este circuito, geralmente uma bobina auxiliar no regulador de voltagem, conecta os geradores. Se um gerador começa a fornecer mais corrente, sua voltagem de campo é ligeiramente reduzida enquanto a dos outros é aumentada, balanceando a carga entre eles.`
          },
          {
            id: 'cap12-t2-s4',
            title: 'Manutenção e Pesquisa de Panes em Geradores CC',
            content: `A inspeção inclui verificar a montagem, conexões, limpeza, e condição das escovas e do coletor. O assentamento correto das escovas é crucial e deve ser feito com lixa n° 000, nunca com lixa de esmeril. A pressão da mola da escova deve ser verificada com uma balança. Mica alta no coletor deve ser rebaixada. A pesquisa de panes envolve testes de continuidade e voltagem para isolar falhas no gerador, regulador ou fiação.`
          }
        ]
      },
      {
        id: 'cap12-t3',
        title: 'GERADORES DE CORRENTE ALTERNADA (ALTERNADORES)',
        subTopics: [
          {
            id: 'cap12-t3-s1',
            title: 'Princípios e Tipos',
            content: `Alternadores produzem corrente alternada (CA). Podem ser monofásicos, bifásicos ou trifásicos, sendo o último o mais comum em aeronaves. A frequência da voltagem depende da velocidade do rotor e do número de pólos. A maioria dos alternadores de aeronaves usa um campo rotativo e um induzido estacionário (estator), permitindo que a alta voltagem de saída seja ligada diretamente à carga sem escovas.`
          },
          {
            id: 'cap12-t3-s2',
            title: 'Alternadores Sem Escova e Transmissão de Velocidade Constante (CSD)',
            content: `A maioria das aeronaves modernas usa alternadores sem escova para maior eficiência e menos manutenção. O campo rotativo é excitado por um excitador de CA cuja saída é retificada por diodos montados no próprio eixo do rotor. Como a velocidade do motor da aeronave varia, uma Transmissão de Velocidade Constante (CSD ou "Constant Speed Drive") é usada para manter a rotação do alternador e, consequentemente, a frequência da CA (geralmente 400 Hz) constante.`
          },
          {
            id: 'cap12-t3-s3',
            title: 'Sincronismo, Proteção e Manutenção',
            content: `Para operar em paralelo, alternadores devem ter a mesma sequência de fase, voltagem e frequência. Luzes de sincronização ou um sincroscópio são usados para verificar isso antes de conectar um alternador à barra. Circuitos de proteção, como relés de corrente diferencial e sobrevoltagem, desligam automaticamente um alternador em caso de falha. A manutenção envolve inspeção dos rolamentos, limpeza e testes de bancada para verificar a performance.`
          }
        ]
      },
      {
        id: 'cap12-t4',
        title: 'INVERSORES',
        subTopics: [
          {
            id: 'cap12-t4-s1',
            title: 'Inversores Rotativos',
            content: `Inversores são usados para transformar uma parte da força CC em CA para certos instrumentos e equipamentos. O inversor rotativo é essencialmente um motor CC e um gerador CA (alternador) em uma única carcaça, com o rotor compartilhado. Tipos comuns incluem o de ímã permanente e o de tipo indutor.`
          },
          {
            id: 'cap12-t4-s2',
            title: 'Inversores Estáticos',
            content: `Inversores estáticos usam componentes de estado sólido (sem partes móveis) para converter CC em CA. São mais leves, eficientes e confiáveis que os rotativos. Eles transformam a baixa voltagem CC em alta voltagem CA, com uma onda de saída que pode ser senoidal ou quadrada, dependendo da aplicação.`
          }
        ]
      },
      {
        id: 'cap12-t5',
        title: 'MOTORES ELÉTRICOS CC',
        subTopics: [
          {
            id: 'cap12-t5-s1',
            title: 'Princípio de Funcionamento (Torque)',
            content: `Um motor elétrico transforma energia elétrica em energia mecânica. Quando um fio condutor de corrente é colocado em um campo magnético, uma força atua sobre o fio. Em uma bobina (rotor), essa força cria um torque que a faz girar. Um comutador (coletor) é usado para inverter a direção da corrente na bobina a cada meia volta, mantendo o torque e a rotação contínua.`
          },
          {
            id: 'cap12-t5-s2',
            title: 'Tipos de Motores CC',
            content: `Assim como os geradores, os motores CC são classificados como série, paralelo (shunt) e misto (compound).\n- Motor em Série: Campo e rotor em série. Possui alto torque de partida, mas a velocidade varia muito com a carga.\n- Motor em Paralelo (Shunt): Campo e rotor em paralelo. A velocidade é relativamente constante, mas o torque de partida é menor.\n- Motor Misto (Compound): Combina características dos motores série e paralelo.`
          },
          {
            id: 'cap12-t5-s3',
            title: 'Força Contra-Eletromotriz e Controle de Velocidade',
            content: `Quando o rotor de um motor gira em um campo magnético, ele também age como um gerador, induzindo uma voltagem oposta à aplicada. Essa é a força contra-eletromotriz (FCEM), que limita a corrente no rotor. A velocidade do motor é controlada variando a corrente de campo com um reostato. Menos corrente de campo resulta em menor FCEM e maior velocidade.`
          }
        ]
      },
      {
        id: 'cap12-t6',
        title: 'MOTORES ELÉTRICOS CA',
        subTopics: [
          {
            id: 'cap12-t6-s1',
            title: 'Motor de Indução',
            content: `Motores de indução (monofásicos ou trifásicos) funcionam com base em um campo magnético rotativo no estator. Este campo induz correntes no rotor (geralmente do tipo "gaiola de esquilo"), que criam seu próprio campo magnético. A interação entre os dois campos produz o torque que faz o rotor girar. A velocidade do rotor é sempre um pouco menor que a velocidade síncrona do campo do estator, uma diferença chamada de deslizamento (slip).`
          },
          {
            id: 'cap12-t6-s2',
            title: 'Motores Monofásicos de Partida Automática',
            content: `Motores monofásicos precisam de um método para iniciar a rotação.\n- Motor de Polo Sombreado: Usa um anel de cobre em parte do polo para criar um pequeno campo rotativo defasado, suficiente para dar partida em pequenas cargas como ventiladores.\n- Motor de Fase Dividida: Usa um enrolamento de partida auxiliar com alta resistência para criar uma fase de corrente diferente do enrolamento principal, gerando o torque de partida. Um interruptor centrífugo desliga o enrolamento de partida quando o motor atinge certa velocidade.\n- Motor com Capacitor de Partida: Similar ao de fase dividida, mas usa um capacitor em série com o enrolamento de partida para criar um torque inicial muito maior.`
          },
          {
            id: 'cap12-t6-s3',
            title: 'Motor Síncrono',
            content: `O motor síncrono utiliza um campo magnético rotativo no estator, como o motor de indução. No entanto, seu rotor é um eletroímã energizado por corrente contínua. Após a partida (geralmente por um enrolamento de indução), o rotor "trava" e gira exatamente na mesma velocidade síncrona do campo do estator. São usados onde a velocidade constante é crucial.`
          }
        ]
      }
    ]
  },
  {
    id: 'cap13',
    title: 'CAPÍTULO 13: COMBUSTÍVEIS E SISTEMAS DE COMBUSTÍVEL',
    topics: [
      {
        id: 'csc-intro',
        title: 'INTRODUÇÃO AOS COMBUSTÍVEIS',
        subTopics: [
          {
            id: 'csc-intro-1',
            title: 'Definição e Tipos (Sólidos, Gasosos, Líquidos)',
            content: `O combustível é uma substância que, quando combinado com o oxigênio, queima e produz calor. Os combustíveis devem ser classificados de acordo com seu estado físico, como: sólidos, gasosos ou líquidos.\n\nCombustíveis sólidos são extensivamente usados para motores de combustão externa; como os motores à vapor, onde a queima toma lugar sob as caldeiras ou em fornos. Eles incluem tais combustíveis, como madeira e carvão. Os combustíveis sólidos não são usados em motores convencionais (recíprocos) onde a combustão se processa no interior dos cilindros por causa de sua baixa razão de queima, baixo valor calorífico e numerosas outras desvantagens.\n\nCombustíveis gasosos são usados, até certo ponto, para motores de combustão interna, onde um grande suprimento de combustível está prontamente disponível. Gás natural e gás liqüefeito de petróleo, são dois dos tipos mais comuns. Os combustíveis gasosos poderão ser desconsiderados, para o uso, em motores de aviões. O grande espaço, ocupado por eles, restringe o suprimento de combustível que pode transportar.\n\nOs combustíveis líquidos, em muitos aspectos, são os combustíveis ideais para o uso em motores de combustão interna. O combustível de aviação é um líquido contendo energia química; que, através da combustão, é desprendida como energia térmica e, então, convertida em energia mecânica pelo motor. A energia mecânica é usada para produzir o empuxo que movimenta o avião. Gasolina e querosene são os dois combustíveis mais amplamente usados na aviação.`
          },
        ]
      },
      {
        id: 'csc-gasolina',
        title: 'CARACTERÍSTICAS E PROPRIEDADES DA GASOLINA DE AVIAÇÃO',
        subTopics: [
          {
            id: 'csc-gasolina-1',
            title: 'Composição, Volatilidade e Riscos',
            content: `A gasolina de aviação consiste quase que, inteiramente, de hidrocarbonos. O chumbo tetraetil (TEL) é adicionado para melhorar sua performance. A volatilidade é a medida da tendência de uma substância em vaporizar-se. Se a gasolina vaporizar muito rapidamente, as linhas de combustível poderão ficar cheias de vapor, causando um "calço de vapor". A vaporização também causa um resfriamento que pode levar à formação de gelo no carburador.`
          },
          {
            id: 'csc-gasolina-2',
            title: 'Detonação, Pré-Ignição e Octanagem',
            content: `Detonação é a queima instantânea e explosiva da última porção da mistura ar/combustível na câmara de combustão. Pré-ignição (ou ignição de superfície) é a ignição da mistura por pontos quentes antes do ponto de ignição normal pela vela. O número de octanas designa o valor anti-detonante do combustível. Gasolinas de aviação possuem dois graus (ex: 100/130), o primeiro para mistura pobre e o segundo para mistura rica.`
          },
          {
            id: 'csc-gasolina-3',
            title: 'Identificação e Pureza',
            content: `As gasolinas contendo TEL são coloridas para identificação (ex: 100/130 é verde, 91/96 é azul). O combustível deve estar livre de impurezas como água e sedimentos. A contaminação por água pode ser evitada reabastecendo a aeronave logo após o voo para reduzir o espaço de ar nos tanques. Marcas de identificação incluem faixas coloridas nas tubulações e placas nos pontos de abastecimento.`
          },
        ]
      },
      {
        id: 'csc-turbina',
        title: 'COMBUSTÍVEIS PARA MOTORES A TURBINA',
        subTopics: [
            {
                id: 'csc-turbina-1',
                title: 'Tipos e Características',
                content: `São combustíveis destilados, compostos de hidrocarbonos com um pouco mais de carbono e enxofre que a gasolina. Os tipos comuns são Jet-A (querosene pesado), Jet-B (mistura de gasolina e querosene) e Jet-A-1 (para operação em temperaturas extremamente baixas). A volatilidade é um compromisso entre partida a frio e perdas por evaporação. Pelo fato de não serem coloridos, sua identificação visual não é confiável.`
            }
        ]
      },
      {
        id: 'csc-contaminacao',
        title: 'CONTAMINAÇÃO DO SISTEMA DE COMBUSTÍVEL',
        subTopics: [
            {
                id: 'csc-contaminacao-1',
                title: 'Água, Sedimentos e Partículas Estranhas',
                content: `A água pode estar dissolvida ou entranhada (em suspensão), formando nuvens ou gotículas que podem congelar. Sedimentos são poeira, material fibroso, grãos, flocos ou ferrugem. Partículas estranhas incluem ferrugem, areia, compostos de alumínio, latão e borracha. Partículas grosseiras (>40 microns) são visíveis, enquanto as finas não.`
            },
            {
                id: 'csc-contaminacao-2',
                title: 'Desenvolvimento Microbial e Detecção',
                content: `O desenvolvimento microbial (fungo) ocorre na interface entre a água e o combustível, podendo formar uma camada marrom que acelera a corrosão eletrolítica. A detecção visual de contaminação busca por um combustível "limpo e brilhante", sem água livre perceptível. Métodos de teste em pista podem usar corantes solúveis em água ou pós químicos que mudam de cor.`
            },
            {
                id: 'csc-contaminacao-3',
                title: 'Controle e Prevenção',
                content: `O controle da contaminação começa na refinaria e se estende por todo o processo de transporte e armazenamento. Procedimentos chave incluem: usar filtro-separador, permitir tempo de assentamento (uma hora por pé de profundidade), checar a presença de água com papel de tornassol, usar linhas de sucção flutuantes e garantir a limpeza dos veículos abastecedores.`
            }
        ]
      },
      {
        id: 'csc-sistemas',
        title: 'SISTEMAS DE COMBUSTÍVEL DE AERONAVES',
        subTopics: [
            {
                id: 'csc-sistemas-1',
                title: 'Componentes e Tipos de Alimentação',
                content: `Um sistema de combustível armazena e distribui combustível limpo a uma pressão correta para o motor. Os componentes básicos incluem tanques, linhas, válvulas, bombas e filtros. O sistema de alimentação por gravidade é usado em aviões de baixa potência. Aeronaves de alta potência requerem um sistema de pressão com bombas acionadas pelo motor e bombas auxiliares (recalque).`
            },
            {
                id: 'csc-sistemas-2',
                title: 'Tanques e Células de Combustível',
                content: `Os tanques podem ser feitos de liga de alumínio ou ser células de borracha. Tanques integrais ("asa molhada") são parte da estrutura da aeronave. Todos os tanques possuem suspiros para manter a pressão atmosférica, defletores para reduzir a flutuação do combustível, e um espaço para expansão térmica. Alguns possuem válvulas de alijamento para reduzir o peso da aeronave em voo.`
            },
            {
                id: 'csc-sistemas-3',
                title: 'Filtros e Bombas',
                content: `Filtros são instalados nas saídas dos tanques, nos bocais de abastecimento e na entrada do carburador. Bombas de recalque (centrífugas) são usadas para fornecer pressão positiva à bomba principal e para transferir combustível. A bomba principal, acionada pelo motor, é geralmente do tipo aleta (deslocamento positivo) e inclui uma válvula de alívio e uma de derivação (by-pass).`
            },
            {
                id: 'csc-sistemas-4',
                title: 'Válvulas e Indicadores',
                content: `Válvulas seletoras permitem cortar o fluxo, selecionar o tanque ou realizar alimentação cruzada. Podem ser operadas manual ou eletricamente. Indicadores de quantidade podem ser do tipo visor de vidro, mecânico (bóia), elétrico ou eletrônico (capacitivo). Este último é o mais preciso, pois mede o combustível em peso. Medidores de fluxo e pressão também são essenciais.`
            },
            {
                id: 'csc-sistemas-5',
                title: 'Sistemas Multimotores, Reparos e Segurança',
                content: `Sistemas para aeronaves multimotoras permitem que qualquer motor seja alimentado por diferentes tanques (alimentação cruzada). Reparos em tanques de combustível exigem que eles sejam drenados e neutralizados para evitar risco de fogo. Vazamentos são classificados de acordo com a área umedecida em 30 minutos (infiltração lenta, infiltração, infiltração pesada ou vazamento corrido). É crucial seguir todas as precauções de segurança contra fogo ao manusear combustíveis de turbina, que, sob certas circunstâncias, são tão perigosos quanto a gasolina.`
            }
        ]
      }
    ]
  },
  {
    id: 'cap14',
    title: 'CAPÍTULO 14: INGLÊS TÉCNICO',
    topics: [
      {
        id: 'it-grammar',
        title: 'REVISÃO BÁSICA DE GRAMÁTICA',
        subTopics: [
          {
            id: 'it-grammar-1',
            title: 'Pronomes Pessoais e Verbo "To Be"',
            content: `SUBJECT PRONOUNS (I, YOU, HE, SHE, IT, WE, YOU, THEY)\nOBJECT PRONOUNS (ME, YOU, HIM, HER, IT, US, YOU, THEM)\n\nVERB TO BE:\nI am (I'm)\nYou are (You're)\nHe is (He's)\nShe is (She's)\nIt is (It's)\nWe are (We're)\nYou are (You're)\nThey are (They're)\n\nExample: He is a worker. / He is not (isn't) a worker. / Is he a worker?`
          },
          {
            id: 'it-grammar-2',
            title: 'Artigos e Verbos Modais',
            content: `INDEFINITE ARTICLE = AN, A (UM, UMA)\nExample: We see a hammer. We see an old hammer.\n\nDEFINITE ARTICLE = THE (O, A, OS, AS)\nExample: The airplane is flying.\n\nMODAL VERBS = CAN, COULD, WILL BE ABLE TO, MAY, MIGHT, TO BE ALLOWED TO, MUST, MUSTN’T, NEEDN’T, SHOULD, OUGHT TO\nExample: I can study English. / I can not (can't) study English. / Can I study English?`
          },
          {
            id: 'it-grammar-3',
            title: 'Pronomes Demonstrativos e "WH Questions"',
            content: `DEMONSTRATIVE PRONOUNS:\nTHIS (este/esta/isto) - THESE (estes/estas)\nTHAT (aquele/aquela/aquilo) - THOSE (aqueles/aquelas)\n\nWH QUESTIONS:\nWHERE – Where is the fuselage?\nWHO – Who is the pilot?\nWHY – Why are the boys running?\nWHEN – When do they leave?\nWHAT – What is this?\nHOW – How are you today?`
          },
          {
            id: 'it-grammar-4',
            title: 'Present Continuous & Simple Present',
            content: `PRESENT CONTINUOUS (ação acontecendo agora):\nA. The plane is flying.\nN. The plane is not (isn’t) flying.\nI. Is the plane flying?\n\nSIMPLE PRESENT (ação habitual):\nA. The plane flies. / The planes fly.\nN. The plane does not (doesn’t) fly. / The planes do not (don’t) fly.\nI. Does the plane fly? / Do the planes fly?`
          },
        ]
      },
      {
        id: 'it-ground-safety',
        title: 'SEGURANÇA DE SOLO (GROUND SAFETY)',
        subTopics: [
          {
            id: 'it-gs-1',
            title: 'Áreas de Admissão dos Motores a Jato',
            content: `When jet engines are running, jet intake ducts are danger areas. You must stay clear of these zones by at least a 25-foot radius. The suction of the engines will draw (suck) personnel or equipment into the intake ducts.`
          },
          {
            id: 'it-gs-2',
            title: 'Áreas de Exaustão dos Motores a Jato',
            content: `Jet engines expel hot streams of gas. We call a stream of hot gas forced out by the engines “an exhaust blast”. The exhaust blast is dangerous for a distance of 200 feet. The exhaust blast areas are behind the airplane. This area is extremely dangerous to personnel, equipment, and aircraft.`
          },
          {
            id: 'it-gs-3',
            title: 'Área ao Redor da Hélice',
            content: `The area around a rotating propeller is very dangerous. A person standing in the propeller area could be critically injured or killed if a blade should be thrown from the shaft (axle). A spinning propeller will damage equipment and injure personnel unless precautions are taken. The mechanic must take care by clearing the area of covers, tools, workstands, etc.`
          },
          {
            id: 'it-gs-4',
            title: 'Ferramentas Elétricas, Ácido Sulfúrico e Material Inflamável',
            content: `POWER TOOLS: Power tools are a source of injury. You should not wear gloves, ties, or loose clothing around moving machinery. Safety glasses should be worn.\n\nUSING SULPHURIC ACID (H₂SO₄): When mixing sulphuric acid, the acid should always be poured into the water. A violent reaction will occur if you pour water into the acid.\n\nFLAMMABLE MATERIAL: Flammable material will catch on fire (ignite) easily. Flammable materials must be stored (kept) in closed containers.`
          },
          {
            id: 'it-gs-5',
            title: 'Ruído e Outros Perigos',
            content: `NOISE: The loud sound created by the modern jet engine is a hazard. Continued exposure to noise can cause you to become partly deaf. When the noise level is high, the mechanic wears ear defenders (earplugs, ear muffs, ear helmets).\n\nOTHER HAZARDS: Tools with sharp edges should not be stored loosely. Keep tools sharp and clean. Use the correct tool. Never push a wrench when you can pull it.`
          },
        ]
      },
      {
        id: 'it-aircraft-parts',
        title: 'PARTES DA AERONAVE (AIRCRAFT PARTS)',
        subTopics: [
          {
            id: 'it-ap-1',
            title: 'Fuselagem (The Fuselage)',
            content: `The parts fastened together to form the structure of the mechanisms are called structural units or assemblies. The fuselage is the main structural unit of the airplane. Other structural units are directly or indirectly attached to it.`
          },
          {
            id: 'it-ap-2',
            title: 'Asas e Empenagem (The Wings & The Empennage)',
            content: `THE WINGS: The wings provide the lifting force. They are identified as right and left wings. The wings are attached to the fuselage.\n\nTHE EMPENNAGE: The complete tail assembly is called the empennage. It consists of the vertical and the horizontal stabilizers, the elevators and the rudder.`
          },
          {
            id: 'it-ap-3',
            title: 'Estabilizadores e Superfícies de Comando',
            content: `THE VERTICAL STABILIZER: It is a vertical fin attached to the fuselage. It provides a stabilizing effect and serves as a support for the rudder.\nTHE RUDDER: A movable surface attached to the rear of the vertical stabilizer. It helps to control the direction of flight.\nTHE HORIZONTAL STABILIZER: A fixed surface used to keep the airplane stable. It is attached to the rear of the fuselage and serves as a support for the elevators.\nELEVATORS: Movable surfaces attached to the rear of the horizontal stabilizer to control the airplane’s position in the air.\nAILERONS: Movable surfaces attached to the trailing edge of the wings, used to control rolling.`
          },
          {
            id: 'it-ap-4',
            title: 'Trem de Pouso e Naceles (Landing Gear & Nacelles)',
            content: `LANDING GEAR: The assembly designed to provide a medium of rolling on the ground, absorb shock, and support the airplane on the ground. Landing gears are either fixed or retractable and are classified by the wheel arrangement (Conventional, Tricycle, Bicycle).\n\nNACELLES: On some airplanes, the power plants are housed in compartments built into the wing or suspended from it. These compartments are called nacelles.`
          }
        ]
      },
      {
        id: 'it-fuel-system',
        title: 'UNIDADES DO SISTEMA DE COMBUSTÍVEL',
        subTopics: [
          {
            id: 'it-fs-1',
            title: 'Tanques e Bombas Auxiliares',
            content: `TANKS: Tanks are necessary to store the required amount of fuel. Usually the tank has a sump to collect water and sediment.\n\nBOOSTER PUMPS: The booster pump supplies fuel under pressure from one or more tanks to the inlet of another pump, the engine-driven pump. It is also used to transfer fuel and for starting the engine.`
          },
          {
            id: 'it-fs-2',
            title: 'Bomba Principal e Linhas',
            content: `ENGINE-DRIVEN PUMP: The engine-driven pump supplies fuel under pressure to the carburetor. This pump is usually mounted on a section of the engine and is driven by the engine.\n\nLINES: The tubes for conducting the fuel from the tank to the carburetor are referred to as lines or fuel lines.`
          },
          {
            id: 'it-fs-3',
            title: 'Válvulas e Medidor de Pressão',
            content: `VALVES: Selector valves are installed for fuel selection and transfer. Shut-off valves are installed to prevent fuel loss when a part of the system is damaged.\n\nPRESSURE GAGE: The device that indicates the fuel pressure available at the carburetor inlet is known as the fuel pressure gage.`
          }
        ]
      },
      {
        id: 'it-vocabulary',
        title: 'VOCABULÁRIO TÉCNICO ESPECÍFICO',
        subTopics: [
          {
            id: 'it-vocab-1',
            title: 'Fixadores e Dispositivos de Segurança',
            content: `Bolts: parafusos\nNuts: porcas\nWashers: arruelas\ncotter pins: contra pinos\nsafety wire: arame de segurança ou arame de freno\nRivets: rebites\nScrews: parafusos`
          },
          {
            id: 'it-vocab-2',
            title: 'Mangueiras, Tubulação e Ferramentas Manuais',
            content: `Hoses, tubing, fitting and hand tools: mangueiras, tubulação, encaixes e ferramentas manuais\nPliers: alicate\nScrewdrivers: chaves de fenda\nHammers: martelos\nWrench: chave (inglesa, de boca, de porca)\nMetal cutting tools: ferramentas para corte de metal`
          },
          {
            id: 'it-vocab-3',
            title: 'Ferramentas Elétricas e Manuais',
            content: `Electric drills: brocas elétricas\nDrill bits: brocas\nGrinder: esmeril\nGrinder stones: pedras de esmeril ou de amolar\nChisels: talhadeiras\nPunches: furadores\nFiles: limas`
          },
          {
            id: 'it-vocab-4',
            title: 'Instrumentos de Medida',
            content: `Steel rules: réguas de aço\nsteel tapes: trenas de aço\nCalipers: compassos\nMicrometers: micrômetros\nDividers: compassos\nScribers: riscadores\nThickness gages: calibre de espessura\nScrew-pitch gages: calibre do passo do parafuso`
          },
          {
            id: 'it-vocab-5',
            title: 'Segurança de Solo e Partes da Aeronave',
            content: `Jet intake duct areas: areas de admissão do jato de ar\nJet exhaust blast areas: áreas de exaustão\nArea around propeller: área ao redor da hélice\nFuselage: fuselage\nWings: asas\nEmpennage: empenagem\nLanding gear: trem de pouso`
          },
          {
            id: 'it-vocab-6',
            title: 'Componentes de Motores e Sistemas',
            content: `Main components of reciprocating engines: componentes principais dos motores de movimento alternado\nCylinder: cilindro\nPiston assembly: conjunto do pistão\nConnecting rod: haste de ligação\nCrankshaft: eixo de manivela\nFuel system units: unidades do sistema de combustível\nTanks: reservatório\nBooster pumps: bombas auxiliares\nIgnition system: sistema de ignição\nMagnet: ímã\nSpark plugs: velas de ignição`
          }
        ]
      }
    ]
  },
  {
    id: 'cap15',
    title: 'CAPÍTULO 15: MATERIAIS DE AVIAÇÃO E PROCESSOS',
    topics: [
      {
        id: 'map-prendedores',
        title: 'Prendedores Rosqueados e Identificação',
        subTopics: [
          {
            id: 'map-prendedores-1',
            title: 'Introdução e Tipos de Prendedores',
            content: `Este título incorpora as diversas partes utilizadas na fabricação e no reparo de aeronaves, como os vários tipos de prendedores e uma miscelânea de pequenos itens e os tratamentos a que estão sujeitos durante sua fabricação ou utilização. A importância do material de aviação é muitas vezes desprezada devido ao seu pequeno tamanho; entretanto, a segurança e a eficiência da operação de uma aeronave depende de uma correta seleção e, uso adequado do material de aviação, assim como o conhecimento e a utilização dos processos adequados a esse material.\n\nOs vários tipos de dispositivos de fixação, ou de fechamento, permitem uma rápida desmontagem e recolocação de partes de aeronaves, que devem ser separadas e conectadas em intervalos frequentes. Entende-se por parafusos, dispositivos de fixação, que permitem segurança e rigidez na união de peças. Existem dois tipos de parafusos: os utilizados em mecânica (bolts), geralmente quando se necessita grande firmeza; e os de rosca soberba (screws), quando a firmeza não é um fator importante.`
          },
          {
            id: 'map-prendedores-2',
            title: 'Classificação dos Fios de Rosca',
            content: `Para os parafusos para aeronaves (bolts); ou os de rosca soberba (screws); e porcas, são fabricados em um dos seguintes tipos de fios de rosca: NC (American National Coarse), NF (American National Fine), UNC (American Standard Unified Coarse) ou UNF (American Standard Unified Fine). As roscas são também especificadas em classes de acabamento, que indicam a tolerância permitida pelo fabricante, com referência a sua instalação nos furos do material a ser preso ou fixado. As classes são: Classe 1 - "Loose fit", Classe 2 - "Free fit", Classe 3 - "Medium fit", e Classe 4 - "Close fit".`
          },
          {
            id: 'map-prendedores-3',
            title: 'Identificação dos Materiais de Aviação',
            content: `A maioria dos itens são identificados por números de especificação ou nome do fabricante. Peças com fios de rosca e rebites são usualmente identificados pelas letras AN (Air Force - Navy), NAS (National Aircraft Standard), ou MS (Military Standard) seguidas de números. Os prendedores de desconexão rápida são usualmente identificados por nomes dados pelo fabricante e pela designação dos tamanhos.`
          }
        ]
      },
      {
        id: 'map-parafusos-gerais',
        title: 'Parafusos de Aviação',
        subTopics: [
          {
            id: 'map-parafusos-1',
            title: 'Parafusos de Uso Geral',
            content: `O parafuso de aeronave de cabeça sextavada (AN-3 a AN-20) é um parafuso estrutural multiuso usado para aplicações gerais envolvendo cargas de tensão ou cisalhamento. Parafusos de liga de aço menores que o nº 10-32 e parafusos de liga de alumínio menores que 1⁄4 polegada de diâmetro não são usados em estruturas primárias. O parafuso de cabeça perfurada AN-73 é como o parafuso sextavado padrão, mas tem uma cabeça mais profunda, que é perfurada para receber o fio para segurança.`
          },
          {
            id: 'map-parafusos-2',
            title: 'Parafusos de Tolerância Fechada e de Fixação Interna',
            content: `Os parafusos de tolerância estreita são usinados com mais precisão do que o parafuso de uso geral. Podem ser sextavados (AN-173 a AN-186) ou ter uma cabeça escareada de 100° (NAS-80 a NAS-86). São usados em aplicações onde é necessário um ajuste apertado.\n\nOs parafusos de chave interna (MS-20004 a MS-20024 ou NAS-495) são fabricados em aço de alta resistência e são adequados para uso em aplicações de tensão e cisalhamento.`
          },
          {
            id: 'map-parafusos-3',
            title: 'Identificação e Codificação de Parafusos',
            content: `Os parafusos de aeronaves do tipo AN podem ser identificados pelas marcações de código nas cabeças. As marcações geralmente denotam o fabricante, o material e se é um tipo AN padrão ou especial. Parafusos de aço padrão AN são marcados com um traço elevado ou asterisco. Parafusos de liga de alumínio AN são marcados com dois traços elevados. Parafusos NAS de tolerância estreita são marcados com um triângulo elevado ou rebaixado.`
          }
        ]
      },
      {
        id: 'map-parafusos-especiais',
        title: 'Parafusos Especiais e de Bloqueio',
        subTopics: [
          {
            id: 'map-especiais-1',
            title: 'Parafusos de Forquilha (Clevis) e Olhal',
            content: `A cabeça de um parafuso de manilha (Clevis) é redonda e ranhurada. Este tipo de parafuso é usado somente onde ocorrem cargas de cisalhamento e nunca em tensão.\n\nO olhal é um parafuso para fins especiais usados onde cargas de tensão externas devem ser aplicadas. É projetado para a fixação de dispositivos, como o garfo de um esticador.`
          },
          {
            id: 'map-especiais-2',
            title: 'Jo-Parafuso (Jo-bolt)',
            content: `Jo-bolt é um nome comercial para um rebite de três peças com rosca interna, consistindo em um parafuso de liga de aço, uma porca de aço e uma luva de aço inoxidável expansível. Tem alta resistência ao cisalhamento e à tração, sendo adequado para uso em casos de altas tensões. São usados em áreas que não são frequentemente submetidas a substituição ou manutenção.`
          },
          {
            id: 'map-especiais-3',
            title: 'Parafusos de Bloqueio (Lockbolts)',
            content: `Combinam as características de um parafuso e rebite de alta resistência. São usados em conexões de emenda de asa, trem de pouso, longarinas, etc. São instalados mais rapidamente que rebites ou parafusos convencionais e eliminam o uso de arruelas de pressão e contrapinos. Três tipos são comumente usados: o tipo de tração (pull type), o tipo de toco (stump type) e o tipo cego (blind type).`
          }
        ]
      },
      {
        id: 'map-porcas',
        title: 'Porcas e Arruelas',
        subTopics: [
          {
            id: 'map-porcas-1',
            title: 'Porcas Não Autotravantes',
            content: `São porcas que devem ser protegidas por dispositivos de travamento externos, como contrapinos ou fio de segurança. Incluem a porca castelo (AN310), a porca de cisalhamento acastelada (AN320), a porca sextavada simples (AN315) e a porca borboleta (AN350).`
          },
          {
            id: 'map-porcas-2',
            title: 'Porcas Autotravantes e de Mola',
            content: `As porcas autotravantes não precisam de meios auxiliares de segurança. Os tipos gerais são o todo em metal (ex: Boots) e o tipo de trava de fibra (ex: Elastic Stop Nut). Porcas de mola de chapa são usadas com parafusos auto-roscantes em locais não estruturais.`
          },
          {
            id: 'map-arruelas-1',
            title: 'Arruelas de Aviação',
            content: `As arruelas fornecem uma área de superfície de rolamento e atuam como calços. Os três tipos mais comuns são a arruela lisa (plain washer), a arruela de pressão (lock washer) e a arruela especial. Arruelas lisas (AN960, AN970) são usadas sob porcas para fornecer uma superfície de apoio. Arruelas de pressão (AN935) nunca devem ser usadas em estruturas primárias ou secundárias.`
          }
        ]
      },
      {
        id: 'map-materiais-diversos',
        title: 'Outros Materiais e Vedações',
        subTopics: [
          {
            id: 'map-plasticos-1',
            title: 'Plásticos e Borrachas',
            content: `PLÁSTICOS: Usados em muitas aplicações, desde componentes estruturais reforçados (thermosettings) até acabamentos (thermoplastics). Plásticos transparentes (acrílicos) são usados em para-brisas e janelas.\n\nBORRACHA: Usada como elastômero para proteger contra vibrações, regular temperatura e pressão, e resistir a químicos. A borracha natural é flexível, mas a sintética (Nitrila, Neoprene) oferece maior resistência a combustíveis e óleos.`
          },
          {
            id: 'map-vedadores-1',
            title: 'Selos e Vedações de Aeronaves',
            content: `São usados para evitar a passagem de fluidos ou contaminantes. São divididos em três classes: gaxetas (packings), juntas (gaskets) e limpadores (wipers). Gaxetas, como os O-Rings (anéis de vedação), são para vedações dinâmicas. Juntas são para vedações estáticas entre superfícies planas.`
          }
        ]
      },
      {
        id: 'map-corrosao',
        title: 'Controle de Corrosão',
        subTopics: [
          {
            id: 'map-corrosao-1',
            title: 'Tipos de Corrosão',
            content: `A corrosão é a deterioração de um metal por ataque químico ou eletroquímico. As formas incluem: ataque químico direto, corrosão superficial, filiforme, por pite, de metal diferente (galvânica), de célula de concentração, esfoliação, intergranular, por tensão e por atrito.`
          },
          {
            id: 'map-corrosao-2',
            title: 'Agentes Corrosivos e Manutenção Preventiva',
            // FIX: Added missing 'content' property
            content: `Os agentes corrosivos comuns na aviação incluem ar marinho, umidade, ácidos de baterias, produtos de limpeza inadequados e resíduos de combustão. A manutenção preventiva é crucial e envolve inspeções regulares, limpeza frequente para remover contaminantes, aplicação de revestimentos protetores (tintas, selantes), lubrificação e tratamento de áreas corroídas o mais rápido possível para evitar danos estruturais.`
          }
        ]
      }
    ]
  }
];
