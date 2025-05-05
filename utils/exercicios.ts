// Tipos
export interface Exercicio {
  id: string;
  nome: string;
  categoria: string;
  imagem: string;
  descricao: string;
  instrucoes: string[];
  musculos: string[];
  equipamento: string[];
  nivel: "iniciante" | "intermediario" | "avancado";
}

export interface Categoria {
  slug: string;
  nome: string;
  imagem: string;
  descricao: string;
  quantidade: number;
}

// Dados mockados para desenvolvimento
const categorias: Categoria[] = [
  {
    slug: "sem-equipamento",
    nome: "Exercícios HIIT Sem Equipamento",
    imagem: "hiit-sem-equipamento.png",
    descricao:
      "Exercícios de alta intensidade que podem ser realizados em qualquer lugar, sem necessidade de equipamentos.",
    quantidade: 14,
  },
  {
    slug: "corrida",
    nome: "Exercícios HIIT de Corrida",
    imagem: "hiit-corrida.png",
    descricao:
      "Exercícios de corrida intervalada para melhorar condicionamento cardiovascular e queimar calorias.",
    quantidade: 4,
  },
  {
    slug: "academia",
    nome: "Exercícios HIIT na Academia",
    imagem: "hiit-academia.png",
    descricao:
      "Exercícios de alta intensidade utilizando equipamentos disponíveis em academias.",
    quantidade: 4,
  },
  {
    slug: "acessorios-simples",
    nome: "Exercícios HIIT com Acessórios Simples",
    imagem: "hiit-elastico.png",
    descricao:
      "Exercícios utilizando acessórios simples e portáteis para aumentar a intensidade do treino.",
    quantidade: 8,
  },
];

