// Neutral earthy clothing palette — no gender-coded colors
const SHIRT_COLORS = ['#6B7B3A', '#8B7355', '#7B8B6F', '#A0926B', '#6B8B8B', '#8B6B55', '#7A7A6B', '#6B7B6B'];
const PANTS_COLORS = ['#5C5040', '#4A5040', '#5A5A50', '#4B4030', '#3E4A3E', '#504A40'];
const SKIN_TONES = ['#D4A574', '#C8A882', '#DEB896', '#C49A6C', '#E0C8A8'];
const HAIR_COLORS = ['#4A3728', '#6B3A2A', '#3B2A1A', '#5C4033', '#2E1F12', '#7A5C44'];

const BUILD_SCALE = {
  prim: { torsoW: 16, shoulderW: 18, legGap: 3 },
  'atlètic': { torsoW: 20, shoulderW: 24, legGap: 4 },
  robust: { torsoW: 24, shoulderW: 28, legGap: 5 },
};

// Deterministic pseudo-random from character id
function hashId(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) {
    h = ((h << 5) - h + id.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function pick(arr, seed) {
  return arr[seed % arr.length];
}

export default function GeneratedAvatar({ id, build, age, height, hair }) {
  const seed = hashId(id || 'default');
  const scale = BUILD_SCALE[build] || BUILD_SCALE['atlètic'];

  // Deterministic color picks based on character id
  const skinColor = pick(SKIN_TONES, seed);
  const shirtColor = pick(SHIRT_COLORS, seed + 1);
  const pantsColor = pick(PANTS_COLORS, seed + 2);
  const isOlder = age > 45;
  const hairColor = isOlder ? '#999' : pick(HAIR_COLORS, seed + 3);

  // Height affects leg length: taller = longer legs
  const minH = 155, maxH = 195;
  const hNorm = Math.max(0, Math.min(1, ((height || 175) - minH) / (maxH - minH)));
  const legLen = 30 + hNorm * 16; // 30..46

  // Head size: slightly smaller for older characters
  const headR = age < 20 ? 10 : 9;

  // Body dimensions from build
  const { torsoW, shoulderW, legGap } = scale;
  const torsoH = 28;
  const cx = 30; // center x

  // Y positions
  const headCy = 18;
  const neckY = headCy + headR;
  const neckH = 5;
  const shoulderY = neckY + neckH;
  const torsoY = shoulderY;
  const legY = torsoY + torsoH;
  const totalH = legY + legLen + 4;

  // Leg dimensions
  const legW = torsoW * 0.32;
  const leftLegX = cx - legGap - legW;
  const rightLegX = cx + legGap;

  // Hair type
  const hairType = hair || 'mig';

  // Arm positions
  const armW = 5;
  const armLen = torsoH * 0.75;
  const armY = shoulderY + 3;

  return (
    <svg className="avatar__svg" viewBox={`0 0 60 ${totalH}`} xmlns="http://www.w3.org/2000/svg">
      {/* Legs */}
      <rect x={leftLegX} y={legY} width={legW} height={legLen} rx={legW / 2} fill={pantsColor} />
      <rect x={rightLegX} y={legY} width={legW} height={legLen} rx={legW / 2} fill={pantsColor} />

      {/* Shoes */}
      <ellipse cx={leftLegX + legW / 2} cy={legY + legLen} rx={legW / 2 + 1.5} ry={3} fill="#3A3A3A" />
      <ellipse cx={rightLegX + legW / 2} cy={legY + legLen} rx={legW / 2 + 1.5} ry={3} fill="#3A3A3A" />

      {/* Torso */}
      <rect x={cx - torsoW / 2} y={torsoY} width={torsoW} height={torsoH} rx={4} fill={shirtColor} />

      {/* Shoulders */}
      <rect x={cx - shoulderW / 2} y={shoulderY} width={shoulderW} height={10} rx={5} fill={shirtColor} />

      {/* Arms */}
      <rect x={cx - shoulderW / 2 - armW + 2} y={armY} width={armW} height={armLen} rx={armW / 2} fill={skinColor} />
      <rect x={cx + shoulderW / 2 - 2} y={armY} width={armW} height={armLen} rx={armW / 2} fill={skinColor} />

      {/* Neck */}
      <rect x={cx - 3} y={neckY} width={6} height={neckH} rx={2} fill={skinColor} />

      {/* Head */}
      <circle cx={cx} cy={headCy} r={headR} fill={skinColor} />

      {/* Hair */}
      {hairType === 'curt' && (
        <ellipse cx={cx} cy={headCy - 3} rx={headR} ry={headR * 0.6} fill={hairColor} />
      )}
      {hairType === 'mig' && (
        <>
          <ellipse cx={cx} cy={headCy - 3} rx={headR} ry={headR * 0.65} fill={hairColor} />
          <rect x={cx - headR} y={headCy - 2} width={headR * 2} height={headR * 0.7} rx={3} fill={hairColor} />
        </>
      )}
      {hairType === 'llarg' && (
        <>
          <ellipse cx={cx} cy={headCy - 3} rx={headR + 1} ry={headR * 0.7} fill={hairColor} />
          <rect x={cx - headR - 1} y={headCy - 2} width={(headR + 1) * 2} height={headR + neckH + 4} rx={4} fill={hairColor} opacity={0.85} />
        </>
      )}
      {hairType === 'recollit' && (
        <>
          <ellipse cx={cx} cy={headCy - 3} rx={headR} ry={headR * 0.6} fill={hairColor} />
          <circle cx={cx} cy={headCy - headR - 2} r={4} fill={hairColor} />
        </>
      )}

      {/* Eyes */}
      <circle cx={cx - 3} cy={headCy} r={1.3} fill="#333" />
      <circle cx={cx + 3} cy={headCy} r={1.3} fill="#333" />

      {/* Mouth */}
      <path d={`M ${cx - 2.5} ${headCy + 3.5} Q ${cx} ${headCy + 5.5} ${cx + 2.5} ${headCy + 3.5}`} stroke="#333" fill="none" strokeWidth="0.8" />
    </svg>
  );
}
