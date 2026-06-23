import React from 'react';
import PaginatedRevisionList from '../components/PaginatedRevisionList';
import allQuestions from '../data/questions.json';

export default function FrontEnd() {
  const frontQuestions = allQuestions.filter(q => q.categorie === 'front');

  return (
    <div>
      <h2>🎨 Fiches Révision : Front-End ({frontQuestions.length})</h2>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
        Tout le référentiel Front-End : De la mécanique de React jusqu'à l'accessibilité.
      </p>
      <PaginatedRevisionList questions={frontQuestions} itemsPerPage={3} />
    </div>
  );
}