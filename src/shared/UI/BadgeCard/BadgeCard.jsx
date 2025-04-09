import React from "react";

const BadgeCard = ({ skill }) => {
  return (
    <a
      href={skill.certLink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-[0_0_20px_var(--color-primary)/20] hover:shadow-[0_0_25px_var(--color-primary)] transition duration-300"
    >
      {/* Badge Icon */}
      <div className="absolute top-2 left-2 bg-[var(--color-background)] p-1.5 rounded-full border border-[var(--color-border)] shadow-md text-[var(--color-primary)] text-xl">
        {skill.icon}
      </div>

      {/* Certificate image */}
      <img
        src={skill.certImg}
        alt={skill.name}
        className="w-full h-40 object-cover rounded-t-xl group-hover:scale-105 transition duration-300"
      />

      {/* Info */}
      <div className="p-4 text-center">
        <h4 className="text-[var(--color-foreground)] font-semibold text-lg">
          {skill.name}
        </h4>
        <p className="text-xs text-gray-400 mt-1">{skill.certTitle}</p>
      </div>
    </a>
  );
};

export default BadgeCard;
