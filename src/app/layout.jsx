import { Archivo } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata = {
  title: 'Arita',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}