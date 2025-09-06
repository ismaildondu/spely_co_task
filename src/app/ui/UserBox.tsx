import { Mail } from "lucide-react";
import Link from "next/link";

export default function UserBox() {
    return(
        <Link href={"/users/1"} className="w-full">
            <article className='bg-gray-200 px-2 py-4 w-full rounded-lg flex flex-col justify-center cursor-pointer
            transition-all duration-400 ease-in-out hover:px-4 relative
            h-14
            '>
                <p className="text-gray-800 relative">Leanne Graham</p>
                <p className="text-gray-700 text-sm flex items-center gap-1
                ">
                    <Mail className="text-gray-600 w-4 h-4"/>
                    Sincere@april.biz</p>
            </article>
        </Link>
    )
}