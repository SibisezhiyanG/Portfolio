import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Target, CheckCircle } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    "Strong in user research & wireframing",
    "Design systems expertise",
    "Mobile-first mindset",
    "Accessibility focused",
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Designing with <span className="gradient-text">Purpose</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Passionate about crafting intuitive digital experiences that blend creativity with functionality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              As a UI/UX Designer with a Computer Science background, I bring a unique perspective to design 
              that combines technical understanding with creative problem-solving. My approach centers on 
              creating responsive, user-centered digital interfaces that are not only visually appealing 
              but also functional and accessible.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              With hands-on experience in prototyping and design systems, I focus on delivering clean, 
              consistent experiences across all platforms. My mobile-first mindset ensures that every 
              design works seamlessly on any device.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Education Card */}
            <div className="p-6 rounded-2xl gradient-card shadow-card border border-border hover:shadow-card-hover transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Education</h3>
                  <p className="font-medium text-foreground">B.E. Computer Science and Engineering</p>
                  <p className="text-muted-foreground">KCG College of Technology, Chennai</p>
                  <p className="text-primary font-semibold mt-2">CGPA: 8.01</p>
                </div>
              </div>
            </div>

            {/* Certification Card */}
            <div className="p-6 rounded-2xl gradient-card shadow-card border border-border hover:shadow-card-hover transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Certification</h3>
                  <p className="font-medium text-foreground">UI/UX Design Training</p>
                  <p className="text-muted-foreground">FIIT Academy, Tambaram</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    UI/UX fundamentals, wireframing, prototyping, design systems, visual hierarchy & accessibility
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Card */}
            <div className="p-6 rounded-2xl gradient-card shadow-card border border-border hover:shadow-card-hover transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Career Focus</h3>
                  <p className="text-muted-foreground">
                    Building intuitive UI/UX experiences with a strong emphasis on usability, clean design principles, 
                    and creating interfaces that users love to interact with.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
