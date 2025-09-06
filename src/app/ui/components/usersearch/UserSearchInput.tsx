import { APP_CONSTANTS } from "@/app/lib/constants/app.constants";

interface UserSearchInputProps {
    searchTerm: string
    setSearchTerm: (term: string) => void
}

export default function UserSearchInput({searchTerm, setSearchTerm}: UserSearchInputProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className="relative w-full">
            <input
                type="text"
                placeholder={APP_CONSTANTS.SEARCH_PLACEHOLDER}
                className="w-full h-full border border-gray-300 rounded outline-none focus:ring-2 p-2 focus:ring-blue-200"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    )
}