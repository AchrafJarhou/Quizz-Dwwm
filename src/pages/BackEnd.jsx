import React from 'react';
import PaginatedRevisionList from '../components/PaginatedRevisionList';
import allQuestions from '../data/questions.json';

export default function BackEnd() {
  const backQuestions = allQuestions.filter(q => q.categorie === 'back');

  return (
    <div>
      <h2>⚙️ Fiches Révision : Back-End ({backQuestions.length})</h2>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
        Maîtrise de l'environnement serveur : Architecture API, Node, Express et configurations.
      </p>
      <PaginatedRevisionList questions={backQuestions} itemsPerPage={3} />
    </div>
  );
}