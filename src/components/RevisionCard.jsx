import React, { useState } from 'react';

export default function RevisionCard({ q }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>{q.question}</h3>
      
      <button className="btn" onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? 'Masquer la réponse' : '👀 Voir la réponse attendue'}
      </button>

      {showAnswer && (
        <div style={{ marginTop: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
          <p><strong>💡 Réponse attendue par le jury :</strong></p>
          <p style={{ color: '#334155', lineHeight: '1.6' }}>{q.reponse_attendue}</p>
          
          <div style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
            <p style={{ margin: 0 }}><strong>🛠️ Exemple concret :</strong></p>
            <p style={{ margin: '0.5rem 0 0 0', color: '#475569', fontStyle: 'italic' }}>{q.exemple_concret}</p>
          </div>
        </div>
      )}
    </div>
  );
}