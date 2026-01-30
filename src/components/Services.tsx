import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Palette, 
  Smartphone, 
  Monitor, 
  PenTool, 
  Code2,
  ArrowUpRight
} from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually stunning user interfaces with a focus on user experience, research-driven design decisions, and consistent visual language.",
      features: ["User Research", "Interaction Design", "Visual Design", "Usability Testing"],
    },
    {
      icon: Smartphone,
      title: "Mobile App UI Design",
      description: "Designing beautiful and functional mobile app interfaces that prioritize user engagement and follow platform-specific design guidelines.",
      features: ["iOS Design", "Android Design", "App Prototypes", "Gesture Design"],
    },
    {
      icon: Monitor,
      title: "Website UI Design",
      description: "Crafting modern, responsive website designs that combine aesthetics with functionality to create memorable digital experiences.",
      features: ["Landing Pages", "Web Apps", "E-commerce", "Dashboards"],
    },
    {
      icon: PenTool,
      title: "Wireframing & Prototyping",
      description: "Building low and high-fidelity wireframes and interactive prototypes to visualize and validate design concepts before development.",
      features: ["Lo-Fi Wireframes", "Hi-Fi Mockups", "Interactive Prototypes", "User Flows"],
    },
    {
      icon: Code2,
      title: "Front-End UI Development",
      description: "Translating designs into clean, responsive code using modern front-end technologies to bring your vision to life.",
      features: ["HTML/CSS", "React Development", "Responsive Code", "Animation"],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Premium design services tailored to bring your digital vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`group relative p-8 rounded-2xl bg-background border border-border shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover gradient border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
