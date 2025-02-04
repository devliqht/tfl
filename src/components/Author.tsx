import { FaPen, FaCalendar } from "react-icons/fa6";

interface AuthorProps {
    author: string;
    lastEdited: string;
}
const Author: React.FC<AuthorProps> = ({ author, lastEdited }) => {
    return (
        <div className="flex flex-col gap-2 p-4 border-[1px] rounded-xl border-gray-700">
            <div className="flex flex-col md:flex-row md:gap-8">
                <h1 className="text-black flex flex-row gap-4 items-center lexend-deca-700"><FaPen />Written by</h1>
                <div className="text-red-600 ibm-plex-mono-bold">{author}</div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-8">
                <h1 className="text-black flex flex-row gap-4 items-center lexend-deca-700"><FaCalendar />Last Edited On</h1>
                <div className="text-red-600 ibm-plex-mono-bold">{lastEdited}</div>
            </div>
        </div>
    );
}

export default Author;