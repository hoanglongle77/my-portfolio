"use client";

import BadgeCard from "@/shared/UI/BadgeCard/BadgeCard";

const SkillsSection = ({ title, dataSource }) => {
  return (
    <section
      id="skills"
      className="py-8 px-6 sm:px-10 md:px-10 lg:px-20 bg-[var(--color-background)]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-[var(--color-primary)] mb-6">
          {title}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {dataSource.map((skill, index) => (
            <BadgeCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
