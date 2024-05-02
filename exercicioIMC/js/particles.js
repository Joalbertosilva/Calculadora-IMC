function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numStars = 200; // Altere o número de estrelas conforme necessário

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
        star.style.top = Math.random() * 100 + 'vh'; // Posição vertical aleatória
        star.style.animationDelay = Math.random() * 5 + 's'; // Atraso de animação aleatório
        star.style.animationDuration = Math.random() * 3 + 's'; // Duração de animação aleatória
        starsContainer.appendChild(star);
    }
}

createStars();