import type { Metadata } from 'next'
import { Montserrat as Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deihl Reyes | Portfolio',
  description: 'This is my portfolio website to showcase my work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
