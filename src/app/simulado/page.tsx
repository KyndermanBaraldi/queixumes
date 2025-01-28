'use client'

import React, { useState, useEffect, ChangeEvent } from 'react';
import Simulado from '@/pages/Simulado';
import { generateSlug } from '@/utils/slug';

interface Materia {
  course: string;
  slug: string;
  prova: number;
  numquestions: number;
  questions: any[];
}

const Page: React.FC = () => {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [esconderMaterias, setEsconderMaterias] = useState<boolean>(false);
  const [queryString, setQueryString] = useState<string>('');

  useEffect(() => {
  
    async function fetchMaterias() {
      try {
        const api_url = process.env.NEXT_PUBLIC_API_URL + "?route=cursos";
        const response = await fetch(api_url);
        const data = await response.json();
        setMaterias(data.res);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar matérias:', error);
        setLoading(false);
      }
    }

    fetchMaterias();
  }, []);

  const handleQuantidadeChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const valor: number = parseInt(event.target.value, 10);
    const novasMaterias = [...materias];
    novasMaterias[index].prova = valor;
    setMaterias(novasMaterias);
  };

  const handleEsconderMaterias = () => {
    setEsconderMaterias(true);
    const stringConcatenada = materias.map((materia) => `${generateSlug(materia.course)}=${materia.prova}`).join('&');
    setQueryString(stringConcatenada);
  };

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {!loading && !esconderMaterias && (
        <section className='filtro-simulado'>
          <h1>Filtros</h1>
          <ul>
            {materias.map((materia, index) => (
              <li key={index}>
                {materia.course} - ({materia.numquestions} questões )
                <input
                  type="range"
                  min={0}
                  max={materia.numquestions}
                  step={1}
                  value={materia.prova}
                  onChange={(event) => handleQuantidadeChange(event, index)}
                />
                {materia.prova}
              </li>
            ))}
          </ul>
          <button onClick={handleEsconderMaterias}>Criar Simulado</button>
        </section>      
      )}
      {!loading && esconderMaterias && <Simulado queryString={queryString} />}
    </div>
  );
};

export default Page;


