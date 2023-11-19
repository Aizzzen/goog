import React from 'react';
// import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: 'Все' },
  { url: '/news', text: 'Новости' },
  { url: '/images', text: 'Картинки' },
  { url: '/videos', text: 'Видео' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {/* {links.map(({ url, text }) => ( */}
    {/*  <NavLink to={url} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">{text}</NavLink> */}
    {/* ))} */}
    {links.map(({ text }) => (
      <>
        {text === 'Все'
          ? <p className="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">{text}</p>
          : <p>{text}</p>}
      </>
    ))}
  </div>
);
