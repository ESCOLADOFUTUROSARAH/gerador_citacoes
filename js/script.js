// Lista de citações inspiradoras
const quotes = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Acredite que você pode, assim você já está no meio do caminho.",
    "A persistência é o caminho do êxito.",
    "A felicidade não é algo pronto. Ela é feita das suas próprias ações.",
    "A maior glória em viver não está em nunca cair, mas em se levantar toda vez que caímos.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "Seja a mudança que você deseja ver no mundo.",
    "Acredite em si mesmo e em tudo o que você é. Saiba que há algo dentro de você que é maior do que qualquer obstáculo.",
    "A vida é um mistério para ser vivido, não um problema para ser resolvido.",
    "Seja ousado, e forças poderosas virão em seu auxílio.",
    "A única coisa que a vida não pode te ensinar é a magia que você já carrega dentro de si.",
    "O caminho mais longo é muitas vezes o mais recompensador.",
    "O amor é o solvente universal; ele derrete até o mais rígido dos corações.",
    "A realidade é apenas uma opinião, o que importa é o que você faz com ela.",
    "Abra-se ao inesperado, e o mundo revelará segredos que você nem sabia que procurava.",
    "A felicidade é a habilidade de ver a magia nas pequenas coisas."
];


// Função para gerar uma citação aleatória
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}

// Exibe uma citação aleatória ao abrir a página
window.onload = generateRandomQuote;

// Adiciona evento ao botão para gerar nova citação
document.getElementById("new-quote").addEventListener("click", generateRandomQuote);
