import React from 'react';
import Cocktail from './Cocktail';
import { useGlobalContext } from '../context';
import imagemteste from '../let.gif'

const CocktailList = () => {
  const {cocktails } = useGlobalContext();
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        Nada Encontrado
      </h2>
    );
  }
  return (
    <section className='section'>
      <img className='image-neon'src={imagemteste }/>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
