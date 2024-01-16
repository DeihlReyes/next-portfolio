'use client';

import { headerLinks } from '@/constants'
import Link from 'next/link';

const NavItems = () => {
    return (
        <ul className="flex w-full flex-col items-start gap-12 md:flex-row">
        {headerLinks.map((link) => {
            return (
                <li
                    key={link.route}
                    className="flex-center p-medium-16 whitespace-nowrap"
                >
                    <Link href={link.route}>{link.label}</Link>
                </li>
            )
        })}
        </ul>
    )
}

export default NavItems