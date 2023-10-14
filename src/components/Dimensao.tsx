// components/Dimensao.tsx
import { generateSlug } from "@/utils/slug";
import Link from "next/link";
import React from "react";

interface Questao {
  disciplina: string;
  link: string;
  caiNaProva: string;
}

interface DimensaoProps {
  titulo: string;
  questoes: Questao[];
}

const Dimensao: React.FC<DimensaoProps> = ({ titulo, questoes }) => {
  return (
    <div className="dimensao">
      <h2>{titulo}</h2>
      <table>
        <thead>
          <tr>
            <th>Dito que cai na prova?</th>
            <th>Disciplina</th>
            <th>Link para as questões cadastradas</th>
          </tr>
        </thead>
        <tbody>
          {questoes.map((questao, index) => (
            <tr key={index}>
              <td>{questao.caiNaProva==="SIM" && questao.caiNaProva}</td>
              <td>
                
                <Link href={`/disciplinas/${generateSlug(questao.disciplina)}`}>
                  {questao.disciplina}
                </Link>
              </td>
              <td><a href={questao.link} target="_blank" rel="noopener noreferrer">{questao.link}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dimensao;
