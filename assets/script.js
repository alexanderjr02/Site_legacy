window.addEventListener('load', function() {
    // Quando a página é carregada, exibe imediatamente a animação inicial
    const conteudo = document.querySelector('.conteudo-home');
    conteudo.classList.add('show-on-scroll'); // Aplica a animação imediatamente

    const fundo = document.querySelector('.fundo');
    fundo.style.transform = 'translateX(0)'; // A imagem de fundo também aparece

    // Agora, os outros conteúdos serão animados à medida que o usuário rola
    document.addEventListener('scroll', function() {
        // Detecta a posição do conteúdo a ser animado
        const position = conteudo.getBoundingClientRect();

        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            conteudo.classList.add('show-on-scroll'); // Aplica a animação ao conteúdo
        }
    });
});
const slider = document.querySelector('.logos-clientes');
const logos = document.querySelectorAll('.logos-clientes img');

let currentIndex = Math.floor(logos.length / 2); // Começa no meio

// Função para centralizar uma imagem
function centerImage(index) {
    currentIndex = index; // Atualiza o índice atual

    logos.forEach((img, i) => {
        img.classList.remove('central', 'fora');
        if (i === currentIndex) {
            img.classList.add('central');
        } else {
            img.classList.add('fora');
        }
    });

    // Centraliza a imagem clicada
    const centralImage = logos[currentIndex];
    slider.scrollTo({
        left: centralImage.offsetLeft - (slider.offsetWidth / 2) + (centralImage.offsetWidth / 2),
        behavior: 'smooth' // Adiciona animação suave
    });
}

// Adicionando evento de clique para todas as imagens
logos.forEach((img, index) => {
    img.addEventListener('click', () => {
        centerImage(index);
    });
});

// Centraliza a imagem inicial ao carregar a página
window.addEventListener('load', () => centerImage(currentIndex));


// Função de rolagem automática para mover o carrossel
function autoScrollToNext() {
    const centralImage = document.querySelector('.logos-clientes .central');
    let nextImg = centralImage.nextElementSibling || logos[0]; // Próxima imagem ou retorna para a primeira
    centerImage(nextImg);
}

// Função para mover o carrossel para a esquerda/direita
function scrollToNext() {
    slider.scrollLeft += 350; // Movimento de rolagem para a próxima imagem, considerando o tamanho da imagem + margem
    if (slider.scrollLeft >= slider.scrollWidth - slider.offsetWidth) {
        slider.scrollLeft = 0; // Se atingiu o final, volta para o começo
    }
}


// Função para verificar a visibilidade e adicionar a classe 'visible' às seções
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.fade-in');

    sections.forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;

        // Quando a seção estiver visível na tela
        if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
