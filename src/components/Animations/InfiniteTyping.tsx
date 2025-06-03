/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface InfiniteTypingProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  eraseSpeed?: number;
  pauseTime?: number;
  as?: React.ElementType;
}

export function InfiniteTyping({
  texts,
  className,
  typingSpeed = 100,
  eraseSpeed = 50,
  pauseTime = 500,
}: InfiniteTypingProps) {
  const [currentText, setCurrentText] = useState<string>('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let i = 0;

    const handleTyping = () => {
      const fullText = texts[textIndex];

      if (!isDeleting) {
        if (i < fullText.length) {
          setCurrentText(fullText.substring(0, i + 1));
          i++;
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (i > 0) {
          setCurrentText(fullText.substring(0, i - 1));
          i--;
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const typingInterval = setInterval(
      handleTyping,
      isDeleting ? eraseSpeed : typingSpeed
    );

    return () => clearInterval(typingInterval);
  }, [textIndex, isDeleting, typingSpeed, eraseSpeed, pauseTime]);

  return (
    <motion.div
      className={cn(
        'text-[18px] font-normal leading-[3rem] tracking-[-0.02em]',
        className
      )}
    >
      {`👋 ${currentText}`}
      <span className="animate-blink">|</span>
    </motion.div>
  );
}
