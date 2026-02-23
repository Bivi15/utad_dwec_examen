"use client";

import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function Header() {
 return (
    <header className="bg-zinc-700 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Tus productos al instante</h1>

            <nav className="flex gap-6 itmes-center">
                <Link href="/" className="flex itmes-center gap-1 hover:text-gray-300">
                    <HomeIcon className="w-5" /> Home
                </Link>
            </nav>
        </nav>
    </header>
 );
}