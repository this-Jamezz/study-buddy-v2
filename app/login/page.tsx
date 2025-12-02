import Link from "next/link";
import Default from "../templates/Default";

export default function Login() {
    return (
        <Default>  
            <div
                className="md:w-sm md:h-[40%] border rounded-2xl flex justify-center items-center p-7 flex-col gap-2"
            >
                <p className="font-semibold text-xl mb-10">Welcome Back!</p>
                <input type="text" className="w-full border md:p-[2%] rounded-sm" placeholder="Email" />
                <input type="text" className="w-full border md:p-[2%] rounded-sm" placeholder="Password" />
                <button className="w-full border md:p-[2%] rounded-sm hover:bg-white hover:text-gray-800 cursor-pointer button" >Login</button>
            </div>
        </Default>
    );
}