import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import AuthProviders from './AuthProviders'


const Navbar = () => {
 const session = {}
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
                <Link href={"/"}>
                        <Image className='bg-white'
                         src="logo.svg" alt='logo' 
                         width={115}
                         height={43}
                         />
                </Link>
                <ul className='xl:flex hidden text-small gap-7'>
                 {NavLinks.map((link,i) =>(
                        <Link href={link.href} key={i} >
                                {link.text}
                        </Link>

                 ))}
                </ul>

        </div>
        <div className='flexCenter gap-4'>
       {session ? (
        <>
        user photo

        <Link href={"/create-project"}>
        share photo
        </Link>
        </>
       ) :(<AuthProviders />)}
        </div>
   </nav>
  )
}

export default Navbar