'use client';

import React from 'react';
import { motion } from 'framer-motion';

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export function TestimonialsColumn(props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration: props.duration ?? 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-6 rounded-2xl border border-glass bg-white shadow-lg shadow-sage/10 max-w-xs w-full"
                  key={`${index}-${i}`}
                >
                  <p className="font-body text-sm text-espresso/90 leading-relaxed">
                    {text}
                  </p>
                  <div className="flex flex-col mt-5">
                    <span className="font-body font-medium text-sm tracking-tight text-espresso">
                      {name}
                    </span>
                    <span className="font-body text-xs text-espresso/60 tracking-tight">
                      {role}
                    </span>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
}
