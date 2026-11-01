'use client'

import React, { useState, useEffect } from "react";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

import Clients from '@/components/clients'

import CustomersList from './customers/customers-list'
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
  IconLayoutDashboard,
  IconRobot,
  IconMessageChatbot,
  IconMicrophone,
  IconPhone,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";


const contactCard = "rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6 transition hover:border-white/20 hover:bg-white/[0.05]";
const contactIcon = "flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-gray-200 ring-1 ring-white/10";

const SectionHeading = ({ title }: { title: string }) => (
  <h2 className="mb-10 text-center text-3xl md:text-4xl font-bold text-gray-100">{title}</h2>
);

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

const evaluationMailto =
  "mailto:hadi@primeinnovationshq.com" +
  "?subject=" + encodeURIComponent("Free Business Evaluation Request") +
  "&body=" + encodeURIComponent(
`Hi Prime Innovations,

I'd like a free evaluation of my business.

1. What does your business do, and who are your customers?

2. How big is your team?

3. Which AI tools, if any, are you using today (e.g. ChatGPT, Copilot)?

4. What tasks take up the most time for you or your team?

5. What would you most like AI to help with?

Name:
Company / website:
Phone (optional):
`);

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        });
      }}
      className="text-xs rounded-full border border-gray-700 hover:border-gray-500 px-2 py-0.5 text-gray-400 hover:text-white transition"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
};

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
        <div className="absolute z-20 inset-0 flex items-center justify-center text-white px-4 pointer-events-none text-center -mt-28" >
          <div className="transition duration-250 ease-in-out bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/95 to-white/10 font-montserrat flex flex-col items-center">
            <span className="text-sm lg:text-md text-gray-300 mb-6 flex items-center gap-2">
              <IconHeartHandshake className="w-4 h-4" />
              10% of our profits go towards a charity of your choice.
            </span>
            <span className="text-8xl md:text-9xl">PRIME</span>
            <span className="text-5xl md:text-6xl text-blue-500">INNOVATIONS</span>
            <span className="text-2xl text-gray-300 font-light mt-8">Get a free evaluation of your business.</span>
            <div data-aos="fade-down">
              <div className="inline-flex">
                <a
                  href={evaluationMailto}
                  className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-7 py-3 text-base font-medium text-white shadow-lg shadow-blue-600/30 ring-1 ring-white/10 transition duration-150 ease-in-out hover:bg-blue-500 hover:shadow-blue-500/50 pointer-events-auto"
                >
                  Contact Us
                </a>
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 pointer-events-auto">
                <span className="text-sm text-gray-300 select-all cursor-text">hadi@primeinnovationshq.com</span>
                <CopyButton text="hadi@primeinnovationshq.com" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-50">
          <Clients />
        </div>
      </BackgroundGradientAnimation>
      
      {/* Services */}
      <div id="services" className="px-5 pt-24 max-w-7xl mx-auto w-full" data-aos="fade-up">
        <SectionHeading title="Services" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-pink-800" className="py-8 sm:px-8">
          <div className="max-w-lg">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/20">
              <IconLayoutDashboard className="h-6 w-6" stroke={1.75} />
            </span>
            <h3 className="mt-4 text-left text-balance text-2xl md:text-3xl font-semibold tracking-[-0.015em] text-white">
              Web Applications & Dashboards
            </h3>
            <p className="mt-3 text-left text-base/6 text-neutral-200">
              We build modern web apps, ecommerce stores, and dashboards that combine beautiful design with powerful features to drive business success.
            </p>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1" className="py-8 sm:px-8">
          <div className="max-w-lg">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/20">
              <IconRobot className="h-6 w-6" stroke={1.75} />
            </span>
            <h3 className="mt-4 text-left text-balance text-2xl md:text-3xl font-semibold tracking-[-0.015em] text-white">
              Agentic AI Solutions
            </h3>
            <p className="mt-3 text-left text-base/6 text-neutral-200">
              AI agents that take on multi-step work for you. They read emails and documents, make decisions, and update your tools, handing off to your team when a human is needed.
            </p>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 bg-yellow-900" className="py-8 sm:px-8">
          <div className="max-w-lg">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/20">
              <IconMessageChatbot className="h-6 w-6" stroke={1.75} />
            </span>
            <h3 className="mt-4 text-left text-balance text-2xl md:text-3xl font-semibold tracking-[-0.015em] text-white">
              Chatbots
            </h3>
            <p className="mt-3 text-left text-base/6 text-neutral-200">
              Trained on your website, FAQs and documents, a chatbot answers customer questions 24/7, captures leads, and passes complex conversations to your team.
            </p>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-blue-900" className="py-8 sm:px-8">
          <div className="max-w-lg">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/20">
              <IconMicrophone className="h-6 w-6" stroke={1.75} />
            </span>
            <h3 className="mt-4 text-left text-balance text-2xl md:text-3xl font-semibold tracking-[-0.015em] text-white">
              Voice Agents
            </h3>
            <p className="mt-3 text-left text-base/6 text-neutral-200">
              AI phone agents that answer calls in a natural voice, any time of day. They handle questions, book appointments and take orders, then log every call and send a summary to your team.
            </p>
          </div>
        </WobbleCard>
        </div>
      </div>


      {/* projects */}
      <div className="pt-24" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-5">
          <SectionHeading title="Projects" />
          <CustomersList />
        </div>
      </div>

      {/* Contact Us */}
      <div id="contact-us" className="grid grid-cols-1 px-5 pt-4 pb-16 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto max-w-7xl w-full" data-aos="fade-up">
        <div className="sm:col-span-2 lg:col-span-4"><SectionHeading title="Contact Us" /></div>

        <div className={contactCard}>
          <div className={contactIcon}><IconPhone size={20} stroke={1.75} /></div>
          <a href="tel:2046983137" className="mt-4 block font-semibold text-gray-100 hover:text-white w-fit">Call Us</a>
          <span className="mt-1 block text-sm text-gray-400 select-text cursor-text">(204) 698-3137</span>
        </div>

        <div className={`${contactCard} relative`}>
          <div className="absolute top-5 right-5 md:top-6 md:right-6"><CopyButton text="hadi@primeinnovationshq.com" /></div>
          <div className={contactIcon}><IconMail size={20} stroke={1.75} /></div>
          <a href={evaluationMailto} className="mt-4 block font-semibold text-gray-100 hover:text-white w-fit">Email Us</a>
          <span className="mt-1 block text-sm text-gray-400 select-all cursor-text">hadi@primeinnovationshq.com</span>
        </div>

        <div className={contactCard}>
          <div className={contactIcon}><IconMapPin size={20} stroke={1.75} /></div>
          <h3 className="mt-4 font-semibold text-gray-100">Winnipeg Office</h3>
          <p className="mt-1 text-sm text-gray-400">
            110 Innovation Drive<br />
            Winnipeg, MB R3T 2M1
          </p>
        </div>

        <div className={contactCard}>
          <div className={contactIcon}><IconMapPin size={20} stroke={1.75} /></div>
          <h3 className="mt-4 font-semibold text-gray-100 flex items-center gap-2">
            Los Angeles Office
            <span className="rounded-full border border-white/15 px-2 py-0.5 text-[11px] font-normal text-gray-400">Coming soon</span>
          </h3>
          <p className="mt-1 text-sm text-gray-400">
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
