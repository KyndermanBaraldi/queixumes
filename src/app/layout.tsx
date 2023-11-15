import Menu from '@/components/Menu'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Queixumes',
  description: 'Site de questões para o curso de formação para Auditor Fiscal da RFB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header>
          
        </header>
        <main>
          <h1>
            Desculpe a manutenção, estamos em transtorno.
          </h1>
        </main>
        <footer className="app-footer">
          <p>&copy; 2023 <strong>Queixumes</strong>. Todos os direitos reservados.</p>
          <p>Desenvolvido por <a href="https://github.com/KyndermanBaraldi" target="_blank" rel="noopener noreferrer">Kynderman Baraldi</a></p>
        </footer> 
      </body>
    </html>
  )

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header>
          <Menu />
        </header>
        <main>
          {children}
        </main>
        <footer className="app-footer">
          <p>&copy; 2023 <strong>Queixumes</strong>. Todos os direitos reservados.</p>
          <p>Desenvolvido por <a href="https://github.com/KyndermanBaraldi" target="_blank" rel="noopener noreferrer">Kynderman Baraldi</a></p>
        </footer>        
      </body>
    </html>
  )
}
