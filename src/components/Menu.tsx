'use client'
import Link from "next/link";
import { useState } from "react";
import { VscMenu, VscChromeClose } from "react-icons/vsc";

const Menu: React.FC = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(true);
  };

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
            <a className="nav-link" href="#" onClick={closeMenu}>Simulado</a>  
            <div className="dropdown-menu">
              <Link href="/simulado" className="nav-link" onClick={closeMenu}>
                Simulado
              </Link>
              <a className="nav-link" href="https://forms.gle/ta1CK3atE5DwRxC56" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Cadastrar Questões</a>
            </div>
          </li>

          <li className="nav-item">
            <Link href="/disciplinas" className="nav-link" onClick={closeMenu}>
              Disciplinas
            </Link>
          </li>
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
              <a className="nav-link" href="https://docs.google.com/spreadsheets/d/1qqXL5GZ3BpJpmXLFURQuJghCzqnmlaKQ26oeTul-ztY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Simulação de lotação</a>
              <a className="nav-link" href="https://docs.google.com/spreadsheets/d/1cukFEe__xKsY0tvxFLEkyLAaGVNUsi33G6PZl0y8LDU/edit#gid=0" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Resultado Remoção</a>
              <a className="nav-link" href="https://lookerstudio.google.com/reporting/0414d52a-d654-4339-ac7d-ac832b9021a1/page/vtEfD" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Mapa das vagas</a>
            </div>
          </li>

          <li className="nav-item">
          <a className="nav-link" href="https://www.instagram.com/aprovadosrfb2023/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>@Comissao</a>
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