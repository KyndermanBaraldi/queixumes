'use client'
import Link from "next/link";
import { generateSlug } from "@/utils/slug";
import { useState } from "react";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { dimensaoHumana, dimensaoInstitucional, dimensaoTecnica } from "@/data/disciplinas";


const Menu: React.FC = () => {

  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(true);
  };

  const disciplinas = dimensaoHumana
    .concat(dimensaoInstitucional, dimensaoTecnica)
    .filter((disciplina)=>disciplina.caiNaProva.toLocaleLowerCase()==='sim')

  return (
    <nav className="app-navbar">
      <div className="logo">
        <Link href="/" onClick={closeMenu}>
          Queixumes
        </Link>
      </div>
      <div className={`nav-list ${menuOpen ? "hide" : ""}`}>
        <ul>
          <li className="nav-item">
            <Link href="/" className="nav-link" onClick={closeMenu}>
              Início
            </Link>
          </li>
           
          <li className="dropdown">
            <a className="nav-link" href="#" onClick={closeMenu}>Questões</a>  
            <div className="dropdown-menu">
              <Link href="/simulado" className="nav-link" onClick={closeMenu}>
                Simulado Digital
              </Link>

              <Link href="/simulado/pdf" className="nav-link" onClick={closeMenu}>
                Página do Simulado
              </Link>

              {/* <hr style={{ width: "98%", margin: "10px auto"}} />

              {disciplinas.map((disciplina, index)=> (
                <a key={index} className="nav-link" href={disciplina.link} target="_blank" rel="noopener noreferrer">{disciplina.disciplina}</a>
              ))} */}

              <hr style={{ width: "98%", margin: "10px auto" }} />

              <a className="nav-link" href="https://forms.gle/ta1CK3atE5DwRxC56" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Cadastrar</a>
            </div>
          </li>
          
          {/* <li className="dropdown">
            <a className="nav-link" href="#" onClick={closeMenu}>Disciplinas</a>  
            <div className="dropdown-menu">
              <Link href="/disciplinas" className="nav-link" onClick={closeMenu}>
                Conteúdo programático
              </Link>

              {disciplinas.map((disciplina, index)=> (
                <Link key={index} className="nav-link" href={`/disciplinas/${generateSlug(disciplina.disciplina)}`}>
                  {disciplina.disciplina}
                </Link>
              ))}

<a className="nav-link" href="https://drive.google.com/drive/folders/1rdGIeC_vMc3u5OGWWEsR8tP49O9KAXWG?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Materiais</a>
            </div>
          </li> */}

          <li className="dropdown">
            <a className="nav-link" href="#" onClick={closeMenu}>Power BI</a>  
            <div className="dropdown-menu">
              <a className="nav-link" href="https://app.powerbi.com/view?r=eyJrIjoiMTdhMmEwMzAtMmJiYy00MDY3LWFjOTAtYTBlNzI5ZjE4MGNjIiwidCI6IjZiNGNkN2NhLTVhMDctNDQzYi04NjhjLWY4ODY2MjZkNDlhNCJ9" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Power BI</a>
              <a className="nav-link" href="https://onedrive.live.com/edit.aspx?resid=4AD7CCF952B8ECAE!393343&ithint=file%2cxlsx&wdo=2&authkey=!ABkqEZ7qxE6gEJ4" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Dados</a>
            </div>
          </li>

          <li className="dropdown">
            <a className="nav-link" href="#" onClick={closeMenu}>Lotações</a>  
            <div className="dropdown-menu">
              <a className="nav-link" href="https://docs.google.com/spreadsheets/d/1qqXL5GZ3BpJpmXLFURQuJghCzqnmlaKQ26oeTul-ztY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Simulação</a>
              <a className="nav-link" href="https://docs.google.com/spreadsheets/d/1ka2zW7GBBBnyCyNsMVzulnJ6_DiNrp4Lr6R9HY9GLLw/edit?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Unidades RFB</a>
              <a className="nav-link" href="https://lookerstudio.google.com/reporting/f93a1998-3f83-4160-8f09-b84332691bcf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Mapa</a>
            </div>
          </li>

          <li className="dropdown">
            <a className="nav-link" href="#" onClick={closeMenu}>Comissão</a>  
            <div className="dropdown-menu">
              <a className="nav-link" href="https://www.instagram.com/aprovadosrfb2023/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>@Insta <AiFillInstagram/> </a>
              <a className="nav-link" href="https://www.youtube.com/@AprovadosRFB2023" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>YouTube <AiFillYoutube /></a>
            </div>          
          </li>
        </ul>
      </div>
      {/* <div className="login-button">
        <button><a href="#">Entrar</a></button>
      </div> */}
      
      <div className="mobile-menu">
        <a href="#" className="mobile-menu-icon" onClick={toggleMenu}>
          {menuOpen ? <VscMenu /> : <VscChromeClose /> }
        </a>
      </div>
      
    </nav>
  );
};

export default Menu;