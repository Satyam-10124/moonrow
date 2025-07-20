import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle } from 'lucide-react';

const FaqFloater = () => {
  const floaterRef = useRef(null);
  const animationFrameRef = useRef();

  const tooltipTexts = [
    "Got questions?",
    "See FAQs",
    "Need help?",
    "Tap for answers",
    "FAQ page",
    "Quick help",
    "Help center",
    "Common questions"
  ];

  const [tooltipIndex, setTooltipIndex] = useState(0);
  const [position, setPosition] = useState({ x: window.innerWidth - 80, y: window.innerHeight - 80 });
  
  const movement = useRef({
    isDragging: false,
    targetX: position.x,
    targetY: position.y,
    currentX: position.x,
    currentY: position.y,
    offsetX: 0,
    offsetY: 0,
  }).current;

  useEffect(() => {
    const textCycleInterval = setInterval(() => {
      setTooltipIndex(prevIndex => (prevIndex + 1) % tooltipTexts.length);
    }, 5000);
    return () => clearInterval(textCycleInterval);
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const rect = floaterRef.current.getBoundingClientRect();
    movement.offsetX = e.clientX - rect.left;
    movement.offsetY = e.clientY - rect.top;
    movement.isDragging = true;
    floaterRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    if (movement.isDragging) {
      movement.isDragging = false;
      floaterRef.current.style.cursor = 'grab';
      setPosition({ x: movement.currentX, y: movement.currentY });
    }
  };

  const handleMouseMove = (e) => {
    if (movement.isDragging) {
      movement.targetX = e.clientX - movement.offsetX;
      movement.targetY = e.clientY - movement.offsetY;
    }
  };

  useEffect(() => {
    const animate = () => {
      const damping = 0.15;
      movement.currentX += (movement.targetX - movement.currentX) * damping;
      movement.currentY += (movement.targetY - movement.currentY) * damping;
      if (floaterRef.current) {
        floaterRef.current.style.transform = `translate3d(${movement.currentX}px, ${movement.currentY}px, 0)`;
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animationFrameRef.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [movement]);

  return (
    <a
      ref={floaterRef}
      href="/faq"
      onMouseDown={handleMouseDown}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        backgroundImage: `
          radial-gradient(circle at 60% 30%, rgba(34, 211, 238, 0.7) 0%, transparent 50%),
          radial-gradient(circle at 40% 70%, rgba(59, 130, 246, 0.7) 0%, transparent 50%)
        `,
        cursor: 'grab',
        touchAction: 'none',
      }}
      className="group z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#0B132B] shadow-2xl shadow-black/50 border border-slate-700/80"
    >
      <HelpCircle className="text-white h-7 w-7" strokeWidth={2.5} />

      <span
        className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-slate-800 text-white text-xs font-semibold rounded-md shadow-lg
                       whitespace-nowrap animate-pulse-tooltip"
        style={{ transformOrigin: 'center right' }}
      >
        {tooltipTexts[tooltipIndex]}
        
        <span className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-r-4 border-r-slate-800"></span>
      </span>
    </a>
  );
};

export default FaqFloater;