import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import './globals.css'
import Layout, { StoreProvider } from '@/components/Layout'

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
        <StoreProvider>
          <Layout>
            {props.children}
            {/*Scripts for Accordion components*/}
            <Script src="node_modules/@material-tailwind/html/scripts/collapse.js" />
            <Script src="https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
          </Layout>
        </StoreProvider>
      </body>
    </html>
  )
}
