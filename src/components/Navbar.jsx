import React from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const tabs = [
    { id: 'home', label: '🧠 Quiz Global' },
    { id: 'front', label: '🎨 Front-End' },
    { id: 'back', label: '⚙️ Back-End' },
    { id: 'bdd', label: '📊 BDD & Sécurité' },
  ];

  return (
    <nav style={{ background: '#1e293b', padding: '1rem', color: 'white' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCurrentPage(tab.id)}
            style={{
              background: currentPage === tab.id ? '#2563eb' : 'transparent',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}