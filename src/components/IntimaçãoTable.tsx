import React from 'react';
import { intimacao } from "@/data/prazos";

interface DadosIntimacao {
  tipoIntimacao: string;
  tipo: string;
  prazo: number;
}

const agruparPorTipoIntimacao = (dados: DadosIntimacao[]): Record<string, DadosIntimacao[]> => {
  const grupos: Record<string, DadosIntimacao[]> = {};
  
  dados.forEach((item) => {
    const { tipoIntimacao } = item;
    if (!grupos[tipoIntimacao]) {
      grupos[tipoIntimacao] = [];
    }
    
    grupos[tipoIntimacao].push(item);
  });
  
  return grupos;
};

const IntimacaoTable: React.FC = () => {
  const dadosAgrupados = Object.entries(agruparPorTipoIntimacao(Object.entries(intimacao)
    .map(([tipoIntimacao, tipos]) => (
      Object.entries(tipos).map(([tipo, prazo]) => ({ tipoIntimacao, tipo, prazo }))
    ))
    .flat()
  ));

  return (
    <div className="page-table">
        <table>
        <thead>
            <tr>
            <th>Tipo de Intimação</th>
            <th>Detalhe</th>
            <th>Prazo (dias)</th>
            </tr>
        </thead>
        <tbody>
            {dadosAgrupados.map(([tipoIntimacao, tipos], index) => (
                tipos.map((grupo, innerIndex) => (
                    <tr key={`${tipoIntimacao}-${grupo.tipo}-${innerIndex}`}>
                {innerIndex === 0 && (
                    <td rowSpan={tipos.length}>{tipoIntimacao}</td>
                    )}
                <td>{grupo.tipo}</td>
                <td>{grupo.prazo}</td>
                </tr>
            ))
            ))}
        </tbody>
        </table>
        <p className="page-paragraph">Não existe ordem de preferência para a utilização dos 3 primeiros tipos. Edital só depois de tentar um dos 3.</p>

    </div>
  );
};

export default IntimacaoTable;