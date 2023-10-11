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
        <li className="dropdown">
          <a className="nav-link" href="https://app.powerbi.com/view?r=eyJrIjoiMTdhMmEwMzAtMmJiYy00MDY3LWFjOTAtYTBlNzI5ZjE4MGNjIiwidCI6IjZiNGNkN2NhLTVhMDctNDQzYi04NjhjLWY4ODY2MjZkNDlhNCJ9" target="_blank" rel="noopener noreferrer">Power BI</a>  
          <div className="dropdown-menu">
            <a className="nav-link" href="https://app.powerbi.com/view?r=eyJrIjoiMTdhMmEwMzAtMmJiYy00MDY3LWFjOTAtYTBlNzI5ZjE4MGNjIiwidCI6IjZiNGNkN2NhLTVhMDctNDQzYi04NjhjLWY4ODY2MjZkNDlhNCJ9" target="_blank" rel="noopener noreferrer">Power BI</a>
            <a className="nav-link" href="https://onedrive.live.com/edit.aspx?resid=4AD7CCF952B8ECAE!393343&ithint=file%2cxlsx&wdo=2&authkey=!ABkqEZ7qxE6gEJ4" target="_blank" rel="noopener noreferrer">Dados</a>
          </div>
        </li>

        <li className="dropdown">
          <a className="nav-link" href="#">Lotações</a>  
          <div className="dropdown-menu">
            <a className="nav-link" href="https://onedrive.live.com/edit.aspx?resid=C07A5B1D8B9FFEFB!s16f9e5b4bf0c46859d75c48adb01de60&cid=c07a5b1d8b9ffefb&ithint=file%2Cxlsx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy9jMDdhNWIxZDhiOWZmZWZiL0ViVGwtUllNdjRWR25YWEVpdHNCM21BQnFFeVFub20wZ2hLOUgwY250a0tZdHc_ZT03VW0wd0Q&migratedtospo=true" target="_blank" rel="noopener noreferrer">Simulação de lotação</a>
            <a className="nav-link" href="https://docs.google.com/spreadsheets/d/1cukFEe__xKsY0tvxFLEkyLAaGVNUsi33G6PZl0y8LDU/edit#gid=0" target="_blank" rel="noopener noreferrer">Resultado Remoção</a>
            <a className="nav-link" href="https://lookerstudio.google.com/reporting/0414d52a-d654-4339-ac7d-ac832b9021a1/page/vtEfD" target="_blank" rel="noopener noreferrer">Mapa das vagas</a>
          </div>
        </li>
      </ul>
      <a href="https://www.instagram.com/aprovadosrfb2023/" target="_blank" rel="noopener noreferrer">@Comissao</a>
    </nav>
  );
};

export default Menu;