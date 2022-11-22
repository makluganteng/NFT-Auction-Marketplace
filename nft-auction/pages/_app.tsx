import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { Sono } from '@next/font/google'
import { ChakraProvider } from '@chakra-ui/react'

// const sono = Sono({
//   weight: '500',
//   subsets: ['latin'],
// })

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    
  )
}
