export interface TechnicalCase {
  slug: string;
  setor: string;
  titulo: string;
  resumoProblema: string;
  resumoResultado: string;
  image: string;
  emBreve: boolean;
  problemaOperacional: string;
  condicaoAplicacao: string;
  caracterizacaoFalha: string;
  reengenhariaAplicada: string;
  solucaoImplementada: string;
  resultadoOperacional: string;
}

export const CASES: TechnicalCase[] = [
  {
    slug: "eixo-transmissao-alta-temperatura",
    setor: "Automotivo",
    titulo: "Eixo de transmissão com falha recorrente em ambiente de alta temperatura",
    resumoProblema:
      "Eixo de transmissão apresentava ruptura por fadiga a cada 3 a 4 meses de operação contínua próximo a fontes de calor do processo.",
    resumoResultado:
      "Eliminação das paradas não programadas associadas ao componente após reengenharia de material, geometria e tratamento térmico.",
    image: "/images/pages/indimg3.png",
    emBreve: true,
    problemaOperacional:
      "A linha de montagem apresentava paradas não programadas recorrentes, em intervalos de aproximadamente 3 a 4 meses, causadas pela ruptura de um eixo de transmissão posicionado próximo a uma fonte de calor do processo produtivo. Cada parada gerava perda de produtividade, retrabalho de troca emergencial e risco de dano a componentes adjacentes do conjunto mecânico.",
    condicaoAplicacao:
      "O eixo opera em regime contínuo, submetido a ciclos de torque variável e temperatura ambiente elevada (acima de 90°C em operação prolongada), em conjunto com vibração proveniente de elementos rotativos próximos. O componente original era fabricado em aço-liga de especificação genérica, sem tratamento térmico específico para a faixa de temperatura de trabalho.",
    caracterizacaoFalha:
      "A análise das peças fraturadas identificou marcas de praia características de fadiga mecânica, com origem concentrada em uma região de transição de diâmetro com raio de concordância insuficiente. A combinação entre concentração de tensão geométrica e degradação das propriedades mecânicas do material em temperatura elevada reduziu significativamente a vida útil em fadiga do componente em relação ao projeto original.",
    reengenhariaAplicada:
      "A reengenharia partiu da revisão completa da geometria na região crítica, com aumento do raio de concordância e redistribuição de massa para reduzir a concentração de tensões. Em paralelo, foi realizada a substituição da especificação de material por uma liga com maior estabilidade mecânica em temperatura, associada a um tratamento térmico de têmpera e revenido dimensionado especificamente para a faixa de operação identificada em campo.",
    solucaoImplementada:
      "O componente reengenheirado foi fabricado com controle dimensional rigoroso nas regiões de transição de diâmetro e nos assentos de rolamento, com verificação de dureza após tratamento térmico em múltiplos pontos ao longo do eixo. A montagem foi acompanhada para validar o alinhamento e a folga de operação em condição real de temperatura.",
    resultadoOperacional:
      "Desde a instalação do componente reengenheirado, não houve nova ocorrência de ruptura ao longo dos ciclos de operação acompanhados, eliminando a recorrência de paradas não programadas associadas a este modo de falha e reduzindo o risco de dano a componentes adjacentes do conjunto.",
  },
  {
    slug: "postico-molde-injecao-desgaste-prematuro",
    setor: "Plásticos / Embalagens",
    titulo: "Postiço de molde de injeção com desgaste prematuro em região de cavidade",
    resumoProblema:
      "Postiço da cavidade apresentava desgaste prematuro e perda de acabamento superficial, exigindo substituição a cada poucos milhares de ciclos de injeção.",
    resumoResultado:
      "Aumento expressivo da vida útil do componente entre intervenções, com manutenção da qualidade dimensional e superficial das peças injetadas.",
    image: "/images/pages/indimg4.png",
    emBreve: true,
    problemaOperacional:
      "Um postiço posicionado na região de cavidade de um molde de injeção de embalagens plásticas apresentava desgaste prematuro, com perda progressiva de acabamento superficial e geração de rebarbas nas peças injetadas. A frequência de substituição do componente estava muito abaixo da expectativa de vida útil para o volume de produção da linha, gerando paradas frequentes para manutenção e risco de não conformidade dimensional nas peças.",
    condicaoAplicacao:
      "O postiço está sujeito a ciclos repetitivos de injeção sob alta pressão de recalque, com contato direto entre o material polimérico fundido e a superfície da cavidade em temperaturas elevadas. A geometria da cavidade nessa região apresenta um detalhe de transição com aresta viva, ponto de maior incidência de fluxo do material durante o preenchimento.",
    caracterizacaoFalha:
      "A inspeção dimensional e visual do componente desgastado identificou erosão localizada concentrada na aresta de transição da cavidade, compatível com o efeito de fluxo abrasivo do material polimérico durante o preenchimento em alta velocidade. O acabamento superficial original, obtido por processo padrão, não apresentava dureza superficial suficiente para resistir ao regime de desgaste observado nessa região específica da cavidade.",
    reengenhariaAplicada:
      "A reengenharia consistiu na revisão da geometria da região de transição da cavidade, suavizando a aresta identificada como ponto de maior incidência de desgaste, sem alterar as dimensões funcionais da peça injetada. Adicionalmente, foi especificado um tratamento superficial de maior dureza para a região da cavidade, compatível com o material base do postiço e com o processo de acabamento final.",
    solucaoImplementada:
      "O postiço foi fabricado com a geometria revisada na região de transição e submetido ao tratamento superficial especificado, com controle de rugosidade na cavidade para garantir o acabamento exigido pela peça injetada. O componente foi validado em produção, com acompanhamento dimensional das peças injetadas ao longo dos primeiros lotes após a substituição.",
    resultadoOperacional:
      "O componente reengenheirado apresentou aumento expressivo do número de ciclos entre intervenções de manutenção, mantendo o acabamento superficial e a conformidade dimensional das peças injetadas dentro da especificação ao longo do período acompanhado, reduzindo a frequência de paradas para substituição do postiço.",
  },
];

export function getCaseBySlug(slug: string): TechnicalCase | undefined {
  return CASES.find((technicalCase) => technicalCase.slug === slug);
}
