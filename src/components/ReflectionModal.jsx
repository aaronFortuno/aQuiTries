import '../styles/modal.css';

export default function ReflectionModal({ scenario, selectedCharacters, onNext, isLast }) {
  const maleCount = selectedCharacters.filter(c => c.sex === 'home').length;
  const femaleCount = selectedCharacters.filter(c => c.sex === 'dona').length;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2 className="modal__title">{scenario.reflectionTitle}</h2>

        <div className="modal__selection-summary">
          <h3>Has triat:</h3>
          <ul className="modal__selected-list">
            {selectedCharacters.map(c => (
              <li key={c.id} className="modal__selected-item">
                <strong>{c.name}</strong> — {c.description}
              </li>
            ))}
          </ul>
          <p className="modal__gender-summary">
            {maleCount} {maleCount === 1 ? 'home' : 'homes'} i {femaleCount} {femaleCount === 1 ? 'dona' : 'dones'}
          </p>
        </div>

        <p className="modal__reflection">{scenario.reflectionText}</p>

        <div className="modal__debate">
          <h3>Preguntes per al debat:</h3>
          <ul className="modal__debate-list">
            {scenario.debateQuestions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>

        <button className="modal__button" onClick={onNext}>
          {isLast ? 'Veure resum' : 'Següent escenari'}
        </button>
      </div>
    </div>
  );
}
