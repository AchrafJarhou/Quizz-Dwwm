import React, { useState } from 'react';

export default function QuizEngine({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  if (questions.length === 0) {
    return <p>Aucune question disponible pour le moment.</p>;
  }

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (optionIndex) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex);
    setIsAnswered(true);

    if (optionIndex === currentQuestion.solution) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>🎉 Quiz Terminé !</h2>
        <p style={{ fontSize: '1.5rem' }}>
          Votre score : <strong>{score}</strong> / {questions.length}
        </p>
        <button className="btn" onClick={restartQuiz}>Recommencer le quiz</button>
      </div>
    );
  }

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', marginBottom: '1rem' }}>
        <span>Question {currentIndex + 1} sur {questions.length}</span>
        <span>Score actuel : {score}</span>
      </div>

      <h3 style={{ marginTop: 0, marginBottom: '1.5rem' }}>{currentQuestion.question}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {currentQuestion.options.map((option, idx) => {
          let btnStyle = {
            padding: '1rem',
            borderRadius: '8px',
            border: '2px solid #e2e8f0',
            backgroundColor: '#ffffff',
            textAlign: 'left',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'all 0.2s'
          };

          if (isAnswered) {
            if (idx === currentQuestion.solution) {
              btnStyle.backgroundColor = '#dcfce7';
              btnStyle.borderColor = '#22c55e';
            } else if (idx === selectedOption) {
              btnStyle.backgroundColor = '#fee2e2';
              btnStyle.borderColor = '#ef4444';
            }
          } else {
            btnStyle[':hover'] = { backgroundColor: '#f8fafc' }; // Note simplifiée
          }

          return (
            <button key={idx} style={btnStyle} onClick={() => handleOptionClick(idx)}>
              {option}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div style={{ marginTop: '1.5rem', background: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
          <p style={{ marginTop: 0, color: '#1e293b' }}>
            <strong>💡 Explication du Jury :</strong> {currentQuestion.reponse_attendue}
          </p>
          <button className="btn" onClick={handleNext} style={{ width: '100%' }}>
            {currentIndex + 1 === questions.length ? 'Voir les résultats' : 'Question suivante ➡️'}
          </button>
        </div>
      )}
    </div>
  );
}