import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Illustration from '@/assets/images/common/illustration.png';
import { useState } from 'react';

const DoubleFacedCard = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="w-56 h-56"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{
          rotateY: hovered ? 180 : 0,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="relative w-full h-full rounded-[25%] shadow-2xl"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front Face */}
        <div
          className="absolute w-full h-full rounded-[25%] flex items-center justify-center bg-blue-400"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <img
            src={Illustration}
            alt="Profile"
            className="w-40 h-40 object-contain rounded-2xl"
          />
        </div>

        {/* Back Face */}
        <div
          className="absolute w-full h-full rounded-[25%] flex items-center justify-center px-4 text-center select-none"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            backgroundColor: '#fff',
          }}
        >
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Rotating Text Around Outer Circle */}
            <motion.svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              className="absolute z-0"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: 'linear',
              }}
            >
              {/* Outer Circle Border */}
              <circle
                cx="80"
                cy="80"
                r="78"
                stroke="black"
                strokeWidth="2"
                fill="none"
              />
              <defs>
                <path
                  id="text-circle"
                  d="M80,80 m-55,0 a55,55 0 1,1 110,0 a55,55 0 1,1 -110,0"
                  fill="none"
                />
              </defs>
              <text
                fill="black"
                fontSize="17"
                fontWeight="600"
                letterSpacing="2"
              >
                <textPath href="#text-circle" startOffset="0%">
                  Scroll down • to know me better •
                </textPath>
              </text>
            </motion.svg>

            {/* Inner Circle with Bouncing Arrow */}
            <div className="w-16 h-16 rounded-full border-2 border-black bg-white flex items-center justify-center z-10">
              <ArrowDown className="text-black w-6 h-6 animate-bounce-slow" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DoubleFacedCard;
