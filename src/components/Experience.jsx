import { motion } from "framer-motion";
import { experiences } from "../constants";

export const Experience = () => {
  return (
     <section
      id="experience"
      className="w-full px-10 py-16 font-sans text-gray-800 grid grid-cols-12"
    >
      <div className="col-span-1 lg:col-span-2" />
      <div className="col-span-10 lg:col-span-8 flex flex-col gap-14">
        {/* Header */}
        <motion.div
          className="flex flex-col items-start"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-md text-gray-700 mb-1">My professional</p>
          <h1 className="text-6xl sm:text-7xl font-bold">Path*</h1>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-gray-300 pl-6 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="absolute -left-[1.1rem] top-1 w-3 h-3 bg-gray-800" />
              <p className="text-xs text-gray-500">{exp.date}</p>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-600 italic mb-2">{exp.company}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {exp.tech.map(
                  (tech, idx) =>
                    tech && (
                      <span
                        key={idx}
                        className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1"
                        style={{ borderRadius: 0 }}
                      >
                        {tech}
                      </span>
                    )
                )}
              </div>

              <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                {exp.description.trim()}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2" />
    </section>
  );
};
