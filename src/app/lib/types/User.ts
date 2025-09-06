import type { Address } from "@/app/lib/types/Address/Address";
import type {Company} from "@/app/lib/types/Company";

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}