import './globals.css'
import vazirFont from "../../constants/localFonts";



export const metadata = {
  title: 'movie app',
  description: 'website for manage film',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body  className={`${vazirFont.variable} font-sans`}>{children}</body>
    </html>
  )
}
