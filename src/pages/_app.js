import HeaderComponent from '@/components/HeaderComponent'
import Layout from '@/components/Layout'
import { CountriesProvider } from '@/lib/CountryContext'
import { ThemeProvider } from '@/lib/ThemeContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CountriesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </CountriesProvider>
    </ThemeProvider>
  )
}
