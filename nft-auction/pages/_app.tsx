import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Sono } from '@next/font/google'

const sono = Sono({
  weight: '500'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <main className={sono.className}>
      <Component {...pageProps} />
    </main>
    
  )
}
