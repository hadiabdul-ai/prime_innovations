import Link from 'next/link'
import Image from 'next/image'
import CustomerImg01 from '@/public/images/datebetter-logo.svg'
import CustomerBg01 from '@/public/images/customer-bg-01.png'
import CustomerImg02 from '@/public/images/Lumarep-logo.svg'
import CustomerBg02 from '@/public/images/customer-bg-02.png'
import CustomerImg03 from '@/public/images/lumarep-logo-2.svg'
import CustomerBg03 from '@/public/images/customer-bg-03.png'
import CustomerImg04 from '@/public/images/customer-04.svg'
import CustomerBg04 from '@/public/images/customer-bg-04.png'
import CustomerImg05 from '@/public/images/customer-05.svg'
import CustomerBg05 from '@/public/images/customer-bg-05.png'
import CustomerImg06 from '@/public/images/customer-06.svg'
import CustomerBg06 from '@/public/images/customer-bg-06.png'
import CustomerImg07 from '@/public/images/customer-07.svg'
import CustomerBg07 from '@/public/images/customer-bg-07.png'
import CustomerImg08 from '@/public/images/customer-08.svg'
import CustomerBg08 from '@/public/images/customer-bg-08.png'
import CustomerImg09 from '@/public/images/customer-09.svg'
import CustomerBg09 from '@/public/images/customer-bg-09.png'
import CustomerImg10 from '@/public/images/customer-10.svg'
import CustomerBg10 from '@/public/images/customer-bg-10.png'
import CustomerAvatar01 from '@/public/images/customer-avatar-01.jpg'
import CustomerAvatar02 from '@/public/images/customer-avatar-02.jpg'
import Particles from '@/components/particles'
import Highlighter, { HighlighterItem02 } from '@/components/highlighter'

export default function CustomersList() {

  const items = [
    {
      name: 'Customer name',
      img: CustomerImg02,
      bg: CustomerBg02,
      link: 'https://www.lumarep.ca',
    },
    {
      name: 'Customer name',
      img: CustomerImg01,
      bg: CustomerBg01,
      link: 'https://www.datebetter.online',
    }
  ]

  return (
  <div className="max-w-[352px] mx-auto sm:max-w-[728px] lg:max-w-none pb-12 md:pb-20">
    <Highlighter className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 group [&_*:nth-child(n+5):not(:nth-child(n+12))]:order-1 [&_*:nth-child(n+10):not(:nth-child(n+11))]:!order-2">

      {items.map((item, index) => (
        <div key={index}>
          <Link href={item.link} target="_blank">
            <HighlighterItem02>
              <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                {/* Particles animation */}
                <Particles className="absolute inset-0 -z-10" quantity={3} />
                <div className="flex items-center justify-center">
                  <Image className="w-full h-full aspect-video object-cover" src={item.bg} width={352} height={198} alt="Customer Background" aria-hidden="true" />
                  <Image className="absolute" src={item.img} alt={item.name} />
                </div>
              </div>
            </HighlighterItem02>
          </Link>
        </div>
      ))}

    </Highlighter>
  </div>
  )
}
