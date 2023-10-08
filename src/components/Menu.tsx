import Link from "next/link";

const Menu: React.FC = () => {
  return (
    <nav className="app-navbar">
      <Link href="/" className="logo">
        Queixumes
      </Link>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link href="/" className="nav-link">
            Início
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/simulado" className="nav-link">
            Simulado
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/disciplinas" className="nav-link">
            Disciplinas
          </Link>
        </li>
      </ul>
      <a href="https://www.instagram.com/aprovadosrfb2023/" target="_blank" rel="noopener noreferrer">@Comissao</a>
    </nav>
  );
};

export default Menu;