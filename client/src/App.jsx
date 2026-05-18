import React from 'react';
import Hero from './components/Hero';
import Apology from './components/Apology';
import Memories from './components/Memories';
import Reasons from './components/Reasons';
import Favorites from './components/Favorites';
import Forgiveness from './components/Forgiveness';

const App = () => {
  return (
    <main className="w-full">
      <Hero />
      <Apology />
      <Memories />
      <Reasons />
      <Favorites />
      <Forgiveness />
    </main>
  );
};

export default App;