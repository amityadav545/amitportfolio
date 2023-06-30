import MobileHeader from './components/MobileHeader';
import NavBar from './components/NavBar';
import Transition from './components/Transition';
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: "--font-mont" })

export const metadata = {
  title: 'Amit Kumar Yadav - Web Developer Portfolio',
  description: 'Welcome to the portfolio of Amit Kumar Yadav, a skilled web developer with a passion for creating stunning and user-friendly websites. Explore my projects, skills, and experience to see how I can help bring your web ideas to life.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans bg-light w-full min-h-screen`}>

        <NavBar />
        {children}
        <MobileHeader />
      </body>
    </html>
  )
}
