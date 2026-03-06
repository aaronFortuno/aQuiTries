import { useTranslation } from '../i18n';
import '../styles/characters.css';

export default function SkillBar({ label, value, max = 10, compact = false }) {
  const { t } = useTranslation();
  const percentage = (value / max) * 100;
  const level =
    value >= 8 ? 'high' : value >= 5 ? 'medium' : 'low';

  const shortLabel = compact ? (t(`skillsShort.${label}`) || label.charAt(0).toUpperCase()) : label;

  return (
    <div className={`skill-bar ${compact ? 'skill-bar--compact' : ''}`}>
      <span className="skill-bar__label">{shortLabel}</span>
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
