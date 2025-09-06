"use client";

import Link from "next/link";
import {inter} from "@/app/ui/fonts";
import {ArrowBigLeft, Briefcase, Building2, CircleDot, Globe, House, Phone, Target, Workflow} from "lucide-react";
import {usePathname} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {User} from "@/app/lib/types/User";
import {UserService} from "@/app/lib/services/user.service";


export default function Users() {
    const userId = usePathname().split("/").pop();
    const {data, error, isLoading} = useQuery<User, Error>({
        queryKey: ['user', userId],
        queryFn: () => UserService.getUser(userId || ""),
        enabled: !!userId
    });

    if (error) {
        return (
            <div className="
      bg-gray-100
    min-h-screen flex justify-center items-center">
                <p className="text-red-600 text-lg">Error: {error.message}</p>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="
      bg-gray-100
    min-h-screen flex justify-center items-center">
                <p className="text-gray-600 text-lg">Loading user...</p>
            </div>
        );
    }


    return (
        <div className="
      bg-gray-100
    min-h-screen">
            <div>
                <Link href={"/users"} className="cursor-pointer text-blue-600 p-4 inline-block transition-all duration-300 hover:px-2.5 hover:text-blue-700">
                   <div className="flex items-center gap-2">
                       <ArrowBigLeft/>
                       <p>Back to Users</p>
                   </div>
                </Link>
            </div>
            <section className={`${inter.className} 
    md:grid
    
    md:grid-cols-6
    md:grid-rows-3
    
    flex flex-col
    justify-center
    
    p-4
    
    
    
    md:gap-1
    gap-2
    `}>

                <div className="
            md:row-start-1
            md:col-start-1
            md:col-span-1
            md:row-span-2

            bg-gray-200
            rounded-lg
            px-4
            py-2
            h-32
            flex flex-col justify-center
            ">
                    <p className="text-lg underline text-gray-900">
                        {data!.name}
                    </p>

                    <p className="text-gray-600 text-sm">
                        {data!.email}
                    </p>
                </div>

                <div className="
            md:row-start-1
            md:col-start-2
            md:col-span-2
            md:row-span-2


            bg-gray-200
            rounded-lg
            px-4
            py-2
            h-32

            flex flex-col justify-center

            gap-1
            ">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-900 md:text-lg text-sm flex items-center">
                            <Globe className="inline-block w-5 h-5 mr-1 text-gray-900"/>
                            Street:
                        </span>
                        <span className="text-gray-800 text-sm">
                            {data!.address.street}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-900 md:text-lg text-sm flex items-center">
                            <House className="inline-block w-5 h-5 mr-1 text-gray-900"/>
                            Suite:
                        </span>
                        <span className="text-gray-800 text-sm">
                            {data!.address.suite}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-900 md:text-lg text-sm flex items-center">
                            <Building2 className="inline-block w-5 h-5 mr-1 text-gray-900"/>
                            City:
                        </span>
                        <span className="text-gray-800 text-sm">
                            {data!.address.city}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-900 md:text-lg text-sm flex items-center">
                            <CircleDot className="inline-block w-5 h-5 mr-1 text-gray-900"/>
                            Zipcode:
                        </span>
                        <span className="text-gray-800 text-sm">
                            {data!.address.zipcode}
                        </span>
                    </div>
                </div>

                <div className="
            md:row-start-1
            md:col-start-4
            md:col-span-3
            md:row-span-2


            bg-gray-200
            rounded-lg
            px-4
            py-2
            h-32

            flex flex-col justify-center

            gap-1
            ">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-900 md:text-lg text-sm flex items-center">
                            <Briefcase className="inline-block w-5 h-5 mr-1 text-gray-900"/>
                            Company Name:
                        </span>
                        <span className="text-gray-800 text-sm">
                            {data!.company.name}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-900 md:text-lg text-sm flex items-center">
                            <Target className="inline-block w-5 h-5 mr-1 text-gray-900"/>
                             Phrase:
                        </span>
                        <span className="text-gray-800 text-sm">
                            {data!.company.catchPhrase}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-900 md:text-lg text-sm flex items-center">
                            <Workflow className="inline-block w-5 h-5 mr-1 text-gray-900"/>
                            BS:
                        </span>
                        <span className="text-gray-800 text-sm">
                            {data!.company.bs}
                        </span>
                    </div>

                </div>



                <div className="
            md:col-start-1
            md:row-start-3
            bg-gray-200
            rounded-lg
            px-4
            py-2
            h-16
            flex flex-col justify-center
            ">
                    <p className="text-gray-800 text-sm">
                        <span className="underline text-gray-600">Username:</span>&nbsp; {data!.username}
                    </p>
                </div>

                <div className="
            md:col-start-2
            md:col-span-3
            bg-gray-200
            row-start-3
            rounded-lg
            px-4
            py-2
            h-16
            flex flex-col justify-center
            ">
                    <div className="flex justify-between align-center">
                        <div className="flex items-center gap-1">
                            <Phone className="text-gray-600 w-4 h-4"/>
                            <p className="text-gray-800 underline text-sm">
                                {data!.phone}
                            </p>
                        </div>

                        <div className="flex items-center gap-1">
                            <Globe className="text-gray-600 w-4 h-4"/>
                            <p className="text-gray-800 underline text-sm">
                                {data!.website}
                            </p>
                        </div>


                    </div>

                </div>


            </section>

        </div>
    );
}
