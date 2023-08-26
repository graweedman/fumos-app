"use client"

import Link from "next/link"

export default function Navbar(){
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-xl font-bold">Fumos</Link>
                <ul className="flex space-x-4">
                    <Link href="/fumos" className="text-white hover:underline">Fumos</Link>
                    <Link href="#" className="text-white hover:underline">About</Link>
                    <Link href="#" className="text-white hover:underline">Services</Link>
                    <Link href="#" className="text-white hover:underline">Contact</Link>
                </ul>
            </div>

        </nav>
    )
}
