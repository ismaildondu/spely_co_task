import { Mail } from "lucide-react";
import Link from "next/link";
import {User} from "@/app/lib/types/User";

interface UserBoxProps {
    user: User
    hovered?: (userId: number | null) => void
    isBlurred: boolean
    searchTerm: string
}

export default function UserBox({user,hovered,isBlurred, searchTerm}: UserBoxProps) {
    const userLink = `/users/${user.id}`;

    const filteredText = (text: string, highlight: string) => {
        if (!highlight) return text;
        const regex = new RegExp(`(${highlight})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, index) =>
            regex.test(part) ? <span key={index} className="bg-yellow-300 text-black">{part}</span> : part
        );
    };
    return(
        <div className={`
        w-full 
        transition-all duration-500 ease-in-out 
        ${isBlurred ? "blur-sm px-1" : "blur-none"}
      `}>
        <Link href={userLink} className="w-full"
        onMouseEnter={
            () => hovered && (searchTerm == "") && hovered(user.id)
        }
        onMouseLeave={
            () => hovered && hovered(null)
        }
        >
            <article className='bg-gray-200 px-2 py-4 w-full rounded-lg flex flex-col justify-center cursor-pointer
            transition-all duration-400 ease-in-out relative
            h-14
            '>
                <p className="text-gray-800 relative">
                    {filteredText(user.name, searchTerm)}
                </p>
                <p className="text-gray-700 text-sm flex items-center gap-1
                ">
                    <Mail className="text-gray-600 h-4 w-4"/>
                    <span>
                        {filteredText(user.email, searchTerm)}
                    </span>
                </p>
            </article>
        </Link>
        </div>
    )
}