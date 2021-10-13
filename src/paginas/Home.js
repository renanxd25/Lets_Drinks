import React from 'react';
import ListaDeBebidas from '../components/ListaDeBebidas';
import Pesquisa from '../components/BarraDePesquisa';

const Home = () => {
  return (
    <div>
      <main>
        <Pesquisa />
        <ListaDeBebidas />
      </main>
    </div>
  );
};

export default Home;
