export interface Service {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  when: string;
  benefits: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: "explicacao",
    title: "Explicação",
    icon: "🎓",
    shortDesc: "Apoio direto nas matérias mais difíceis.",
    fullDesc: "Aulas individuais com professores especializados, adaptadas ao ritmo e necessidades de cada aluno.",
    when: "Para alunos com dificuldades numa disciplina ou que querem melhorar a nota.",
    benefits: ["Atenção 100% individualizada", "Progressão ao ritmo do aluno", "Material de apoio incluído", "Flexibilidade de horário"],
    color: "from-green-500 to-green-700",
  },
  {
    id: "apoio-escolar",
    title: "Apoio Escolar",
    icon: "📚",
    shortDesc: "Melhore o desempenho com acompanhamento contínuo.",
    fullDesc: "O professor acompanha o currículo da escola, ajudando na compreensão das matérias e preparação para testes.",
    when: "Para alunos que precisam de suporte consistente ao longo do ano letivo.",
    benefits: ["Alinhamento com o currículo escolar", "Apoio nos trabalhos de casa", "Preparação para testes e provas", "Relatório de progresso regular"],
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "planos-revisao",
    title: "Planos de Revisão",
    icon: "🗓️",
    shortDesc: "Prepare-se com estratégia para os exames.",
    fullDesc: "Plano de revisão personalizado com calendário, organização de temas e técnicas de memorização.",
    when: "Antes de épocas de avaliação, exames ou testes intercalares.",
    benefits: ["Plano estruturado por temas", "Técnicas de memorização eficazes", "Simulações de exame", "Gestão eficiente do tempo"],
    color: "from-yellow-500 to-yellow-700",
  },
  {
    id: "preparacao-exames",
    title: "Preparação para Exames",
    icon: "🏆",
    shortDesc: "Resultados reais em exames nacionais e internacionais.",
    fullDesc: "Programa intensivo com simulações reais, correção detalhada e estratégias específicas para cada exame.",
    when: "Para alunos do 12º ano, provas de acesso ao ensino superior ou exames internacionais.",
    benefits: ["Simulações com condições reais", "Análise detalhada de erros", "Estratégias por exame", "Intensificação progressiva"],
    color: "from-purple-500 to-purple-700",
  },
];
