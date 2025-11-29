
import React, { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { motion, useAnimationControls } from 'framer-motion';

type Testimonial = {
  id: number;
  name: string;
  position: string;
  text: string;
  avatar: string;
  initials: string;
};

// Testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alice Chen",
    position: "高级AI研究员",
    text: "Harits是我合作过的最有创意的工程师之一。他将AI概念与电气工程原理相结合的能力为我们的团队带来了突破性的解决方案。",
    avatar: "https://images.unsplash.com/photo-010-xxxxxxxx25-a6a2a5aee158?w=150&h=150&fit=crop&q=80",
    initials: "AC"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    position: "项目负责人，创新系统公司",
    text: "与Harits一起工作是一次难以置信的经历。他的技术专长和解决问题的能力始终帮助我们提前完成复杂的项目。",
    avatar: "https://images.unsplash.com/photo-010-xxxxxxxx60-fd1ca04f0952?w=150&h=150&fit=crop&q=80",
    initials: "MR"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "首席技术官，动力科技解决方案",
    text: "Harits在每个项目中都展现出技术卓越性和创新思维。他在我们电气系统上的工作将效率提高了30%以上。",
    avatar: "https://images.unsplash.com/photo-010-xxxxxxxx42-b8d87734a5a2?w=150&h=150&fit=crop&q=80",
    initials: "SJ"
  },
  {
    id: 4,
    name: "David Lee",
    position: "首席工程师，未来科技实验室",
    text: "Harits在AI和电气工程方面的知识深度令人瞩目。他始终能提供其他人想不到的解决方案。",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&q=80",
    initials: "DL"
  },
  {
    id: 5,
    name: "Emma Wilson",
    position: "研究总监，AI研究院",
    text: "我指导过许多工程师，但Harits以其独特的视角和奉献精神脱颖而出。他将理论与实际应用相结合的能力非常出色。",
    avatar: "https://images.unsplash.com/photo-010-xxxxxxxx61-15a19d654956?w=150&h=150&fit=crop&q=80",
    initials: "EW"
  }
];

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [duplicatedItems, setDuplicatedItems] = useState<Testimonial[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  // Create duplicated items to enable infinite scroll effect
  useEffect(() => {
    // Duplicate the testimonials to create seamless infinite scroll
    setDuplicatedItems([...testimonials, ...testimonials, ...testimonials]);
  }, []);

  // Effect to handle animation controls based on isPaused state
  useEffect(() => {
    const startAnimation = () => {
      controls.start({
        x: "-100%",
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 45, // Slower for smoother appearance
          ease: "linear"
        }
      });
    };
    
    if (isPaused) {
      controls.stop();
    } else {
      // Use a small delay before starting to allow for full component render
      const timeout = setTimeout(startAnimation, 100);
      return () => clearTimeout(timeout);
    }
  }, [isPaused, controls]);

  return (
    <section id="testimonials" className="w-full py-12 md:py-16 bg-black vintage-effect overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-8 text-center text-gray-100 vintage-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          他人评价
        </motion.h2>
        
        <div className="mb-8 max-w-3xl mx-auto text-center">
          <motion.p 
            className="text-lg text-gray-300/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            来自我有幸合作的同事和客户的推荐
          </motion.p>
        </div>

        {/* Infinite scrolling testimonial carousel with optimized animation */}
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={containerRef}
        >
          <motion.div 
            className="flex gap-6 will-change-transform"
            animate={controls}
            initial={{ x: 0 }}
          >
            {duplicatedItems.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[280px] md:w-[320px] vintage-project-card rounded-xl bento-card glow-border"
              >
                <div className="p-5 flex flex-col h-full relative">
                  {/* Enhanced vintage texture overlay */}
                  <div className="absolute inset-0 rounded-xl bg-[#221F26] opacity-60 mix-blend-soft-light pointer-events-none z-0"></div>
                  <div className="absolute inset-0 grain-texture rounded-xl opacity-30"></div>
                  
                  <div className="flex items-center gap-3 mb-3 relative z-10">
                    <Avatar className="h-12 w-12 border-2 border-white/10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-900/80 to-blue-600/50 text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white text-base">{testimonial.name}</h4>
                      <p className="text-xs text-blue-300/80">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-sm leading-relaxed relative z-10 mt-1">{testimonial.text}</p>

                  {/* Decorative vintage quote element */}
                  <div className="absolute bottom-3 right-3 opacity-20">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.63 17.93C5.38 17.93 2 14.46 2 10.3C2 6.25 5.38 2.77 9.63 2.77C13.88 2.77 17.26 6.25 17.26 10.3C17.26 14.46 13.88 17.93 9.63 17.93Z" stroke="currentColor" strokeWidth="0.5" strokeMiterlimit="10"/>
                      <path d="M21.98 21.98C21.98 21.98 17.51 17.59 17.26 17.33" stroke="currentColor" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Left and right fade effects for better entry/exit points */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
