import React from 'react';
import { useGlobalContext } from '../context';
import imagemteste from '../imagens/let.gif'
import Bebida from './Bebida';

const ListaDeBebidas = () => {
  const {bebidas } = useGlobalContext();
  if (bebidas.length < 1) {
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
        {bebidas.map((item) => {
          return <Bebida key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default ListaDeBebidas;
