import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FrontEnd from './pages/FrontEnd';
import BackEnd from './pages/BackEnd';
import Database from './pages/Database';
import GestionProjet from './pages/GestionProjet'; // <-- Import de la nouvelle page

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'front':
        return <FrontEnd />;
      case 'back':
        return <BackEnd />;
      case 'bdd':
        return <Database />;
      case 'gestion_projet': // <-- Cas d'affichage pour la gestion de projet
        return <GestionProjet />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container">
        {renderPage()}
      </main>
    </div>
  );
}