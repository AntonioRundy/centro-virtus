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
    shortDesc: "Sessões individuais focadas nas disciplinas mais desafiadoras.",
    fullDesc:
      "Aulas de explicação personalizadas com professores especializados na disciplina. Cada sessão é adaptada ao ritmo e necessidades do aluno, garantindo progressão eficaz e consolidação dos conteúdos.",
    when:
      "Recomendado para alunos com dificuldades específicas numa disciplina, ou que pretendem aprofundar conhecimentos e melhorar a nota.",
    benefits: [
      "Atenção 100% individualizada",
      "Progressão ao ritmo do aluno",
      "Material de apoio incluído",
      "Flexibilidade de horário",
    ],
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "apoio-escolar",
    title: "Apoio Escolar",
    icon: "📚",
    shortDesc: "Acompanhamento regular para consolidar matérias e resolver dúvidas.",
    fullDesc:
      "Apoio escolar contínuo ao longo do ano letivo. O professor acompanha o currículo da escola do aluno, ajudando na compreensão das matérias, resolução de trabalhos de casa e preparação para testes.",
    when:
      "Ideal para alunos que precisam de um suporte consistente ao longo do ano, para acompanhar o ritmo escolar e evitar acumulação de dificuldades.",
    benefits: [
      "Acompanhamento do currículo escolar",
      "Ajuda com trabalhos de casa",
      "Preparação para testes e provas",
      "Relatório de progresso regular",
    ],
    color: "from-green-500 to-green-700",
  },
  {
    id: "planos-revisao",
    title: "Planos de Revisão",
    icon: "🗓️",
    shortDesc: "Planos estruturados de revisão antes de exames e avaliações.",
    fullDesc:
      "Criação de um plano de revisão personalizado e estruturado, com calendário de sessões, organização dos temas e estratégias de memorização. Garante que o aluno está bem preparado para qualquer avaliação.",
    when:
      "Recomendado para períodos antes de exames, testes intercalares ou épocas de avaliação. Ideal para alunos que precisam de organização no estudo.",
    benefits: [
      "Plano estruturado por temas",
      "Técnicas de memorização eficazes",
      "Simulações de exame",
      "Gestão eficiente do tempo de estudo",
    ],
    color: "from-yellow-500 to-yellow-700",
  },
  {
    id: "preparacao-exames",
    title: "Preparação para Exames",
    icon: "🏆",
    shortDesc: "Preparação intensiva para exames nacionais e internacionais.",
    fullDesc:
      "Programa intensivo de preparação para exames nacionais, provas de acesso ao ensino superior e exames internacionais. Inclui simulações, correção detalhada e estratégias de exame.",
    when:
      "Essencial para alunos a realizar exames nacionais do 12º ano, provas de ingresso universitário, ou exames de certificação internacional.",
    benefits: [
      "Simulações com condições reais",
      "Análise detalhada de erros",
      "Estratégias específicas para cada exame",
      "Intensificação progressiva",
    ],
    color: "from-purple-500 to-purple-700",
  },
];
