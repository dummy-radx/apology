import React from 'react';
import Hero from './components/Hero';
import Apology from './components/Apology';
import Favorites from './components/Favorites';
import Forgiveness from './components/Forgiveness';

const App = () => {
  return (
    <main className="w-full">
      <Hero />
      <Apology />
      <Favorites />
      <Forgiveness />
    </main>
  );
};

export default App;