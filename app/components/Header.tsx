import Link from "next/link";
import Logo from "./Logo";

export default function Header(){
    return(
        <>
        <header>
        <div className="header">
        {/* logo */}
        <Logo/>
        <div className="flex gap-1">
            <Link href="/login" className="button" > Login</Link>
            <Link href="/signUp" className="button button-counter"> SignUp</Link>
        </div>
        </div>
        </header>
        </>
    );
}