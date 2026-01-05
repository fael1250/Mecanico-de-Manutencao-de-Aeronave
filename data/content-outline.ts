// Este arquivo é uma versão leve de content.ts, contendo apenas a estrutura
// para uso em funções serverless, evitando carregar grandes quantidades de dados na memória.

interface SubTopicOutline {
  id: string;
  title: string;
}

interface TopicOutline {
  id: string;
  title: string;
  subTopics: SubTopicOutline[];
}

export interface ChapterOutline {
  id: string;
  title: string;
  topics: TopicOutline[];
}

export const basicModuleOutline: ChapterOutline[] = [
  {
    "id": "cap1",
    "title": "CAPÍTULO 1: FÍSICA",
    "topics": [
      { "id": "intro", "title": "INTRODUÇÃO", "subTopics": [{ "id": "intro-1", "title": "Ciência da Matéria e Energia" }] },
      { "id": "materia", "title": "MATÉRIA", "subTopics": [{ "id": "materia-1", "title": "Características da matéria" }, { "id": "materia-2", "title": "Sistema de medida" }] },
      { "id": "fluidos", "title": "FLUIDOS", "subTopics": [{ "id": "fluidos-1", "title": "Generalidades" }, { "id": "fluidos-2", "title": "Densidade e Gravidade Específica" }, { "id": "fluidos-3", "title": "Flutuabilidade (Princípio de Arquimedes)" }] },
      { "id": "temperatura", "title": "TEMPERATURA", "subTopics": [{ "id": "temperatura-1", "title": "Generalidades" }] },
      { "id": "pressao", "title": "PRESSÃO", "subTopics": [{ "id": "pressao-1", "title": "Pressão Atmosférica" }, { "id": "pressao-2", "title": "Pressão Absoluta" }] },
      { "id": "compressibilidade", "title": "COMPRESSIBILIDADE E EXPANSÃO DE GASES", "subTopics": [{ "id": "compress-1", "title": "Teoria Cinética dos Gases" }, { "id": "compress-2", "title": "Lei de Boyle" }, { "id": "compress-3", "title": "Lei de Charles" }, { "id": "compress-4", "title": "Lei Geral dos Gases" }] },
      { "id": "transmissao_forcas", "title": "TRANSMISSÃO DE FORÇAS ATRAVÉS DE FLUIDOS", "subTopics": [{ "id": "pascal-1", "title": "Lei de Pascal" }, { "id": "pascal-2", "title": "Cálculo de Força, Pressão e Área" }, { "id": "pascal-3", "title": "Multiplicação de Forças" }] },
      { "id": "atmosfera", "title": "ATMOSFERA", "subTopics": [{ "id": "atm-1", "title": "Composição da Atmosfera" }, { "id": "atm-2", "title": "Atmosfera Padrão (ISA)" }, { "id": "atm-3", "title": "Pressão, Densidade e Temperatura" }, { "id": "atm-4", "title": "Umidade" }] },
      { "id": "bernoulli", "title": "PRINCÍPIO DE BERNOULLI", "subTopics": [{ "id": "bernoulli-1", "title": "Geral" }, { "id": "bernoulli-2", "title": "Como uma Asa de Aeronave Reage com a Atmosfera" }] },
      { "id": "maquinas", "title": "MÁQUINAS", "subTopics": [{ "id": "maquinas-1", "title": "A Alavanca" }, { "id": "maquinas-2", "title": "A Polia" }, { "id": "maquinas-3", "title": "O Plano Inclinado" }] },
      { "id": "trabalho_potencia_energia", "title": "TRABALHO, POTÊNCIA E ENERGIA", "subTopics": [{ "id": "tpe-1", "title": "Trabalho" }, { "id": "tpe-2", "title": "Potência" }, { "id": "tpe-3", "title": "Energia" }, { "id": "tpe-4", "title": "Atrito" }] },
      { "id": "movimento", "title": "MOVIMENTO DOS CORPOS", "subTopics": [{ "id": "mov-1", "title": "Velocidade e Aceleração" }, { "id": "mov-2", "title": "Leis de Newton para o Movimento" }, { "id": "mov-3", "title": "Movimento Circular" }] },
      { "id": "calor", "title": "CALOR", "subTopics": [{ "id": "calor-1", "title": "Transferência de Calor" }, { "id": "calor-2", "title": "Calor Específico" }, { "id": "calor-3", "title": "Expansão Térmica" }] },
      { "id": "som", "title": "SOM", "subTopics": [{ "id": "som-1", "title": "Velocidade do Som" }, { "id": "som-2", "title": "Número Mach" }, { "id": "som-3", "title": "Frequência e Intensidade" }] }
    ]
  },
  {
    "id": "cap2",
    "title": "CAPÍTULO 2: PRIMEIROS SOCORROS",
    "topics": [
        { "id": "ps-intro", "title": "Introdução aos Primeiros Socorros", "subTopics": [{ "id": "ps-intro-1", "title": "Definição e Procedimentos Iniciais" }, { "id": "ps-intro-2", "title": "Omissão de Socorro" }] },
        { "id": "ps-queimaduras", "title": "Queimaduras", "subTopics": [{ "id": "ps-queimaduras-1", "title": "Primeiros Socorros em Caso de Queimaduras" }, { "id": "ps-queimaduras-2", "title": "Tipos e Causas de Queimaduras" }, { "id": "ps-queimaduras-3", "title": "Classificação por Grau e Tratamento" }, { "id": "ps-queimaduras-4", "title": "O que NÃO fazer e Prevenção" }] },
        { "id": "ps-intoxicacoes", "title": "Intoxicações e Envenenamentos", "subTopics": [{ "id": "ps-intox-1", "title": "Primeiros Socorros em Casos de Intoxicações" }, { "id": "ps-intox-2", "title": "Procedimentos para Venenos Ingeridos" }, { "id": "ps-intox-3", "title": "Procedimentos para Venenos Inalados" }] },
        { "id": "ps-emergencias-biologicas", "title": "Emergências Biológicas", "subTopics": [{ "id": "ps-bio-1", "title": "Picada de Serpente Peçonhenta (Ofidismo)" }] },
        { "id": "ps-emergencias-respiratorias", "title": "Emergências Respiratórias e Cardíacas", "subTopics": [{ "id": "ps-resp-1", "title": "Engasgo e Asfixia" }, { "id": "ps-resp-2", "title": "Angina e Infarto do Miocárdio" }, { "id": "ps-resp-3", "title": "Parada Respiratória" }, { "id": "ps-resp-4", "title": "Parada Cardíaca (PC)" }, { "id": "ps-resp-5", "title": "Afogamento" }, { "id": "ps-resp-6", "title": "Distúrbios e Doenças Respiratórias" }, { "id": "ps-resp-7", "title": "Dispnéia" }] },
        { "id": "ps-traumas", "title": "Traumas e Lesões", "subTopics": [{ "id": "ps-trauma-1", "title": "Traumatologia: Contusões e Ferimentos" }, { "id": "ps-trauma-2", "title": "Fraturas, Luxações e Entorses" }, { "id": "ps-trauma-3", "title": "Lesões na Coluna" }, { "id": "ps-trauma-4", "title": "Hemorragias" }, { "id": "ps-trauma-5", "title": "Aplicação de Torniquete" }] },
        { "id": "ps-condicoes-gerais", "title": "Condições Clínicas Gerais", "subTopics": [{ "id": "ps-geral-1", "title": "Desmaios, Síncope e Vertigem" }, { "id": "ps-geral-2", "title": "Convulsões e Crises Epiléticas" }, { "id": "ps-geral-3", "title": "Estado de Choque" }, { "id": "ps-geral-4", "title": "Alterações de Pressão e Glicemia" }, { "id": "ps-geral-5", "title": "Dor Abdominal, Vômito e Diarreia" }, { "id": "ps-geral-6", "title": "Reações Alérgicas" }] },
        { "id": "ps-corpos-estranhos", "title": "Corpos Estranhos", "subTopics": [{ "id": "ps-ce-1", "title": "Olhos, Ouvidos e Nariz" }] },
        { "id": "ps-alteracao-conduta", "title": "Alterações de Conduta", "subTopics": [{ "id": "ps-ac-1", "title": "Alcoolismo e Uso de Drogas" }] },
        { "id": "ps-parto", "title": "Parto a Bordo", "subTopics": [{ "id": "ps-parto-1", "title": "Noções Gerais sobre Gestação e Parto" }, { "id": "ps-parto-2", "title": "Trabalho de Parto e Cuidados" }, { "id": "ps-parto-3", "title": "Assistência ao Parto e ao Recém-Nascido" }, { "id": "ps-parto-4", "title": "Cuidados com Gestantes a Bordo" }] },
        { "id": "ps-acidente-aereo", "title": "Acidente Aeronáutico", "subTopics": [{ "id": "ps-aa-1", "title": "Atendimento aos Sobreviventes" }] }
    ]
  },
  {
    "id": "cap3",
    "title": "CAPÍTULO 3: DESENHO TÉCNICO DE AERONAVES",
    "topics": [
        { "id": "dt-fundamentos", "title": "Fundamentos do Desenho Técnico", "subTopics": [{ "id": "dt-fundamentos-1", "title": "Introdução e Plantas" }, { "id": "dt-fundamentos-2", "title": "Tipos de Desenhos de Trabalho" }, { "id": "dt-fundamentos-3", "title": "Bloco de Títulos e Numeração" }, { "id": "dt-fundamentos-4", "title": "Lista de Materiais e Bloco de Revisão" }] },
        { "id": "dt-elementos", "title": "Elementos do Desenho", "subTopics": [{ "id": "dt-elementos-1", "title": "O Significado das Linhas" }, { "id": "dt-elementos-2", "title": "Tolerâncias e Marcas de Acabamento" }, { "id": "dt-elementos-3", "title": "Zoneamento e Números de Estação" }, { "id": "dt-elementos-4", "title": "Notas e Referências" }] },
        { "id": "dt-vistas", "title": "Vistas e Projeções", "subTopics": [{ "id": "dt-vistas-1", "title": "Desenhos Pictoriais e Projeção Ortográfica" }, { "id": "dt-vistas-2", "title": "Vista de Detalhes" }, { "id": "dt-vistas-3", "title": "Vistas Seccionadas" }] },
        { "id": "dt-interpretacao", "title": "Interpretação e Diagramas", "subTopics": [{ "id": "dt-interpretacao-1", "title": "Interpretando Desenhos" }, { "id": "dt-interpretacao-2", "title": "Diagramas de Instalação" }, { "id": "dt-interpretacao-3", "title": "Diagramas Esquemáticos" }] },
        { "id": "dt-simbolos", "title": "Esboços e Símbolos", "subTopics": [{ "id": "dt-simbolos-1", "title": "Esboços de Desenho" }, { "id": "dt-simbolos-2", "title": "Símbolos de Materiais e Formas" }, { "id": "dt-simbolos-3", "title": "Símbolos Elétricos" }] },
        { "id": "dt-manuseio", "title": "Manuseio e Ferramentas", "subTopics": [{ "id": "dt-manuseio-1", "title": "Cuidados e Uso de Desenhos" }, { "id": "dt-manuseio-2", "title": "Cuidados com Instrumentos de Desenho" }, { "id": "dt-manuseio-3", "title": "Microfilme" }] }
    ]
  },
  {
    "id": "cap4",
    "title": "CAPÍTULO 4: FERRAMENTAS MANUAIS E DE MEDIÇÃO",
    "topics": [
        { "id": "fm-geral", "title": "Ferramentas de Uso Geral", "subTopics": [{ "id": "fm-geral-1", "title": "Martelos e Macetes" }, { "id": "fm-geral-2", "title": "Chaves de Fenda" }, { "id": "fm-geral-3", "title": "Alicates" }, { "id": "fm-geral-4", "title": "Punções" }] },
        { "id": "fm-aperto", "title": "Chaves de Aperto", "subTopics": [{ "id": "fm-aperto-1", "title": "Chaves de Boca, Colar e Combinada" }, { "id": "fm-aperto-2", "title": "Chaves Soquete" }, { "id": "fm-aperto-3", "title": "Chaves Especiais" }] },
        { "id": "fm-corte", "title": "Ferramentas de Corte de Metal", "subTopics": [{ "id": "fm-corte-1", "title": "Tesouras Manuais" }, { "id": "fm-corte-2", "title": "Arcos de Serra" }, { "id": "fm-corte-3", "title": "Talhadeiras" }] },
        { "id": "fm-limas", "title": "Limas e Técnicas de Limagem", "subTopics": [{ "id": "fm-limas-1", "title": "Tipos e Cortes de Limas" }, { "id": "fm-limas-2", "title": "Uso e Cuidados com Limas" }] },
        { "id": "fm-furacao", "title": "Furação e Acabamento de Furos", "subTopics": [{ "id": "fm-furacao-1", "title": "Máquinas de Furar e Brocas" }, { "id": "fm-furacao-2", "title": "Alargadores" }, { "id": "fm-furacao-3", "title": "Escareadores" }] },
        { "id": "fm-medicao", "title": "Instrumentos de Medição", "subTopics": [{ "id": "fm-medicao-1", "title": "Réguas e Esquadro Combinado" }, { "id": "fm-medicao-2", "title": "Riscador e Compassos" }, { "id": "fm-medicao-3", "title": "Paquímetro (Calibre Vernier)" }, { "id": "fm-medicao-4", "title": "Micrômetro" }] },
        { "id": "fm-roscas", "title": "Ferramentas para Abrir Roscas", "subTopics": [{ "id": "fm-roscas-1", "title": "Machos, Cossinetes e Desandadores" }] }
    ]
  },
  {
    "id": "cap5",
    "title": "CAPÍTULO 5: MANUSEIOS DE SOLO, SEGURANÇA E EQUIPAMENTOS DE APOIO",
    "topics": [
        { "id": "ms-partida", "title": "Manuseio e Partida de Motores", "subTopics": [{ "id": "ms-partida-1", "title": "Procedimentos Gerais Antes da Partida" }, { "id": "ms-partida-2", "title": "Partida de Motores Convencionais" }, { "id": "ms-partida-3", "title": "Procedimento de Partida (Convencional)" }, { "id": "ms-partida-4", "title": "Partida Manual" }, { "id": "ms-partida-5", "title": "Operação Após a Partida" }] },
        { "id": "ms-turbina", "title": "Operação de Motores a Turbina", "subTopics": [{ "id": "ms-turbina-1", "title": "Partida de Motores Turboélice" }, { "id": "ms-turbina-2", "title": "Partida de Motores Turbojato" }, { "id": "ms-turbina-3", "title": "Partidas Problemáticas em Turbojato" }] },
        { "id": "ms-apoio", "title": "Equipamentos de Apoio em Solo", "subTopics": [{ "id": "ms-apoio-1", "title": "Força Elétrica (GPU)" }, { "id": "ms-apoio-2", "title": "Força Hidráulica e Ar Condicionado" }, { "id": "ms-apoio-3", "title": "Fontes de Ar para Partida e Pré-Lubrificação" }] },
        { "id": "ms-seguranca", "title": "Abastecimento e Segurança Contra Incêndio", "subTopics": [{ "id": "ms-seguranca-1", "title": "Segurança no Abastecimento" }, { "id": "ms-seguranca-2", "title": "Reabastecimento por Pressão" }, { "id": "ms-seguranca-3", "title": "Classificação de Incêndios" }, { "id": "ms-seguranca-4", "title": "Agentes Extintores" }] },
        { "id": "ms-manuseio", "title": "Manuseio e Movimentação em Solo", "subTopics": [{ "id": "ms-manuseio-1", "title": "Reboque de Aeronaves" }, { "id": "ms-manuseio-2", "title": "Equipe e Procedimentos de Reboque" }, { "id": "ms-manuseio-3", "title": "Taxiando a Aeronave" }, { "id": "ms-manuseio-4", "title": "Ancoragem de Aeronaves" }] },
        { "id": "ms-levantamento", "title": "Levantamento da Aeronave (Macacos)", "subTopics": [{ "id": "ms-levantamento-1", "title": "Segurança no Levantamento" }, { "id": "ms-levantamento-2", "title": "Procedimento de Levantamento Completo" }, { "id": "ms-levantamento-3", "title": "Levantando Apenas uma Roda" }] },
        { "id": "ms-tempo-frio", "title": "Operações em Tempo Frio", "subTopics": [{ "id": "ms-tempo-frio-1", "title": "Proteção e Preparação" }, { "id": "ms-tempo-frio-2", "title": "Remoção de Gelo e Neve (De-Icing)" }, { "id": "ms-tempo-frio-3", "title": "Procedimentos Adicionais em Frio" }] }
    ]
  },
  {
    "id": "cap6",
    "title": "CAPÍTULO 6: QUEROSENE DE AVIAÇÃO",
    "topics": [
        { "id": "qav-definicao", "title": "DEFINIÇÃO E COMPOSIÇÃO", "subTopics": [{ "id": "qav-definicao-1", "title": "Composição e Características" }] },
        { "id": "qav-tipos", "title": "TIPOS DE QUEROSENE DE AVIAÇÃO", "subTopics": [{ "id": "qav-tipos-1", "title": "Querosene Civil e Militar" }] },
        { "id": "qav-motores", "title": "MOTORES AERONÁUTICOS", "subTopics": [{ "id": "qav-motores-1", "title": "Tipos de Motores" }, { "id": "qav-motores-2", "title": "Funcionamento Básico" }] },
        { "id": "qav-qualidade", "title": "REQUISITOS DE QUALIDADE", "subTopics": [{ "id": "qav-qualidade-1", "title": "Visão Geral" }, { "id": "qav-qualidade-2", "title": "Escoamento a Baixa Temperatura" }, { "id": "qav-qualidade-3", "title": "Estabilidade Térmica" }, { "id": "qav-qualidade-4", "title": "Combustão" }, { "id": "qav-qualidade-5", "title": "Corrosividade e Dissolução de Elastômeros" }, { "id": "qav-qualidade-6", "title": "Água e Segurança" }] },
        { "id": "qav-producao", "title": "PRODUÇÃO", "subTopics": [{ "id": "qav-producao-1", "title": "Processo de Refino" }] },
        { "id": "qav-manutencao", "title": "CUIDADOS PARA A MANUTENÇÃO DA QUALIDADE", "subTopics": [{ "id": "qav-manutencao-1", "title": "Cuidados no Armazenamento" }] },
        { "id": "qav-seguranca", "title": "ASPECTOS DE SEGURANÇA, MEIO AMBIENTE E SAÚDE", "subTopics": [{ "id": "qav-seguranca-1", "title": "Manuseio e Transporte" }] }
    ]
  },
  {
    "id": "cap7",
    "title": "CAPÍTULO 7: PESO E BALANCEAMENTO DE AERONAVES",
    "topics": [
        { "id": "pb-teoria", "title": "TEORIA E TERMINOLOGIA", "subTopics": [{ "id": "pb-teoria-1", "title": "Introdução ao Peso e Balanceamento" }, { "id": "pb-teoria-2", "title": "Teoria da Alavanca" }, { "id": "pb-teoria-3", "title": "Fontes de Dados" }, { "id": "pb-teoria-4", "title": "Plano de Referência" }, { "id": "pb-teoria-5", "title": "Braço e Momento" }, { "id": "pb-teoria-6", "title": "Centro de Gravidade (C.G.)" }] },
        { "id": "pb-definicoes", "title": "DEFINIÇÕES DE PESO E C.G.", "subTopics": [{ "id": "pb-definicoes-1", "title": "Peso Máximo e Peso Vazio" }, { "id": "pb-definicoes-2", "title": "Carga Útil" }, { "id": "pb-definicoes-3", "title": "Centro de Gravidade do Peso Vazio (CGPV)" }, { "id": "pb-definicoes-4", "title": "Passeios do Centro de Gravidade" }, { "id": "pb-definicoes-5", "title": "Corda Aerodinâmica Média (CAM)" }] },
        { "id": "pb-pesagem", "title": "PROCEDIMENTOS DE PESAGEM", "subTopics": [{ "id": "pb-pesagem-1", "title": "Nivelamento e Pontos de Pesagem" }, { "id": "pb-pesagem-2", "title": "Combustível Mínimo e Peso Combustível Zero" }, { "id": "pb-pesagem-3", "title": "Tara e Óleo Total" }, { "id": "pb-pesagem-4", "title": "Preparação da Aeronave para Pesagem" }, { "id": "pb-pesagem-5", "title": "Executando Medições" }] },
        { "id": "pb-calculo", "title": "CÁLCULO DE PESO E BALANCEAMENTO", "subTopics": [{ "id": "pb-calculo-1", "title": "Cômputo do Peso Vazio e C.G." }, { "id": "pb-calculo-2", "title": "Exemplo de Formulário de Pesagem" }] },
        { "id": "pb-extremos", "title": "CONDIÇÕES EXTREMAS E LASTRO", "subTopics": [{ "id": "pb-extremos-1", "title": "Verificação de C.G. Dianteiro (Carga Mínima)" }, { "id": "pb-extremos-2", "title": "Verificação de C.G. Traseiro (Carga Máxima)" }, { "id": "pb-extremos-3", "title": "Instalação e Cálculo de Lastro" }] },
        { "id": "pb-graficos", "title": "MÉTODOS GRÁFICOS", "subTopics": [{ "id": "pb-graficos-1", "title": "Cartas de Carregamento e Envelopes de C.G." }, { "id": "pb-graficos-2", "title": "Exemplo de Uso do Envelope de C.G." }] },
        { "id": "pb-especiais", "title": "EQUIPAMENTOS E CASOS ESPECIAIS", "subTopics": [{ "id": "pb-especiais-1", "title": "Equipamento Eletrônico de Pesagem" }, { "id": "pb-especiais-2", "title": "Peso e Balanceamento de Helicópteros" }] }
    ]
  },
  {
    "id": "cap8",
    "title": "CAPÍTULO 8: SEGURANÇA OPERACIONAL",
    "topics": [
        { "id": "so-intro", "title": "SIPAER E O FATOR HUMANO", "subTopics": [{ "id": "so-intro-1", "title": "CENIPA" }, { "id": "so-intro-2", "title": "Fadiga Humana" }, { "id": "so-intro-3", "title": "Consequências da Fadiga" }] },
        { "id": "so-gravadores", "title": "GRAVADORES DE VOO", "subTopics": [{ "id": "so-gravadores-1", "title": "Origem e Tipos Principais" }, { "id": "so-gravadores-2", "title": "Flight Data Recorder (FDR)" }, { "id": "so-gravadores-3", "title": "Cockpit Voice Recorder (CVR)" }, { "id": "so-gravadores-4", "title": "Cockpit Voice and Data Recorder (CVDR)" }] },
        { "id": "so-sgso", "title": "GERENCIAMENTO DA SEGURANÇA (SGSO)", "subTopics": [{ "id": "so-sgso-1", "title": "Sistema de Gerenciamento (SGSO)" }, { "id": "so-sgso-2", "title": "Processos-Chave do SGSO" }, { "id": "so-sgso-3", "title": "Mecanismos e Indicadores (BAIST)" }] },
        { "id": "so-combustiveis", "title": "COMBUSTÍVEIS E LUBRIFICANTES", "subTopics": [{ "id": "so-combustiveis-1", "title": "Gasolina de Aviação (AvGas)" }, { "id": "so-combustiveis-2", "title": "Querosene de Aviação (QAv)" }, { "id": "so-combustiveis-3", "title": "Lubrificantes de Aviação" }, { "id": "so-combustiveis-4", "title": "Manuseio de Óleo e Graxa" }] },
        { "id": "so-procedimentos", "title": "PROCEDIMENTOS OPERACIONAIS", "subTopics": [{ "id": "so-procedimentos-1", "title": "Procedimentos para Abastecimento" }, { "id": "so-procedimentos-2", "title": "Vazamento de Combustível" }] },
        { "id": "so-planos", "title": "PLANOS E PROGRAMAS DE SEGURANÇA", "subTopics": [{ "id": "so-planos-1", "title": "PSO-BR" }, { "id": "so-planos-2", "title": "PNAVSEC" }, { "id": "so-planos-3", "title": "ANSAC, PSA e PSTA" }] },
        { "id": "so-prevencao", "title": "PREVENÇÃO DE ACIDENTES E INCIDENTES", "subTopics": [{ "id": "so-prevencao-1", "title": "Definições" }, { "id": "so-prevencao-2", "title": "Pirâmides de Risco (Bird e Heinrich)" }, { "id": "so-prevencao-3", "title": "Curva de Bradley e Foco Comportamental" }] },
        { "id": "so-filosofia", "title": "FILOSOFIA E CULTURA DE SEGURANÇA", "subTopics": [{ "id": "so-filosofia-1", "title": "Sistema e Filosofia SIPAER" }, { "id": "so-filosofia-2", "title": "Princípios da Filosofia de Segurança" }, { "id": "so-filosofia-3", "title": "Manutenção e Cultura de Segurança" }] }
    ]
  },
  {
    "id": "cap9",
    "title": "CAPÍTULO 9: TUBULAÇÕES E CONEXÕES",
    "topics": [
        { "id": "tc-intro", "title": "INTRODUÇÃO E MATERIAIS", "subTopics": [{ "id": "tc-intro-1", "title": "Conceitos Gerais e Tipos" }, { "id": "tc-intro-2", "title": "Materiais Metálicos" }, { "id": "tc-intro-3", "title": "Identificação de Materiais" }] },
        { "id": "tc-flexiveis", "title": "TUBULAÇÕES FLEXÍVEIS (MANGUEIRAS)", "subTopics": [{ "id": "tc-flex-1", "title": "Materiais Sintéticos" }, { "id": "tc-flex-2", "title": "Classificação e Tipos" }, { "id": "tc-flex-3", "title": "Identificação e Tamanhos" }] },
        { "id": "tc-conexoes", "title": "CONEXÕES E IDENTIFICAÇÃO DE LINHAS", "subTopics": [{ "id": "tc-conexoes-1", "title": "Identificação das Linhas de Fluido" }, { "id": "tc-conexoes-2", "title": "Tipos de Conexões" }, { "id": "tc-conexoes-3", "title": "Conexões sem Flange e Desconexão Rápida" }] },
        { "id": "tc-formacao", "title": "FORMAÇÃO E REPARO DE TUBOS", "subTopics": [{ "id": "tc-formacao-1", "title": "Corte e Dobragem" }, { "id": "tc-formacao-2", "title": "Flangeamento" }, { "id": "tc-formacao-3", "title": "Frisamento e Pré-montagem sem Flange" }, { "id": "tc-formacao-4", "title": "Reparos em Linhas Metálicas" }] },
        { "id": "tc-instalacao", "title": "INSTALAÇÃO E MANUTENÇÃO", "subTopics": [{ "id": "tc-instalacao-1", "title": "Instalação de Tubulações Rígidas" }, { "id": "tc-instalacao-2", "title": "Instalação de Tubulações Flexíveis" }, { "id": "tc-instalacao-3", "title": "Teste Após Montagem" }, { "id": "tc-instalacao-4", "title": "Suportes e Braçadeiras" }] }
    ]
  },
  {
    "id": "cap10",
    "title": "CAPÍTULO 10: REGULAMENTOS (RBAC 65)",
    "topics": [
        { "id": "rbac-geral", "title": "DISPOSIÇÕES GERAIS", "subTopics": [{ "id": "rbac-geral-1", "title": "Aplicabilidade e Definições (65.1 e 65.2)" }, { "id": "rbac-geral-2", "title": "Condutas Não Autorizadas em Exames (65.18)" }, { "id": "rbac-geral-3", "title": "Falsificação e Alteração de Registros (65.20)" }] },
        { "id": "rbac-licenca", "title": "LICENÇA E HABILITAÇÕES DE MMA", "subTopics": [{ "id": "rbac-licenca-1", "title": "Pré-requisitos para Concessão (65.71)" }, { "id": "rbac-licenca-2", "title": "Validade e Recadastramento (65.72)" }, { "id": "rbac-licenca-3", "title": "Habilitações (65.73)" }] },
        { "id": "rbac-requisitos", "title": "CONHECIMENTOS E EXPERIÊNCIA", "subTopics": [{ "id": "rbac-requisitos-1", "title": "Conhecimentos Teóricos (65.75)" }, { "id": "rbac-requisitos-2", "title": "Experiência Prática (65.77)" }, { "id": "rbac-requisitos-3", "title": "Habilidade (Exame Prático) (65.79)" }, { "id": "rbac-requisitos-4", "title": "Experiência Recente (65.83)" }] },
        { "id": "rbac-prerrogativas", "title": "PRERROGATIVAS E LIMITAÇÕES", "subTopics": [{ "id": "rbac-prerrogativas-1", "title": "Prerrogativas e Limitações Gerais (65.81)" }, { "id": "rbac-prerrogativas-2", "title": "Prerrogativas Adicionais - Célula (65.85)" }, { "id": "rbac-prerrogativas-3", "title": "Prerrogativas Adicionais - GMP (65.87)" }, { "id": "rbac-prerrogativas-4", "title": "Prerrogativas Adicionais - Aviônico (65.88)" }] }
    ]
  },
  {
    "id": "cap11",
    "title": "CAPÍTULO 11: ELETRICIDADE BÁSICA",
    "topics": [
        { "id": "eb-fundamentos", "title": "Fundamentos da Matéria e Eletricidade Estática", "subTopics": [{ "id": "eb-fund-1", "title": "Matéria, Molécula e Átomo" }, { "id": "eb-fund-2", "title": "Estrutura Atômica e Carga Elétrica" }, { "id": "eb-fund-3", "title": "Íons e Eletricidade Estática" }, { "id": "eb-fund-4", "title": "Campo Eletrostático e Carga por Indução" }, { "id": "eb-fund-5", "title": "Distribuição de Carga e Aplicações" }] },
        { "id": "eb-cc-fem", "title": "Corrente Contínua: FEM, Fluxo e Resistência", "subTopics": [{ "id": "eb-cc-1", "title": "Força Eletromotriz (FEM) e Voltagem" }, { "id": "eb-cc-2", "title": "Fluxo de Corrente (Ampère)" }, { "id": "eb-cc-3", "title": "Resistência (Ohm)" }, { "id": "eb-cc-4", "title": "Fatores que Afetam a Resistência" }] },
        { "id": "eb-circuitos-basicos", "title": "Componentes e Circuitos Básicos", "subTopics": [{ "id": "eb-cb-1", "title": "Componentes e Símbolos de um Circuito" }, { "id": "eb-cb-2", "title": "Fontes de Força: Baterias e Geradores" }, { "id": "eb-cb-3", "title": "Dispositivos de Proteção e Controle" }, { "id": "eb-cb-4", "title": "Resistores e Código de Cores" }] },
        { "id": "eb-ohm-potencia", "title": "Lei de Ohm e Potência Elétrica", "subTopics": [{ "id": "eb-op-1", "title": "Lei de Ohm" }, { "id": "eb-op-2", "title": "Potência Elétrica (Watt)" }] },
        { "id": "eb-circuitos-cc", "title": "Circuitos de Corrente Contínua", "subTopics": [{ "id": "eb-cc-1", "title": "Circuitos em Série" }, { "id": "eb-cc-2", "title": "Queda de Voltagem e Leis de Kirchhoff" }, { "id": "eb-cc-3", "title": "Circuitos em Paralelo" }, { "id": "eb-cc-4", "title": "Circuitos Série-Paralelo" }] },
        { "id": "eb-ca-principios", "title": "Corrente Alternada (C.A.) e Componentes", "subTopics": [{ "id": "eb-ca-1", "title": "Geração e Características da C.A." }, { "id": "eb-ca-2", "title": "Valores de C.A." }, { "id": "eb-ca-3", "title": "Indutância e Reatância Indutiva (XL)" }, { "id": "eb-ca-4", "title": "Capacitância e Reatância Capacitiva (XC)" }, { "id": "eb-ca-5", "title": "Impedância e Ressonância" }] },
        { "id": "eb-dispositivos", "title": "Dispositivos de Circuitos e Semicondutores", "subTopics": [{ "id": "eb-dev-1", "title": "Transformadores" }, { "id": "eb-dev-2", "title": "Baterias de Acumuladores" }, { "id": "eb-dev-3", "title": "Retificadores e Filtros" }, { "id": "eb-dev-4", "title": "Transistores" }, { "id": "eb-dev-5", "title": "Instrumentos de Medição" }] }
    ]
  },
  {
    "id": "cap12",
    "title": "CAPÍTULO 12: GERADORES E MOTORES ELÉTRICOS",
    "topics": [
        { "id": "cap12-t1", "title": "GERADORES DE CORRENTE CONTÍNUA (CC)", "subTopics": [{ "id": "cap12-t1-s1", "title": "Teoria de Operação e Gerador Básico" }, { "id": "cap12-t1-s2", "title": "Construção do Gerador CC" }, { "id": "cap12-t1-s3", "title": "Tipos de Excitação (Série, Paralelo, Misto)" }, { "id": "cap12-t1-s4", "title": "Reação do Induzido e Interpolos" }] },
        { "id": "cap12-t2", "title": "REGULAÇÃO E CONTROLE DE GERADORES CC", "subTopics": [{ "id": "cap12-t2-s1", "title": "Reguladores de Voltagem" }, { "id": "cap12-t2-s2", "title": "Regulador de Três Unidades" }, { "id": "cap12-t2-s3", "title": "Operação em Paralelo e Equalização" }, { "id": "cap12-t2-s4", "title": "Manutenção e Pesquisa de Panes em Geradores CC" }] },
        { "id": "cap12-t3", "title": "GERADORES DE CORRENTE ALTERNADA (ALTERNADORES)", "subTopics": [{ "id": "cap12-t3-s1", "title": "Princípios e Tipos" }, { "id": "cap12-t3-s2", "title": "Alternadores Sem Escova e Transmissão de Velocidade Constante (CSD)" }, { "id": "cap12-t3-s3", "title": "Sincronismo, Proteção e Manutenção" }] },
        { "id": "cap12-t4", "title": "INVERSORES", "subTopics": [{ "id": "cap12-t4-s1", "title": "Inversores Rotativos" }, { "id": "cap12-t4-s2", "title": "Inversores Estáticos" }] },
        { "id": "cap12-t5", "title": "MOTORES ELÉTRICOS CC", "subTopics": [{ "id": "cap12-t5-s1", "title": "Princípio de Funcionamento (Torque)" }, { "id": "cap12-t5-s2", "title": "Tipos de Motores CC" }, { "id": "cap12-t5-s3", "title": "Força Contra-Eletromotriz e Controle de Velocidade" }] },
        { "id": "cap12-t6", "title": "MOTORES ELÉTRICOS CA", "subTopics": [{ "id": "cap12-t6-s1", "title": "Motor de Indução" }, { "id": "cap12-t6-s2", "title": "Motores Monofásicos de Partida Automática" }, { "id": "cap12-t6-s3", "title": "Motor Síncrono" }] }
    ]
  },
  {
    "id": "cap13",
    "title": "CAPÍTULO 13: COMBUSTÍVEIS E SISTEMAS DE COMBUSTÍVEL",
    "topics": [
        { "id": "csc-intro", "title": "INTRODUÇÃO AOS COMBUSTÍVEIS", "subTopics": [{ "id": "csc-intro-1", "title": "Definição e Tipos (Sólidos, Gasosos, Líquidos)" }] },
        { "id": "csc-gasolina", "title": "CARACTERÍSTICAS E PROPRIEDADES DA GASOLINA DE AVIAÇÃO", "subTopics": [{ "id": "csc-gasolina-1", "title": "Composição, Volatilidade e Riscos" }, { "id": "csc-gasolina-2", "title": "Detonação, Pré-Ignição e Octanagem" }, { "id": "csc-gasolina-3", "title": "Identificação e Pureza" }] },
        { "id": "csc-turbina", "title": "COMBUSTÍVEIS PARA MOTORES A TURBINA", "subTopics": [{ "id": "csc-turbina-1", "title": "Tipos e Características" }] },
        { "id": "csc-contaminacao", "title": "CONTAMINAÇÃO DO SISTEMA DE COMBUSTÍVEL", "subTopics": [{ "id": "csc-contaminacao-1", "title": "Água, Sedimentos e Partículas Estranhas" }, { "id": "csc-contaminacao-2", "title": "Desenvolvimento Microbial e Detecção" }, { "id": "csc-contaminacao-3", "title": "Controle e Prevenção" }] },
        { "id": "csc-sistemas", "title": "SISTEMAS DE COMBUSTÍVEL DE AERONAVES", "subTopics": [{ "id": "csc-sistemas-1", "title": "Componentes e Tipos de Alimentação" }, { "id": "csc-sistemas-2", "title": "Tanques e Células de Combustível" }, { "id": "csc-sistemas-3", "title": "Filtros e Bombas" }, { "id": "csc-sistemas-4", "title": "Válvulas e Indicadores" }, { "id": "csc-sistemas-5", "title": "Sistemas Multimotores, Reparos e Segurança" }] }
    ]
  },
  {
    "id": "cap14",
    "title": "CAPÍTULO 14: INGLÊS TÉCNICO",
    "topics": [
        { "id": "it-grammar", "title": "REVISÃO BÁSICA DE GRAMÁTICA", "subTopics": [{ "id": "it-grammar-1", "title": "Pronomes Pessoais e Verbo \"To Be\"" }, { "id": "it-grammar-2", "title": "Artigos e Verbos Modais" }, { "id": "it-grammar-3", "title": "Pronomes Demonstrativos e \"WH Questions\"" }, { "id": "it-grammar-4", "title": "Present Continuous & Simple Present" }] },
        { "id": "it-ground-safety", "title": "SEGURANÇA DE SOLO (GROUND SAFETY)", "subTopics": [{ "id": "it-gs-1", "title": "Áreas de Admissão dos Motores a Jato" }, { "id": "it-gs-2", "title": "Áreas de Exaustão dos Motores a Jato" }, { "id": "it-gs-3", "title": "Área ao Redor da Hélice" }, { "id": "it-gs-4", "title": "Ferramentas Elétricas, Ácido Sulfúrico e Material Inflamável" }, { "id": "it-gs-5", "title": "Ruído e Outros Perigos" }] },
        { "id": "it-aircraft-parts", "title": "PARTES DA AERONAVE (AIRCRAFT PARTS)", "subTopics": [{ "id": "it-ap-1", "title": "Fuselagem (The Fuselage)" }, { "id": "it-ap-2", "title": "Asas e Empenagem (The Wings & The Empennage)" }, { "id": "it-ap-3", "title": "Estabilizadores e Superfícies de Comando" }, { "id": "it-ap-4", "title": "Trem de Pouso e Naceles (Landing Gear & Nacelles)" }] },
        { "id": "it-fuel-system", "title": "UNIDADES DO SISTEMA DE COMBUSTÍVEL", "subTopics": [{ "id": "it-fs-1", "title": "Tanques e Bombas Auxiliares" }, { "id": "it-fs-2", "title": "Bomba Principal e Linhas" }, { "id": "it-fs-3", "title": "Válvulas e Medidor de Pressão" }] },
        { "id": "it-vocabulary", "title": "VOCABULÁRIO TÉCNICO ESPECÍFICO", "subTopics": [{ "id": "it-vocab-1", "title": "Fixadores e Dispositivos de Segurança" }, { "id": "it-vocab-2", "title": "Mangueiras, Tubulação e Ferramentas Manuais" }, { "id": "it-vocab-3", "title": "Ferramentas Elétricas e Manuais" }, { "id": "it-vocab-4", "title": "Instrumentos de Medida" }, { "id": "it-vocab-5", "title": "Segurança de Solo e Partes da Aeronave" }, { "id": "it-vocab-6", "title": "Componentes de Motores e Sistemas" }] }
    ]
  },
  {
    "id": "cap15",
    "title": "CAPÍTULO 15: MATERIAIS DE AVIAÇÃO E PROCESSOS",
    "topics": [
        { "id": "map-prendedores", "title": "Prendedores Rosqueados e Identificação", "subTopics": [{ "id": "map-prendedores-1", "title": "Introdução e Tipos de Prendedores" }, { "id": "map-prendedores-2", "title": "Classificação dos Fios de Rosca" }, { "id": "map-prendedores-3", "title": "Identificação dos Materiais de Aviação" }] },
        { "id": "map-parafusos-gerais", "title": "Parafusos de Aviação", "subTopics": [{ "id": "map-parafusos-1", "title": "Parafusos de Uso Geral" }, { "id": "map-parafusos-2", "title": "Parafusos de Tolerância Fechada e de Fixação Interna" }, { "id": "map-parafusos-3", "title": "Identificação e Codificação de Parafusos" }] },
        { "id": "map-parafusos-especiais", "title": "Parafusos Especiais e de Bloqueio", "subTopics": [{ "id": "map-especiais-1", "title": "Parafusos de Forquilha (Clevis) e Olhal" }, { "id": "map-especiais-2", "title": "Jo-Parafuso (Jo-bolt)" }, { "id": "map-especiais-3", "title": "Parafusos de Bloqueio (Lockbolts)" }] },
        { "id": "map-porcas", "title": "Porcas e Arruelas", "subTopics": [{ "id": "map-porcas-1", "title": "Porcas Não Autotravantes" }, { "id": "map-porcas-2", "title": "Porcas Autotravantes e de Mola" }, { "id": "map-arruelas-1", "title": "Arruelas de Aviação" }] },
        { "id": "map-materiais-diversos", "title": "Outros Materiais e Vedações", "subTopics": [{ "id": "map-plasticos-1", "title": "Plásticos e Borrachas" }, { "id": "map-vedadores-1", "title": "Selos e Vedações de Aeronaves" }] },
        { "id": "map-corrosao", "title": "Controle de Corrosão", "subTopics": [{ "id": "map-corrosao-1", "title": "Tipos de Corrosão" }, { "id": "map-corrosao-2", "title": "Agentes Corrosivos e Manutenção Preventiva" }] }
    ]
  }
];
