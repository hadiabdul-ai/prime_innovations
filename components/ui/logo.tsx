import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo.svg'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Cruip">
      <Image className="max-w-none mt-5" src={LogoImg} width={45} height={45} priority alt="Stellar" />
    </Link>
  )
}