import React from 'react';
import PaginatedRevisionList from '../components/PaginatedRevisionList';
import allQuestions from '../data/questions.json';

export default function Database() {
  // On filtre pour ne garder STRICTEMENT que la BDD et la Sécurité
  const bddQuestions = allQuestions.filter(
    q => q.categorie === 'bdd' || q.categorie === 'securite'
  );

  return (
    <div>
      <h2>📊 Fiches Révision : Base de Données & Sécurité ({bddQuestions.length})</h2>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
        Concepts fondamentaux de persistance et protection : Modélisation MERISE, requêtes SQL, index, hachage et CORS.
      </p>
      <PaginatedRevisionList questions={bddQuestions} itemsPerPage={3} />
    </div>
  );
}