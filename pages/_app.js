import { useState } from 'react'
import MainLayout from '../components/layouts/MainLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen} >
    <Component menuOpen={menuOpen} setMenuOpen={setMenuOpen} {...pageProps} />

  </MainLayout>
}
export default MyApp
