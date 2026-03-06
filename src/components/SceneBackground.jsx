import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import '../styles/background.css';

export default function SceneBackground({ images, interval = 5000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const isSingle = images.length <= 1;

  useEffect(() => {
    if (isSingle) return;
    timerRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [images, interval, isSingle]);

  return createPortal(
    <div className="scene-bg" aria-hidden="true">
      {images.map((src, i) => (
        <div
          key={src}
          className={`scene-bg__layer ${i === activeIndex ? 'scene-bg__layer--active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="scene-bg__overlay" />
    </div>,
    document.body
  );
}
