import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [ setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);
  useEffect(() => {
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getCocktail();
  }, [id]);
  if (!cocktail) {
    return <h2 className='section-title'>Bebida sem Informação</h2>;
  }

  const {
    name,
    image,
    info,
    category,
    glass,
    instructions,
    ingredients,
  } = cocktail;
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='botaovoltar'>
        Voltar
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='info-bebidas'>Nome :</span> {name}
          </p>
          <p>
            <span className='info-bebidas'>Categoria :</span> {category}
          </p>
          <p>
            <span className='info-bebidas'>Informação :</span> {info}
          </p>
          <p>
            <span className='info-bebidas'>Tamanho :</span> {glass}
          </p>
          <p>
            <span className='info-bebidas'>Instruções :</span> {instructions}
          </p>
          <p>
            <span className='info-bebidas'>Ingredientes : </span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
