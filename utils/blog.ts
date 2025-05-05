// Tipos
export interface Post {
  slug: string;
  titulo: string;
  resumo: string;
  conteudo: string;
  data: string;
  autor: string;
  imagem: string;
  tags: string[];
}

// Dados mockados para desenvolvimento
const posts: Post[] = [
  {
    slug: "beneficios-do-hiit",
    titulo: "Os 7 Principais Benefícios do HIIT",
    resumo:
      "Descubra por que o treinamento intervalado de alta intensidade é tão eficaz para queimar gordura e melhorar o condicionamento físico.",
    conteudo: "Conteúdo completo do post sobre os benefícios do HIIT...",
    data: "12 de Maio, 2023",
    autor: "Ana Silva",
    imagem: "/beneficios-do-hiit.png",
    tags: ["HIIT", "Condicionamento", "Emagrecimento"],
  },
  {
    slug: "hiit-para-iniciantes",
    titulo: "HIIT para Iniciantes: Como Começar com Segurança",
    resumo:
      "Um guia completo para quem está começando no treinamento intervalado de alta intensidade.",
    conteudo: "Conteúdo completo do post sobre HIIT para iniciantes...",
    data: "28 de Abril, 2023",
    autor: "Carlos Mendes",
    imagem: "/hiit-para-iniciantes.png",
    tags: ["HIIT", "Iniciantes", "Segurança"],
  },
  {
    slug: "hiit-vs-cardio-tradicional",
    titulo: "HIIT vs Cardio Tradicional: Qual é Melhor?",
    resumo:
      "Uma comparação detalhada entre o treinamento intervalado de alta intensidade e o cardio tradicional.",
    conteudo:
      "Conteúdo completo do post comparando HIIT e cardio tradicional...",
    data: "15 de Abril, 2023",
    autor: "Mariana Costa",
    imagem: "/hiit-vs-cardio-tradicional.png",
    tags: ["HIIT", "Cardio", "Comparação"],
  },
  {
    slug: "recuperacao-apos-hiit",
    titulo: "A Importância da Recuperação Após Treinos HIIT",
    resumo:
      "Saiba por que a recuperação adequada é essencial para maximizar os resultados do seu treinamento HIIT.",
    conteudo: "Conteúdo completo do post sobre recuperação após HIIT...",
    data: "3 de Abril, 2023",
    autor: "Rafael Oliveira",
    imagem: "/placeholder.svg?height=600&width=800",
    tags: ["HIIT", "Recuperação", "Descanso"],
  },
  {
    slug: "hiit-em-casa",
    titulo: "5 Treinos HIIT Eficazes para Fazer em Casa",
    resumo:
      "Treinos rápidos e eficientes que você pode fazer em casa sem equipamentos especiais.",
    conteudo: "Conteúdo completo do post sobre treinos HIIT em casa...",
    data: "22 de Março, 2023",
    autor: "Juliana Santos",
    imagem: "/placeholder.svg?height=600&width=800",
    tags: ["HIIT", "Treino em Casa", "Sem Equipamento"],
  },
  {
    slug: "hiit-e-nutricao",
    titulo: "Nutrição e HIIT: O Que Comer Antes e Depois",
    resumo:
      "Guia completo sobre alimentação para otimizar seus treinos HIIT e maximizar resultados.",
    conteudo: "Conteúdo completo do post sobre nutrição e HIIT...",
    data: "10 de Março, 2023",
    autor: "Pedro Almeida",
    imagem: "/placeholder.svg?height=600&width=800",
    tags: ["HIIT", "Nutrição", "Alimentação"],
  },
];

// Funções para acessar os dados
export async function getPosts(): Promise<Post[]> {
  // Simulando uma chamada de API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 100);
  });
}

export async function getPost(slug: string): Promise<Post | undefined> {
  // Simulando uma chamada de API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts.find((post) => post.slug === slug));
    }, 100);
  });
}
