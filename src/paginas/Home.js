import React from 'react';
import ListaDeBebidas from '../components/ListaDeBebidas';
import BarraDePesquisa from '../components/BarraDePesquisa';

const Home = () => {
  return (
    <div>
      <main>
        <BarraDePesquisa />
        <ListaDeBebidas />
      </main>
    </div>
  );
};

export default Home;
