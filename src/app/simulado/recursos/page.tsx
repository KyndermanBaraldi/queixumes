'use client'
import Image from 'next/image';
import Link from 'next/link';


const Page: React.FC = () => {
  


  return (
    <div className="simulado-pdf">

      <h1>Queixumes Conhecimentos</h1>
      <br />
      <h2>Página de recursos contra o gabarito do simulado</h2>

      <br />
      <br />
      <p>Preencha um formulário e registre com o Milton.</p>
      <br />

      <Image
        src='/milton.jpg'
        alt='Milton'
        width={400}
        height={300}
    />
    
    <br />
    <br />
    <Link href="/simulado/pdf">Voltar</Link>

    </div>
  );
};

export default Page;


