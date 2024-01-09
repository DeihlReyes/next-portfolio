'use client';

import { headerLinks } from '@/constants'

const NavItems = () => {
    return (
        <ul className="flex w-full flex-col items-start gap-8 md:flex-row">
        {headerLinks.map((link) => {
            return (
                <li
                    key={link.route}
                    className="flex-center p-medium-16 whitespace-nowrap"
                >
                    <a href={link.route}>{link.label}</a>
                </li>
            )
        })}
        </ul>
    )
}

export default NavItems