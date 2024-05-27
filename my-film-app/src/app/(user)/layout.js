import '../globals.css'
import vazirFont from "../../constants/localFonts";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import { Footer } from '@/components/Footer';
import  { Toaster } from 'react-hot-toast';
import Providers from './Providers';




export const metadata = {
  title: 'movie app',
  description: 'website for manage film',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body  className={`${vazirFont.variable} font-sans`}>

          <main className="grid grid-cols-5 max-w-[1440px] mx-auto bg-slate-800">
            <Toaster/>
            <div className="col-span-1 shadow-xl ">
              <Navigation />
            </div>
            <div className="col-span-4 ">
              <Header />
              <Providers> {children}  </Providers>
              <Footer/>
            </div>
        </main>
      </body>
    </html>
  )
}
