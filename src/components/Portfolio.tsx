import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Utensio",
      subtitle: "UX/UI Case Study",
      description:
        "A comprehensive food delivery app case study including user research, personas, wireframes, UI design, interactive prototype, and mobile-first usability focus.",
      tags: ["Mobile App", "UX Research", "UI Design", "Prototyping"],
      link: "https://www.behance.net/gallery/239990869/Utensio-UXUI-Case-Study-for-a-Food-Delivery-App",
      featured: true,
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=2071&auto=format&fit=crop", // Food App
    },
    {
      title: "TimeSync",
      subtitle: "Global Time Attendance System",
      description:
        "A modern time attendance and workforce management system designed for global teams with intuitive interfaces and seamless user experience.",
      tags: ["Web App", "Dashboard", "UI Design"],
      link: "https://www.behance.net/gallery/240463621/TimeSync-Global-Global-Time-Attendance-System",
      featured: false,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Dashboard
    },
    {
      title: "Countra",
      subtitle: "Responsive Landing Page UI Concept",
      description:
        "A sleek and modern responsive landing page UI concept showcasing clean design principles and effective visual hierarchy.",
      tags: ["Landing Page", "Responsive", "UI Concept"],
      link: "https://www.behance.net/gallery/241950165/Countra-Responsive-Landing-Page-UI-Concept",
      featured: false,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", // Website
    },
  ];

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Selected projects showcasing my design process and problem-solving approach
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <a
            href={projects[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section - Modified to use img tag */}
                <div className="relative h-64 md:h-80 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-primary/0 transition-colors duration-500" />
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                    {projects[0].title}
                  </h3>
                  <p className="text-lg text-secondary-foreground font-medium mb-3">{projects[0].subtitle}</p>
                  <p className="text-muted-foreground mb-6">
                    {projects[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300">
                    View Case Study
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col">
                  {/* Image Section - Modified to use img tag */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-primary/0 transition-colors duration-500" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-secondary-foreground text-sm font-medium mb-3">{project.subtitle}</p>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="gradient" size="lg" asChild>
            <a
              href="https://www.behance.net/sibigss"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More on Behance
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
