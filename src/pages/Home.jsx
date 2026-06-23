import React from 'react';
import QuizEngine from '../components/QuizEngine';
import allQuestions from '../data/questions.json';

export default function Home() {
  return (
    <div>
      <h2>🧠 Mode Entraînement - Quiz Complet</h2>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>
        Testez vos connaissances sur l'ensemble du référentiel titre DWWM (Front, Back, BDD et Sécurité).
      </p>
      <QuizEngine questions={allQuestions} />
    </div>
  );
}