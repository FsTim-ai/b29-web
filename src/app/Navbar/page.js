import Link from "next/link"
import Mode from "../Mode/page"

export default function Navbar() {
    return(
        <div className="flex justify-between items-center p-4">
            <div className="text-xl font-bold">
            <Link href="/">Home</Link>
            </div>
            <div className="text-xl font-bold space-x-5">
            <Link href="/Mamber">Mamber</Link>
            <Link href="/Event">Event</Link>
            <Link href="/Forum">Forum</Link>
            <Link href="/Study">Study</Link>
            <Link href="/Galery">Galery</Link>
            </div>
            <div>
            <Mode/>
            </div>
        </div>
    )
}