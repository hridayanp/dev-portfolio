import { Marquee } from '@/components/Marquee/Marquee';

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
    </section>
  );
}
