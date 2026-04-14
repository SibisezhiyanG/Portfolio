import { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CursorGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {/* Primary Glow Orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Secondary Glow Orb (Accent Color) */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-20%",
          translateY: "-20%",
        }}
      />

      {/* Subtle Dot Follower (Optional - can be more visible if desired) */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm hidden lg:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
};

export default CursorGlow;
