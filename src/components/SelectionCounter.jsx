import '../styles/scenario.css';

export default function SelectionCounter({ current, total }) {
  return (
    <div className="selection-counter">
      <span className="selection-counter__text">
        Has triat <strong>{current}</strong> de <strong>{total}</strong>
      </span>
      <div className="selection-counter__dots">
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`selection-counter__dot ${i < current ? 'selection-counter__dot--filled' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
