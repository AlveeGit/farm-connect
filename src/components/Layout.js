import {Inter} from '@next/font/google'
import Header from './Header'
import Footer from './Footer'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const AppLayout = ({children}) => {
  return (
    <div className={`${inter.variable} font-sans min-h-screen flex flex-col w-5/6 mx-auto`}>
        <Header/>
        <main className="flex-grow bg-[#F5F5F5]">
            {children}
        </main>
        <Footer/>
    </div>
  )
}
export default AppLayout