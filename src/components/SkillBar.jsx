import '../styles/characters.css';

export default function SkillBar({ label, value, max = 10 }) {
  const percentage = (value / max) * 100;
  const level =
    value >= 8 ? 'high' : value >= 5 ? 'medium' : 'low';

  return (
    <div className="skill-bar">
      <span className="skill-bar__label">{label}</span>
      <div className="skill-bar__track">
        <div
          className={`skill-bar__fill skill-bar__fill--${level}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="skill-bar__value">{value}</span>
    </div>
  );
}
