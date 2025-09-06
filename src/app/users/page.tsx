"use client";

import Image from "next/image";
import {inter} from "@/app/ui/fonts";
import UserBox from "@/app/ui/components/userbox/UserBox";
import {User} from "@/app/lib/types/User";
import {UserService} from "@/app/lib/services/user.service";
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import LoadingMockUserBox from "@/app/ui/components/userbox/LoadingMockUserBox";

import UserSearchInput from "@/app/ui/components/usersearch/UserSearchInput";

export default function Users() {
    const {data, error, isLoading} = useQuery<User[], Error>({
        queryKey: ['users'],
        queryFn: UserService.getUsers
    });

    const [hoveredUserId, setHoveredUserId] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");


  return (
      <div className="
      bg-gray-100
    min-h-screen">
    <section className={`${inter.className} 
    grid
    lg:grid-cols-5
    md:grid-cols-3
    sm:grid-cols-2
    grid-cols-1
    lg:gap-8
    md:gap-8
    sm:gap-6
    gap-4
    p-4
    justify-items-center
    
    
    `}>

        {isLoading && (
           [1,2,3,4,5,6,7,8,9,10].map(n => (<LoadingMockUserBox key={n}/>))
        )}
        {error && (
            <p className="text-red-600">Error: {error.message}</p>
        )}
        <UserSearchInput setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        {data && data.map(user => (

            <UserBox searchTerm={searchTerm} isBlurred={(hoveredUserId !== (null) && hoveredUserId !== user.id) || searchTerm != "" && !((user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())  ))} hovered={setHoveredUserId} key={user.id} user={user}/>
        ))}

    </section>
      </div>
  );
}
