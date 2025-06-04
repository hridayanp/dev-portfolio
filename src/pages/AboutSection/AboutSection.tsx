'use client';

import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section
      className="h-screen w-screen flex flex-col items-center justify-center px-4"
      id="about"
      style={{ backgroundColor: '#FCFBFD' }} // light lavender
    >
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

      <div
        className="max-w-[900px] w-full p-[30px] rounded-xl border border-white/30 shadow-lg backdrop-blur-md"
        style={{
          background:
            'linear-gradient(135deg, rgba(231, 226, 248, 0.5), rgba(220, 211, 243, 0.4), rgba(240, 240, 255, 0.3))',
          boxShadow:
            'inset 0 0 8px rgba(255, 255, 255, 0.3), 0 4px 12px rgba(188, 180, 255, 0.3)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <Card className="bg-white w-full rounded-xl">
          <CardContent className="p-6">
            <p className="text-base leading-relaxed text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sollicitudin, massa a hendrerit feugiat, neque nulla porta orci,
              vitae ullamcorper metus purus ut sapien. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
