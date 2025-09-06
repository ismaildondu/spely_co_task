import type {User} from "@/app/lib/types/User";
import {API_BASE_URL} from "@/app/lib/services/api.service";

export const UserService = {
    async getUsers(): Promise<User[]> {
        const res = await fetch(API_BASE_URL + "/users");
        if (!res.ok) {
            throw new Error('Failed to fetch users');
        }
        return res.json();
    },
    async getUser(id: string): Promise<User> {
        const res = await fetch(API_BASE_URL + `/users/${id}`);
        if (!res.ok) {
            throw new Error('Failed to fetch user');
        }
        return res.json();
    }
}