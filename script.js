const perguntas = [
  "Você gosta de trabalhar em equipe?",
  "Você se vê trabalhando com tecnologia?",
  "Você prefere trabalhar em escritório ou ao ar livre?",
  "Você gosta de resolver problemas?",
  "Você gosta de falar com pessoas?",
  "Você se imagina liderando uma equipe?",
  "Você gosta de matemática?",
  "Você prefere trabalhos criativos?",
  "Você gosta de estudar ciências?",
  "Você gosta de trabalhar com computadores?"
];

let indice = 0;

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");

// Exibe a primeira pergunta
questionContainer.innerText = perguntas[indice];

nextBtn.addEventListener("click", () => {
  indice++;

  if (indice < perguntas.length) {
    questionContainer.innerText = perguntas[indice];
  } else {
    questionContainer.innerHTML = "<h2>Teste concluído!</h2><p>Obrigado por participar.</p>";
    nextBtn.style.display = "none";
  }
});
