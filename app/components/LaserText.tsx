'use client';
import { useEffect, useRef } from 'react';
import '../laser.css';

interface LaserTextProps {
  text: string;
  className?: string;
  animationDelay?: number;
}

export default function LaserText({ 
  text, 
  className = 'laser-line',
  animationDelay = 200 
}: LaserTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.char');
    chars.forEach((char, index) => {
      setTimeout(() => {
        char.classList.add('active');
      }, index * animationDelay);
    });
  }, [animationDelay]);

  return (
    <div ref={containerRef} className={className}>
      {text.split('').map((char, index) => (
        <span key={index} className="char">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}