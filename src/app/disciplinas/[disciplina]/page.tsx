"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

  interface Params {
    disciplina: string;
  }

  interface Data {
    type: string;
    content: string;
    src?: string;
    label?: string;
    width?: string;
    height?:string;
  }

  export default function Page({ params }: { params: Params }) {
    const [apiData, setApiData] = useState<Data[]>([]);
    const [loading, setLoading] = useState(true); // Estado de carregamento
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_DISCIPLINA_API}?disciplina=${params.disciplina}`);
          const result = await response.json();
          setApiData(result.res);
          setLoading(false); // Após obter os dados, definir loading como falso
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false); // Em caso de erro, definir loading como falso
        }
      };
  
      fetchData();
    }, [params.disciplina]);
  
    const renderElements = () => {
      if (loading) {
        // Se ainda estiver carregando, mostrar uma mensagem de carregamento
        return <p className="loading-message">Carregando...</p>;
      }
  
      if (apiData.length === 0) {
        // Se apiData está vazio, mostrar mensagem de erro
        return <p className="error-message">O resumo da disciplina ainda não foi implementado.</p>;
      }

    return apiData.map((item, index) => {
      switch (item.type) {
        case 'title':
            return <h1 className="page-title" key={index}>{item.content}</h1>;
        case 'subtitle':
            return <h2 className="page-subtitle" key={index}>{item.content}</h2>;
        case 'paragraph':
            return <p className="page-paragraph" key={index}>{item.content}</p>;
        case 'link':
              return <a className="page-link" href={item.src} target="_blank" rel="noopener noreferrer">{item.content}</a>;
        case 'image':
            const width = parseInt(item.width ?? "");
            const height = parseInt(item.height ?? "");
          return (
            <div key={index} className="page-image">
                <Image
                    src={item.src ?? ''}
                    alt={item.content ?? ''}
                    width={isNaN(width) ? 200 : width}
                    height={isNaN(width) ? 150 : height}
                />
                <p className="page-imagelabel" >{item.label}</p>
            </div>
          );
        case 'video':
            return (
              <div className="page-video" key={index}>
                <iframe width="560" height="315"
                  src={item.content}
                  title="YouTube video player" 
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
                </iframe>
              </div>
            )
            
      default:
          return null;
      }
    });
  };

  return <div className="page-body">
    {renderElements()}
  </div>;

};
