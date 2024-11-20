'use client'

import React, { useState, useEffect } from "react";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

import Clients from '@/components/clients'

import CustomersList from './customers/customers-list'
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconHeartHandshake,
} from "@tabler/icons-react";


const features = [
  {
    title: "Built for developers",
    description:
      "Built for engineers, developers, dreamers, thinkers and doers.",
    icon: <IconTerminal2 />,
  },
  {
    title: "Ease of use",
    description:
      "It's as easy as using an Apple, and as expensive as buying one.",
    icon: <IconEaseInOut />,
  },
  {
    title: "Pricing like no other",
    description:
      "Our prices are best in the market. No cap, no lock, no credit card required.",
    icon: <IconCurrencyDollar />,
  },
  {
    title: "100% Uptime guarantee",
    description: "We just cannot be taken down by anyone.",
    icon: <IconCloud />,
  },
  {
    title: "Multi-tenant Architecture",
    description: "You can simply share passwords instead of buying new seats",
    icon: <IconRouteAltLeft />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "We are available a 100% of the time. Atleast our AI Agents are.",
    icon: <IconHelp />,
  },
  {
    title: "Money back guarantee",
    description:
      "If you donot like EveryAI, we will convince you to like us.",
    icon: <IconAdjustmentsBolt />,
  },
  {
    title: "And everything else",
    description: "I just ran out of copy ideas. Accept my sincere apologies",
    icon: <IconHeart />,
  },
];

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gray-500 bg-opacity-60 text-white shadow-lg hover:bg-gray-600 transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  
  return (
    <>
      {/* <Hero /> */}
      <BackgroundGradientAnimation containerClassName="h-[100vh] relative">
        <div className="absolute z-20 inset-0 flex items-center justify-center text-white px-4 pointer-events-none text-center -mt-28" data-aos="fade-up">
          <div className="transition duration-250 ease-in-out bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/95 to-white/10 font-montserrat flex flex-col items-center">
            <span className="text-sm lg:text-md text-gray-300 mb-6 flex items-center gap-2">
              <IconHeartHandshake className="w-4 h-4" />
              10% of our profits go towards a charity of your choice.
            </span>
            <span className="text-8xl md:text-9xl">PRIME</span>
            <span className="text-5xl md:text-6xl text-blue-500">INNOVATIONS</span>
            <span className="text-2xl text-gray-300 font-light mt-8">Turning your ideas into reality.</span>
            <div className="mt-6" data-aos="fade-down">
              <div className="inline-flex">
                <button 
                  onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
                  className="btn-sm mt-6 text-slate-300 hover:text-white hover:bg-gray-900 transition duration-150 ease-in-out group bg-transparent relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full shadow cursor-pointer pointer-events-auto"
                >
                  <span className="relative py-3 px-5 inline-flex text-lg items-center">
                    Contact Us &nbsp;<span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"> -&gt;</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-50 md:bottom-0 bottom-[7%]">
          <div className="text-center mb-4 text-gray-500 text-sm translate-y-8">Powered by</div>
          <Clients />
        </div>
      </BackgroundGradientAnimation>
      
      {/* Services */}
      <div id="services" className="grid grid-cols-1 px-2 py-4 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full" data-aos="fade-up">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
              Web Applications & Dashboards
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              We build modern web apps, ecommerce stores, and dashboards that combine beautiful design with powerful features to drive business success.
            </p>
          </div>
          <Image
            src="/images/websites.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[10%] filter -bottom-1 object-contain rounded-xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80 text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
            AI Solutions
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            We build custom ML/LLM solutions and chatbots powered by cutting-edge AI to automate workflows and enhance customer engagement.
          </p>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-yellow-900">
          <h2 className="max-w-80 text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
            Chatbots
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            We build intelligent chatbots that engage your customers 24/7, handle support queries, and drive conversions through natural conversations and personalized interactions.
          </p>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
              Mobile Applications
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              We develop native and cross-platform mobile apps that deliver seamless user experiences across iOS and Android, helping businesses reach and engage their mobile audience effectively.
            </p>
          </div>
          <Image
            src="/images/mobile-app.png"
            width={290}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 lg:-right-[0%] filter -bottom-70 lg:-bottom-80 object-contain rounded-xl"
          />
        </WobbleCard>
      </div>


      {/* Testimonials */}
      <div id="testimonials" className="h-[30rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h1 className="text-center text-4xl mb-6 font-bold text-gray-200">What our clients say</h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      {/* projects */}
      <div className="sm:px-4 md:px-4 pt-10 lg:px-10 lg:pt-2 bg-black" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-center text-4xl mb-8 font-bold text-gray-200">Projects</h1>
          <CustomersList />
        </div>
      </div>

      {/* Contact Us */}
      <div id="contact-us" className="grid grid-cols-1 p-5 lg:grid-cols-4 gap-4 mx-auto max-w-7xl" data-aos="fade-up">
        <h1 className="text-center text-4xl mb-6 font-bold text-gray-200 lg:col-span-4">Contact Us</h1>
        <a href="tel:2046983137" className="block border border-gray-700 hover:border-gray-600 hover:scale-[1.02] rounded-2xl overflow-hidden">
          <div className="p-4 md:p-6 shadow-input bg-black transition-transform cursor-pointer">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="font-bold text-lg text-neutral-200">
                Call Us
              </h3>
            </div>
            <span className="text-sm mt-2 block">
              (204) 698-3137
            </span>
          </div>
        </a>

        <a href="mailto:hadi@primeinnovations.ca" className="block border border-gray-700 hover:border-gray-600 hover:scale-[1.02] rounded-2xl overflow-hidden">
          <div className="p-4 md:p-6 shadow-input bg-black transition-transform cursor-pointer">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-bold text-lg text-neutral-200">
                Email Us
              </h3>
            </div>
            <span className="text-sm mt-2 block">
              hadi@primeinnovations.ca
            </span>
          </div>
        </a>

        <div className="rounded-2xl p-4 md:p-6 shadow-input bg-black border border-gray-700 transition-transform cursor-pointer">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="font-bold text-lg text-neutral-200">
              Winnipeg Office
            </h3>
          </div>
          <p className="text-sm mt-2 text-neutral-300">
            110 Innovation Drive<br />
            Winnipeg, MB R3T 2M1
          </p>
        </div>

        <div className="rounded-2xl p-4 md:p-6 shadow-input bg-black border border-gray-700 transition-transform cursor-pointer">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="font-bold text-lg text-neutral-200">
              Los Angeles Office (Coming Soon)
            </h3>
          </div>
          <p className="text-sm mt-2 text-neutral-300">
            456 Hollywood Blvd<br />
            Los Angeles, CA 90028
          </p>
        </div>
      </div>

      {/* Aurora Background 
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Background lights are cool you know.
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            And this, is chemical burn.
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Debug now
          </button>
        </motion.div>
      </AuroraBackground>
      */}
      {/* Background Lines 
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="font-montserrat bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 tracking-tight" style={{ lineHeight: '1.2' }}>
          Prime <span className="text-blue-500">Innovations</span>
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Turning your ideas into reality.
        </p>
      </BackgroundLines> 
      */}
      {/* <Features /> */}
      {/* <Features02 /> */}
      {/* <Features03 /> */}
      {/* <TestimonialsCarousel /> */}
      {/* <Features04 /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <Cta /> */}
      <BackToTopButton />
    </>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};



const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
 
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};


const testimonials = [
  {
    quote:
      "Prime Innovations delivered a clean, modern website that perfectly fits our needs. The new design has significantly improved user engagement and conversion rates.",
    name: "Sarah Chen",
    title: "CEO, DateBetter",
  },
  {
    quote:
      "The custom CRM they built has streamlined our client management process. Their team was responsive and delivered exactly what we needed.",
    name: "Michael Rodriguez", 
    title: "Operations Director, C15 bulders",
  },
  {
    quote:
      "Their chatbot solution has helped us provide better customer support while reducing costs. Implementation was smooth and the results exceeded expectations.",
    name: "David Thompson",
    title: "CTO, TechFlow",
  },
  {
    quote:
      "The mobile app they developed is intuitive and reliable. Our customers love the seamless experience and we've seen great adoption rates.",
    name: "Jennifer Walsh",
    title: "Product Lead, SwiftServe",
  }
];