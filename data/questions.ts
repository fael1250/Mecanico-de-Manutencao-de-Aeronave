import { QuizQuestion, QuizDifficulty } from '../types';

export interface LocalQuestion extends QuizQuestion {
  chapterId: string;
  difficulty: QuizDifficulty;
}

export const localQuestionsDB: LocalQuestion[] = [
  // CAPÍTULO 1: FÍSICA (10 questões)
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
  {
    chapterId: 'cap1',
    question: "O que mede a propriedade da matéria de resistir a mudanças em seu estado de movimento?",
    options: ["Massa.", "Peso.", "Inércia.", "Densidade."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "A inércia é a oposição que um corpo oferece a qualquer mudança em seu estado de movimento."
  },
  {
    chapterId: 'cap1',
    question: "Qual forma de transferência de calor ocorre através do movimento de fluidos (líquidos ou gases)?",
    options: ["Condução.", "Convecção.", "Radiação.", "Advecção."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "A convecção é a transferência de calor pelo movimento de massas de um fluido, como o ar quente subindo."
  },
  {
    chapterId: 'cap1',
    question: "A Lei de Charles descreve a relação entre quais duas propriedades de um gás a pressão constante?",
    options: ["Pressão e Volume.", "Volume e Temperatura.", "Pressão e Temperatura.", "Massa e Volume."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "A Lei de Charles afirma que o volume de um gás é diretamente proporcional à sua temperatura absoluta, mantendo a pressão constante."
  },
  {
    chapterId: 'cap1',
    question: "O que é 'potência' em termos de física?",
    options: ["A capacidade de realizar trabalho.", "A força aplicada sobre uma distância.", "A taxa na qual o trabalho é realizado.", "A energia de um objeto em movimento."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "Potência é a medida da rapidez com que o trabalho é feito, ou a energia é transferida, calculada como Trabalho/Tempo."
  },
  {
    chapterId: 'cap1',
    question: "A velocidade do som no ar é primariamente afetada por qual fator?",
    options: ["Pressão do ar.", "Densidade do ar.", "Umidade do ar.", "Temperatura do ar."],
    correctAnswerIndex: 3,
    difficulty: QuizDifficulty.Dificil,
    explanation: "A velocidade do som depende da elasticidade e densidade do meio, e no ar, a temperatura é o fator que mais influencia essas propriedades."
  },
  {
    chapterId: 'cap1',
    question: "Em um sistema hidráulico, se uma força de 10 lbs é aplicada a um pistão de 2 pol², qual a força resultante em um pistão de 20 pol²?",
    options: ["50 lbs.", "100 lbs.", "200 lbs.", "400 lbs."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Pela Lei de Pascal (P=F/A), a pressão é 10/2 = 5 psi. Essa pressão é transmitida ao pistão maior. A nova força é F = PxA = 5 psi x 20 pol² = 100 lbs."
  },

  // CAPÍTULO 2: PRIMEIROS SOCORROS (10 questões)
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
  {
    chapterId: 'cap2',
    question: "Qual é o primeiro passo ao socorrer uma vítima de choque elétrico?",
    options: ["Iniciar massagem cardíaca.", "Verificar a pulsação da vítima.", "Garantir que a fonte de eletricidade esteja desligada.", "Cobrir a vítima com um cobertor."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "A segurança do socorrista é a prioridade. Antes de tocar na vítima, a fonte de energia deve ser desativada para evitar novos acidentes."
  },
  {
    chapterId: 'cap2',
    question: "Em caso de fratura exposta, o que NÃO se deve fazer?",
    options: ["Imobilizar a área.", "Tentar colocar o osso de volta no lugar.", "Cobrir o ferimento com um pano limpo.", "Controlar o sangramento."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "Tentar realinhar um osso exposto pode causar danos graves a nervos, vasos sanguíneos e tecidos, além de aumentar o risco de infecção."
  },
  {
    chapterId: 'cap2',
    question: "O que caracteriza o estado de choque hipovolêmico?",
    options: ["Uma reação alérgica grave.", "Uma infecção generalizada.", "Falha do coração em bombear sangue.", "Perda significativa de sangue ou fluidos corporais."],
    correctAnswerIndex: 3,
    difficulty: QuizDifficulty.Medio,
    explanation: "O choque hipovolêmico ocorre quando o volume de sangue (ou plasma) no corpo é tão baixo que o coração não consegue bombear o suficiente para os órgãos."
  },
  {
    chapterId: 'cap2',
    question: "Para uma vítima inconsciente, qual é a principal prioridade para evitar asfixia?",
    options: ["Verificar se há fraturas.", "Controlar sangramentos.", "Manter as vias aéreas desobstruídas.", "Manter a vítima aquecida."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "Em uma pessoa inconsciente, a língua pode relaxar e bloquear a garganta, impedindo a respiração. Garantir que as vias aéreas estejam abertas é a prioridade máxima."
  },
  {
    chapterId: 'cap2',
    question: "Qual é a principal diferença no tratamento de uma queimadura química por ácido versus uma por álcali (base)?",
    options: ["Ácidos causam mais dor.", "Álcalis não devem ser lavados com água.", "Queimaduras por álcali requerem lavagem por um período muito mais longo.", "Ácidos são neutralizados com bicarbonato de sódio."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Os álcalis penetram mais profundamente na pele e continuam a causar danos por mais tempo, exigindo uma irrigação contínua e prolongada com água."
  },
  {
    chapterId: 'cap2',
    question: "Na avaliação primária de uma vítima de trauma (ABCDE), o que a letra 'D' representa?",
    options: ["Damage (Dano).", "Danger (Perigo).", "Disability (Incapacidade - avaliação neurológica).", "Deformity (Deformidade)."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "O 'D' no mnemônico ABCDE do trauma representa 'Disability', que é uma rápida avaliação do estado neurológico da vítima (nível de consciência, resposta das pupilas)."
  },

  // CAPÍTULO 3: DESENHO TÉCNICO (10 questões)
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
  {
    chapterId: 'cap3',
    question: "Que tipo de linha é usada para mostrar contornos ou arestas que NÃO são visíveis em uma determinada vista?",
    options: ["Linha de Centro.", "Linha de Contorno.", "Linha Oculta (Tracejada).", "Linha de Ruptura."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "A linha oculta, composta por traços curtos, é usada para representar arestas ou detalhes que existem mas estão escondidos na vista atual."
  },
  {
    chapterId: 'cap3',
    question: "Qual é a finalidade principal de uma vista seccionada (corte)?",
    options: ["Mostrar a aparência externa da peça.", "Mostrar detalhes internos de uma peça.", "Reduzir o tamanho do desenho.", "Indicar o material da peça."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "Uma vista de corte 'fatia' a peça para revelar sua construção interna, que de outra forma estaria oculta."
  },
  {
    chapterId: 'cap3',
    question: "O que significa uma tolerância de ±0.005 polegadas em uma dimensão de 1.500 polegadas?",
    options: ["A peça deve ter exatamente 1.505 polegadas.", "A peça é aceitável entre 1.495 e 1.505 polegadas.", "A peça é aceitável entre 1.500 e 1.505 polegadas.", "A peça deve ter exatamente 1.495 polegadas."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "A tolerância indica a variação permitida. A dimensão pode ser 0.005 a mais (1.505) ou 0.005 a menos (1.495) que o valor nominal."
  },
  {
    chapterId: 'cap3',
    question: "Em uma projeção ortográfica de três vistas, a vista superior está geralmente alinhada verticalmente com qual outra vista?",
    options: ["Vista Direita.", "Vista Esquerda.", "Vista Traseira.", "Vista Frontal."],
    correctAnswerIndex: 3,
    difficulty: QuizDifficulty.Medio,
    explanation: "No padrão de projeção, a vista superior é posicionada diretamente acima da vista frontal, compartilhando a mesma largura."
  },
  {
    chapterId: 'cap3',
    question: "O que é a 'allowance' em desenho técnico?",
    options: ["A variação total permitida em uma única dimensão.", "Um erro cometido durante a fabricação.", "A diferença intencional entre as dimensões de duas peças que se encaixam.", "A escala usada no desenho."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Allowance é o espaço mínimo (ou interferência máxima) projetado entre duas peças para criar um ajuste específico (ex: folgado, com interferência)."
  },
  {
    chapterId: 'cap3',
    question: "Para que serve uma 'linha fantasma' (phantom line)?",
    options: ["Para mostrar contornos invisíveis.", "Para indicar o centro de um círculo.", "Para indicar a posição alternativa de uma peça móvel.", "Para marcar as dimensões de uma peça."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "A linha fantasma (um traço longo e dois curtos) é usada para mostrar posições alternativas de movimento de uma peça, ou para representar peças adjacentes relacionadas."
  },

  // CAPÍTULO 4: FERRAMENTAS (10 questões)
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
  {
    chapterId: 'cap4',
    question: "Qual ferramenta é a mais indicada para cortar arame de freno próximo a um parafuso?",
    options: ["Alicate de bico.", "Tesoura de aviação.", "Alicate de corte diagonal.", "Serra manual."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "O alicate de corte diagonal (ou de corte lateral) é projetado para cortar fios e arames de forma limpa e rente à superfície."
  },
  {
    chapterId: 'cap4',
    question: "Qual a função de um punção de centro?",
    options: ["Marcar uma linha reta em metal.", "Criar uma pequena indentação para guiar a ponta de uma broca.", "Remover rebites danificados.", "Verificar a planicidade de uma superfície."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "O punção de centro cria uma marca precisa e cônica que impede que a broca 'escorregue' no início da furação."
  },
  {
    chapterId: 'cap4',
    question: "Ao usar uma chave de boca, qual é a técnica correta para aplicar força?",
    options: ["Empurrar a chave.", "Puxar a chave em sua direção.", "Bater na chave com um martelo.", "Usar um extensor para aumentar a alavanca."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "Puxar a chave em vez de empurrar dá mais controle e reduz o risco de ferimentos se a chave escapar da porca ou parafuso."
  },
  {
    chapterId: 'cap4',
    question: "Um micrômetro é usado para medir o quê com alta precisão?",
    options: ["Ângulos.", "Torque.", "Comprimento e diâmetro.", "Pressão."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "O micrômetro é um instrumento de medição de precisão para dimensões lineares, como o diâmetro externo de um eixo ou a espessura de uma chapa."
  },
  {
    chapterId: 'cap4',
    question: "Para que serve um escareador (countersink) com ângulo de 100°?",
    options: ["Para fazer um furo perfeitamente redondo.", "Para alargar um furo existente.", "Para criar um rebaixo cônico para a cabeça de um rebite ou parafuso AN.", "Para abrir roscas internas."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "O ângulo de 100° é o padrão para fixadores estruturais de aviação (AN/MS), permitindo que a cabeça fique nivelada com a superfície."
  },
  {
    chapterId: 'cap4',
    question: "O que acontece se um torquímetro não for 'zerado' ou ajustado para a menor configuração após o uso?",
    options: ["Nada, ele está pronto para o próximo uso.", "Ele pode perder a calibração devido à fadiga da mola interna.", "Ele pode enferrujar mais rapidamente.", "A bateria interna pode descarregar."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Manter a mola interna sob tensão constante pode causar sua deformação, levando a leituras de torque imprecisas."
  },

  // CAPÍTULO 5: MANUSEIO DE SOLO (10 questões)
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
  {
    chapterId: 'cap5',
    question: "Qual é a principal razão para posicionar uma aeronave com o nariz para o vento durante a operação do motor em solo?",
    options: ["Para facilitar a comunicação com a torre.", "Para melhor refrigeração do motor.", "Para reduzir o ruído.", "Para economizar combustível."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "O fluxo de ar natural ajuda a refrigerar os motores, especialmente os motores a pistão refrigerados a ar, que dependem desse fluxo para evitar superaquecimento."
  },
  {
    chapterId: 'cap5',
    question: "O que significa o sinal manual de táxi com os braços cruzados acima da cabeça?",
    options: ["Prosseguir.", "Parar.", "Virar à direita.", "Ligar motores."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "Cruzar os braços formando um 'X' acima da cabeça é o sinal universal para parada de emergência ou parada imediata."
  },
  {
    chapterId: 'cap5',
    question: "Ao usar uma fonte de força externa (GPU) para dar partida, quando o cabo deve ser desconectado?",
    options: ["Antes de ligar o motor de partida.", "Imediatamente após a partida do motor.", "Após o gerador da aeronave assumir a carga elétrica.", "A qualquer momento, não faz diferença."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "O cabo da GPU só deve ser removido após a partida e estabilização do motor, quando o sistema de geração da própria aeronave estiver online e alimentando os sistemas."
  },
  {
    chapterId: 'cap5',
    question: "Por que o aterramento da aeronave e do caminhão-tanque é crucial durante o reabastecimento?",
    options: ["Para evitar que a aeronave se mova.", "Para criar um circuito elétrico para as bombas.", "Para equalizar o potencial elétrico e prevenir faíscas de eletricidade estática.", "Para medir a quantidade de combustível transferida."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "O fluxo de combustível pode gerar eletricidade estática. O aterramento dissipa qualquer carga acumulada, evitando uma faísca que poderia inflamar os vapores do combustível."
  },
  {
    chapterId: 'cap5',
    question: "O que é uma 'partida quente' (hot start) em um motor a turbina?",
    options: ["Uma partida normal em um dia quente.", "A temperatura dos gases de exaustão excede os limites durante a partida.", "O motor de partida gira muito rápido.", "O motor pega, mas não acelera para a marcha lenta."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Uma partida quente é uma condição perigosa onde a temperatura na seção da turbina (EGT) sobe rapidamente além do limite máximo, geralmente devido a excesso de combustível."
  },
  {
    chapterId: 'cap5',
    question: "Ao levantar uma aeronave inteira com macacos, por que é essencial operar todos os macacos simultaneamente e de forma nivelada?",
    options: ["Para economizar tempo.", "Para evitar impor tensões estruturais perigosas na fuselagem ou nas asas.", "Para garantir que os pneus não toquem o solo.", "Para facilitar a leitura dos instrumentos."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Levantar a aeronave de forma desigual pode torcer a estrutura, causando danos sérios e caros. A carga deve ser aplicada uniformemente em todos os pontos de macaqueamento."
  },

  // CAPÍTULO 6: QUEROSENE DE AVIAÇÃO (10 questões)
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
  {
    chapterId: 'cap6',
    question: "Qual a cor do querosene de aviação (JET A-1)?",
    options: ["Azul.", "Verde.", "Vermelho.", "Incolor a amarelado (cor de palha)."],
    correctAnswerIndex: 3,
    difficulty: QuizDifficulty.Facil,
    explanation: "Diferente da gasolina de aviação, o querosene não possui corante, tendo uma aparência clara e brilhante quando limpo."
  },
  {
    chapterId: 'cap6',
    question: "Em um motor do tipo TURBOFAN, a maior parte do empuxo é gerada por onde?",
    options: ["Pela exaustão dos gases quentes.", "Pelo fan frontal que desloca um grande volume de ar.", "Pelo compressor de alta pressão.", "Pela queima do combustível na câmara."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "Motores turbofan de alto bypass geram a maior parte de seu empuxo pelo ar que é acelerado pelo grande fan frontal e passa por fora do núcleo do motor."
  },
  {
    chapterId: 'cap6',
    question: "O que a propriedade de 'estabilidade térmica' do querosene garante?",
    options: ["Que ele não congele em alta altitude.", "Que ele resista à degradação e formação de depósitos quando aquecido.", "Que ele queime com uma chama azul.", "Que ele tenha um alto poder calorífico."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "O combustível é usado como fluido de arrefecimento e pode atingir altas temperaturas. A estabilidade térmica evita a formação de borra e verniz no sistema."
  },
  {
    chapterId: 'cap6',
    question: "Por que a massa específica (densidade) do combustível é uma propriedade importante?",
    options: ["Porque afeta a cor do combustível.", "Porque determina o ponto de congelamento.", "Porque está diretamente relacionada à energia contida por unidade de volume.", "Porque afeta a viscosidade."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "A massa específica, juntamente com o poder calorífico, determina a quantidade de energia disponível e, consequentemente, a autonomia de voo da aeronave."
  },
  {
    chapterId: 'cap6',
    question: "A contaminação por enxofre mercaptídico no QAV é controlada para evitar o quê?",
    options: ["Congelamento do combustível.", "Ataque e deterioração de vedações de borracha (elastômeros).", "Formação de gelo.", "Aumento da viscosidade."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "O enxofre mercaptídico é corrosivo para certos tipos de borracha sintética usados em vedações e mangueiras do sistema de combustível."
  },
  {
    chapterId: 'cap6',
    question: "Qual aditivo é frequentemente adicionado ao JET A-1 para prevenir a formação de gelo nos filtros de combustível?",
    options: ["Inibidor de corrosão.", "Aditivo antiestático.", "Inibidor de congelamento (FSII - Fuel System Icing Inhibitor).", "Melhorador de lubricidade."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "O FSII, como o Di-EGME, dissolve-se na água presente no combustível e atua como um anticongelante, evitando que cristais de gelo se formem e bloqueiem o sistema."
  },

  // CAPÍTULO 7: PESO E BALANCEAMENTO (10 questões)
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
  {
    chapterId: 'cap7',
    question: "O que compõe o 'Peso Vazio' (Empty Weight) de uma aeronave?",
    options: ["Apenas a estrutura da aeronave.", "A estrutura, motores, equipamentos fixos, e fluidos não utilizáveis.", "A aeronave sem combustível e sem passageiros.", "O peso máximo de decolagem menos a carga útil."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "O Peso Vazio inclui a aeronave completa com todos os equipamentos instalados, além do óleo e combustível residuais (não drenáveis)."
  },
  {
    chapterId: 'cap7',
    question: "Como se calcula o Centro de Gravidade (CG) de uma aeronave?",
    options: ["Somando todos os pesos e dividindo pelo número de itens.", "Dividindo o Momento Total pelo Peso Total.", "Multiplicando o Peso Total pela distância ao Datum.", "Encontrando o ponto médio da aeronave."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "A fórmula fundamental para encontrar o CG é: CG = Momento Total / Peso Total."
  },
  {
    chapterId: 'cap7',
    question: "Um braço negativo (-) indica que o item está localizado:",
    options: ["Acima do Datum.", "Atrás do Datum.", "À frente do Datum.", "No lado esquerdo da aeronave."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "Por convenção, distâncias medidas à frente (na direção do nariz) do Plano de Referência (Datum) são negativas, e distâncias para trás são positivas."
  },
  {
    chapterId: 'cap7',
    question: "O que é o 'Envelope do CG'?",
    options: ["Uma capa protetora para o CG.", "O movimento do CG durante o voo.", "Um gráfico que mostra os limites de peso e CG permitidos para a operação segura.", "O peso máximo que a aeronave pode carregar."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "O envelope de CG é um gráfico que define a área dentro da qual a combinação de peso total e posição do CG da aeronave deve estar para um voo seguro."
  },
  {
    chapterId: 'cap7',
    question: "Se um item de 50 lbs for removido de uma estação com braço de +200 pol, qual será a mudança no momento total da aeronave?",
    options: ["+10,000 lb.pol.", "-10,000 lb.pol.", "+4 lb.pol.", "-4 lb.pol."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "A remoção de um peso cria um momento oposto. Momento = Peso x Braço = 50 x 200 = 10,000. Como o item foi removido, a mudança no momento é de -10,000 lb.pol."
  },
  {
    chapterId: 'cap7',
    question: "Por que o balanceamento de um helicóptero é mais crítico do que o de um avião?",
    options: ["Porque helicópteros voam mais baixo.", "Porque os limites do CG de um helicóptero são muito mais restritos.", "Porque helicópteros não têm asas.", "Porque o motor do helicóptero é mais sensível."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "A faixa de CG permitida em um helicóptero é extremamente pequena, e qualquer desvio exige uma correção cíclica excessiva, afetando a controlabilidade e a segurança."
  },

  // CAPÍTULO 8: SEGURANÇA OPERACIONAL (10 questões)
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
  {
    chapterId: 'cap8',
    question: "Qual o nome do gravador de voo que registra parâmetros como altitude, velocidade e posição dos controles?",
    options: ["CVR (Cockpit Voice Recorder).", "ELT (Emergency Locator Transmitter).", "FDR (Flight Data Recorder).", "GPS (Global Positioning System)."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "O FDR, ou Gravador de Dados de Voo, é responsável por registrar os diversos parâmetros operacionais da aeronave."
  },
  {
    chapterId: 'cap8',
    question: "O que é um 'incidente grave' na aviação?",
    options: ["Qualquer acidente com fatalidades.", "Um incidente com danos substanciais à aeronave.", "Uma ocorrência em que um acidente quase aconteceu.", "Uma falha de motor durante o táxi."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "Um incidente grave é uma situação com alta probabilidade de ter resultado em acidente, onde a margem de segurança foi criticamente reduzida."
  },
  {
    chapterId: 'cap8',
    question: "No contexto do SGSO (Sistema de Gerenciamento da Segurança Operacional), o que é um 'perigo' (hazard)?",
    options: ["O resultado de um acidente.", "Um erro cometido por um mecânico.", "Uma condição ou objeto com o potencial de causar danos.", "A probabilidade de um acidente ocorrer."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "Perigo é a fonte potencial de dano. Risco é a combinação da probabilidade e da severidade desse dano se concretizar."
  },
  {
    chapterId: 'cap8',
    question: "De acordo com a Pirâmide de Risco de Bird, qual é a relação entre acidentes graves e incidentes menores?",
    options: ["São eventos não relacionados.", "Para cada acidente grave, ocorrem muitos incidentes menores e atos inseguros.", "Incidentes menores sempre levam a acidentes graves.", "Acidentes graves são mais comuns que incidentes menores."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "A pirâmide mostra que na base há um grande número de atos e condições inseguras que, se não corrigidos, podem levar a um número menor de incidentes e, no topo, a um acidente grave."
  },
  {
    chapterId: 'cap8',
    question: "O que é 'Cultura de Segurança Justa' (Just Culture)?",
    options: ["Uma cultura onde ninguém é punido por erros.", "Uma cultura que busca punir todos os erros para evitar repetição.", "Uma cultura que não diferencia erro de violação intencional.", "Uma cultura onde não se pune o erro honesto, mas não se tolera a negligência ou violação intencional."],
    correctAnswerIndex: 3,
    difficulty: QuizDifficulty.Dificil,
    explanation: "A Cultura Justa incentiva o reporte de erros sem medo de punição, permitindo aprender com eles, mas mantém a responsabilização por atos de negligência grosseira ou violações deliberadas."
  },
  {
    chapterId: 'cap8',
    question: "Qual dos 'Doze Sujos' (Dirty Dozen) da manutenção se refere a ignorar ou desviar-se de procedimentos estabelecidos?",
    options: ["Fadiga.", "Complacência.", "Falta de Normas.", "Pressão."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "'Falta de Normas' (Lack of Norms/Procedures) ou não seguir os procedimentos é um dos 12 principais fatores humanos que contribuem para erros na manutenção aeronáutica."
  },

  // CAPÍTULO 9: TUBULAÇÕES E CONEXÕES (10 questões)
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
  {
    chapterId: 'cap9',
    question: "Qual o material mais comum para tubulações rígidas em sistemas de combustível e óleo de baixa pressão?",
    options: ["Aço resistente à corrosão.", "Cobre.", "Liga de alumínio.", "Titânio."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "Ligas de alumínio como a 5052-O são amplamente utilizadas por sua leveza, maleabilidade e resistência à corrosão."
  },
  {
    chapterId: 'cap9',
    question: "Para que serve a 'linha de identificação' (lay line) em uma mangueira flexível?",
    options: ["Para indicar o diâmetro da mangueira.", "Para mostrar a data de fabricação.", "Para verificar se a mangueira foi instalada sem torção.", "Para indicar a pressão máxima de operação."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "A lay line é uma linha contínua impressa ao longo da mangueira. Se a linha estiver torcida após a instalação, a mangueira foi montada incorretamente."
  },
  {
    chapterId: 'cap9',
    question: "Uma conexão sem flange do tipo MS (Military Standard) veda através de qual princípio?",
    options: ["De um anel de vedação (O-ring).", "Do aperto de um flange no cone da conexão.", "De uma luva (sleeve) que 'morde' a superfície do tubo.", "De uma pasta selante aplicada na rosca."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "Ao apertar a porca, a luva interna é comprimida contra o tubo, e sua borda afiada cria um sulco que forma a vedação."
  },
  {
    chapterId: 'cap9',
    question: "Qual é a principal desvantagem de se usar tubulação de cobre em aeronaves?",
    options: ["Seu alto peso.", "Sua baixa resistência à corrosão.", "Sua tendência à fadiga e rachaduras por vibração.", "Sua dificuldade de ser dobrada."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "O cobre endurece com o trabalho e a vibração, tornando-se quebradiço e propenso a falhas, por isso foi substituído por ligas de alumínio e aço."
  },
  {
    chapterId: 'cap9',
    question: "Um arranhão em uma tubulação de alumínio é aceitável para reparo se sua profundidade não exceder:",
    options: ["5% da espessura da parede.", "10% da espessura da parede.", "25% da espessura da parede.", "Arranhões nunca são reparáveis."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Arranhões ou cortes com menos de 10% da espessura da parede podem ser polidos, desde que não estejam na 'raiz' (parte interna) de uma curva."
  },
  {
    chapterId: 'cap9',
    question: "O que é um acoplamento de desconexão rápida auto-selante?",
    options: ["Uma conexão que se aperta sozinha.", "Uma conexão que permite a remoção rápida da linha sem perda de fluido ou entrada de ar.", "Uma conexão que não requer ferramentas para ser montada.", "Uma conexão de uso único que deve ser descartada após o uso."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Este tipo de acoplamento possui válvulas internas que fecham automaticamente quando as duas metades são separadas, selando o sistema."
  },

  // CAPÍTULO 10: REGULAMENTOS (10 questões)
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
  {
    chapterId: 'cap10',
    question: "Qual documento emitido pela ANAC formaliza a certificação de um profissional da aviação civil?",
    options: ["Certificado de Conclusão de Curso.", "Habilitação.", "Licença.", "Carteira de Trabalho."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "A licença é o documento oficial que atesta a qualificação do titular para exercer funções específicas na aviação."
  },
  {
    chapterId: 'cap10',
    question: "Um MMA com habilitação em Célula (CEL) pode aprovar o retorno ao serviço de um motor após uma grande revisão?",
    options: ["Sim, se tiver experiência.", "Não, esta é uma prerrogativa da habilitação GMP.", "Sim, mas apenas em aeronaves pequenas.", "Apenas se supervisionado por um engenheiro."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "As prerrogativas são específicas para cada habilitação. Serviços em motores e hélices são da competência de um MMA com habilitação em Grupo Motopropulsor (GMP)."
  },
  {
    chapterId: 'cap10',
    question: "Qual o prazo de experiência prática exigido para a obtenção de uma única habilitação de MMA?",
    options: ["12 meses.", "18 meses.", "24 meses.", "30 meses."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "O RBAC 65 exige um mínimo de 18 meses de experiência prática para uma habilitação, ou 30 meses para duas ou mais habilitações concomitantes."
  },
  {
    chapterId: 'cap10',
    question: "Se um candidato for pego colando em um exame teórico da ANAC, qual é a consequência?",
    options: ["Ele pode refazer o exame no dia seguinte.", "Ele recebe uma advertência por escrito.", "Ele fica impedido de obter qualquer licença por 1 ano.", "Sua nota é zerada, mas ele pode se inscrever novamente em 30 dias."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "A seção 65.18 do RBAC é clara: qualquer conduta não autorizada resulta na anulação do exame e na proibição de obter licença ou habilitação por um período de 12 meses."
  },
  {
    chapterId: 'cap10',
    question: "Um MMA pode executar um serviço de manutenção para o qual não possui o manual técnico atualizado?",
    options: ["Sim, se ele já fez o serviço antes.", "Sim, se a aeronave não for de transporte público.", "Não, o uso de documentação técnica aplicável e atualizada é obrigatório.", "Apenas se for uma emergência."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "A regulamentação exige que toda manutenção seja executada de acordo com os manuais do fabricante ou outros dados técnicos aprovados, que devem estar atualizados."
  },
  {
    chapterId: 'cap10',
    question: "Um mecânico que não cumpre o requisito de experiência recente (6 meses nos últimos 24) pode voltar a exercer suas prerrogativas como?",
    options: ["Ele perde a licença permanentemente.", "Ele deve refazer todos os exames da ANAC.", "Ele pode trabalhar sob supervisão de outro MMA qualificado ou realizar um curso de atualização.", "Ele deve apenas comunicar à ANAC que está voltando à ativa."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "O RBAC prevê que a experiência recente pode ser restabelecida através de trabalho supervisionado, treinamento adicional ou aprovação em novo exame prático."
  },

  // CAPÍTULO 11: ELETRICIDADE (10 questões)
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
  {
    chapterId: 'cap11',
    question: "O que a unidade 'Ampère-hora' (Ah) de uma bateria mede?",
    options: ["A voltagem da bateria.", "A potência máxima da bateria.", "A capacidade de armazenamento de energia da bateria.", "A resistência interna da bateria."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "Ampère-hora é uma medida da capacidade da bateria, indicando quanta corrente ela pode fornecer ao longo do tempo (ex: 100 Ah = 10A por 10h)."
  },
  {
    chapterId: 'cap11',
    question: "Em um circuito PARALELO, qual grandeza elétrica é a mesma para todos os componentes?",
    options: ["A corrente.", "A resistência.", "A potência.", "A voltagem."],
    correctAnswerIndex: 3,
    difficulty: QuizDifficulty.Facil,
    explanation: "Em um circuito paralelo, todos os ramos estão conectados aos mesmos dois pontos, portanto, a diferença de potencial (voltagem) é a mesma em todos eles."
  },
  {
    chapterId: 'cap11',
    question: "Qual componente elétrico armazena energia em um campo elétrico?",
    options: ["Resistor.", "Indutor.", "Capacitor.", "Diodo."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "Um capacitor armazena carga elétrica entre duas placas condutoras separadas por um material dielétrico."
  },
  {
    chapterId: 'cap11',
    question: "A frequência da corrente alternada (CA) é medida em qual unidade?",
    options: ["Volts.", "Watts.", "Ohms.", "Hertz (Hz)."],
    correctAnswerIndex: 3,
    difficulty: QuizDifficulty.Medio,
    explanation: "Hertz representa o número de ciclos (ondas completas) que a corrente alternada completa por segundo. A aviação comumente usa 400 Hz."
  },
  {
    chapterId: 'cap11',
    question: "O que é 'impedância' (Z) em um circuito CA?",
    options: ["A resistência pura do circuito.", "A oposição ao fluxo de corrente causada apenas por indutores.", "A oposição total ao fluxo de corrente, combinando resistência e reatância.", "A frequência na qual o circuito opera."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Impedância é a 'resistência' total em um circuito CA, que inclui a resistência ôhmica e as reatâncias indutiva e capacitiva."
  },
  {
    chapterId: 'cap11',
    question: "Qual a função de um retificador em um sistema elétrico?",
    options: ["Converter CA em CC.", "Converter CC em CA.", "Aumentar a voltagem.", "Diminuir a frequência."],
    correctAnswerIndex: 0,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Um retificador, geralmente composto por diodos, permite que a corrente flua em apenas uma direção, convertendo a corrente alternada em corrente contínua pulsante."
  },

  // CAPÍTULO 12: GERADORES/MOTORES (10 questões)
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
  {
    chapterId: 'cap12',
    question: "Qual é a função principal de um gerador em uma aeronave?",
    options: ["Armazenar energia elétrica.", "Transformar energia mecânica em energia elétrica.", "Dar partida no motor.", "Regular a voltagem da bateria."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "O gerador, acionado pelo motor, é a principal fonte de energia elétrica da aeronave durante o voo."
  },
  {
    chapterId: 'cap12',
    question: "Qual tipo de motor CC oferece o maior torque de partida?",
    options: ["Motor em paralelo (Shunt).", "Motor de ímã permanente.", "Motor em série.", "Motor misto (Compound)."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "No motor em série, a corrente total passa tanto pelo campo quanto pelo rotor, resultando em um campo magnético muito forte e, consequentemente, um altíssimo torque inicial."
  },
  {
    chapterId: 'cap12',
    question: "O que é a 'reação do induzido' em um gerador CC?",
    options: ["A força que o gerador exerce no motor.", "A distorção do campo magnético principal causada pela corrente no rotor.", "A voltagem gerada pelo induzido.", "O superaquecimento do induzido."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "A corrente que flui no induzido cria seu próprio campo magnético, que se opõe e distorce o campo principal, podendo causar faíscas nas escovas."
  },
  {
    chapterId: 'cap12',
    question: "Em um alternador (gerador CA) de aeronave, qual parte geralmente gira e qual é estacionária?",
    options: ["O induzido gira, o campo é estacionário.", "O campo gira, o induzido (estator) é estacionário.", "Ambos giram.", "Ambos são estacionários."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "É mais fácil e seguro extrair a alta potência gerada de um estator fixo do que de um rotor girando através de escovas e anéis coletores."
  },
  {
    chapterId: 'cap12',
    question: "Qual a função da Força Contra-Eletromotriz (FCEM) em um motor CC?",
    options: ["Ajudar o motor a dar partida.", "Aumentar o torque do motor.", "Limitar a corrente que flui para o rotor.", "Reverter a direção de rotação do motor."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "À medida que o motor gira, ele também atua como um gerador, criando uma voltagem oposta (FCEM) que se subtrai da voltagem aplicada, limitando a corrente no rotor."
  },
  {
    chapterId: 'cap12',
    question: "Por que um motor de indução 'gaiola de esquilo' não pode atingir a velocidade síncrona?",
    options: ["Porque ele não tem torque suficiente.", "Porque se atingisse a velocidade síncrona, não haveria movimento relativo para induzir corrente no rotor.", "Por causa do atrito dos rolamentos.", "Porque a voltagem de alimentação é muito baixa."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "O motor funciona pela indução de corrente no rotor, que depende do movimento relativo (deslizamento) entre o campo girante do estator e as barras do rotor."
  },

  // CAPÍTULO 13: SISTEMAS DE COMBUSTÍVEL (10 questões)
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
  {
    chapterId: 'cap13',
    question: "Qual a função da bomba de recalque (booster pump) em um sistema de combustível?",
    options: ["Medir a quantidade de combustível.", "Filtrar o combustível.", "Fornecer pressão positiva de combustível para a bomba principal do motor.", "Aquecer o combustível."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "A bomba de recalque, geralmente submersa no tanque, previne a cavitação (calço de vapor) na bomba do motor e auxilia na partida."
  },
  {
    chapterId: 'cap13',
    question: "O que indica a cor azul na gasolina de aviação (AVGAS)?",
    options: ["Que é combustível para jatos.", "O grau 100LL (baixo chumbo).", "O grau 80/87.", "Que contém aditivo anticongelante."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "A cor é um método de identificação. A AVGAS 100LL (Low Lead) é tingida de azul."
  },
  {
    chapterId: 'cap13',
    question: "Para que serve a válvula de alimentação cruzada (crossfeed) em uma aeronave multimotor?",
    options: ["Para misturar combustível de tanques diferentes.", "Para permitir que qualquer motor seja alimentado por qualquer tanque.", "Para ejetar combustível em uma emergência.", "Para ventilar os tanques de combustível."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "O sistema de crossfeed aumenta a segurança e a flexibilidade, permitindo balancear o combustível ou alimentar um motor a partir do tanque da asa oposta."
  },
  {
    chapterId: 'cap13',
    question: "Por que é recomendado reabastecer os tanques da aeronave após o último voo do dia?",
    options: ["Porque o combustível é mais barato à noite.", "Para deixar a aeronave mais pesada e segura contra o vento.", "Para reduzir o espaço de ar no tanque e minimizar a condensação de água.", "Para garantir que o motor pegue mais fácil no dia seguinte."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "Um tanque cheio tem menos espaço para ar úmido, que pode se condensar e formar água no combustível à medida que a temperatura cai durante a noite."
  },
  {
    chapterId: 'cap13',
    question: "O indicador de quantidade de combustível do tipo capacitivo mede o combustível por:",
    options: ["Volume, usando uma boia.", "Pressão no fundo do tanque.", "Massa (peso), medindo a constante dielétrica.", "Fluxo, usando uma turbina."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Este sistema usa placas de capacitor no tanque. Como o combustível e o ar têm constantes dielétricas diferentes, o sistema mede a capacitância total, que é proporcional à massa de combustível."
  },
  {
    chapterId: 'cap13',
    question: "O que é 'calço de vapor' (vapor lock) no sistema de combustível?",
    options: ["Congelamento do combustível na linha.", "Formação de bolhas de vapor de combustível na linha, interrompendo o fluxo.", "Entupimento do filtro de combustível.", "Pressão excessiva no sistema."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Ocorre quando o combustível líquido se vaporiza devido ao calor e à baixa pressão, criando bolhas que a bomba não consegue bombear, causando falha do motor."
  },

  // CAPÍTULO 14: INGLÊS TÉCNICO (10 questões)
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
  },
  {
    chapterId: 'cap14',
    question: "A palavra 'Torque' em um manual de manutenção se refere a:",
    options: ["Velocidade de rotação.", "Uma força de torção ou rotação aplicada.", "Temperatura do motor.", "Pressão hidráulica."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "Torque é a medida da força que causa a rotação, crucial para o aperto correto de parafusos e porcas."
  },
  {
    chapterId: 'cap14',
    question: "O que significa 'Trailing Edge' em uma asa?",
    options: ["A ponta da asa.", "A parte frontal da asa.", "A borda traseira da asa.", "A raiz da asa."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "'Trailing Edge' é o bordo de fuga, a parte posterior do aerofólio onde o fluxo de ar superior e inferior se encontram."
  },
  {
    chapterId: 'cap14',
    question: "A instrução 'Inspect for cracks' significa:",
    options: ["Inspecionar por corrosão.", "Inspecionar por vazamentos.", "Inspecionar por rachaduras.", "Inspecionar por desgaste."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "'Cracks' são fissuras ou rachaduras no material, um tipo de dano estrutural crítico a ser verificado."
  },
  {
    chapterId: 'cap14',
    question: "O que é um 'Circuit Breaker'?",
    options: ["Um fusível.", "Um interruptor.", "Um disjuntor.", "Uma bateria."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "É um dispositivo de proteção que interrompe o circuito em caso de sobrecarga, e que pode ser rearmado (reset)."
  },
  {
    chapterId: 'cap14',
    question: "A sigla 'FWD' encontrada em um diagrama de aeronave significa:",
    options: ["Backward (Para trás).", "Downward (Para baixo).", "Forward (Para a frente).", "Firewall (Parede de fogo)."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "'FWD' é a abreviação de 'Forward', indicando a direção do nariz da aeronave."
  },
  {
    chapterId: 'cap14',
    question: "Se um manual diz 'Ensure the surface is free of foreign objects', o que 'foreign objects' significa?",
    options: ["Objetos de outros países.", "Objetos estranhos, detritos ou contaminantes.", "Ferramentas específicas.", "Manuais de referência."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "'Foreign Object Debris/Damage' (FOD) é um termo crucial em aviação, referindo-se a qualquer objeto que não pertence à área e pode causar danos."
  },
  
  // CAPÍTULO 15: MATERIAIS DE AVIAÇÃO E PROCESSOS (10 questões)
  {
    chapterId: 'cap15',
    question: "Qual é a principal finalidade de um contrapino (cotter pin) em um parafuso com porca castelo?",
    options: ["Aumentar o torque de aperto.", "Atuar como arruela de pressão.", "Impedir que a porca se solte por vibração.", "Proteger a rosca do parafuso."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "O contrapino é um dispositivo de segurança que passa através do furo no parafuso e das ranhuras da porca castelo, travando-a mecanicamente para que ela não gire e se solte."
  },
  {
    chapterId: 'cap15',
    question: "Uma diferença fundamental entre um parafuso padrão AN e um parafuso NAS é que o parafuso NAS geralmente possui:",
    options: ["Uma cabeça maior para mais torque.", "Tolerâncias de fabricação mais estreitas (ajuste apertado).", "Material de menor resistência.", "Apenas rosca do tipo grossa (NC)."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "Parafusos NAS são fabricados com tolerâncias mais rigorosas (close tolerance), garantindo um ajuste mais preciso no furo, ideal para aplicações estruturais críticas que exigem transferência de cisalhamento sem folgas."
  },
  {
    chapterId: 'cap15',
    question: "A corrosão galvânica (de metal diferente) ocorre quando:",
    options: ["Dois metais idênticos estão em contato na presença de um ácido.", "Um único metal é exposto a diferentes concentrações de oxigênio.", "Dois metais diferentes estão em contato elétrico na presença de um eletrólito.", "O metal sofre fadiga devido a tensões repetidas."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "A corrosão galvânica é um processo eletroquímico que ocorre quando dois metais dissimilares são acoplados eletricamente em um eletrólito, fazendo com que o metal mais anódico (menos nobre) se corroa preferencialmente."
  },
  {
    chapterId: 'cap15',
    question: "Anéis de vedação (O-Rings) são primariamente usados para qual tipo de selagem?",
    options: ["Vedação estática entre superfícies planas, como juntas.", "Vedação dinâmica entre partes móveis, como em atuadores hidráulicos.", "Atuar como arruelas de pressão em parafusos.", "Isolamento elétrico em conexões."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "O-Rings são projetados para serem comprimidos em um sulco, criando uma vedação eficaz entre componentes com movimento relativo (vedação dinâmica), como pistões em cilindros, embora também possam ser usados em algumas aplicações estáticas."
  },
  {
    chapterId: 'cap15',
    question: "Para que serve uma arruela lisa (plain washer) sob uma porca?",
    options: ["Para travar a porca e impedir que ela se solte.", "Para distribuir a carga da porca sobre uma área maior e proteger a superfície.", "Para aumentar o atrito.", "Para isolar eletricamente a porca."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "A arruela lisa evita que a porca danifique a superfície do material e distribui a força de aperto de forma mais uniforme."
  },
  {
    chapterId: 'cap15',
    question: "Qual o propósito do processo de tratamento térmico chamado 'recozimento' (annealing)?",
    options: ["Aumentar a dureza e a resistência do metal.", "Aliviar tensões internas e tornar o metal mais macio e dúctil.", "Criar uma camada superficial resistente ao desgaste.", "Limpar a superfície do metal."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "O recozimento envolve aquecer e depois resfriar lentamente o metal para remover os efeitos do endurecimento por trabalho, tornando-o mais fácil de ser conformado."
  },
  {
    chapterId: 'cap15',
    question: "Qual tipo de porca utiliza uma inserção de nylon ou fibra para criar atrito na rosca e evitar o afrouxamento?",
    options: ["Porca castelo (Castle Nut).", "Porca de cisalhamento (Shear Nut).", "Porca autotravante (Self-locking Nut).", "Porca borboleta (Wing Nut)."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "Porcas autotravantes, como a 'Elastic Stop Nut', possuem um anel de material não metálico que se deforma ao ser rosqueado, travando a porca no lugar."
  },
  {
    chapterId: 'cap15',
    question: "Em uma designação de parafuso AN, como AN4-12A, o que o número '4' e o número '12' representam?",
    options: ["'4' é o comprimento em polegadas, '12' é o diâmetro.", "'4' é o diâmetro em 1/16 de polegada, '12' é o comprimento em 1/8 de polegada.", "'4' é o tipo de material, '12' é o tipo de rosca.", "'4' é o diâmetro em 1/8 de polegada, '12' é o comprimento em 1/16 de polegada."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "No padrão AN, o primeiro número indica o diâmetro em 16 avos de polegada (AN4 = 4/16\" ou 1/4\"). O segundo número indica o comprimento da haste em 8 avos de polegada (12 = 12/8\" ou 1 e 1/2\")."
  },
  {
    chapterId: 'cap15',
    question: "Qual método de teste de dureza é mais comum para verificar a condição de ligas de alumínio em campo?",
    options: ["Teste Brinell.", "Teste Rockwell.", "Teste Barcol.", "Teste de impacto Charpy."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "O testador de dureza Barcol é um dispositivo portátil que pressiona uma ponta no material, sendo ideal para testes rápidos em metais macios como alumínio e suas ligas."
  },
  {
    chapterId: 'cap15',
    question: "A corrosão intergranular em ligas de alumínio é particularmente perigosa porque:",
    options: ["É facilmente visível na superfície como uma mancha branca.", "Ocorre apenas em altas temperaturas.", "Ataca os contornos dos grãos do metal, podendo reduzir drasticamente a resistência sem danos superficiais óbvios.", "Afeta apenas parafusos e porcas."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Este tipo de corrosão age internamente, seguindo os limites dos grãos metálicos, e pode não ser aparente na superfície até que a falha estrutural seja iminente."
  }
];