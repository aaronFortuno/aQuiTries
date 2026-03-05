import '../styles/global.css';

export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <div className="start-screen__content">
        <h1 className="start-screen__title">A qui tries?</h1>
        <p className="start-screen__subtitle">
          Un joc per pensar sobre com triem les persones
        </p>
        <div className="start-screen__description">
          <p>
            Se't presentaran diferents situacions on hauràs de triar persones
            per fer una tasca concreta.
          </p>
          <p>
            Fixa't bé en les habilitats de cada persona abans de decidir!
          </p>
        </div>
        <button className="start-screen__button" onClick={onStart}>
          Començar
        </button>
      </div>
    </div>
  );
}
