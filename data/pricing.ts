export type PricingLevel = "A" | "B" | "C" | "D";

export interface LevelPricing {
  online: number;
  domiciliar: number;
  label: string;
  range: string;
  description: string;
  features: string[];
}

export const pricing: Record<PricingLevel, LevelPricing> = {
  A: {
    online: 5500,
    domiciliar: 6500,
    label: "Nível A",
    range: "1º–6º Ano",
    description:
      "Cobertura completa das disciplinas para alunos mais jovens, com abordagem lúdica, progressiva e adaptada a cada criança.",
    features: [
      "Suporte completo por disciplina",
      "Metodologia adaptada à idade",
      "Relatório de progresso mensal",
      "Aula experimental gratuita",
    ],
  },
  B: {
    online: 6000,
    domiciliar: 7000,
    label: "Nível B",
    range: "7º–9º Ano",
    description:
      "Até 3 disciplinas por pacote. Possibilidade de múltiplos professores consoante as disciplinas selecionadas.",
    features: [
      "Até 3 disciplinas por pacote",
      "Professores especializados por área",
      "Plano de estudo personalizado",
      "Acompanhamento contínuo",
    ],
  },
  C: {
    online: 7000,
    domiciliar: 8000,
    label: "Nível C",
    range: "10º–12º Ano",
    description:
      "Até 3 disciplinas por pacote. Foco em preparação para exames nacionais, com revisões estruturadas e simulações.",
    features: [
      "Até 3 disciplinas por pacote",
      "Preparação intensiva para exames",
      "Simulações e testes de treino",
      "Feedback detalhado por sessão",
    ],
  },
  D: {
    online: 9000,
    domiciliar: 10000,
    label: "Nível D",
    range: "Universidade",
    description:
      "Apoio especializado ao nível universitário. Até 3 disciplinas por pacote, com professores altamente qualificados.",
    features: [
      "Até 3 disciplinas por pacote",
      "Professores com formação superior",
      "Apoio em projetos e teses",
      "Sessões flexíveis e intensivas",
    ],
  },
};

export const subjects = [
  {
    id: "matematica",
    name: "Matemática",
    icon: "📐",
    description: "Álgebra, geometria, cálculo e resolução de problemas.",
  },
  {
    id: "fisica",
    name: "Física",
    icon: "⚛️",
    description: "Mecânica, termodinâmica, eletricidade e óptica.",
  },
  {
    id: "ingles",
    name: "Inglês",
    icon: "🌍",
    description: "Conversação, gramática e preparação para exames internacionais.",
  },
  {
    id: "exames",
    name: "Preparação para Exames",
    icon: "📝",
    description: "Treino específico para exames nacionais e provas de acesso.",
  },
];
