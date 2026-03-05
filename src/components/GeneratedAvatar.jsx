const COLORS = {
  home: { skin: '#D4A574', hair: '#4A3728', shirt: '#5B8FB9' },
  dona: { skin: '#E8C4A0', hair: '#6B3A2A', shirt: '#B95B8F' },
};

const BUILD_SCALE = {
  prim: { width: 0.8, shoulder: 0.85 },
  atlètic: { width: 1, shoulder: 1 },
  robust: { width: 1.15, shoulder: 1.15 },
};

export default function GeneratedAvatar({ sex, build, age }) {
  const colors = COLORS[sex] || COLORS.home;
  const scale = BUILD_SCALE[build] || BUILD_SCALE.atlètic;
  const isOlder = age > 40;
  const hairColor = isOlder ? '#888' : colors.hair;

  const bodyWidth = 30 * scale.width;
  const shoulderWidth = 35 * scale.shoulder;

  return (
    <svg className="avatar__svg" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="40" cy="62" rx={bodyWidth / 2} ry="18" fill={colors.shirt} />
      {/* Shoulders */}
      <rect
        x={40 - shoulderWidth / 2}
        y="44"
        width={shoulderWidth}
        height="12"
        rx="6"
        fill={colors.shirt}
      />
      {/* Neck */}
      <rect x="36" y="36" width="8" height="10" rx="3" fill={colors.skin} />
      {/* Head */}
      <circle cx="40" cy="28" r="16" fill={colors.skin} />
      {/* Hair */}
      <ellipse cx="40" cy="20" rx="16" ry="10" fill={hairColor} />
      {sex === 'dona' && (
        <ellipse cx="40" cy="24" rx="17" ry="8" fill={hairColor} opacity="0.5" />
      )}
      {/* Eyes */}
      <circle cx="34" cy="28" r="2" fill="#333" />
      <circle cx="46" cy="28" r="2" fill="#333" />
      {/* Mouth */}
      <path d="M 36 34 Q 40 37 44 34" stroke="#333" fill="none" strokeWidth="1.2" />
    </svg>
  );
}
