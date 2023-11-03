'use client'

import Link from "next/link";




const Page: React.FC = () => {
  

  return (
    <div className="simulado-pdf">

      <h1>Queixumes Conhecimentos</h1>
      <br />
      <br />
      <br />
      <h2>Arquivos do Queixumes</h2>

      <table>
        {/* <thead>
          <tr>
            <th></th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td>03/11/2023</td>
            <td><a href="https://drive.google.com/file/d/1GjN5VJBLSxzkkNr5-11soPJio4m3IaBp/view?usp=sharing" target="_blank" rel="noopener noreferrer">Comunicado alteração de gabarito</a></td>
          </tr>
          <tr>
            <td>03/11/2023</td>
            <td><Link href="/simulado/recursos">Interposição de recurso contra o gabarito</Link></td>
          </tr>
          <tr>
            <td>02/11/2023</td>
            <td><a href="https://drive.google.com/file/d/1D___JOFqPNwNPgg8w-gWEjxpnWL-oNxh/view?usp=sharing" target="_blank" rel="noopener noreferrer">Gabarito Preliminar Simulado Curso de Formação Auditor Fiscal</a></td>
          </tr>
          <tr>
            <td>02/11/2023</td>
            <td><a href="https://drive.google.com/file/d/1GSvDs9_zIGE1GlRmOrPnsoPgxbFKr3uQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">Simulado Curso de Formação Auditor Fiscal</a></td>
          </tr>
        </tbody>

      </table>
      <br />
      <p>O simulado foi desenvolvido por alunos do curso de formação (Verdadeiros aprovados) de forma colaborativa.</p>
      

    </div>
  );
};

export default Page;


