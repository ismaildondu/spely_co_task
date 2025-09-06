import { Mail } from "lucide-react";
import Link from "next/link";
import {User} from "@/app/lib/types/User";

interface UserBoxProps {
    user: User
    hovered?: (userId: number | null) => void
    isBlurred: boolean
}

export default function UserBox({user,hovered,isBlurred}: UserBoxProps) {
    return(
        <div className={`
        w-full 
        transition-all duration-500 ease-in-out 
        ${isBlurred ? "blur-sm" : "blur-none"}
      `}>
        <Link href={"/users/1"} className="w-full"
        onMouseEnter={
            () => hovered && hovered(user.id)
        }
        onMouseLeave={
            () => hovered && hovered(null)
        }
        >
            <article className='bg-gray-200 px-2 py-4 w-full rounded-lg flex flex-col justify-center cursor-pointer
            transition-all duration-400 ease-in-out relative
            h-14
            '>
                <p className="text-gray-800 relative">{user.name}</p>
                <p className="text-gray-700 text-sm flex items-center gap-1
                ">
                    <Mail className="text-gray-600 h-4 w-4"/>
                    {
                        user.email
                    }</p>
            </article>
        </Link>
        </div>
    )
}