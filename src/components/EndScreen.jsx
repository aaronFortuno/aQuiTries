import '../styles/global.css';

export default function EndScreen({ selections, onRestart }) {
  const totalMale = selections.reduce(
    (sum, s) => sum + s.selected.filter(c => c.sex === 'home').length,
    0
  );
  const totalFemale = selections.reduce(
    (sum, s) => sum + s.selected.filter(c => c.sex === 'dona').length,
    0
  );
  const totalSelected = totalMale + totalFemale;

  return (
    <div className="end-screen">
      <div className="end-screen__content">
        <h1 className="end-screen__title">Resum de la sessió</h1>

        <div className="end-screen__stats">
          <div className="end-screen__stat">
            <span className="end-screen__stat-number">{totalSelected}</span>
            <span className="end-screen__stat-label">persones triades</span>
          </div>
          <div className="end-screen__stat">
            <span className="end-screen__stat-number">{totalMale}</span>
            <span className="end-screen__stat-label">homes</span>
          </div>
          <div className="end-screen__stat">
            <span className="end-screen__stat-number">{totalFemale}</span>
            <span className="end-screen__stat-label">dones</span>
          </div>
        </div>

        <div className="end-screen__bar">
          <div
            className="end-screen__bar-male"
            style={{ width: totalSelected > 0 ? `${(totalMale / totalSelected) * 100}%` : '50%' }}
          >
            {totalSelected > 0 && `${Math.round((totalMale / totalSelected) * 100)}%`}
          </div>
          <div
            className="end-screen__bar-female"
            style={{ width: totalSelected > 0 ? `${(totalFemale / totalSelected) * 100}%` : '50%' }}
          >
            {totalSelected > 0 && `${Math.round((totalFemale / totalSelected) * 100)}%`}
          </div>
        </div>
        <div className="end-screen__bar-legend">
          <span>Homes</span>
          <span>Dones</span>
        </div>

        <div className="end-screen__scenarios">
          {selections.map((s, i) => {
            const males = s.selected.filter(c => c.sex === 'home').length;
            const females = s.selected.filter(c => c.sex === 'dona').length;
            return (
              <div key={i} className="end-screen__scenario">
                <h3>{s.scenarioTitle}</h3>
                <p>
                  {s.selected.map(c => c.name).join(', ')}
                  {' '}
                  <span className="end-screen__gender-tag">
                    ({males}H / {females}D)
                  </span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="end-screen__message">
          <p>
            Recordeu: les habilitats de les persones no depenen del seu gènere.
            El que importa és el que saben fer, no qui són.
          </p>
        </div>

        <button className="end-screen__button" onClick={onRestart}>
          Tornar a començar
        </button>
      </div>
    </div>
  );
}
