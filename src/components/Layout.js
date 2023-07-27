import {Inter} from '@next/font/google'
import Header from './Header'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const AppLayout = ({children}) => {
  return (
    <div className={`${inter.variable} font-sans min-h-screen flex flex-col `}>
        <Header/>
        <main className="flex-grow bg-[#F5F5F5]">
            {children}
        </main>
    </div>
  )
}
export default AppLayout