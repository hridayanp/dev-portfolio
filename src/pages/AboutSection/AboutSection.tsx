'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const cardContent = [
  `Hi! I’m someone who truly loves building clean, thoughtful web experiences. I believe great design isn’t just about looking good—it’s about making every interaction feel intuitive and meaningful. With years of hands-on experience, I’ve learned how to balance creativity with purpose, turning ideas into elegant, user-friendly solutions that people enjoy using.`,

  `My journey has been all about growth and curiosity. I started by mastering the fundamentals, and from there, I’ve kept exploring new ways to make digital spaces feel more alive and accessible. Whether it’s crafting smooth animations or designing layouts that breathe, I’m always excited to find that sweet spot where aesthetics meet usability.`,

  `Beyond the pixels and code, I’m someone who values connection and collaboration. I love working closely with teams and clients to understand what truly matters to them, so I can help bring their vision to life. I’m passionate about learning, adapting, and sharing ideas—because I believe that’s how we create something special that lasts.`,
];

export default function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const card2Y = useTransform(scrollYProgress, [0.15, 0.35], ['100%', '0%']);
  const card3Y = useTransform(scrollYProgress, [0.35, 0.6], ['100%', '0%']);

  return (
    <section
      ref={containerRef}
      className="h-[300vh] w-screen relative "
      id="about"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0 animate-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div className="h-screen flex items-center justify-center sticky top-0">
        <motion.div
          className="w-full max-w-[900px] p-[30px] rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg flex justify-center items-center"
          style={{ zIndex: 1 }}
        >
          <Card className="bg-white w-full rounded-xl">
            <CardContent className="p-6">
              <p className="text-xl font-medium text-center leading-relaxed text-gray-800">
                {cardContent[0]}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="h-screen flex items-center justify-center sticky top-0">
        <motion.div
          style={{ y: card2Y, zIndex: 2 }}
          className="w-full max-w-[900px] p-[30px] rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg flex justify-center items-center"
        >
          <Card className="bg-white w-full rounded-xl">
            <CardContent className="p-6">
              <p className="text-xl font-medium text-center leading-relaxed text-gray-800">
                {cardContent[1]}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="h-screen flex items-center justify-center sticky top-0">
        <motion.div
          style={{ y: card3Y, zIndex: 3 }}
          className="w-full max-w-[900px] p-[30px] rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg flex justify-center items-center"
        >
          <Card className="bg-white w-full rounded-xl">
            <CardContent className="p-6">
              <p className="text-xl font-medium text-center leading-relaxed text-gray-800">
                {cardContent[2]}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
