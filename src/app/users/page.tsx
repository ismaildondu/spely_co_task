import Image from "next/image";
import {inter} from "@/app/ui/fonts";

export default function Users() {
  return (
    <section className={`${inter.className} 
    grid
    lg:grid-cols-5
    md:grid-cols-3
    sm:grid-cols-2
    grid-cols-1
    lg:gap-6
    md:gap-5
    sm:gap-4
    gap-4
    p-4
    bg-gray-100
    min-h-screen
    
    
    `}>
        <div className='bg-amber-700'>
            User 1
        </div>
        <div className='bg-amber-700'>
            User 1
        </div>
        <div className='bg-amber-700'>
            User 1
        </div>
        <div className='bg-amber-700'>
            User 1
        </div>
        <div className='bg-amber-700'>
            User 1
        </div>

    </section>
  );
}
