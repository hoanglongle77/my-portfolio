"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const iconMap = {
  education: (
    <GraduationCap className="text-[var(--color-primary)]" size={20} />
  ),
  work: <Briefcase className="text-[var(--color-primary)]" size={20} />,
};

const Experiences = ({ title, dataSource }) => {
  return (
    <section
      id="experiences"
      className="py-8 px-6 sm:px-10 md:px-10 lg:px-20 bg-[var(--color-background)]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-[var(--color-primary)] mb-6">
          {title}
        </h2>

        <div className="relative border-l-4 border-[var(--color-primary)] pl-6">
          {dataSource.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 relative"
            >
              {/* Icon */}
              <div className="absolute -left-9 top-1 w-6 h-6 flex items-center justify-center bg-[var(--color-background)] border-2 border-[var(--color-primary)] rounded-full shadow-[0_0_10px_var(--color-primary)]">
                {iconMap[exp.type]}
              </div>

              <p className="text-sm text-gray-400">{exp.year}</p>
              <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                {exp.title}
              </h3>
              <p className="text-gray-400 mt-1">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
