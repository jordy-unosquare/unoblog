import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '../lib/providers/AuthProvider'
import ThemeContextProvider from '../lib/providers/ThemeProvider'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nexus Blog',
  description: 'Where Every Story Finds a Home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
