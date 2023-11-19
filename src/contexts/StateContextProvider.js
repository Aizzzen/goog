import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const StateContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com/search';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('Фронтенд');

  const getResults = async (url) => {
    setLoading(true);

    const options = {
      method: 'GET',
      url: baseUrl,
      params: {
        q: `${url}`,
        gl: 'ru',
        lr: 'lang_ru',
        num: '20',
        start: '0',
      },
      headers: {
        'X-RapidAPI-Key': 'b7e4972398msha20891a527e6acdp12fbd3jsn6600fdff08b3',
        'X-RapidAPI-Host': 'google-search72.p.rapidapi.com',
      },
    };
    const response = await axios.request(options);
    setResults(response.data.items);
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
