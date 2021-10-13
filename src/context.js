import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('a');
  const [bebidas, setBebidas] = useState([]);
  const BuscarBebidas = useCallback(async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const NovasBebidas = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setBebidas(NovasBebidas);
      } else {
        setBebidas([]);
      }

    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    BuscarBebidas();
  }, [searchTerm, BuscarBebidas]);

  return (
    <AppContext.Provider value={{ setSearchTerm, bebidas }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
