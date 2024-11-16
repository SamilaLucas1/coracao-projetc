document.getElementById('playButton').addEventListener('click', function() {
    const music = document.getElementById('music');
    music.play();
  
    // Cria corações flutuantes a cada 200ms
    const interval = setInterval(createHeart, 200);
  
    // Para o intervalo após 10 segundos
    setTimeout(() => clearInterval(interval), 10000);
  });
  
  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
  
    // Define posição e duração aleatórias
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`;
  
    document.body.appendChild(heart);
  
    // Remove o coração após a animação
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  