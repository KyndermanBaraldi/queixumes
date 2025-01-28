'use client'
import Link from "next/link";
import { useState } from "react";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const Menu: React.FC = () => {

  const [menuOpen, setMenuOpen] = useState(true);

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

          <li className="nav-item">
            <Link href="/simulado" className="nav-link" onClick={closeMenu}>
              Questões
            </Link>
          </li>
           
          {/* <li className="dropdown">
            <a className="nav-link" href="#" onClick={closeMenu}>Questões</a>  
            <div className="dropdown-menu">
              <Link href="/simulado" className="nav-link" onClick={closeMenu}>
                Simulado Digital
              </Link>

              <hr style={{ width: "98%", margin: "10px auto" }} />

              <a className="nav-link" href="" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Cadastrar</a>
            </div>
          </li> */}
        
          <li className="dropdown">
            <a className="nav-link" href="#" onClick={closeMenu}>Comissão</a>  
            <div className="dropdown-menu">
              <a className="nav-link" href="https://www.instagram.com/aprovadosrfb2023/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>@Insta <AiFillInstagram/> </a>
              <a className="nav-link" href="https://www.youtube.com/@AprovadosRFB2023" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>YouTube <AiFillYoutube /></a>
            </div>          
          </li>
        </ul>
      </div>
      
      
      <div className="mobile-menu">
        <a href="#" className="mobile-menu-icon" onClick={toggleMenu}>
          {menuOpen ? <VscMenu /> : <VscChromeClose /> }
        </a>
      </div>
      
    </nav>
  );
};

export default Menu;