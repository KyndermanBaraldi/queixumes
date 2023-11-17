"use client"

import DinoGame from "@/components/DinoGame";

const Home: React.FC = () => {
  
  return (
    <div className="home-body">
      <h1>#Queixumes</h1>
      <p>Um portal para verdadeiros aprovados para Auditor Fiscal da RFB</p>
      <DinoGame/>
    </div>
    );
   
};

export default Home;