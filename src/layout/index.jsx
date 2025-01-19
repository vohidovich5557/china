import { Outlet } from 'react-router-dom'
import {Header} from './header'
import {Footer} from './footer'

export const Layout = () => {
    return (
        <>
         <div className="flex max-w-[1440px] w-[100%] mx-auto flex-col min-h-screen h-[100%] items-center justify-between">
            <div className="flex w-[100%] flex-col items-center">
                <header className='w-[100%]'>
                    <Header />
                </header>
                <main className='w-[100%]'>
                    <Outlet />
                </main>
            </div>
            <footer className='w-[100%]'>
                    <Footer />
                </footer>
         </div>
        </>
    )
}