import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link';

const TalkButton = () => {
  return (
    <Link href='#contact'>
      <Button className="px-8 md:py-6 md:px-10 font-bold tracking-widest text-sm md:text-lg mt-10 md:mt-14">Let&apos;s Talk!</Button>
    </Link>
  )
}

export default TalkButton