import './globals.css'
import { Inter } from 'next/font/google'
import ApplicationLogo from "../Components/ApplicationLogo";
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'moulay',
  description: 'home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
        <nav className="h-20 bg-white">
          <div className="container mx-auto px-7 flex justify-between items-center h-full">
            <ApplicationLogo />
            <ul className="flex gap-2 font-bold">
              <li className="text-secondary"><Link href="/">home</Link></li>
              <li className="hover:text-secondary"><Link href="/Auth/Login">login</Link></li>
              <li className="hover:text-secondary"><Link href="/Auth/Register">register</Link></li>
              <li className="hover:text-secondary"><Link href="/My/list">list</Link></li>
            </ul>
          </div>
        </nav>
        <section>
          {children}
        </section>
      </body>
    </html>
  )
}
// <Link href=""></Link>