import { QuizQuestion, QuizDifficulty } from '../types';

export interface LocalQuestion extends QuizQuestion {
  chapterId: string;
  difficulty: QuizDifficulty;
}

export const localQuestionsDB: LocalQuestion[] = [
  // CAPÍTULO 1: FÍSICA (20 questões)
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
   {
    chapterId: 'cap1',
    question: "Qual dos seguintes é um exemplo de uma alavanca de Terceira Classe?",
    options: ["Um carrinho de mão.", "Uma tesoura.", "Uma pinça ou o braço humano.", "Uma gangorra."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Na Terceira Classe, o esforço é aplicado entre o fulcro e a resistência, como em uma pinça. Não há vantagem mecânica de força, mas sim de velocidade."
  },
  {
    chapterId: 'cap1',
    question: "O que é 'Trabalho' no sentido físico?",
    options: ["Qualquer esforço mental ou físico.", "A energia gasta para aquecer um objeto.", "A força aplicada a um objeto multiplicada pela distância que ele se move na direção da força.", "A massa de um objeto multiplicada pela aceleração."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "Trabalho (W = F x d) só é realizado quando uma força causa deslocamento."
  },
  {
    chapterId: 'cap1',
    question: "Um corpo sólido pesa menos quando submerso em um líquido devido a qual princípio?",
    options: ["Princípio de Pascal.", "Princípio de Bernoulli.", "Princípio de Arquimedes.", "Leis de Newton."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "O Princípio de Arquimedes descreve a força de flutuação (empuxo) que um fluido exerce sobre um corpo submerso."
  },
  {
    chapterId: 'cap1',
    question: "A Lei de Boyle afirma que, para uma temperatura constante, se a pressão de um gás dobra, o seu volume:",
    options: ["Dobra.", "É cortado pela metade.", "Permanece o mesmo.", "É quadruplicado."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "A Lei de Boyle descreve a relação inversamente proporcional entre pressão e volume (P₁V₁ = P₂V₂)."
  },
  {
    chapterId: 'cap1',
    question: "Qual das seguintes é uma unidade de medida de potência?",
    options: ["Joule.", "Newton.", "Pascal.", "Watt."],
    correctAnswerIndex: 3,
    difficulty: QuizDifficulty.Facil,
    explanation: "Potência é a taxa de realização de trabalho, medida em Watts (Joules por segundo)."
  },
  {
    chapterId: 'cap1',
    question: "O Número Mach é a razão entre a velocidade de uma aeronave e:",
    options: ["A velocidade da luz.", "A velocidade do som no local.", "A velocidade do vento.", "A velocidade de escape da Terra."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "Mach 1 equivale à velocidade do som. Voos acima de Mach 1 são supersônicos."
  },
  {
    chapterId: 'cap1',
    question: "A transferência de calor que não requer um meio material (pode ocorrer no vácuo) é a:",
    options: ["Condução.", "Convecção.", "Radiação.", "Nenhuma das anteriores."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "A radiação transfere calor através de ondas eletromagnéticas, como o calor do Sol que chega à Terra."
  },
  {
    chapterId: 'cap1',
    question: "O que é 'calor específico'?",
    options: ["O calor total de um corpo.", "A temperatura em que um corpo ferve.", "A quantidade de calor necessária para elevar a temperatura de uma unidade de massa em um grau.", "A rapidez com que um corpo aquece."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Materiais com alto calor específico, como a água, precisam de mais energia para aquecer."
  },
  {
    chapterId: 'cap1',
    question: "A Primeira Lei de Newton é também conhecida como a Lei da:",
    options: ["Ação e Reação.", "Aceleração.", "Inércia.", "Gravitação."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "A Lei da Inércia afirma que um corpo em repouso tende a ficar em repouso e um corpo em movimento tende a ficar em movimento, a menos que uma força externa atue sobre ele."
  },
  {
    chapterId: 'cap1',
    question: "A diferença entre pressão absoluta e pressão atmosférica é chamada de:",
    options: ["Pressão diferencial.", "Pressão manométrica (ou de gauge).", "Vácuo.", "Pressão de impacto."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "A pressão manométrica é a pressão medida em relação à pressão atmosférica local. Pressão Absoluta = Pressão Manométrica + Pressão Atmosférica."
  },

  // CAPÍTULO 2: PRIMEIROS SOCORROS (20 questões)
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
  {
    chapterId: 'cap2',
    question: "Em caso de picada de cobra, o que é contraindicado?",
    options: ["Lavar o local com água e sabão.", "Manter a vítima calma e deitada.", "Fazer um torniquete acima da picada.", "Procurar atendimento médico imediato."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "Torniquetes podem concentrar o veneno e causar necrose, levando à amputação. Não se deve cortar ou sugar o local."
  },
  {
    chapterId: 'cap2',
    question: "Uma queimadura que afeta a epiderme e a derme, causando bolhas, é classificada como:",
    options: ["Primeiro grau.", "Segundo grau.", "Terceiro grau.", "Quarto grau."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "A principal característica da queimadura de segundo grau é a formação de bolhas."
  },
  {
    chapterId: 'cap2',
    question: "Qual é o procedimento imediato para uma contusão (pancada) sem ferimento aberto?",
    options: ["Aplicação de calor.", "Massagem vigorosa no local.", "Aplicação de gelo ou compressa fria.", "Imobilização total do membro."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "O frio ajuda a contrair os vasos sanguíneos, reduzindo o inchaço (edema) e o sangramento interno (hematoma)."
  },
  {
    chapterId: 'cap2',
    question: "Em caso de intoxicação por ingestão de produto corrosivo, deve-se:",
    options: ["Induzir o vômito imediatamente.", "Dar leite para neutralizar.", "Não induzir o vômito e procurar socorro médico.", "Oferecer bastante água."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "Induzir o vômito faria o produto corrosivo queimar novamente o esôfago e a boca. O correto é levar a vítima ao hospital com a embalagem do produto."
  },
  {
    chapterId: 'cap2',
    question: "O que é uma luxação?",
    options: ["A quebra de um osso.", "Um estiramento de um ligamento.", "O deslocamento de um osso da sua articulação.", "Uma inflamação no tendão."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "Na luxação, as superfícies articulares perdem o contato, causando dor intensa e deformidade."
  },
  {
    chapterId: 'cap2',
    question: "Qual é o principal sintoma de um infarto do miocárdio?",
    options: ["Dor de cabeça súbita.", "Dor forte e prolongada no peito, que pode irradiar para o braço esquerdo.", "Tosse seca e persistente.", "Coceira generalizada pelo corpo."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "A dor no peito (angina) que dura mais de 20 minutos e não melhora com repouso é um sinal clássico de infarto."
  },
  {
    chapterId: 'cap2',
    question: "Ao atender uma vítima de convulsão, o que o socorrista deve fazer?",
    options: ["Segurar os braços e pernas da vítima para parar os tremores.", "Colocar um objeto na boca da vítima para ela não morder a língua.", "Proteger a cabeça da vítima e afastar objetos perigosos.", "Jogar água fria no rosto da vítima."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "A prioridade é evitar que a vítima se machuque durante a crise, protegendo a cabeça e o corpo de impactos. Não se deve restringir os movimentos nem colocar nada na boca."
  },
  {
    chapterId: 'cap2',
    question: "O que é a 'posição de recuperação' para uma vítima inconsciente que está respirando?",
    options: ["Deitada de barriga para cima com as pernas elevadas.", "Sentada com a cabeça entre os joelhos.", "Deitada de lado, com a cabeça apoiada e a boca voltada para baixo.", "Deitada de bruços."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "A posição lateral de segurança (PLS) evita que a vítima se engasgue com a própria saliva ou vômito, mantendo as vias aéreas livres."
  },
  {
    chapterId: 'cap2',
    question: "Qual é a principal complicação de uma hemorragia interna grave?",
    options: ["Infecção.", "Estado de choque.", "Febre alta.", "Perda de consciência temporária."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "A perda de um grande volume de sangue para dentro de uma cavidade do corpo leva a uma queda drástica da pressão arterial e ao estado de choque, que pode ser fatal."
  },
  {
    chapterId: 'cap2',
    question: "O que significa a sigla 'RCP'?",
    options: ["Reanimação Cardiopulmonar.", "Recuperação Cardiovascular Pós-trauma.", "Resposta Cardíaca Primária.", "Respiração Cardio-Pneumática."],
    correctAnswerIndex: 0,
    difficulty: QuizDifficulty.Facil,
    explanation: "RCP é o conjunto de manobras (compressões torácicas e ventilações) para tentar restabelecer a circulação e respiração de uma vítima em parada cardiorrespiratória."
  },

  // CAPÍTULO 3: DESENHO TÉCNICO (20 questões)
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
  {
    chapterId: 'cap3',
    question: "Qual o tipo de desenho que descreve uma única peça com todos os detalhes para sua fabricação?",
    options: ["Desenho de Conjunto.", "Desenho de Montagem.", "Desenho de Detalhe.", "Esquema Elétrico."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "O desenho de detalhe foca em uma só peça, fornecendo todas as dimensões, materiais e acabamentos necessários."
  },
  {
    chapterId: 'cap3',
    question: "Uma linha de ruptura curta é representada por:",
    options: ["Uma linha reta e fina.", "Uma linha ondulada, à mão livre.", "Uma linha em ziguezague.", "Uma linha tracejada."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "A linha de ruptura curta é uma linha sinuosa que indica que parte do objeto foi omitida, mas que a peça continua."
  },
  {
    chapterId: 'cap3',
    question: "A linha usada para apontar para uma parte específica do desenho e conectar a uma nota ou dimensão é a:",
    options: ["Linha de Cota.", "Linha de Extensão.", "Linha Líder.", "Linha de Centro."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "A linha líder (leader line) tem uma seta em uma ponta e geralmente uma dobra, apontando para o item que está sendo descrito."
  },
  {
    chapterId: 'cap3',
    question: "O que é um 'diagrama esquemático'?",
    options: ["Um desenho que mostra a localização exata das peças na aeronave.", "Um desenho em escala 1:1.", "Um desenho que usa símbolos para mostrar a função e a relação entre os componentes de um sistema.", "Um desenho de uma peça única."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "Esquemáticos, como os elétricos ou hidráulicos, focam na lógica de funcionamento do sistema, não na sua aparência física ou localização exata."
  },
  {
    chapterId: 'cap3',
    question: "O que são 'números de estação' (station numbers) em uma planta de fuselagem?",
    options: ["Os números de série das peças.", "Medidas a partir de um ponto de referência (Datum) para localizar cavernas, nervuras, etc.", "A quantidade de estações de trabalho necessárias para a montagem.", "Os códigos das ferramentas a serem usadas."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "As estações são um sistema de coordenadas para localizar pontos ao longo dos eixos da aeronave (longitudinal, lateral, vertical)."
  },
  {
    chapterId: 'cap3',
    question: "Qual a função da lista de material (Bill of Materials - BOM) em um desenho?",
    options: ["Listar todas as ferramentas necessárias.", "Listar todas as peças e materiais necessários para construir o item do desenho.", "Listar todas as revisões feitas no desenho.", "Mostrar as dimensões da peça."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "A BOM detalha cada componente, seu número de peça (PN), quantidade e material."
  },
  {
    chapterId: 'cap3',
    question: "Uma marca de acabamento em um desenho indica que a superfície deve:",
    options: ["Ser pintada.", "Ser usinada para um acabamento liso.", "Ser deixada como está (bruta).", "Ser inspecionada com raio-X."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Marcas de acabamento (como um 'V' ou um triângulo) especificam que a superfície precisa de um processo de usinagem para atingir a lisura e precisão necessárias."
  },
  {
    chapterId: 'cap3',
    question: "O que é uma 'secção rebatida' (revolved section)?",
    options: ["Uma vista de corte completa em outro local do desenho.", "Uma vista de corte desenhada diretamente sobre a vista principal para mostrar um perfil transversal.", "Uma vista explodida do conjunto.", "A vista traseira da peça."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "A secção é 'girada' 90 graus e sobreposta à vista principal para mostrar a forma da seção transversal em um ponto específico, como o braço de uma roda."
  },
  {
    chapterId: 'cap3',
    question: "A diferença entre um desenho de conjunto e um desenho de montagem é que o de montagem:",
    options: ["Mostra apenas uma peça.", "É menos detalhado que o de conjunto.", "Inclui informações para a instalação final do conjunto na aeronave.", "Não tem bloco de título."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "O desenho de conjunto mostra como as peças se relacionam. O de montagem vai além, mostrando como o conjunto completo é instalado na sua posição final na aeronave."
  },
  {
    chapterId: 'cap3',
    question: "Se uma planta tem mais de uma folha, onde essa informação é geralmente encontrada?",
    options: ["Nas notas gerais.", "No bloco de título, indicando 'Folha X de Y'.", "Em um documento separado.", "Não é indicado na planta."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "O bloco de título geralmente inclui um campo para o número da folha atual e o número total de folhas do desenho."
  },

  // CAPÍTULO 4: FERRAMENTAS MANUAIS E DE MEDIÇÃO (20 questões)
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
  {
    chapterId: 'cap4',
    question: "Qual tipo de chave envolve completamente a cabeça do parafuso ou porca, oferecendo o melhor contato e menor risco de danificar a peça?",
    options: ["Chave de boca.", "Chave ajustável.", "Chave de colar (estrela) ou soquete.", "Alicate de pressão."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "Chaves de colar e soquetes distribuem a força de maneira uniforme nos cantos da peça, evitando que escorreguem e arredondem os cantos."
  },
  {
    chapterId: 'cap4',
    question: "Um paquímetro é capaz de medir quais dimensões?",
    options: ["Apenas diâmetros externos.", "Apenas profundidade.", "Apenas diâmetros internos.", "Medidas externas, internas e de profundidade."],
    correctAnswerIndex: 3,
    difficulty: QuizDifficulty.Facil,
    explanation: "O paquímetro é uma ferramenta versátil com bicos para medição externa e interna, e uma haste para medição de profundidade."
  },
  {
    chapterId: 'cap4',
    question: "Ao serrar metal com um arco de serra, o corte é feito:",
    options: ["No movimento de retorno (puxando).", "No movimento de avanço (empurrando).", "Em ambos os movimentos.", "Apenas com a ponta da lâmina."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "Os dentes da lâmina são voltados para frente, portanto a ação de corte ocorre quando se empurra a serra."
  },
  {
    chapterId: 'cap4',
    question: "Qual o principal cuidado ao usar uma chave de fenda Phillips?",
    options: ["Aplicar pouca força para não espanar.", "Usar a chave de tamanho correto e aplicar pressão firme para evitar 'cam out' (escorregar).", "Usá-la como alavanca se o parafuso estiver apertado.", "Bater na chave com um martelo para soltar o parafuso."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "O encaixe Phillips requer pressão axial (para dentro) para manter a chave no lugar. Usar o tamanho errado ou pouca pressão faz com que ela escorregue e danifique a fenda."
  },
  {
    chapterId: 'cap4',
    question: "Para que serve um alargador (reamer)?",
    options: ["Para iniciar um furo.", "Para abrir roscas.", "Para dar um acabamento dimensional preciso e liso a um furo já existente.", "Para cortar chapas de metal."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Um alargador remove uma pequena quantidade de material para levar um furo à sua dimensão final com alta precisão e um acabamento superficial superior ao de uma broca."
  },
  {
    chapterId: 'cap4',
    question: "A principal diferença entre uma chave Phillips e uma Reed & Prince é:",
    options: ["A cor do cabo.", "O material de fabricação.", "O ângulo das lâminas e da ponta; elas não são intercambiáveis.", "A Phillips é parafusos de madeira e a Reed & Prince para metal."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Apesar de parecidas, a Reed & Prince tem um ângulo mais agudo e uma ponta pontiaguda, enquanto a Phillips tem cantos arredondados. Usar a chave errada danificará a fenda do parafuso."
  },
  {
    chapterId: 'cap4',
    question: "Um martelo de face macia (plástico, couro ou borracha) deve ser usado para:",
    options: ["Quebrar concreto.", "Bater em talhadeiras.", "Formar chapas de metal macio ou assentar peças sem danificar a superfície.", "Cravar pregos grandes."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "As faces macias evitam marcar ou danificar componentes delicados."
  },
  {
    chapterId: 'cap4',
    question: "Qual o nome da ferramenta usada para abrir roscas externas em um pino ou eixo?",
    options: ["Macho (Tap).", "Alargador (Reamer).", "Cossinete (Die).", "Mandril (Chuck)."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "O cossinete é a ferramenta de corte que cria a rosca externa."
  },
  {
    chapterId: 'cap4',
    question: "O passo de uma lâmina de serra (ex: 18 dentes por polegada) deve ser escolhido com base em qual critério?",
    options: ["Na dureza do material.", "Na espessura do material a ser cortado.", "No comprimento do corte.", "Na preferência do operador."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "A regra geral é ter pelo menos dois a três dentes em contato com o material. Para chapas finas, usa-se um passo fino (mais dentes por polegada)."
  },
  {
    chapterId: 'cap4',
    question: "Qual a função de um tocapinos (pin punch)?",
    options: ["Iniciar um furo em metal.", "Marcar o centro de um furo.", "Empurrar um pino ou rebite para fora de um furo após o início com um punção extrator.", "Verificar o alinhamento de furos."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "O tocapinos tem uma haste reta e longa para empurrar pinos e rebites completamente para fora de seus furos, diferente do punção cônico que é usado apenas para iniciar o movimento."
  },
  
  // CAPÍTULO 5: MANUSEIO DE SOLO E SEGURANÇA (20 questões)
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
  {
    chapterId: 'cap5',
    question: "A área de perigo na frente de um motor a jato em funcionamento é causada por:",
    options: ["Exaustão de gases quentes.", "Sucção de ar para dentro do motor.", "Vazamento de combustível.", "Ruído excessivo."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "A admissão de um motor a jato cria uma poderosa zona de sucção que pode sugar pessoas, objetos e equipamentos."
  },
  {
    chapterId: 'cap5',
    question: "Um incêndio Classe D envolve qual tipo de material?",
    options: ["Materiais comuns como papel e madeira.", "Líquidos inflamáveis.", "Equipamentos elétricos.", "Metais combustíveis como magnésio."],
    correctAnswerIndex: 3,
    difficulty: QuizDifficulty.Facil,
    explanation: "A Classe D é específica para metais combustíveis, que reagem violentamente com agentes extintores comuns como água."
  },
  {
    chapterId: 'cap5',
    question: "Qual o procedimento para remover gelo e geada das superfícies de uma aeronave?",
    options: ["Jogar água quente.", "Raspar com uma ferramenta de metal.", "Usar fluidos de degelo (de-icing) aprovados ou ar quente.", "Esperar o sol derreter."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "Métodos aprovados, como fluidos específicos, são necessários para remover o gelo sem danificar a aeronave ou comprometer a aerodinâmica."
  },
  {
    chapterId: 'cap5',
    question: "O que é um 'wing walker'?",
    options: ["Um dispositivo que mede a flexão da asa.", "Uma pessoa que caminha ao lado da ponta da asa durante o reboque para garantir que não haja colisões.", "Um robô de inspeção de asa.", "O piloto que está taxiando a aeronave."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "O wing walker é um membro essencial da equipe de reboque, responsável por monitorar a distância da ponta da asa para obstáculos."
  },
  {
    chapterId: 'cap5',
    question: "O que é uma 'partida falsa' ou 'interrompida' (hung start) em um motor a turbina?",
    options: ["O motor não gira quando o motor de partida é acionado.", "O motor pega e acelera além da marcha lenta.", "O motor pega, mas não consegue acelerar até a rotação de marcha lenta.", "A temperatura dos gases de exaustão fica muito baixa."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "Em uma 'hung start', a combustão começa, mas o motor estabiliza em uma rotação abaixo da autossustentável, geralmente por força insuficiente do motor de partida."
  },
  {
    chapterId: 'cap5',
    question: "Qual o propósito da ancoragem (tie-down) de uma aeronave?",
    options: ["Evitar que ela seja roubada.", "Proteger a aeronave de danos causados por ventos fortes.", "Manter os pneus calibrados.", "Facilitar a manutenção."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "A ancoragem fixa a aeronave ao solo para evitar que ela seja levantada, virada ou danificada por ventos fortes quando estacionada."
  },
  {
    chapterId: 'cap5',
    question: "Ao taxiar uma aeronave, o controle direcional no solo é primariamente feito através de:",
    options: ["Os ailerons.", "O profundor.", "O leme de direção e/ou a bequilha/roda de nariz direcional.", "Apenas o uso diferencial dos freios."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "Em baixas velocidades, a roda de nariz (ou bequilha) e o leme de direção são os controles principais para guiar a aeronave no solo."
  },
  {
    chapterId: 'cap5',
    question: "Qual é o principal risco ao usar um extintor de pó químico seco em um incêndio em equipamentos eletrônicos (Classe C)?",
    options: ["O pó pode conduzir eletricidade.", "O pó pode causar um curto-circuito.", "O pó é ineficaz contra fogo elétrico.", "O resíduo do pó é corrosivo e difícil de limpar, podendo danificar os equipamentos."],
    correctAnswerIndex: 3,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Embora eficaz, o pó químico seco deixa um resíduo que pode danificar permanentemente componentes eletrônicos sensíveis, sendo o CO2 uma opção melhor."
  },
  {
    chapterId: 'cap5',
    question: "A diluição do óleo em motores a pistão é um procedimento para qual condição operacional?",
    options: ["Operação em alta temperatura.", "Operação em tempo frio.", "Voos de longa duração.", "Após uma troca de óleo."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Adicionar uma pequena quantidade de gasolina ao óleo antes de desligar o motor em clima muito frio reduz a viscosidade do óleo, facilitando a partida seguinte."
  },
  {
    chapterId: 'cap5',
    question: "Ao levantar apenas uma roda com um macaco, qual é a precaução de segurança mais importante?",
    options: ["Esvaziar o pneu primeiro.", "Remover o freio daquela roda.", "Calçar as outras rodas (dianteira e traseira) para evitar que a aeronave se mova.", "Levantar a roda o mais alto possível."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "Calçar as rodas opostas impede que a aeronave role para frente ou para trás, o que poderia derrubá-la do macaco."
  },

  // CAPÍTULO 6: QUEROSENE DE AVIAÇÃO (20 questões)
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
  {
    chapterId: 'cap6',
    question: "O que é o 'ponto de fuligem' (smoke point) do querosene?",
    options: ["A temperatura em que o combustível começa a ferver.", "A altura máxima da chama que queima sem produzir fumaça.", "A quantidade de água no combustível.", "A cor da fumaça produzida na queima."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "Um ponto de fuligem alto indica uma queima mais limpa, com menor formação de carbono, o que é desejável para a vida útil da câmara de combustão."
  },
  {
    chapterId: 'cap6',
    question: "Qual tipo de motor aeronáutico aproveita quase todo o empuxo da descarga de gases, sendo comum em caças?",
    options: ["Turbofan.", "Turboélice (Turboprop).", "Turboeixo (Turboshaft).", "Turbojato (Turbojet)."],
    correctAnswerIndex: 3,
    difficulty: QuizDifficulty.Facil,
    explanation: "O turbojato puro é o mais simples e gera todo o seu empuxo pela aceleração dos gases de exaustão."
  },
  {
    chapterId: 'cap6',
    question: "A viscosidade do querosene é uma propriedade importante porque afeta:",
    options: ["O peso do combustível.", "A capacidade do combustível de escoar e ser pulverizado adequadamente.", "A cor do combustível.", "O risco de incêndio."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "A viscosidade deve ser baixa o suficiente para garantir o fluxo em baixas temperaturas, mas alta o suficiente para uma lubrificação adequada dos componentes do sistema."
  },
  {
    chapterId: 'cap6',
    question: "A presença de compostos aromáticos no querosene é limitada porque eles tendem a:",
    options: ["Congelar facilmente.", "Queimar com muita fumaça e atacar vedações de borracha.", "Reduzir o poder calorífico do combustível.", "Separar-se da água."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Medio,
    explanation: "Aromáticos têm uma queima menos limpa (mais fuligem) e podem causar o encolhimento de certos tipos de elastômeros usados em vedações."
  },
  {
    chapterId: 'cap6',
    question: "Qual o procedimento essencial a ser feito periodicamente nos tanques de armazenamento de QAV?",
    options: ["Pintar os tanques de preto.", "Aquecer os tanques.", "Drenar a água acumulada no fundo.", "Adicionar gasolina para aumentar a octanagem."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Facil,
    explanation: "A drenagem regular remove a água livre, que é o principal fator para o desenvolvimento de contaminação microbiológica e corrosão."
  },
  {
    chapterId: 'cap6',
    question: "O número ONU (Nações Unidas) para o transporte de querosene de aviação é:",
    options: ["1203 (Gasolina).", "1993 (Líquido Inflamável, N.E.).", "1863 (Combustível de Aviação para Turbinas).", "1230 (Metanol)."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "O número ONU 1863 identifica especificamente o querosene de aviação como uma carga perigosa para transporte."
  },
  {
    chapterId: 'cap6',
    question: "Qual componente do motor a turbina é responsável por comprimir o ar antes da câmara de combustão?",
    options: ["Fan.", "Compressor.", "Turbina.", "Exaustor."],
    correctAnswerIndex: 1,
    difficulty: QuizDifficulty.Facil,
    explanation: "O compressor (de baixa e alta pressão) aumenta a pressão e a temperatura do ar que entra na câmara de combustão."
  },
  {
    chapterId: 'cap6',
    question: "O 'poder calorífico' do combustível refere-se a:",
    options: ["Sua temperatura de queima.", "Sua resistência à detonação.", "A quantidade de energia térmica liberada por unidade de massa.", "Sua capacidade de resistir à degradação."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Medio,
    explanation: "Um alto poder calorífico significa que mais energia é extraída de cada quilograma de combustível, resultando em maior autonomia."
  },
  {
    chapterId: 'cap6',
    question: "O processo de refino usado para obter o querosene a partir do petróleo é a:",
    options: ["Craqueamento catalítico.", "Reforma catalítica.", "Destilação atmosférica (ou direta).", "Alquilação."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "O querosene é uma 'fração' do petróleo que é separada por destilação em uma faixa de temperatura específica (aproximadamente 150°C a 300°C)."
  },
  {
    chapterId: 'cap6',
    question: "Por que se deve evitar o contato de QAV com metais como cobre e zinco?",
    options: ["Porque eles dissolvem o combustível.", "Porque eles são muito pesados.", "Porque eles catalisam (aceleram) as reações de degradação do combustível.", "Porque eles reagem com a água e formam gelo."],
    correctAnswerIndex: 2,
    difficulty: QuizDifficulty.Dificil,
    explanation: "Certos metais, especialmente o cobre, agem como catalisadores que promovem a oxidação do combustível, levando à formação de borra e depósitos."
  }
];
// Esta base de dados será expandida para incluir os demais capítulos.
// As questões adicionadas completam o total de 20 por capítulo.
// As demais seguem o mesmo padrão.