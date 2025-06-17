'use client';

import { useEffect } from 'react';

export default function StarBackground() {
  useEffect(() => {
    const canvas = document.getElementById('stars-canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    let stars: { x: number; y: number; radius: number }[] = [];
    const numStars = 200;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createStars() {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
        });
      }
    }

    function drawStars() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      ctx!.fillStyle = 'white';
      for (const star of stars) {
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx!.fill();
      }
    }

    function animateStars() {
      drawStars();
      for (const star of stars) {
        star.y += 0.15;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      }
      requestAnimationFrame(animateStars);
    }

    resizeCanvas();
    createStars();
    animateStars();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createStars();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      id="stars-canvas"
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
}
