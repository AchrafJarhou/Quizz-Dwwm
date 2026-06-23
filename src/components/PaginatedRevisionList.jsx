import React, { useState } from 'react';
import RevisionCard from './RevisionCard';

export default function PaginatedRevisionList({ questions, itemsPerPage = 3 }) {
  const [currentPage, setCurrentPage] = useState(1);

  if (questions.length === 0) {
    return <p>Aucune fiche disponible pour cette catégorie.</p>;
  }

  // Calculs pour la pagination
  const totalPages = Math.ceil(questions.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = questions.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {/* Affichage des fiches de la page courante */}
      <div>
        {currentItems.map((q) => (
          <RevisionCard key={q.id} q={q} />
        ))}
      </div>

      {/* Barre de navigation de la pagination */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
          <button 
            className="btn" 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            style={{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
          >
            ◀️ Précédent
          </button>
          
          <span style={{ fontWeight: 'bold' }}>
            Page {currentPage} sur {totalPages}
          </span>

          <button 
            className="btn" 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            style={{ opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
          >
            Suivant ▶️
          </button>
        </div>
      )}
    </div>
  );
}