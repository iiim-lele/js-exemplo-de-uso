// seleciona todos os slides e os botões de navegação
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentSlide = 0; // Índice do slide atual
let autoSlideInterval; // Variável para armazenar o intervalo de transição automática

// função para exibir um slide específico

function showSlide(index) {
  slides.forEach((slide, i)=> {
    // adiciona a classe 'active' ao slide atual e remove dos demais
    slide.classList.toggle('active', i === index);
  })
}

// função para avançar para o próximo slide
function nextSlide () {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// função para voltar ao slide anterior
function prevSlide () {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// função para iniciar a transição automática de slides
function startAutoSlide() {
  // troca de slide a cada 5 segundos
  autoSlideInterval = setInterval(nextSlide, 5000); 
}

// função para parar a transição automática de slides
function stopAutoSlide() {
  clearInterval(autoSlideInterval); // Limpa o intervalo
}

// adiciona um evento de clique ao botão "Anterior"
prevButton.addEventListener('click', () => {
  // Exibe o próximo slide
  prevSlide(); 
  // Pausa a transição automática
  stopAutoSlide(); 
  // Reinicia a transição automática
  startAutoSlide(); 
});

// Adiciona um evento de clique ao botão "Próximo"
nextButton.addEventListener('click', () => {
  // Exibe o próximo slide
  nextSlide(); 
  // Pausa a transição automática
  stopAutoSlide(); 
  // Reinicia a transição automática
  startAutoSlide(); 
})
;

