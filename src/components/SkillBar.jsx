import '../styles/characters.css';

const SHORT_LABELS = {
  'força': 'F',
  'velocitat': 'V',
  'resistència': 'R',
  'precisió': 'P',
  'treball en equip': 'TE',
};

export default function SkillBar({ label, value, max = 10, compact = false }) {
  const percentage = (value / max) * 100;
  const level =
    value >= 8 ? 'high' : value >= 5 ? 'medium' : 'low';

  const displayLabel = compact ? (SHORT_LABELS[label] || label.charAt(0).toUpperCase()) : label;

  return (
    <div className={`skill-bar ${compact ? 'skill-bar--compact' : ''}`}>
      <span className="skill-bar__label">{displayLabel}</span>
      <div className="skill-bar__track">
        <div
          className={`skill-bar__fill skill-bar__fill--${level}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {!compact && <span className="skill-bar__value">{value}</span>}
    </div>
  );
}
