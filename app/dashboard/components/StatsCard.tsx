'use client';

import { Paper, Text, Stack, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface StatsCardProps {
  title: string;
  value: number | string;
  delay?: number;
  icon?: React.ReactNode;
  color?: string;
}

export function StatsCard({ title, value, delay = 0, icon, color = 'blue' }: StatsCardProps) {
  const [count, setCount] = useState(0);
  const isNumber = typeof value === 'number';

  useEffect(() => {
    if (isNumber) {
      const duration = 2000;
      const steps = 60;
      const stepValue = (value as number) / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += 1;
        setCount(Math.floor(stepValue * current));
        if (current >= steps) {
          setCount(value as number);
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [value, isNumber]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -30 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay,
        type: 'spring',
        stiffness: 100
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        boxShadow: '0 20px 30px rgba(0,0,0,0.2)'
      }}
      style={{ perspective: 1000 }}
    >
      <Paper
        p="xl"
        withBorder
        h="100%"
        style={{
          background: `linear-gradient(135deg, var(--mantine-color-${color}-0), var(--mantine-color-${color}-1))`,
          border: `1px solid var(--mantine-color-${color}-2)`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.div
          className="particles"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                background: `var(--mantine-color-${color}-2)`,
                borderRadius: '50%',
                width: Math.random() * 20 + 10,
                height: Math.random() * 20 + 10,
                opacity: 0.2
              }}
              animate={{
                x: [Math.random() * 200, Math.random() * 200],
                y: [Math.random() * 200, Math.random() * 200],
                scale: [1, 0.8, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          ))}
        </motion.div>

        <Stack gap="md" style={{ position: 'relative', zIndex: 1 }}>
          {icon && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                delay: delay + 0.2
              }}
              style={{ color: `var(--mantine-color-${color}-6)` }}
            >
              {icon}
            </motion.div>
          )}
          <Box>
            <Text
              size="2xl"
              fw={700}
              style={{
                color: `var(--mantine-color-${color}-7)`,
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: delay + 0.4 }}
              >
                {isNumber ? count.toLocaleString() : value}
              </motion.span>
            </Text>
            <Text
              size="sm"
              style={{
                color: `var(--mantine-color-${color}-8)`,
                opacity: 0.8
              }}
            >
              {title}
            </Text>
          </Box>
        </Stack>
      </Paper>
    </motion.div>
  );
}