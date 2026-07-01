import React from 'react';
import PaginatedRevisionList from '../components/PaginatedRevisionList';
import allQuestions from '../data/questions.json';

export default function GestionProjet() {
  // On filtre pour récupérer uniquement la gestion de projet et l'agilité
  const projectQuestions = allQuestions.filter(q => q.categorie === 'gestion_projet');

  return (
    <div>
      <h2>🚀 Fiches Révision : Gestion de Projet & Agilité ({projectQuestions.length})</h2>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
        Maîtrise de la conduite de projet : Méthodologie Scrum, rituels Agiles, Git Flow, Docker et CI/CD.
      </p>
      <PaginatedRevisionList questions={projectQuestions} itemsPerPage={3} />
    </div>
  );
}