import Link from 'next/link'
import Image from 'next/image'
import SportsHQShot from '@/public/images/projects/sportshq.jpg'
import HidayahShot from '@/public/images/projects/hidayah.jpg'
import AlamWaxBarShot from '@/public/images/projects/alam.jpg'
import SportsHQLogo from '@/public/images/sportsheadquarters-logo.svg'
import HidayahLogo from '@/public/images/hidayah-logo.svg'
import AlamWaxBarLogo from '@/public/images/alamwaxbar-logo.svg'
import Particles from '@/components/particles'
import Highlighter, { HighlighterItem02 } from '@/components/highlighter'

export default function CustomersList() {

  const items = [
    {
      name: 'LOTW Sports Headquarters',
      type: 'Ecommerce store',
      img: SportsHQShot,
      logo: SportsHQLogo,
      link: 'https://sportsheadquarters.ca',
    },
    {
      name: 'Hidayah',
      type: 'Web app',
      img: HidayahShot,
      logo: HidayahLogo,
      link: 'https://myhidayah.com',
    },
    {
      name: 'Alam Wax Bar',
      type: 'Business website',
      img: AlamWaxBarShot,
      logo: AlamWaxBarLogo,
      link: 'https://alamwaxbar.com',
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
                  <Image className="w-full h-full aspect-video object-cover object-top opacity-[0.11] blur-[2px]" src={item.img} alt="" aria-hidden="true" placeholder="blur" />
                  <Image className="absolute" src={item.logo} alt={item.name} />
                  <span className="absolute bottom-5 text-sm text-gray-400">{item.type}</span>
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
