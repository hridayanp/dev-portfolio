'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const cardContent = [
  "Hey there — I’m a full-stack developer with 4+ years of experience building solid backend systems, intuitive web apps, and now, a pretty powerful cloud-agnostic Disaster Recovery platform. I love diving into tools like FastAPI, PostgreSQL, and all things AWS/Azure/GCP. Whether it's connecting to databases, streaming backups to the cloud, or just making APIs feel snappy and clean, I’m all in. I care a lot about code that’s well-thought-out, not just working — because solid foundations make room for real innovation.",

  'Most of my work is focused on building stuff that just works — even when things go sideways. I’ve built DR pipelines that back up and restore databases automatically, even across clouds. It’s not just about tech, though. I think a lot about how people actually use what I build. That’s why I obsess over the details — like making sure metadata is always accurate, backups are trackable, and users aren’t left in the dark when they need help most. Clean logic, flexible architecture, and future-ready designs — that’s my jam.',

  "But beyond the tech, here’s what really drives me: I love solving hard problems and making them feel simple. I’m curious by nature, always learning, and I don’t mind rolling up my sleeves to figure something out from the ground up. I take ownership seriously — if I start something, I’ll see it through. I'm a strong believer in clear communication, good documentation, and working with a sense of purpose (and humor). If you’re looking for someone who thinks like an engineer but builds like a product owner — we’ll probably get along just fine.",
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
      className="h-[300vh] w-screen relative bg-[#B5B1D6]"
      id="about"
    >
      <div className="h-screen flex items-center justify-center sticky top-0">
        <motion.div
          className="w-full max-w-[900px] p-[30px] rounded-xl bg-[#EAE4F9]/40 backdrop-blur-md border border-white/20 shadow-lg flex justify-center items-center"
          style={{ zIndex: 1 }}
        >
          <Card className="bg-white w-full rounded-xl">
            <CardContent className="p-6">
              <p className="text-base leading-relaxed text-gray-800">
                {cardContent[0]}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="h-screen flex items-center justify-center sticky top-0">
        <motion.div
          style={{ y: card2Y, zIndex: 2 }}
          className="w-full max-w-[900px] p-[30px] rounded-xl bg-[#EAE4F9]/40 backdrop-blur-md border border-white/20 shadow-lg flex justify-center items-center"
        >
          <Card className="bg-white w-full rounded-xl">
            <CardContent className="p-6">
              <p className="text-base leading-relaxed text-gray-800">
                {cardContent[1]}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="h-screen flex items-center justify-center sticky top-0">
        <motion.div
          style={{ y: card3Y, zIndex: 3 }}
          className="w-full max-w-[900px] p-[30px] rounded-xl bg-[#EAE4F9]/40 backdrop-blur-md border border-white/20 shadow-lg flex justify-center items-center"
        >
          <Card className="bg-white w-full rounded-xl">
            <CardContent className="p-6">
              <p className="text-base leading-relaxed text-gray-800">
                {cardContent[2]}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
