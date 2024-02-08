const perguntas = [
    {
        pergunta: "Qual é a função do operador `typeof` em JavaScript?",
        respostas: [
            "Determinar se um elemento HTML está visível",
            "Verificar o tipo de dado de uma variável",
            "Definir a cor de fundo de uma página da web",
        ],
        correta: 1 // Resposta B é a correta
    },
    {
        pergunta: "O que é uma função de callback em JavaScript?",
        respostas: [
            "Uma função que chama a si mesma",
            "Uma função que é passada como argumento para outra função e executada posteriormente",
            "Uma função que é usada para calcular a média de uma matriz de números",
        ],
        correta: 1 // Resposta B é a correta
    },
    {
        pergunta: "Qual é a diferença entre `==` e `===` em JavaScript?",
        respostas: [
            "Não há diferença entre eles",
            "`==` verifica a igualdade de valor e tipo, enquanto `===` verifica apenas a igualdade de valor",
            "`==` verifica apenas a igualdade de valor, enquanto `===` verifica a igualdade de valor e tipo",
        ],
        correta: 2 // Resposta C é a correta
    },
    {
        pergunta: "Como você pode declarar uma variável em JavaScript?",
        respostas: [
            "Usando a palavra-chave `define`",
            "Usando a palavra-chave `let`, `var`, ou `const`",
            "Atribuindo um valor diretamente sem declarar",
        ],
        correta: 1 // Resposta B é a correta
    },
    {
        pergunta: "O que é um array em JavaScript?",
        respostas: [
            "Um tipo de dado que armazena apenas um valor",
            "Uma coleção ordenada de valores, onde cada valor é identificado por um índice",
            "Uma função que executa uma operação em cada elemento de um objeto",
        ],
        correta: 1 // Resposta B é a correta
    },
    {
        pergunta: "Qual é a função do método `querySelector`?",
        respostas: [
            "Selecionar um elemento HTML com base em sua classe",
            "Selecionar um elemento HTML com base em seu ID",
            "Selecionar um elemento HTML com base em um seletor CSS",
        ],
        correta: 2 // Resposta C é a correta
    },
    {
        pergunta: "O que é o conceito de escopo em JavaScript?",
        respostas: [
            "É a área visível de uma página da web",
            "É o conjunto de variáveis e funções que estão acessíveis em uma determinada parte do código",
            "É a maneira como JavaScript estiliza elementos HTML",
        ],
        correta: 1 // Resposta B é a correta
    },
    {
        pergunta: "O que é uma variável de escopo global em JavaScript?",
        respostas: [
            "Uma variável declarada dentro de uma função",
            "Uma variável acessível em qualquer parte do código",
            "Uma variável que só pode ser acessada dentro do bloco de código onde foi declarada",
        ],
        correta: 1 // Resposta B é a correta
    },
    {
        pergunta: "Como você pode comentar seu código em JavaScript?",
        respostas: [
            "Usando `//` para comentários de uma linha e `/* */` para comentários de várias linhas",
            "Usando `#` para comentários de uma linha e `<!-- -->` para comentários de várias linhas",
            "Não é possível comentar em JavaScript",
        ],
        correta: 0 // Resposta A é a correta
    },
    {
        pergunta: "O que é uma expressão regular em JavaScript?",
        respostas: [
            "Uma expressão matemática",
            "Um padrão de pesquisa que pode ser usado para encontrar correspondências em strings",
            "Uma função pré-definida para realizar cálculos complexos",
        ],
        correta: 1 // Resposta B é a correta
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas =  perguntas.length
const mostrarTotal =document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


// loop
for(const item of perguntas) {
    
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()


    // coloca as perguntas na tela
    quiz.appendChild(quizItem)
}