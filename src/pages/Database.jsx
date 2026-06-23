import React from 'react';
import PaginatedRevisionList from '../components/PaginatedRevisionList';
import allQuestions from '../data/questions.json';

export default function Database() {
  // On filtre pour regrouper les modules transverses
  const bddAndTransverseQuestions = allQuestions.filter(
    q => q.categorie === 'bdd' || q.categorie === 'securite' || q.categorie === 'gestion_projet'
  );

  return (
    <div>
      <h2>📊 Fiches Révision : Architecture, BDD & Projet ({bddAndTransverseQuestions.length})</h2>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
        Concepts transverses fondamentaux : MySQL, Sécurité OWASP, Git Flow et Méthodologies Agiles.
      </p>
      <PaginatedRevisionList questions={bddAndTransverseQuestions} itemsPerPage={4} />
    </div>
  );
}