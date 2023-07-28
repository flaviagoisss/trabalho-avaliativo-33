
const quotes = [
    {
      quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
      author: "John Lennon"
    },
    {
      quote: "Não é a força, mas a constância dos bons sentimentos que conduz os homens à felicidade.",
      author: "Friedrich Nietzsche"
    },
    {
      quote: "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
      author: "Henry Ford"
    },
    {
        quote: "A persistência é o caminho do êxito.",
        author: "Charles Chaplin"
      },
      {
        quote: "O sucesso é ir de fracasso em fracasso sem perder entusiasmo.",
        author: "Winston Churchill"
      },
      {
        quote: "A vida é uma viagem, não um destino.",
        author: "Ralph Waldo Emerson"
      },
      {
        quote: "O que não provoca minha morte faz com que eu fique mais forte.",
        author: "Friedrich Nietzsche"
      },
      {
        quote: "Não espere por uma crise para descobrir o que é importante em sua vida.",
        author: "Platão"
      },
      {
        quote: "A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro.",
        author: "Nathaniel Hawthorne"
      },
      {
        quote: "A vida é o que acontece enquanto você está fazendo outros planos.",
        author: "Allen Saunders"
      },
      {
        quote: "O maior prazer na vida é fazer o que as pessoas dizem que você não é capaz de fazer.",
        author: "Walter Bagehot"
      },
      {
        quote: "A mente é tudo. Você se torna aquilo que pensa.",
        author: "Buda"
      },
      {
        quote: "Se você quer ser bem-sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si mesmo.",
        author: "Ayrton Senna"
      },
      {
        quote: "Não importa o que você decidiu. O que importa é que isso te faça feliz.",
        author: "Abraham Lincoln"
      },
      {
        quote: "Acredito que um dos maiores dons da vida é a amizade e que um dos maiores dons dessa amizade é ter alguém especial como você.",
        author: "Desconhecido"
      },
      {
        quote: "O verdadeiro homem mede a sua força quando se defronta com o obstáculo.",
        author: "Antoine de Saint-Exupéry"
      },
      {
        quote: "Não existe um caminho para a felicidade. A felicidade é o caminho.",
        author: "Mahatma Gandhi"
      },
      {
        quote: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
        author: "John Lennon"
      },
      {
        quote: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
        author: "Albert Einstein"
      },
      {
        quote: "Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos.",
        author: "James Cameron"
      },
      {
        quote: "A persistência é o caminho do êxito.",
        author: "Charles Chaplin"
      },
      {
        quote: "O sucesso é ir de fracasso em fracasso sem perder entusiasmo.",
        author: "Winston Churchill"
      },
      {
        quote: "A vida é uma viagem, não um destino.",
        author: "Ralph Waldo Emerson"
      },
      {
        quote: "O que não provoca minha morte faz com que eu fique mais forte.",
        author: "Friedrich Nietzsche"
      },
      {
        quote: "Não espere por uma crise para descobrir o que é importante em sua vida.",
        author: "Platão"
      },
      {
        quote: "A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro.",
        author: "Nathaniel Hawthorne"
      },
      {
        quote: "A vida é o que acontece enquanto você está fazendo outros planos.",
        author: "Allen Saunders"
      },
      {
        quote: "O maior prazer na vida é fazer o que as pessoas dizem que você não é capaz de fazer.",
        author: "Walter Bagehot"
      },
      {
        quote: "A mente é tudo. Você se torna aquilo que pensa.",
        author: "Buda"
      },
      {
        quote: "Se você quer ser bem-sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si mesmo.",
        author: "Ayrton Senna"
      },
      {
        quote: "Não importa o que você decidiu. O que importa é que isso te faça feliz.",
        author: "Abraham Lincoln"
      },
      {
        quote: "Acredito que um dos maiores dons da vida é a amizade e que um dos maiores dons dessa amizade é ter alguém especial como você.",
        author: "Desconhecido"
      },
      {
        quote: "O verdadeiro homem mede a sua força quando se defronta com o obstáculo.",
        author: "Antoine de Saint-Exupéry"
      },
      {
        quote: "Não existe um caminho para a felicidade. A felicidade é o caminho.",
        author: "Mahatma Gandhi"
      },
      {
        quote: "A sorte favorece a mente bem preparada.",
        author: "Louis Pasteur"
      },
      {
        quote: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
        author: "Eleanor Roosevelt"
      },
      {
        quote: "A alegria está na luta, na tentativa, no sofrimento envolvido. Não na vitória propriamente dita.",
        author: "Mahatma Gandhi"
      },
      {
        quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        author: "Robert Collier"
      },
      {
        quote: "O verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os detalhes da vida cotidiana.",
        author: "William Morris"
      },
      {
        quote: "A única maneira de alcançar o impossível é acreditar que é possível.",
        author: "Charles Kingsleigh (Alice no País das Maravilhas)"
      },
      {
        quote: "Seja a mudança que você quer ver no mundo.",
        author: "Mahatma Gandhi"
      },
      {
        quote: "Nunca tenha medo de tentar algo novo. Lembre-se de que um amador solitário construiu a Arca. Um grande grupo de profissionais construiu o Titanic.",
        author: "Dave Barry"
      },
      {
        quote: "Quando tudo parecer estar indo contra você, lembre-se de que o avião decola contra o vento, não a favor dele.",
        author: "Henry Ford"
      },
      {
        quote: "A imaginação é mais importante que o conhecimento. O conhecimento é limitado. A imaginação circunda o mundo.",
        author: "Albert Einstein"
      },
      {
        quote: "O pessimista vê dificuldade em cada oportunidade; o otimista vê oportunidade em cada dificuldade.",
        author: "Winston Churchill"
      },
      {
        quote: "O sucesso é a capacidade de ir de fracasso em fracasso sem perder o entusiasmo.",
        author: "Winston Churchill"
      },
      {
        quote: "A vida é 10% do que acontece comigo e 90% de como eu reajo a isso.",
        author: "John Maxwell"
      },
      {
        quote: "O que me preocupa não é o grito dos maus. É o silêncio dos bons.",
        author: "Martin Luther King Jr."
      },
      {
        quote: "A única maneira de alcançar o impossível é acreditar que é possível.",
        author: "Charles Kingsleigh (Alice no País das Maravilhas)"
      },
      {
        quote: "Você é livre para fazer suas escolhas, mas é prisioneiro das consequências.",
        author: "Pablo Neruda"
      },
      {
        quote: "A vida é uma tragédia quando vista de perto, mas uma comédia quando vista de longe.",
        author: "Charlie Chaplin"
      },
      {
        quote: "O sucesso não consiste em não errar, mas em não cometer os mesmos equívocos mais de uma vez.",
        author: "George Bernard Shaw"
      },
      {
        quote: "Não espere por uma crise para descobrir o que é importante em sua vida.",
        author: "Platão"
      },
      {
        quote: "A coragem é a resistência e o domínio do medo, não a ausência dele.",
        author: "Mark Twain"
        
      },
      {
        quote: "Você nunca sabe a força que tem. Até que a sua única alternativa é ser forte.",
        author: "Johnny Depp"
      },
      {
        quote: "O segredo para ficar à frente.",
        author: "jonny depp"
      }
    
      
    
    // Adicione mais citações à lista
  ];
  
  const quoteDisplay = document.getElementById('quoteDisplay');
  const authorDisplay = document.getElementById('authorDisplay');
  const newQuoteButton = document.getElementById('newQuoteButton');
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = `- ${randomQuote.author}`;
  }
  
  newQuoteButton.addEventListener('click', generateRandomQuote);
  
  // Exibir uma citação aleatória ao carregar a página
  generateRandomQuote();
  
  
  