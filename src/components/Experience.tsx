import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CheckCircle } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "UI/UX Design Trainee",
      company: "TechTez",
      duration: "Mar 2026 — Present",
      type: "Full-time",
      description: "Learning user-centered design principles and collaborating with developers on wireframes and visual prototypes to create intuitive digital experiences.",
      responsibilities: []
    },
    {
      title: "Developer Trainee Intern",
      company: "Laufrel",
      duration: "Mar 2025 — May 2025",
      type: "Internship",
      description: "Worked on front-end development projects with a focus on improving user interfaces and overall user experience. Collaborated with the team to deliver responsive and accessible web applications.",
      responsibilities: [
        "Improved UI responsiveness across multiple screen sizes",
        "Enhanced visual consistency throughout the application",
        "Implemented accessibility improvements for better usability",
        "Collaborated on usability optimizations for better UX",
      ]
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              transition={{ duration: 0.6, delay: 0.2 + expIndex * 0.1 }}
              className="relative p-8 pl-12 md:pl-20 rounded-3xl bg-background border border-border shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 overflow-hidden group"
            >
              {/* Card Background Glow on Hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-8 top-10 w-8 h-8 rounded-full gradient-bg flex items-center justify-center shadow-lg z-20">
                <Briefcase className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Content */}
              <div className="">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1 font-medium">{exp.duration}</p>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    {exp.type}
                  </span>
                </div>

                {exp.description && (
                  <p className="text-muted-foreground mb-6 text-lg">
                    {exp.description}
                  </p>
                )}

                {exp.responsibilities.length > 0 && (
                  <div className="space-y-3">
                    <p className="font-semibold text-foreground mb-4">Key Contributions:</p>
                    {exp.responsibilities.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
