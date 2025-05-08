import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"

const HomeLayout = () => {
    return (
        <div className='h-dvh flex flex-col'>
            <Navbar />
            
            <main className='flex-1 mt-10'>
                <Outlet />
                <Sidebar />
            </main>

            <Footer/>
        </div>
    )
}

export default HomeLayout
