import { QuizQuestion, QuizDifficulty } from '../types';

export interface LocalQuestion extends QuizQuestion {
  chapterId: string;
  difficulty: QuizDifficulty;
}

export const localQuestionsDB: LocalQuestion[] = [
  // CAPÍTULO 1: FÍSICA (4 questões)
  {
    chapterId: 'cap1',
    question: "De acordo com a Lei de Newton, 'Para toda ação existe uma reação de igual intensidade e sentido oposto'. Esta é a:",
    options: ["Primeira Lei.", "Segunda Lei.", "Terceira Lei.", "Lei da Gravitação."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "A Terceira Lei de Newton define o princípio de ação e reação, fundamental para a propulsão a jato."
  },
  {
    chapterId: 'cap1',
    question: "O Princípio de Bernoulli afirma que em um fluido em movimento:",
    options: ["A pressão aumenta onde a velocidade aumenta.", "A pressão diminui onde a velocidade aumenta.", "A velocidade é constante independente da pressão.", "A densidade aumenta com a velocidade."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "Bernoulli estabeleceu que pressão e velocidade em um fluido têm relação inversa."
  },
  {
    chapterId: 'cap1',
    question: "A transmissão integral de pressão em um fluido confinado é descrita pela:",
    options: ["Lei de Boyle.", "Lei de Charles.", "Lei de Pascal.", "Lei de Dalton."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "A Lei de Pascal é a base dos sistemas hidráulicos aeronáuticos."
  },
  {
    chapterId: 'cap1',
    question: "Qual o valor da pressão atmosférica padrão (ISA) ao nível do mar?",
    options: ["1013,2 hPa ou 29,92 polHg.", "1000 hPa ou 30,00 polHg.", "1113,2 hPa ou 28,92 polHg.", "998,2 hPa ou 29,12 polHg."],
    correctAnswerIndex: 0,
    difficulty: QuizDifficulty.Medio,
    explanation: "A atmosfera padrão define 1013,25 hPa como referência ao nível do mar."
  },

  // CAPÍTULO 2: PRIMEIROS SOCORROS (4 questões)
  {
    chapterId: 'cap2',
    question: "Em caso de queimaduras de 2º grau com bolhas, o socorrista deve:",
    options: ["Furar as bolhas imediatamente.", "Aplicar creme dental.", "Não furar as bolhas e cobrir com gaze úmida.", "Passar manteiga para resfriar."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "Bolhas não devem ser furadas para evitar infecções."
  },
  {
    chapterId: 'cap2',
    question: "A manobra indicada para desobstrução de vias aéreas por corpo estranho (engasgo) é:",
    options: ["Manobra de Valsalva.", "Manobra de Heimlich.", "Manobra de Leopold.", "RCP."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "A manobra de Heimlich utiliza compressões abdominais para expulsar o objeto."
  },
  {
    chapterId: 'cap2',
    question: "O ritmo recomendado de compressões torácicas na RCP para adultos é de:",
    options: ["60 a 80 por minuto.", "100 a 120 por minuto.", "140 a 160 por minuto.", "Exatamente 90 por minuto."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "As diretrizes atuais recomendam compressões rápidas e fortes entre 100-120 bpm."
  },
  {
    chapterId: 'cap2',
    question: "Uma hemorragia onde o sangue jorra em pulsos e tem cor vermelho vivo é classificada como:",
    options: ["Venosa.", "Capilar.", "Arterial.", "Mista."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "O sangue arterial é oxigenado (brilhante) e pulsa conforme o batimento cardíaco."
  },

  // CAPÍTULO 3: DESENHO TÉCNICO (4 questões)
  {
    chapterId: 'cap3',
    question: "A linha composta por traços longos e curtos alternados, usada para indicar o eixo de simetria, é a:",
    options: ["Linha Oculta.", "Linha de Centro.", "Linha de Cota.", "Linha de Ruptura."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "Linhas de centro identificam o meio de círculos ou objetos simétricos."
  },
  {
    chapterId: 'cap3',
    question: "Onde se localizam as informações de escala, data e número do desenho em uma planta?",
    options: ["No Bloco de Revisão.", "Na Lista de Materiais.", "No Bloco de Título.", "Nas Notas Gerais."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "O Bloco de Título (legend) contém a identificação principal do desenho."
  },
  {
    chapterId: 'cap3',
    question: "Um desenho que mostra o objeto como ele aparece aos olhos, similar a uma fotografia, é chamado:",
    options: ["Ortográfico.", "Pictorial.", "Esquemático.", "Diagrama de Bloco."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "Desenhos pictoriais (isométricos, por exemplo) dão uma visão 3D realista."
  },
  {
    chapterId: 'cap3',
    question: "O que indica o zoneamento em um desenho técnico de grande porte?",
    options: ["O material da peça.", "A localização de detalhes usando coordenadas de grade.", "O peso da aeronave.", "A sequência de montagem."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "O zoneamento usa letras e números nas bordas para facilitar a localização de itens."
  },

  // CAPÍTULO 4: FERRAMENTAS (4 questões)
  {
    chapterId: 'cap4',
    question: "Qual ferramenta é usada para medir a folga entre válvulas ou entre contatos elétricos?",
    options: ["Micrômetro.", "Paquímetro.", "Calibre de lâminas (Feeler gauge).", "Régua de aço."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "O calibre de lâminas mede vãos estreitos com precisão."
  },
  {
    chapterId: 'cap4',
    question: "Para apertar um parafuso com um torque específico de 150 lb.pol, utiliza-se um:",
    options: ["Alicate de pressão.", "Torquímetro.", "Cabo de força.", "Arco de velocidade."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "Torquímetros são ferramentas de precisão para aplicar tensão controlada."
  },
  {
    chapterId: 'cap4',
    question: "O ângulo de afiação padrão para a ponta de uma broca de uso geral em metal é de:",
    options: ["45°.", "90°.", "118° (ou 59° de cada lado).", "135°."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "O ângulo de 118 graus é o padrão industrial para furação em aços e metais comuns."
  },
  {
    chapterId: 'cap4',
    question: "Uma lima que possui dentes curvos, ideal para metais macios como o alumínio, é a:",
    options: ["Lima Bastarda.", "Lima Murça.", "Lima Vixen.", "Lima Triangular."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Limas Vixen removem material rapidamente sem empastar em metais macios."
  },

  // CAPÍTULO 5: MANUSEIO DE SOLO (4 questões)
  {
    chapterId: 'cap5',
    question: "Um extintor de CO2 é mais indicado para qual classe de incêndio?",
    options: ["Classe A.", "Classe B e C.", "Classe D apenas.", "Classe A e D."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "O CO2 não conduz eletricidade (C) e abafa líquidos inflamáveis (B)."
  },
  {
    chapterId: 'cap5',
    question: "Antes de dar partida em um motor radial que ficou parado por 2 horas, deve-se girar a hélice para evitar:",
    options: ["Detonação.", "Calço Hidráulico.", "Fogo no carburador.", "Vapor Lock."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "O óleo acumulado nos cilindros inferiores pode causar calço hidráulico e quebrar o motor."
  },
  {
    chapterId: 'cap5',
    question: "Ao rebocar uma aeronave, quem é o responsável final pelo acionamento dos freios em emergência?",
    options: ["O motorista do trator.", "O sinaleiro.", "A pessoa sentada na cabine (brake rider).", "O wing walker."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "Deve haver sempre alguém qualificado nos freios durante o reboque."
  },
  {
    chapterId: 'cap5',
    question: "Qual o procedimento correto se ocorrer fogo no carburador durante a partida?",
    options: ["Desligar tudo e correr.", "Continuar girando o motor para aspirar as chamas.", "Jogar água no motor.", "Fechar a manete de mistura imediatamente."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Manter o motor girando aspira o fogo para dentro dos cilindros, onde ele se extingue."
  },

  // CAPÍTULO 6: QUEROSENE DE AVIAÇÃO (4 questões)
  {
    chapterId: 'cap6',
    question: "O principal risco da presença de água no QAV durante o voo em grandes altitudes é:",
    options: ["Aumento do consumo.", "Corrosão instantânea.", "Formação de cristais de gelo e obstrução de filtros.", "Explosão do tanque."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "A água congela a baixas temperaturas, bloqueando o fluxo de combustível."
  },
  {
    chapterId: 'cap6',
    question: "A diferença básica entre o JET A e o JET A-1 é:",
    options: ["O poder calorífico.", "O ponto de congelamento.", "A cor do corante.", "O teor de enxofre."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "O JET A-1 congela a -47°C, enquanto o JET A congela a -40°C."
  },
  {
    chapterId: 'cap6',
    question: "O teste que determina a temperatura mínima na qual o combustível libera vapores inflamáveis é o:",
    options: ["Ponto de Congelamento.", "Ponto de Fulgor (Flash Point).", "Ponto de Fulgor.", "Viscosidade."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "O Flash Point define a segurança no manuseio quanto à inflamabilidade."
  },
  {
    chapterId: 'cap6',
    question: "Quais microrganismos se proliferam na interface água/combustível nos tanques?",
    options: ["Apenas bactérias.", "Vírus aeronáuticos.", "Fungos e bactérias.", "Algas marinhas."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "O crescimento microbial forma uma 'borra' que causa corrosão e entupimentos."
  },

  // CAPÍTULO 7: PESO E BALANCEAMENTO (4 questões)
  {
    chapterId: 'cap7',
    question: "O plano vertical imaginário do qual todas as distâncias horizontais são medidas é o:",
    options: ["Centro de Gravidade.", "Plano de Referência (Datum).", "Braço médio.", "Eixo lateral."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "O Datum é o ponto zero para cálculos de balanço."
  },
  {
    chapterId: 'cap7',
    question: "Peso x Braço é igual a:",
    options: ["Centro de Gravidade.", "Tara.", "Momento.", "Carga Útil."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "Momento representa a força de rotação em torno do Datum."
  },
  {
    chapterId: 'cap7',
    question: "Ao pesar uma aeronave, o peso dos calços e macacos sobre a balança é chamado de:",
    options: ["Peso Vazio.", "Peso Líquido.", "Tara.", "Carga Residual."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "A tara deve ser subtraída da leitura bruta para obter o peso real."
  },
  {
    chapterId: 'cap7',
    question: "Se o CG de uma aeronave estiver muito à frente do limite permitido, ela terá dificuldade em:",
    options: ["Girar para a decolagem (cabrar).", "Manter a velocidade de cruzeiro.", "Fazer curvas para a esquerda.", "Frear após o pouso."],
    correctAnswerIndex: 0,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Um CG dianteiro torna a aeronave 'nariz pesado', exigindo muita força no profundor."
  },

  // CAPÍTULO 8: SEGURANÇA OPERACIONAL (4 questões)
  {
    chapterId: 'cap8',
    question: "O órgão brasileiro responsável pela investigação de acidentes aeronáuticos é o:",
    options: ["ANAC.", "CENIPA.", "DECEA.", "INFRAERO."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "O CENIPA gere o SIPAER e investiga ocorrências para prevenção."
  },
  {
    chapterId: 'cap8',
    question: "O gravador que registra os diálogos e sons da cabine de comando é o:",
    options: ["FDR.", "CVR.", "ELT.", "GPWS."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "Cockpit Voice Recorder (CVR) grava o áudio da tripulação."
  },
  {
    chapterId: 'cap8',
    question: "A filosofia SIPAER afirma que a investigação de acidentes visa:",
    // Fix: Removed duplicate properties 'options' and 'correctAnswerIndex'
    options: ["Punição dos envolvidos.", "Prevenção de novas ocorrências.", "Atribuição de culpa criminal.", "Apenas estatística."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "A investigação aeronáutica não busca culpa, mas fatores contribuintes para evitar repetição."
  },
  {
    chapterId: 'cap8',
    question: "Qual fator humano é frequentemente citado como contribuinte para erros de manutenção?",
    options: ["Excesso de sono.", "Fadiga e pressão de tempo.", "Falta de ferramentas digitais.", "Uso de manuais impressos."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "Fadiga, estresse e pressões externas são grandes vilões da segurança."
  },

  // CAPÍTULO 9: TUBULAÇÕES E CONEXÕES (4 questões)
  {
    chapterId: 'cap9',
    question: "O ângulo de flangeamento (flare) padrão para conexões aeronáuticas AN é de:",
    options: ["35°.", "37°.", "45°.", "90°."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "O padrão AN usa 37 graus; o padrão automotivo usa 45."
  },
  {
    chapterId: 'cap9',
    question: "Uma linha de fluido identificada com a cor AZUL e AMARELO refere-se ao sistema de:",
    options: ["Combustível.", "Óleo.", "Hidráulico.", "Oxigênio."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "A combinação azul/amarelo com círculos (ou círculos pretos) indica Hidráulico."
  },
  {
    chapterId: 'cap9',
    question: "Mangueiras de teflon são preferidas em áreas de alta temperatura por sua:",
    options: ["Baixa resistência química.", "Alta resistência ao calor e durabilidade.", "Facilidade de dobrar manualmente.", "Baixo custo."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "O teflon suporta calor extremo e quase todos os químicos aeronáuticos."
  },
  {
    chapterId: 'cap9',
    question: "Ao instalar uma mangueira flexível, deve-se deixar uma folga de:",
    options: ["0%.", "5% a 8% do comprimento.", "Exatamente 20%.", "Sempre 2 polegadas."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "A folga permite que a mangueira contraia sob pressão sem romper."
  },

  // CAPÍTULO 10: REGULAMENTOS (4 questões)
  {
    chapterId: 'cap10',
    question: "Qual a idade mínima para requerer a licença de MMA?",
    options: ["16 anos.", "18 anos.", "21 anos.", "Sem limite de idade."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "Conforme o RBAC 65, a idade mínima é 18 anos."
  },
  {
    chapterId: 'cap10',
    question: "O titular de licença deve efetuar seu recadastramento junto à ANAC a cada:",
    options: ["Ano.", "2 anos.", "3 anos.", "5 anos."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "O recadastramento trienal é obrigatório para manter a licença ativa."
  },
  {
    chapterId: 'cap10',
    question: "As três habilitações de MMA previstas são:",
    options: ["Motor, Asa e Rádio.", "Célula, GMP e Aviônicos.", "Fuselagem, Turbina e Elétrica.", "Civil, Militar e Agrícola."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "CEL (Célula), GMP (Grupo Motopropulsor) e AVI (Aviônicos)."
  },
  {
    chapterId: 'cap10',
    question: "Para uma licença ser válida, o MMA deve ter exercido a função por pelo menos ___ meses nos últimos 24 meses.",
    options: ["3 meses.", "6 meses.", "12 meses.", "18 meses."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "A experiência recente exige 6 meses de trabalho nos últimos 2 anos."
  },

  // CAPÍTULO 11: ELETRICIDADE (4 questões)
  {
    chapterId: 'cap11',
    question: "A unidade de medida da resistência elétrica é o:",
    options: ["Volt.", "Ampère.", "Ohm.", "Watt."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "O Ohm (Ω) mede a oposição ao fluxo de elétrons."
  },
  {
    chapterId: 'cap11',
    question: "Em um circuito em SÉRIE com duas lâmpadas, se uma queimar:",
    options: ["A outra brilha mais.", "A outra também apaga.", "Nada acontece com a outra.", "O disjuntor desarma."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "No circuito série, há apenas um caminho; se interrompido, todo o fluxo para."
  },
  {
    chapterId: 'cap11',
    question: "Qual instrumento mede a densidade do eletrólito em baterias de chumbo-ácido?",
    options: ["Voltímetro.", "Densímetro (Hidrômetro).", "Amperímetro.", "Multímetro."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "A densidade indica o estado de carga da bateria de chumbo-ácido."
  },
  {
    chapterId: 'cap11',
    question: "De acordo com a Lei de Ohm, se a Voltagem aumenta e a Resistência é mantida constante, a Corrente:",
    options: ["Diminui.", "Aumenta.", "Permanece igual.", "Zera."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "I = V/R. Corrente e Voltagem são diretamente proporcionais."
  },

  // CAPÍTULO 12: GERADORES/MOTORES (4 questões)
  {
    chapterId: 'cap12',
    question: "A peça que inverte a corrente no rotor para manter o giro contínuo do motor CC é o:",
    options: ["Estator.", "Coletor (Comutador).", "Solenóide.", "Campo."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "O coletor/comutador converte a alternância interna em corrente contínua externa (ou vice-versa)."
  },
  {
    chapterId: 'cap12',
    question: "Para manter a frequência de 400Hz nos alternadores, usa-se um dispositivo chamado:",
    options: ["Inversor.", "CSD (Constant Speed Drive).", "Retificador.", "Bateria."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "A CSD mantém a rotação do gerador constante, independente da rotação do motor."
  },
  {
    chapterId: 'cap12',
    question: "Um motor de indução CA trifásico funciona baseado em um:",
    options: ["Campo magnético estático.", "Campo magnético rotativo.", "Contato físico das escovas.", "Ímã permanente apenas."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "O estator cria um campo que gira, 'arrastando' o rotor por indução."
  },
  {
    chapterId: 'cap12',
    question: "A função do inversor estático é converter:",
    options: ["CA para CC.", "CC para CA.", "Alta tensão para baixa tensão.", "Mecânica em elétrica."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "Inversores transformam Corrente Contínua em Corrente Alternada."
  },

  // CAPÍTULO 13: SISTEMAS DE COMBUSTÍVEL (4 questões)
  {
    chapterId: 'cap13',
    question: "O sistema de alimentação por gravidade é comum em aeronaves de:",
    options: ["Alta performance.", "Asa alta e baixa potência.", "Motores a jato.", "Caças militares."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "A gravidade exige que o tanque esteja fisicamente acima do motor."
  },
  {
    chapterId: 'cap13',
    question: "Qual o componente que impede o refluxo de combustível nos sistemas?",
    options: ["Válvula Seletora.", "Válvula de Retenção (Check Valve).", "Válvula de Alívio.", "Dreno."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "Válvulas de retenção permitem o fluxo em apenas um sentido."
  },
  {
    chapterId: 'cap13',
    question: "A detonação no motor convencional é causada por:",
    options: ["Mistura muito rica.", "Uso de combustível com baixo número de octanas.", "Velas de ignição novas.", "Filtros limpos."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "Octanagem baixa não resiste à compressão e explode antes do tempo."
  },
  {
    chapterId: 'cap13',
    question: "Tanques 'asa molhada' (integrais) são caracterizados por:",
    options: ["Células de borracha removíveis.", "Serem a própria estrutura da asa selada.", "Tanques externos pendurados.", "Uso apenas de água."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "Tanques integrais economizam peso usando a estrutura da asa para conter o combustível."
  },

  // CAPÍTULO 14: INGLÊS TÉCNICO (4 questões)
  {
    chapterId: 'cap14',
    question: "A tradução técnica correta para 'Wrench' é:",
    options: ["Alicate.", "Chave de fenda.", "Chave de aperto (boca/estrela).", "Martelo."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "Wrench é o termo geral para chaves de aperto."
  },
  {
    chapterId: 'cap14',
    question: "Qual componente da aeronave é o 'Landing Gear'?",
    options: ["Asa.", "Fuselagem.", "Trem de Pouso.", "Empenagem."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "Landing gear é o sistema de apoio para pouso e táxi."
  },
  {
    chapterId: 'cap14',
    question: "O termo 'Stay clear of the intake duct' significa:",
    options: ["Limpe o duto de admissão.", "Fique longe do duto de admissão.", "Abra o duto de admissão.", "Pinte o duto de admissão."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "Aviso de segurança para evitar sucção pelo motor a jato."
  },
  {
    chapterId: 'cap14',
    question: "Em 'The fuel is leaking', a palavra 'leaking' significa:",
    options: ["Acabando.", "Vazando.", "Queimando.", "Fervendo."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "Leak/Leaking refere-se a vazamentos de fluidos."
  }
];