import Image from "next/image";
import {inter} from "@/app/ui/fonts";
import UserBox from "@/app/ui/UserBox";
export default function Users() {
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
        <UserBox />
        <UserBox />
        <UserBox />
        <UserBox />
        <UserBox />

    </section>

      </div>
  );
}
