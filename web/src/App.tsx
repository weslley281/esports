import React from 'react';
import './styles/main.css';
import logoImg from './assets/Logo.svg';

export function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center m-20">
      <img width={300} src={logoImg} alt="logo do site" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          Duo
        </span>{' '}
        está aqui.
      </h1>
    </div>
  );
}
