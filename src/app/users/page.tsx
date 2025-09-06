"use client";

import {inter} from "@/app/ui/fonts";
import UserBox from "@/app/ui/components/userbox/UserBox";
import {User} from "@/app/lib/types/User";
import {UserService} from "@/app/lib/services/user.service";
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import LoadingMockUserBox from "@/app/ui/components/userbox/LoadingMockUserBox";
import UserSearchInput from "@/app/ui/components/usersearch/UserSearchInput";
import { APP_CONSTANTS } from "@/app/lib/constants/app.constants";

export default function Users() {
    const {data, error, isLoading} = useQuery<User[], Error>({
        queryKey: ['users'],
        queryFn: UserService.getUsers
    });

    const [hoveredUserId, setHoveredUserId] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");


  return (
      <div className="bg-gray-100 min-h-screen">
        {/* Search Section - Always visible at top */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="max-w-md mx-auto">
            <UserSearchInput setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
          </div>
        </div>

        {/* Content Section */}
        <section className={`${inter.className} grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-8 sm:gap-6 gap-4 p-4 justify-items-center`}>
          {isLoading && (
            Array.from({ length: APP_CONSTANTS.LOADING_SKELETON_COUNT }, (_, n) => (<LoadingMockUserBox key={n}/>))
          )}
          
          {error && (
            <div className="col-span-full text-center">
              <p className="text-red-600 text-lg">Error: {error.message}</p>
              <p className="text-gray-600 mt-2">{APP_CONSTANTS.ERROR_MESSAGES.NETWORK_ERROR}</p>
            </div>
          )}
          
          {data && data.map(user => {
            const isVisible = !searchTerm || 
              user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
              user.email.toLowerCase().includes(searchTerm.toLowerCase());
            
            const isBlurred = (hoveredUserId !== null && hoveredUserId !== user.id) || 
              (searchTerm !== "" && !isVisible);

            return (
              <UserBox 
                key={user.id}
                user={user}
                searchTerm={searchTerm} 
                isBlurred={isBlurred} 
                hovered={setHoveredUserId}
              />
            );
          })}

          {data && searchTerm && !data.some(user => 
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
          ) && (
            <div className="col-span-full text-center">
              <p className="text-gray-600">No users found matching &ldquo;{searchTerm}&rdquo;</p>
            </div>
          )}
        </section>
      </div>
  );
}
