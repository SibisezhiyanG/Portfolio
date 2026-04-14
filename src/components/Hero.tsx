import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Layout, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpeg";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const words = "Hi, I'm".split(" ");
  const name = "Sibisezhiyan Gopinath".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Gradient Blobs */}
        <motion.div
          style={{ y: y2 }}
          className="absolute top-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"
        />
        <motion.div
          style={{ y: y1, animationDelay: "1s" }}
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse-slow"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

        {/* Floating Geometric Shapes with Parallax */}
        <motion.div
          style={{ y: y3, rotate: rotate1 }}
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[15%] w-16 h-16 rounded-2xl gradient-bg opacity-20 shadow-lg"
        />
        <motion.div
          style={{ y: y2 }}
          animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[20%] w-12 h-12 rounded-full border-4 border-primary/30"
        />
        <motion.div
          style={{ y: y1, rotate: 45 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-[25%] w-20 h-20 rounded-xl border-4 border-accent/30"
        />
        <motion.div
          style={{ y: y3 }}
          animate={{ x: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-[15%] w-10 h-10 gradient-bg rounded-lg opacity-30"
        />

        {/* Dotted pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Available for new projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              <span className="inline-block mr-3">Hi, I'm</span>
              <span className="gradient-text">Sibisezhiyan Gopinath</span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-3xl sm:text-4xl lg:text-5xl block mt-2 text-foreground/80"
              >
                UI/UX Designer & Front End Developer
              </motion.span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              UI/UX Designer with a Computer Science background and hands-on experience designing responsive, user-centered digital interfaces. Focused on creating clean, accessible, and visually consistent experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Button variant="hero" asChild>
                <a href="#portfolio">
                  View Portfolio
                  <ArrowRight className="w-5 h-5 ml-1" />
                </a>
              </Button>
              <Button variant="heroOutline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>

            {/* Quick Highlights */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:scale-110 transition-transform">
                  <Layout className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground text-sm">UI/UX Design</p>
                  <p className="text-xs text-muted-foreground">User-centered</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground text-sm">Mobile-First</p>
                  <p className="text-xs text-muted-foreground">Responsive</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-primary font-bold text-sm">&lt;/&gt;</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground text-sm">Design to Code</p>
                  <p className="text-xs text-muted-foreground">Front-end</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative group">
              {/* Decorative ring with parallax/glow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/20 opacity-50"
              />
              <div className="absolute -inset-4 rounded-full gradient-bg opacity-20 blur-xl animate-pulse-slow group-hover:opacity-40 transition-opacity" />

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src={profileImage}
                  alt="Sibisezhiyan Gopinath"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements around profile */}
              <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-xl gradient-bg flex items-center justify-center shadow-lg z-20"
              >
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;