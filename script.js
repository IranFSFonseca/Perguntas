const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você prefere lidar com problemas abstratos e lógicos, questões sociais e culturais, ou fenômenos naturais?",
        alternativas: [
            { texto: "Problemas abstratos e lógicos.", area: "exatas" },
            { texto: "Questões sociais e culturais.", area: "humanas" },
            { texto: "Fenômenos naturais e suas explicações.", area: "natureza" }
        ]
    },
    {
        enunciado: "Quando você enfrenta um desafio, qual é sua abordagem principal?",
        alternativas: [
            { texto: "Analiso logicamente e divido o problema em partes.", area: "exatas" },
            { texto: "Considero o impacto humano e ético das soluções.", area: "humanas" },
            { texto: "Observo o fenômeno e busco explicações científicas.", area: "natureza" }
        ]
    },
    {
        enunciado: "Você prefere trabalhar em um ambiente técnico, social ou científico?",
        alternativas: [
            { texto: "Técnico, onde posso resolver problemas e criar soluções.", area: "exatas" },
            { texto: "Social, interagindo com pessoas e comunidades.", area: "humanas" },
            { texto: "Científico, investigando e descobrindo novos conhecimentos.", area: "natureza" }
        ]
    },
    {
        enunciado: "Qual cenário mais lhe atrai profissionalmente?",
        alternativas: [
            { texto: "Desenvolver tecnologias inovadoras.", area: "exatas" },
            { texto: "Entender e melhorar a condição humana.", area: "humanas" },
            { texto: "Investigar o mundo natural.", area: "natureza" }
        ]
    },
    {
        enunciado: "Como você prefere resolver um problema?",
        alternativas: [
            { texto: "Usando raciocínio lógico e dados.", area: "exatas" },
            { texto: "Considerando as pessoas envolvidas.", area: "humanas" },
            { texto: "Testando hipóteses e experimentando.", area: "natureza" }
        ]
    }
];

let atual = 0;
let exatas = 0;
let humanas = 0;
let natureza = 0;

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => respostaSelecionada(alternativa.area));
        caixaAlternativas.appendChild(botao);
    });
}

function respostaSelecionada(area) {
    if (area === "exatas") exatas++;
    if (area === "humanas") humanas++;
    if (area === "natureza") natureza++;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    let resultadoFinal = "";
    
    if (exatas > humanas && exatas > natureza) {
        resultadoFinal = "Você demonstra uma forte aptidão para áreas de Exatas, como Engenharia, Matemática ou Computação. Essas áreas requerem um pensamento lógico e estruturado, voltado para a resolução de problemas complexos através de métodos analíticos e precisos.";
    } else if (humanas > exatas && humanas > natureza) {
        resultadoFinal = "Você possui grande afinidade com as Ciências Humanas, como Psicologia, Direito ou Filosofia. Essas áreas focam em entender a mente humana, a sociedade e as interações sociais, trazendo um impacto significativo nas relações interpessoais e nas políticas sociais.";
    } else if (natureza > exatas && natureza > humanas) {
        resultadoFinal = "Seu interesse é voltado para as Ciências da Natureza, como Biologia, Medicina ou Física. Nessas áreas, você se concentra em explorar o mundo natural, compreender seus fenômenos e contribuir para o avanço da ciência e da saúde.";
    } else if (exatas === humanas && exatas > natureza) {
        resultadoFinal = "Você tem uma combinação equilibrada entre Exatas e Humanas, o que sugere uma afinidade por carreiras como Arquitetura, Economia ou Psicologia Organizacional. Nessas profissões, é essencial unir o pensamento lógico e analítico com a compreensão das necessidades humanas e sociais.";
    } else if (exatas === natureza && exatas > humanas) {
        resultadoFinal = "Você tem uma combinação de habilidades em Exatas e Ciências da Natureza, o que sugere carreiras como Engenharia Ambiental, Bioinformática ou Engenharia Biomédica. Essas profissões demandam o uso de lógica e tecnologia para resolver problemas relacionados ao meio ambiente e à saúde.";
    } else if (humanas === natureza && humanas > exatas) {
        resultadoFinal = "Seu perfil indica uma mistura de Humanas e Ciências da Natureza, sugerindo profissões como Psicologia Clínica, Saúde Pública ou Direito Ambiental. Essas áreas se preocupam com o bem-estar humano, mas também envolvem conhecimento científico e o entendimento dos fenômenos naturais.";
    } else {
        resultadoFinal = "Você tem interesses equilibrados em várias áreas, o que abre portas para diversas carreiras interdisciplinares. Considere profissões que combinem Exatas, Humanas e Ciências da Natureza, como Sustentabilidade, Planejamento Urbano ou Desenvolvimento Tecnológico voltado para impacto social.";
    }
    
    caixaPerguntas.textContent = "Resultado:";
    textoResultado.textContent = resultadoFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
