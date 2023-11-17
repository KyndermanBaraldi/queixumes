import React, { useEffect, useRef, useState } from 'react';

const DinoGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dino = useRef<{ x: number; y: number; velocity: number; jumping: boolean }>({
    x: 50,
    y: 150,
    velocity: 0,
    jumping: false,
  });
  const obstacle = useRef<{ x: number; y: number; text: string; speed: number }>({
    x: 300,
    y: 150,
    text: 'queixunes',
    speed: -3,
  });
  const [gameRunning, setGameRunning] = useState(false);
  const dinoImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    let _gameRunning = gameRunning;

    const gravity = 0.25;
    let score = 0;

    const jump = () => {
      if (!dino.current.jumping) {
        dino.current.velocity = -8;
        dino.current.jumping = true;
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.key === ' ' || event.key === 'Spacebar' || event.key === 'ArrowUp') && !dino.current.jumping) {
        jump();
      }
    };

    const update = () => {
      // Atualize a posição do dinossauro
      dino.current.y += dino.current.velocity;
      dino.current.velocity += gravity;

      // Atualize a posição do obstáculo
      obstacle.current.x += obstacle.current.speed;

      // Verifique se o dinossauro atingiu o chão
      if (dino.current.y > 150) {
        dino.current.y = 150;
        dino.current.velocity = 0;
        dino.current.jumping = false;
      }

      // Verifique se o obstáculo saiu da tela
      if (obstacle.current.x + context!.measureText(obstacle.current.text).width < 0) {
        obstacle.current.x = canvas!.width;
        score += 1;
        // obstacle.current.text = 'queixumes: ' + score.toString();
      }

      // Verifique se houve uma colisão
      if (
        dino.current.x < obstacle.current.x + context!.measureText(obstacle.current.text).width &&
        dino.current.x + 20 > obstacle.current.x &&
        dino.current.y < obstacle.current.y + 20 &&
        dino.current.y + 20 > obstacle.current.y &&
        _gameRunning
      ) {
        _gameRunning = false;
        if (context) {
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillText('Game Over!', canvas!.width/2, canvas!.height/2 - 20);
          context.font = '12px Arial';
          context.fillText('Você pretende ser Auditor com essa nota: ' + score, canvas!.width/2, canvas!.height/2 + 20);
        }
        setTimeout(() => {
          window.location.reload(); // Reinicia o jogo ao detectar uma colisão
          setGameRunning(_gameRunning);
        }, 3000);
      }

      if (
        score >= 30
      ) {
        _gameRunning = false;
        if (context) {
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillText('Parabéns, Auditor!', canvas!.width/2, canvas!.height/2 - 20);
          // context.font = '12px Arial';
          context.fillText('Trintou', canvas!.width/2, canvas!.height/2 + 20);
        }
        setTimeout(() => {
          window.location.reload(); // Reinicia o jogo ao detectar uma colisão
          setGameRunning(_gameRunning);
        }, 3000);
      }

    };

    const draw = () => {
      if (_gameRunning) {
        // Limpe o canvas
        context?.clearRect(0, 0, canvas!.width, canvas!.height);

        // Desenhe o dinossauro
        if (dinoImageRef.current) {
          context?.drawImage(dinoImageRef.current, dino.current.x, dino.current.y - 24, 48, 48);
        }

        if (context) {
          context.fillStyle = 'white';
          context.font = '20px Arial';
        }

        // Desenhe o obstáculo (pontuação)
        context?.fillText(obstacle.current.text, obstacle.current.x, obstacle.current.y);

        context?.fillText(score.toString(), canvas!.width - 20, 30);

      // Chame a função de atualização e desenho em cada quadro
      
        requestAnimationFrame(() => {
          update();
          draw();
        });

      }
    };

    // Adicione um evento de clique para pular
    document.addEventListener('click', jump);
    // Adicione eventos de teclado para pular
    document.addEventListener('keydown', handleKeyDown);

    // Carregue a imagem do dinossauro
    const loadImage = () => {
      const image = new Image();
      image.src = '/dino-game/DinoSprites_doux.gif'; // Substitua pelo caminho correto da sua imagem
      image.onload = () => {
        dinoImageRef.current = image;
        draw(); // Redesenha o canvas após carregar a imagem
      };
    };

    loadImage();

    // Inicie o loop do jogo
    draw();

    // Remova o evento de clique ao desmontar o componente
    return () => {
      document.removeEventListener('click', jump);
      document.removeEventListener('keydown', handleKeyDown);
    };

    
  }, [gameRunning]);

  const startGame = () => {
    setGameRunning(true);
  };

  return (
    <div className='play-area'>
      {gameRunning && <canvas ref={canvasRef} width={300} height={200} />}
      {!gameRunning && <button className='play-game' onClick={startGame}>Iniciar Jogo</button>}
    </div>
  );
};

export default DinoGame;

