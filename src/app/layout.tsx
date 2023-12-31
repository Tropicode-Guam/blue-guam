import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blue Guam',
  description: 'Meetup.com for Guam +Tourism',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin='' key="map-css"/>
      </Head>
      <body className={inter.className}>
        <div className='flex flex-col h-screen justify-between'>
          <Navbar />
          <div id="top" className='spacer'></div>
          <main className='mb-auto'>{children}</main>
          <div id="top" className='spacer'></div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