const exercicios: Exercicio[] = [
  // Exercícios HIIT Sem Equipamento
  {
    id: "burpees",
    nome: "Burpees",
    categoria: "sem-equipamento",
    imagem: "/burpees.gif",
    descricao:
      "Um exercício completo que trabalha todo o corpo e eleva a frequência cardíaca rapidamente.",
    instrucoes: [
      "Comece em pé com os pés na largura dos ombros.",
      "Agache-se e coloque as mãos no chão à frente dos pés.",
      "Salte com os pés para trás, ficando na posição de prancha.",
      "Faça uma flexão (opcional).",
      "Salte com os pés de volta para as mãos.",
      "Salte para cima, estendendo os braços acima da cabeça.",
    ],
    musculos: ["Quadríceps", "Glúteos", "Peito", "Ombros", "Core"],
    equipamento: [],
    nivel: "intermediario",
  },
  {
    id: "mountain-climbers",
    nome: "Mountain Climbers",
    categoria: "sem-equipamento",
    imagem: "/mountain-climber.gif",
    descricao:
      "Um exercício dinâmico que trabalha o core e eleva a frequência cardíaca.",
    instrucoes: [
      "Comece na posição de prancha alta, com as mãos diretamente abaixo dos ombros.",
      "Mantenha o core engajado e as costas retas.",
      "Traga um joelho em direção ao peito, depois retorne à posição inicial.",
      "Alterne rapidamente entre as pernas, como se estivesse correndo no lugar.",
    ],
    musculos: ["Core", "Ombros", "Quadríceps", "Flexores do Quadril"],
    equipamento: [],
    nivel: "iniciante",
  },
  {
    id: "jumping-jacks",
    nome: "Jumping Jacks",
    categoria: "sem-equipamento",
    imagem: "/jumping-jacks.gif",
    descricao:
      "Exercício clássico para aquecimento e cardio que trabalha todo o corpo.",
    instrucoes: [
      "Comece em pé com os pés juntos e os braços ao lado do corpo.",
      "Salte abrindo as pernas lateralmente enquanto levanta os braços acima da cabeça.",
      "Retorne à posição inicial com outro salto.",
      "Repita o movimento em um ritmo constante.",
    ],
    musculos: ["Ombros", "Quadríceps", "Panturrilhas", "Core"],
    equipamento: [],
    nivel: "iniciante",
  },
  {
    id: "squat-jumps",
    nome: "Squat Jumps",
    categoria: "sem-equipamento",
    imagem: "/squat-jump.gif",
    descricao:
      "Exercício de potência para membros inferiores que combina agachamento com salto explosivo.",
    instrucoes: [
      "Comece em pé com os pés na largura dos ombros.",
      "Realize um agachamento, descendo até que as coxas fiquem paralelas ao chão.",
      "Impulsione-se para cima em um salto explosivo.",
      "Aterrisse suavemente voltando à posição de agachamento.",
      "Repita o movimento em sequência.",
    ],
    musculos: ["Quadríceps", "Glúteos", "Isquiotibiais", "Panturrilhas"],
    equipamento: [],
    nivel: "intermediario",
  },
  {
    id: "high-knees",
    nome: "High Knees",
    categoria: "sem-equipamento",
    imagem: "/high-knee.gif",
    descricao:
      "Excelente exercício para elevar a frequência cardíaca e trabalhar os músculos do core.",
    instrucoes: [
      "Fique em pé com os pés na largura dos quadris.",
      "Corra no lugar, levantando os joelhos até a altura do quadril.",
      "Mantenha os braços dobrados e movimente-os como se estivesse correndo.",
      "Mantenha um ritmo rápido e constante.",
    ],
    musculos: ["Quadríceps", "Flexores do Quadril", "Core", "Ombros"],
    equipamento: [],
    nivel: "iniciante",
  },
  {
    id: "prancha-alternancia-bracos",
    nome: "Prancha com Alternância de Braços",
    categoria: "sem-equipamento",
    imagem:
      "/placeholder.svg?height=360&width=360&text=Prancha+Alternância+Braços",
    descricao:
      "Fortalece o core e os ombros enquanto adiciona um elemento de instabilidade.",
    instrucoes: [
      "Comece na posição de prancha alta, com as mãos diretamente abaixo dos ombros.",
      "Mantenha o corpo em linha reta e o core engajado.",
      "Levante um braço e estenda-o à frente do corpo.",
      "Retorne o braço à posição inicial e repita com o outro braço.",
      "Alterne os braços mantendo a estabilidade do corpo.",
    ],
    musculos: ["Core", "Ombros", "Tríceps", "Estabilizadores"],
    equipamento: [],
    nivel: "intermediario",
  },
  {
    id: "corrida-parada",
    nome: "Corrida Parada",
    categoria: "sem-equipamento",
    imagem: "/high-knee.gif",
    descricao:
      "Exercício simples e eficaz para cardio que pode ser feito em espaços pequenos.",
    instrucoes: [
      "Fique em pé com os pés na largura dos quadris.",
      "Corra no lugar, levantando os pés do chão em um ritmo constante.",
      "Mantenha os braços dobrados e movimente-os como se estivesse correndo.",
      "Aumente gradualmente a velocidade para maior intensidade.",
    ],
    musculos: ["Quadríceps", "Panturrilhas", "Core"],
    equipamento: [],
    nivel: "iniciante",
  },
  {
    id: "agachamento",
    nome: "Agachamento",
    categoria: "sem-equipamento",
    imagem: "/bodyweight-squat.gif",
    descricao:
      "Um exercício fundamental para desenvolver força nos membros inferiores.",
    instrucoes: [
      "Fique em pé com os pés na largura dos ombros ou um pouco mais afastados.",
      "Mantenha o peito erguido e o core engajado.",
      "Dobre os joelhos e abaixe o quadril como se fosse sentar em uma cadeira.",
      "Desça até que as coxas estejam paralelas ao chão, ou o mais baixo que conseguir com boa forma.",
      "Empurre através dos calcanhares para voltar à posição inicial.",
    ],
    musculos: ["Quadríceps", "Glúteos", "Isquiotibiais", "Core"],
    equipamento: [],
    nivel: "iniciante",
  },
  {
    id: "afundo",
    nome: "Afundo (Lunges)",
    categoria: "sem-equipamento",
    imagem: "/bodyweight-lunges.gif",
    descricao:
      "Exercício que trabalha unilateralmente os músculos das pernas, melhorando força e equilíbrio.",
    instrucoes: [
      "Fique em pé com os pés juntos.",
      "Dê um passo à frente com uma perna.",
      "Dobre ambos os joelhos até que a coxa da frente fique paralela ao chão e o joelho de trás quase toque o chão.",
      "Empurre através do calcanhar da frente para retornar à posição inicial.",
      "Repita com a outra perna ou alterne as pernas.",
    ],
    musculos: ["Quadríceps", "Glúteos", "Isquiotibiais"],
    equipamento: [],
    nivel: "iniciante",
  },
  {
    id: "agachamento-sumo",
    nome: "Agachamento Sumô",
    categoria: "sem-equipamento",
    imagem: "/bodyweight-sumo-squat.gif",
    descricao:
      "Variação do agachamento que trabalha especialmente os adutores e a parte interna das coxas.",
    instrucoes: [
      "Posicione-se com os pés mais afastados que a largura dos ombros e os dedos apontando para fora.",
      "Mantenha a coluna ereta e o core engajado.",
      "Dobre os joelhos e abaixe o quadril, mantendo os joelhos alinhados com os dedos dos pés.",
      "Desça até que as coxas fiquem paralelas ao chão.",
      "Empurre através dos calcanhares para voltar à posição inicial.",
    ],
    musculos: ["Quadríceps", "Adutores", "Glúteos"],
    equipamento: [],
    nivel: "iniciante",
  },
  {
    id: "flexoes-push-ups",
    nome: "Flexões (Push-ups)",
    categoria: "sem-equipamento",
    imagem: "/push-up.gif",
    descricao:
      "Exercício clássico para fortalecimento do peitoral, ombros e tríceps.",
    instrucoes: [
      "Comece na posição de prancha alta, com as mãos um pouco mais afastadas que a largura dos ombros.",
      "Mantenha o corpo em linha reta, da cabeça aos calcanhares.",
      "Dobre os cotovelos, abaixando o corpo em direção ao chão.",
      "Pare quando os cotovelos estiverem em um ângulo de 90 graus.",
      "Empurre o corpo de volta à posição inicial.",
      "Repita o movimento mantendo o core engajado.",
    ],
    musculos: ["Peitoral", "Ombros", "Tríceps", "Core"],
    equipamento: [],
    nivel: "intermediario",
  },
  {
    id: "dips-triceps",
    nome: "Dips para Tríceps",
    categoria: "sem-equipamento",
    imagem: "/placeholder.svg?height=360&width=360&text=Dips+Triceps",
    descricao:
      "Exercício eficaz para fortalecer os tríceps usando apenas o peso corporal.",
    instrucoes: [
      "Sente-se na borda de uma cadeira ou banco estável.",
      "Coloque as mãos ao lado do quadril, segurando a borda da superfície.",
      "Deslize o quadril para fora da cadeira, mantendo as pernas estendidas ou levemente dobradas.",
      "Dobre os cotovelos, abaixando o corpo em direção ao chão.",
      "Empurre através das palmas das mãos para voltar à posição inicial.",
      "Mantenha os ombros afastados das orelhas durante todo o movimento.",
    ],
    musculos: ["Tríceps", "Ombros", "Peitoral"],
    equipamento: [],
    nivel: "intermediario",
  },
  {
    id: "prancha-plank",
    nome: "Prancha (Plank)",
    categoria: "sem-equipamento",
    imagem: "/placeholder.svg?height=360&width=360&text=Prancha",
    descricao:
      "Exercício isométrico excelente para fortalecer o core e melhorar a estabilidade.",
    instrucoes: [
      "Comece na posição de quatro apoios.",
      "Apoie os antebraços no chão, com os cotovelos diretamente abaixo dos ombros.",
      "Estenda as pernas para trás, apoiando-se nas pontas dos pés.",
      "Mantenha o corpo em linha reta, da cabeça aos calcanhares.",
      "Contraia o abdômen e os glúteos para manter a posição.",
      "Respire normalmente e mantenha a posição pelo tempo determinado.",
    ],
    musculos: ["Core", "Ombros", "Glúteos", "Quadríceps"],
    equipamento: [],
    nivel: "iniciante",
  },
  {
    id: "superman",
    nome: "Superman",
    categoria: "sem-equipamento",
    imagem: "/placeholder.svg?height=360&width=360&text=Superman",
    descricao:
      "Exercício para fortalecer os músculos das costas e melhorar a postura.",
    instrucoes: [
      "Deite-se de bruços com os braços estendidos à frente da cabeça.",
      "Mantenha as pernas estendidas e juntas.",
      "Levante simultaneamente os braços, o peito e as pernas do chão.",
      "Mantenha a posição por 2-3 segundos, contraindo os músculos das costas.",
      "Retorne lentamente à posição inicial.",
      "Repita o movimento mantendo o pescoço em posição neutra.",
    ],
    musculos: [
      "Eretores da Espinha",
      "Glúteos",
      "Deltoides Posteriores",
      "Core",
    ],
    equipamento: [],
    nivel: "iniciante",
  },

  // Exercícios HIIT de Corrida
  {
    id: "sprint-100m",
    nome: "Sprint de 100m",
    categoria: "corrida",
    imagem: "/sprint.gif",
    descricao:
      "Corrida em velocidade máxima por uma distância curta para desenvolver potência e velocidade.",
    instrucoes: [
      "Marque uma distância de aproximadamente 100 metros.",
      "Posicione-se na linha de partida com o corpo ligeiramente inclinado para frente.",
      "Ao sinal, acelere até atingir sua velocidade máxima.",
      "Mantenha a velocidade máxima até o final do percurso.",
      "Recupere caminhando de volta ao ponto de partida.",
    ],
    musculos: ["Quadríceps", "Isquiotibiais", "Glúteos", "Panturrilhas"],
    equipamento: [],
    nivel: "intermediario",
  },
  {
    id: "sprints-ladeira",
    nome: "Sprints em Ladeira",
    categoria: "corrida",
    imagem: "/treadmill.gif",
    descricao:
      "Corrida em velocidade máxima em subida para aumentar a resistência e desenvolver força explosiva.",
    instrucoes: [
      "Encontre uma ladeira com inclinação moderada e segura para correr.",
      "Posicione-se na base da ladeira.",
      "Corra em velocidade máxima até o topo da ladeira.",
      "Recupere caminhando de volta ao ponto de partida.",
      "Repita após recuperação completa.",
    ],
    musculos: ["Quadríceps", "Glúteos", "Panturrilhas", "Core"],
    equipamento: [],
    nivel: "avancado",
  },
  {
    id: "shuttle-runs",
    nome: "Shuttle Runs (Corrida Vai e Vem)",
    categoria: "corrida",
    imagem: "/placeholder.svg?height=360&width=360&text=Shuttle+Runs",
    descricao:
      "Corridas curtas de ida e volta para trabalhar aceleração, desaceleração e agilidade.",
    instrucoes: [
      "Marque dois pontos a uma distância de 5-10 metros um do outro.",
      "Comece em um dos pontos em posição de prontidão.",
      "Corra rapidamente até o outro ponto e toque no chão.",
      "Mude de direção e corra de volta ao ponto inicial.",
      "Continue alternando entre os pontos pelo número desejado de repetições.",
    ],
    musculos: ["Quadríceps", "Isquiotibiais", "Glúteos", "Core"],
    equipamento: [],
    nivel: "intermediario",
  },
  {
    id: "interval-running",
    nome: "Corrida Intervalada",
    categoria: "corrida",
    imagem: "/placeholder.svg?height=360&width=360&text=Corrida+Intervalada",
    descricao:
      "Alternância entre períodos de corrida em alta intensidade e recuperação ativa.",
    instrucoes: [
      "Aqueça com 5 minutos de caminhada ou corrida leve.",
      "Corra em alta intensidade (80-90% do seu esforço máximo) por 30 segundos a 1 minuto.",
      "Reduza para uma caminhada rápida ou trote leve por 1-2 minutos para recuperação.",
      "Repita este ciclo de 8-10 vezes.",
      "Finalize com 5 minutos de caminhada para desaquecer.",
    ],
    musculos: [
      "Quadríceps",
      "Isquiotibiais",
      "Glúteos",
      "Core",
      "Sistema Cardiovascular",
    ],
    equipamento: [],
    nivel: "intermediario",
  },

  // Exercícios HIIT na Academia
  {
    id: "kettlebell-swing",
    nome: "Kettlebell Swing",
    categoria: "academia",
    imagem: "/kattlebell-swings.gif",
    descricao:
      "Movimento explosivo com kettlebell que trabalha principalmente posterior da coxa e glúteos.",
    instrucoes: [
      "Fique em pé com os pés um pouco mais afastados que a largura dos ombros.",
      "Segure um kettlebell com as duas mãos à sua frente.",
      "Dobre levemente os joelhos e incline o tronco para frente, mantendo as costas retas.",
      "Empurre os quadris para trás e deixe o kettlebell passar entre as pernas.",
      "Empurre os quadris para frente com força, usando o impulso para balançar o kettlebell até a altura dos ombros.",
      "Controle o movimento de descida e repita.",
    ],
    musculos: ["Isquiotibiais", "Glúteos", "Lombares", "Core"],
    equipamento: ["Kettlebell"],
    nivel: "intermediario",
  },
  {
    id: "thruster",
    nome: "Thruster",
    categoria: "academia",
    imagem: "/kettlebell-thruster.gif",
    descricao:
      "Combinação de agachamento com desenvolvimento de ombros que trabalha todo o corpo.",
    instrucoes: [
      "Segure um par de halteres na altura dos ombros, com os cotovelos dobrados.",
      "Realize um agachamento completo, mantendo os halteres na posição.",
      "Ao subir do agachamento, use o impulso para empurrar os halteres acima da cabeça.",
      "Estenda completamente os braços no topo do movimento.",
      "Retorne os halteres aos ombros enquanto desce para o próximo agachamento.",
    ],
    musculos: ["Quadríceps", "Glúteos", "Ombros", "Tríceps"],
    equipamento: ["Halteres", "Barra"],
    nivel: "intermediario",
  },
  {
    id: "battle-ropes",
    nome: "Battle Ropes",
    categoria: "academia",
    imagem: "/placeholder.svg?height=360&width=360&text=Battle+Ropes",
    descricao:
      "Exercício com cordas pesadas que trabalha braços, ombros e core mientras eleva a frequência cardíaca.",
    instrucoes: [
      "Segure uma ponta da corda em cada mão.",
      "Fique em posição de semi-agachamento com os pés na largura dos ombros.",
      "Mantenha as costas retas e o core engajado.",
      "Movimente os braços alternadamente para cima e para baixo, criando ondas na corda.",
      "Mantenha um ritmo constante e intenso.",
    ],
    musculos: ["Ombros", "Braços", "Core", "Costas"],
    equipamento: ["Battle Ropes"],
    nivel: "intermediario",
  },
  {
    id: "remo-maquina",
    nome: "Remo na Máquina",
    categoria: "academia",
    imagem: "/rowing-machine.gif",
    descricao:
      "Exercício completo que trabalha membros superiores, inferiores e core em um movimento coordenado.",
    instrucoes: [
      "Sente-se na máquina de remo com os pés fixos nos apoios.",
      "Segure a alça com as mãos, mantendo os braços estendidos e as costas retas.",
      "Empurre com as pernas, incline o tronco levemente para trás e puxe a alça em direção ao abdômen.",
      "Retorne à posição inicial estendendo os braços, inclinando o tronco para frente e dobrando os joelhos.",
      "Repita o movimento em um ritmo constante.",
    ],
    musculos: ["Costas", "Pernas", "Core", "Braços", "Ombros"],
    equipamento: ["Máquina de Remo"],
    nivel: "iniciante",
  },

  // Exercícios HIIT com Acessórios Simples
  {
    id: "agachamento-lateral-mini-band",
    nome: "Agachamento Lateral com Mini Band",
    categoria: "acessorios-simples",
    imagem:
      "/placeholder.svg?height=360&width=360&text=Agachamento+Lateral+Mini+Band",
    descricao:
      "Exercício que adiciona resistência aos abdutores durante movimentos laterais.",
    instrucoes: [
      "Coloque uma mini band ao redor das pernas, logo acima dos joelhos ou tornozelos.",
      "Fique em pé com os pés na largura dos ombros e joelhos levemente dobrados.",
      "Dê um passo lateral, mantendo tensão na faixa.",
      "Junte o outro pé, mantendo a tensão na faixa.",
      "Continue o movimento lateral por várias repetições e depois mude de direção.",
    ],
    musculos: ["Glúteo Médio", "Abdutores", "Quadríceps"],
    equipamento: ["Mini Band"],
    nivel: "iniciante",
  },
  {
    id: "monster-walk",
    nome: "Monster Walk",
    categoria: "acessorios-simples",
    imagem: "/placeholder.svg?height=360&width=360&text=Monster+Walk",
    descricao: "Caminhada com resistência que trabalha quadríceps e glúteos.",
    instrucoes: [
      "Coloque uma mini band ao redor das pernas, logo acima dos joelhos.",
      "Fique em posição de meio-agachamento, com os pés na largura dos ombros.",
      "Dê passos para frente, mantendo os joelhos afastados e tensão na faixa.",
      "Continue caminhando para frente por várias repetições.",
      "Você também pode caminhar para trás para variar o exercício.",
    ],
    musculos: ["Glúteos", "Quadríceps", "Abdutores"],
    equipamento: ["Mini Band"],
    nivel: "iniciante",
  },
  {
    id: "double-unders",
    nome: "Double Unders",
    categoria: "acessorios-simples",
    imagem: "/placeholder.svg?height=360&width=360&text=Double+Unders",
    descricao:
      "Salto com corda onde ela passa duas vezes sob os pés em um único salto.",
    instrucoes: [
      "Segure as alças da corda com as mãos afastadas na largura dos ombros.",
      "Gire os pulsos para movimentar a corda.",
      "Salte mais alto que o normal para dar tempo da corda passar duas vezes sob seus pés.",
      "Aterrisse suavemente na ponta dos pés e repita o movimento.",
    ],
    musculos: ["Panturrilhas", "Ombros", "Core", "Antebraços"],
    equipamento: ["Corda de Pular"],
    nivel: "avancado",
  },
  {
    id: "pular-corda-alta-velocidade",
    nome: "Pular Corda em Alta Velocidade",
    categoria: "acessorios-simples",
    imagem: "/jump-rope.gif",
    descricao:
      "Saltos rápidos com corda para aumentar a frequência cardíaca e trabalhar coordenação.",
    instrucoes: [
      "Segure as alças da corda com as mãos afastadas na largura dos ombros.",
      "Mantenha os cotovelos próximos ao corpo.",
      "Salte rapidamente sobre a corda, mantendo os pés juntos.",
      "Use principalmente os pulsos para girar a corda, não os braços inteiros.",
      "Mantenha um ritmo rápido e constante por 30 segundos a 1 minuto.",
    ],
    musculos: ["Panturrilhas", "Ombros", "Core"],
    equipamento: ["Corda de Pular"],
    nivel: "intermediario",
  },
  {
    id: "slams",
    nome: "Slams",
    categoria: "acessorios-simples",
    imagem: "/placeholder.svg?height=360&width=360&text=Slams",
    descricao:
      "Arremesso da bola no chão com força, trabalhando todo o corpo de forma explosiva.",
    instrucoes: [
      "Fique em pé segurando uma medicine ball com as duas mãos.",
      "Levante a bola acima da cabeça, estendendo completamente os braços.",
      "Com força, arremesse a bola no chão à sua frente.",
      "Pegue a bola após o quique ou diretamente do chão.",
      "Repita o movimento em um ritmo constante.",
    ],
    musculos: ["Ombros", "Core", "Costas", "Braços"],
    equipamento: ["Medicine Ball"],
    nivel: "intermediario",
  },
  {
    id: "russian-twist-medicine-ball",
    nome: "Russian Twist com Medicine Ball",
    categoria: "acessorios-simples",
    imagem:
      "/placeholder.svg?height=360&width=360&text=Russian+Twist+Medicine+Ball",
    descricao:
      "Rotação do tronco com peso para trabalhar os músculos oblíquos e o core.",
    instrucoes: [
      "Sente-se no chão com os joelhos dobrados e os pés levemente elevados do solo.",
      "Segure uma medicine ball com as duas mãos à frente do peito.",
      "Incline o tronco para trás em um ângulo de aproximadamente 45 graus.",
      "Gire o tronco para um lado, tocando a bola no chão ao lado do quadril.",
      "Gire para o outro lado e repita o movimento, alternando os lados.",
    ],
    musculos: ["Oblíquos", "Reto Abdominal", "Estabilizadores"],
    equipamento: ["Medicine Ball"],
    nivel: "intermediario",
  },
  {
    id: "clean-sand-bag",
    nome: "Clean com Sand Bag",
    categoria: "acessorios-simples",
    imagem: "/placeholder.svg?height=360&width=360&text=Clean+Sand+Bag",
    descricao:
      "Levantamento explosivo da bolsa do chão até os ombros, trabalhando todo o corpo.",
    instrucoes: [
      "Posicione uma sand bag no chão à sua frente.",
      "Agache-se e segure a bolsa com as duas mãos.",
      "Levante a bolsa com um movimento explosivo, puxando-a em direção aos ombros.",
      "Receba a bolsa nos ombros, finalizando em posição de agachamento frontal.",
      "Retorne a bolsa ao chão de forma controlada e repita.",
    ],
    musculos: ["Quadríceps", "Glúteos", "Costas", "Ombros", "Core"],
    equipamento: ["Sand Bag"],
    nivel: "avancado",
  },
  {
    id: "squat-press-sand-bag",
    nome: "Squat e Press",
    categoria: "acessorios-simples",
    imagem: "/placeholder.svg?height=360&width=360&text=Squat+Press+Sand+Bag",
    descricao:
      "Combinação de agachamento com elevação da bolsa acima da cabeça.",
    instrucoes: [
      "Segure uma sand bag na altura dos ombros, próxima ao peito.",
      "Realize um agachamento completo, mantendo a bolsa na posição.",
      "Ao subir do agachamento, empurre a bolsa acima da cabeça, estendendo os braços.",
      "Retorne a bolsa à posição inicial nos ombros.",
      "Repita o movimento em sequência.",
    ],
    musculos: ["Quadríceps", "Glúteos", "Ombros", "Tríceps", "Core"],
    equipamento: ["Sand Bag"],
    nivel: "intermediario",
  },
];

