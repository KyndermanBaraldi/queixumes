'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


  interface Data {
    Nome: string;
    Nota: number;
  }

  export default function Page() {

    const [apiData, setApiData] = useState<Data[]>([]);
    const [loading, setLoading] = useState(true); // Estado de carregamento
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(process.env.NEXT_PUBLIC_API_RANKING ?? "");
          const result = await response.json();
          const sortedData = result.res.sort((a: Data, b: Data)=> b.Nota - a.Nota);
      
          setApiData(sortedData);
          setLoading(false); // Após obter os dados, definir loading como falso
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false); // Em caso de erro, definir loading como falso
        }
      };
  
      fetchData();
    }, []);
  
  if (loading) {
    // Se ainda estiver carregando, mostrar uma mensagem de carregamento
    return <p className="loading-message">Carregando...</p>;
  }


  return (
    <div className="simulado-pdf">

     
      <h1>Queixumes Conhecimentos</h1>
      <br />
      <h2>Ranking do simulado</h2>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nota</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item, index) => (
            <tr key={index}>
              <td>{item.Nome}</td>
              <td>{item.Nota}</td>
              <td>{(item.Nota>30)?"Aprovado":"Reprovado" }</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      
    <Link href="/simulado/pdf">Voltar</Link>

    </div>
  );
};



