import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Edusoft App',
  description: 'Education Abroad',
}

export default async function RootLayout(props: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {props.children}
        </Layout>
      </body>
    </html>
  )
}
