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
    slug: "redutor-planetario",
    setor: "",
    titulo: "REDUTOR PLANETÁRIO",
    resumoProblema:
      "Após a falha do conjunto original, uma primeira alternativa de reconstrução já havia sido desenvolvida, porém com vida útil reduzida em operação.",
    resumoResultado:
      "O desempenho observado indicava a necessidade de compreender a arquitetura do redutor e o funcionamento de seus elementos de transmissão antes de desenvolver uma nova alternativa.",
    image: "/images/pages/REDUTOR-PLANETARIO.png",
    emBreve: false,
    problemaOperacional:
      "Além da vida útil reduzida da primeira reconstrução, a reposição permanecia condicionada ao fornecimento original, com custo elevado e longo prazo de atendimento.",
    condicaoAplicacao:
      "A análise concentrou-se na arquitetura mecânica do redutor e nas relações funcionais entre seus elementos. Engrenamentos, referências geométricas e interfaces mecânicas foram avaliados em conjunto para compreender sua influência sobre o funcionamento do sistema.",
    caracterizacaoFalha:
      "As informações reconstruídas foram consolidadas em uma referência de engenharia para orientar a nova fabricação e futuras intervenções no conjunto.",
    reengenhariaAplicada:
      "A fabricação seguiu as definições estabelecidas para materiais, geometrias, tolerâncias e características funcionais do conjunto.",
    solucaoImplementada:
      "A reconstrução restabeleceu as condições de operação do redutor. A documentação resultante criou uma base técnica para futuras fabricações e intervenções, ampliando a autonomia sobre o conjunto.",
    resultadoOperacional:
      " Reengenharia de Componentes Críticos · Engenharia Reversa · Projeto Mecânico · Manufatura Técnica",
  },
  {
    slug: "pistao-hidraulico",
    setor: "",
    titulo: "PISTÃO HIDRÁULICO",
    resumoProblema:
      "Após a falha de um pistão hidráulico submetido a elevadas solicitações mecânicas, era necessário compreender seu comportamento estrutural antes de definir uma nova configuração.",
    resumoResultado:
      "                   ",
    image: "/images/pages/PISTAO.png",
    emBreve: false,
    problemaOperacional:
      "A geometria do componente existente, isoladamente, não permitia avaliar sua resposta aos carregamentos presentes na aplicação.",
    condicaoAplicacao:
      "A análise partiu dos carregamentos atuantes e de sua representação em um modelo estrutural. Por meio do método dos elementos finitos, foi avaliada a distribuição de tensões no componente, permitindo identificar as regiões críticas para a revisão do projeto.",
    caracterizacaoFalha:
      "Os resultados orientaram a revisão dos parâmetros de projeto relacionados às regiões críticas. A nova configuração foi então verificada em ambiente virtual quanto à resposta aos carregamentos considerados antes da fabricação.",
    reengenhariaAplicada:
      "A fabricação seguiu as definições de geometria, requisitos dimensionais e demais características técnicas especificadas para o componente.",
    solucaoImplementada:
      "O projeto resultou em uma nova configuração, avaliada estruturalmente antes da fabricação, reduzindo a incerteza técnica associada à reprodução direta do componente existente.",
    resultadoOperacional:
      " Análise Estrutural · Método dos Elementos Finitos · Reengenharia de Componentes Críticos · Projeto Mecânico · Manufatura Técnica",
  },
  {
    slug: "sistema-de-elevacao",
    setor: "",
    titulo: "SISTEMA DE ELEVAÇÃO",
    resumoProblema:
      "O desgaste observado no conjunto fuso e porca comprometia o desempenho de um sistema de elevação submetido a elevadas solicitações mecânicas.",
    resumoResultado:
      "O desgaste observado indicava a necessidade de compreender as condições de funcionamento do conjunto antes de definir uma nova configuração.",
    image: "/images/pages/SISTEMA-ELEVACAO.png",
    emBreve: false,
    problemaOperacional:
      "A substituição dos componentes permitiria recompor o conjunto, mas não esclareceria as condições relacionadas ao desgaste identificado.",
    condicaoAplicacao:
      "A análise concentrou-se na interação entre fuso e porca, considerando atrito, condições de contato, carregamentos e materiais.Esses fatores foram relacionados ao desgaste observado para orientar a revisão do sistema.",
    caracterizacaoFalha:
      "A análise orientou a revisão das condições de contato, dos materiais e da configuração do conjunto.",
    reengenhariaAplicada:
      "Os novos componentes foram fabricados conforme as definições de materiais, geometrias, tolerâncias e acabamento superficial.",
    solucaoImplementada:
      "O projeto resultou em uma nova configuração para o sistema fuso e porca, definida a partir da análise das condições tribológicas da aplicação",
    resultadoOperacional:
      "Tribologia · Reengenharia de Componentes Críticos · Engenharia de Materiais · Projeto Mecânico · Manufatura Técnica",
  },
  {
    slug: "dispositivo-de-conformacao",
    setor: "",
    titulo: "DISPOSITIVO DE CONFORMAÇÃO",
    resumoProblema:
      "A partir de um projeto mecânico fornecido pelo cliente, a Fertec conduziu a industrialização de um dispositivo de conformação.",
    resumoResultado:
      "O trabalho envolveu planejamento dos processos de fabricação, controle dimensional, ajustagem e montagem necessários à execução do conjunto.",
    image: "/images/pages/CONFORMACAO.png",
    emBreve: false,
    problemaOperacional:
      "A execução exigia preservar geometrias, tolerâncias e interfaces mecânicas ao longo das diferentes etapas de fabricação.Produzidos individualmente, os componentes precisavam manter compatibilidade dimensional e funcional na montagem.",
    condicaoAplicacao:
      "A documentação fornecida foi analisada sob a perspectiva da fabricação do conjunto, considerando referências dimensionais, tolerâncias e interfaces mecânicas.A partir dessa análise, foram definidas as estratégias de fabricação, controle dimensional, ajustagem e montagem.",
    caracterizacaoFalha:
      "As definições do projeto foram convertidas em processos e sequências de fabricação, controle, ajustagem e montagem necessários à industrialização do dispositivo.",
    reengenhariaAplicada:
      "Os componentes foram fabricados, controlados dimensionalmente, ajustados e integrados conforme as definições do conjunto.",
    solucaoImplementada:
      "Após a validação funcional da primeira unidade, uma segunda foi produzida a partir da mesma definição de industrialização.",
    resultadoOperacional:
      "Industrialização de Projetos Mecânicos · Engenharia para Manufatura · Controle Dimensional · Ajustagem Mecânica · Manufatura Técnica",
  },
  {
    slug: "cilindro-laminador",
    setor: "",
    titulo: "CILINDRO LAMINADOR",
    resumoProblema:
      "Sem documentação técnica disponível, a alteração de cilindros laminadores de grande porte exigia reconstruir sua configuração a partir de um cilindro utilizado como referência.",
    resumoResultado:
      "O projeto envolveu levantamento dimensional, documentação técnica e coordenação dos processos especializados necessários às intervenções.",
    image: "/images/pages/LAMINADOR.png",
    emBreve: false,
    problemaOperacional:
      "Aplicar a configuração aos demais cilindros exigia preservar as referências dimensionais ao longo dos diferentes processos envolvidos em cada intervenção.",
    condicaoAplicacao:
      "O levantamento dimensional permitiu reconstruir as referências geométricas do cilindro modelo e elaborar a documentação técnica.Geometrias, interfaces e características construtivas foram documentadas para orientar as alterações nos demais cilindros.",
    caracterizacaoFalha:
      "As informações reconstruídas foram convertidas em requisitos técnicos para as intervenções.O planejamento definiu as referências e os controles dimensionais necessários à integração dos diferentes processos de execução.",
    reengenhariaAplicada:
      "As alterações envolveram soldagem por arco submerso, torneamento de grande porte e balanceamento dinâmico, coordenados conforme os requisitos técnicos definidos para cada intervenção.",
    solucaoImplementada:
      "A configuração reconstruída a partir do cilindro modelo foi aplicada à alteração de três cilindros.O trabalho também consolidou uma referência técnica para futuras intervenções.",
    resultadoOperacional:
      "Coordenação Técnica de Projetos Industriais · Engenharia Reversa · Adequação de Componentes de Grande Porte · Controle Dimensional · Manufatura Técnica",
  },
  {
    slug: "molde-de-injecao",
    setor: "",
    titulo: "MOLDE DE INJEÇÃO",
    resumoProblema:
      "A recuperação envolveu diferentes componentes do molde, preservando as referências mecânicas necessárias ao funcionamento do ferramental.",
    resumoResultado:
      "O trabalho combinou recuperação de elementos existentes, fabricação de componentes de substituição e ajustagem do conjunto.",
    image: "/images/pages/INJECAO.png",
    emBreve: false,
    problemaOperacional:
      "Os componentes recuperados e os novos elementos de substituição precisavam manter compatibilidade com as referências de montagem e funcionamento do molde.",
    condicaoAplicacao:
      "A avaliação identificou quais componentes seriam recuperados ou substituídos e as referências necessárias a cada intervenção. Geometrias, interfaces, ajustes e condições de montagem foram analisados para definir o escopo técnico do trabalho.",
    caracterizacaoFalha:
      "As informações levantadas orientaram as intervenções e a definição dos componentes de substituição.",
    reengenhariaAplicada:
      "Os componentes de substituição foram fabricados, controlados e ajustados conforme as definições do molde. Os demais elementos receberam as intervenções previstas antes da ajustagem e da montagem final do ferramental.",
    solucaoImplementada:
      "A intervenção restabeleceu as condições funcionais do molde e permitiu seu retorno ao processo produtivo.A recuperação evitou a substituição integral do ferramental.",
    resultadoOperacional:
      "Recuperação de Ferramentais Industriais · Controle Dimensional · Ajustagem Mecânica · Manufatura Técnica",
  },
  {
    slug: "came",
    setor: "",
    titulo: "CAME",
    resumoProblema:
      "Sem documentação técnica disponível, o desenvolvimento de um novo came exigia reconstruir os perfis e superfícies funcionais que definiam sua geometria de trabalho.",
    resumoResultado:
      "A digitalização tridimensional permitiu transformar a geometria do componente existente em uma referência de engenharia para a nova fabricação e futuras intervenções.",
    image: "/images/pages/CAME.png",
    emBreve: false,
    problemaOperacional:
      "Os perfis livres e as superfícies de geometria não elementar exigiam uma representação tridimensional capaz de reproduzir características que não poderiam ser definidas apenas por medidas isoladas.",
    condicaoAplicacao:
      "A digitalização tridimensional forneceu a referência geométrica para a reconstrução do modelo CAD.A comparação entre os dados digitalizados e as superfícies reconstruídas permitiu revisar os perfis funcionais antes da conclusão do modelo.",
    caracterizacaoFalha:
      "A geometria reconstruída foi consolidada em modelo tridimensional e desenho técnico, criando uma referência para fabricação e futuras intervenções.Essa documentação elimina a necessidade de repetir o levantamento geométrico da amostra em novas fabricações.",
    reengenhariaAplicada:
      "O novo came foi fabricado a partir do modelo reconstruído, seguindo os perfis e superfícies funcionais definidos durante o desenvolvimento.O controle dimensional verificou a correspondência entre o componente produzido e as referências geométricas do modelo.",
    solucaoImplementada:
      "O trabalho resultou em um novo componente, acompanhado de modelo tridimensional e desenho técnico para orientar futuras fabricações de forma controlada.",
    resultadoOperacional:
      "Engenharia Reversa · Digitalização Tridimensional · Reconstrução Geométrica · Manufatura Técnica",
  },
  {
    slug: "dispositivos-de-controle-dimensional",
    setor: "",
    titulo: "DISPOSITIVOS DE CONTROLE DIMENSIONAL",
    resumoProblema:
      "O desenvolvimento de dispositivos para controle dimensional começa pela definição de como o componente deve ser apoiado, localizado, fixado e acessado durante a inspeção.",
    resumoResultado:
      "Cada aplicação exige uma configuração própria, determinada pela geometria da peça, pelas características a serem medidas e pelas condições de acesso do equipamento de controle.",
    image: "/images/pages/CONTROLE-DIMENSIONAL.png",
    emBreve: false,
    problemaOperacional:
      "A geometria da peça, os apoios, os elementos de localização e fixação e o acesso das ponteiras de medição precisam funcionar em conjunto, sem interferir nas regiões submetidas à inspeção.",
    condicaoAplicacao:
      "A análise considera o componente, as características a serem inspecionadas e as referências utilizadas em seu posicionamento.A relação entre peça, dispositivo e equipamento de medição é avaliada para definir apoios, localização, fixação e acessos adequados a cada operação de controle.",
    caracterizacaoFalha:
      "A partir dessa análise, é definida a configuração mecânica do dispositivo, incluindo os elementos de apoio, localização e fixação.O projeto também preserva o acesso às regiões necessárias à inspeção.",
    reengenhariaAplicada:
      "Os dispositivos foram fabricados, controlados dimensionalmente e ajustados conforme as definições do projeto.Na montagem, apoios, localizadores e elementos de fixação foram integrados de acordo com as condições previstas para cada aplicação.",
    solucaoImplementada:
      "Os dispositivos permitiram posicionar e fixar diferentes componentes nas condições necessárias aos respectivos processos de inspeção.A mesma abordagem foi aplicada a diferentes geometrias, referências de medição e segmentos industriais.",
    resultadoOperacional:
      "Dispositivos para Controle Dimensional · Projeto Mecânico · Posicionamento e Fixação · Controle Dimensional · Manufatura Técnica",
  },

];

export function getCaseBySlug(slug: string): TechnicalCase | undefined {
  return CASES.find((technicalCase) => technicalCase.slug === slug);
}
