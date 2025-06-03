import { Marquee } from '@/components/Animations/Marquee';

import DoubleFacedCard from '@/components/Animations/DoubleFacedCard';
import { InfiniteTyping } from '@/components/Animations/InfiniteTyping';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Marquee */}
      <div className="absolute inset-0 z-0 flex items-center">
        <Marquee repeat={2} className="w-full mask-linear">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="text-[120px] md:text-[180px] font-black tracking-tight text-[#2d2d2d] whitespace-nowrap"
              style={{ fontFamily: 'Public Sans, sans-serif' }}
            >
              HRIDAYAN PHUKAN
            </span>
          ))}
        </Marquee>
      </div>

      {/* Foreground content will go here later */}
      <div className="relative pt-10 z-40 w-full max-w-screen-xl px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left min-h-[80vh]">
        {/* Left Column with background */}
        <div className="hidden md:block bg-red-100 min-h-[300px] h-full" />

        {/* Center Column (Main Content) */}
        <div className="flex flex-col items-center justify-evenly gap-auto text-black py-0 min-h-[300px] h-full">
          <div className="flex flex-col items-center gap-0">
            <h1 className="text-5xl font-bold leading-tight">
              Hi, I’m Hridayan
            </h1>
            <InfiniteTyping
              texts={[
                '< Hello, World! />',
                '< Namaste, World! />',
                '< Bonjour, World! />',
                '< Konnichiwa, World! />',
              ]}
              typingSpeed={100}
              eraseSpeed={100}
              pauseTime={1000}
            />
          </div>

          <DoubleFacedCard />

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 rounded-2xl bg-black text-white text-base font-medium hover:bg-gray-800 transition">
              Explore Work
            </button>
            <button className="px-6 py-3 rounded-2xl border border-black text-black text-base font-medium hover:bg-black hover:text-white transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Column with background */}
        <div className="hidden md:block bg-blue-100 min-h-[300px] h-full" />
      </div>
    </section>
  );
}