// Funções para acessar os dados
export async function getCategorias(): Promise<Categoria[]> {
  // Simulando uma chamada de API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categorias);
    }, 100);
  });
}

export async function getExerciciosPorCategoria(
  categoria: string
): Promise<Exercicio[]> {
  // Simulando uma chamada de API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        exercicios.filter((exercicio) => exercicio.categoria === categoria)
      );
    }, 100);
  });
}

export async function getExercicio(
  categoria: string,
  id: string
): Promise<Exercicio | undefined> {
  // Simulando uma chamada de API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        exercicios.find(
          (exercicio) =>
            exercicio.categoria === categoria && exercicio.id === id
        )
      );
    }, 100);
  });
}

export async function getTodosExercicios(): Promise<Exercicio[]> {
  // Simulando uma chamada de API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(exercicios);
    }, 100);
  });
}

export async function getExerciciosPorMusculo(
  musculo: string
): Promise<Exercicio[]> {
  // Simulando uma chamada de API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        exercicios.filter((exercicio) =>
          exercicio.musculos.some(
            (m) => m.toLowerCase() === musculo.toLowerCase()
          )
        )
      );
    }, 100);
  });
}

export async function getExerciciosPorSubcategoria(
  categoria: string,
  subcategoria: string
): Promise<Exercicio[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        exercicios.filter((exercicio) => exercicio.categoria === categoria)
      );
    }, 100);
  });
}
