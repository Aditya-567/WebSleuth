import { UserButton, auth } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link'

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search' },
  { src: '/assets/icons/black-heart.svg', alt: 'heart' },
]

export default async function Navbar() {
    const { userId } = auth();
  return (
    <header className="w-full">

      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />

          <p className="nav-logo">
            Web<span className='text-primary'>Sleuth</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image 
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
          <div>
          {userId ? (
            <div className='flex gap-4 items-center'>
              <UserButton afterSignOutUrl='/' />
            </div>
          ) : (
            <div className='flex gap-4 items-center'>
              <Link href='/sign-up'>Sign up</Link>
              <Link href='/sign-in'>Sign In</Link>
            </div>
          )}
    </div>
          </div>
      </nav>
    </header>
  )
}

