import Footer from "../components/Footer"
import Header from "../components/Header"

export default function({
    children
}:{
    className?: string
    children: React.ReactNode
}) {
    return(
        <div className={`flex flex-col min-h-screen w-full`}>
            <Header/>
            <main className={`flex-1 flex justify-center items-center pb-20`}>{children}</main>
            <Footer/>
        </div>
    )
}