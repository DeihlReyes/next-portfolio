'use client';

import { headerLinks } from '@/constants'
import Link from 'next/link';

const NavItems = () => {
    return (
        <>
        {headerLinks.map((link) => {
            return (
                <li
                    key={link.route}
                    className="flex-center p-medium-16 whitespace-nowrap hover:font-bold transition-all ease-in-out duration-150"
                >
                    <Link href={link.route}>{link.label}</Link>
                </li>
            )
        })}
        </>
    )
}

export default NavItems