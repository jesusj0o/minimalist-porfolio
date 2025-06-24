import { motion } from "framer-motion";
import { projects } from "../constants";

export const Projects = () => {
  return (
 <section id="portfolio" className="w-full px-10 py-16 font-sans text-gray-800 grid grid-cols-12 md:-mt-30">
      <div className="col-span-1 lg:col-span-2" />

      <div className="col-span-10 lg:col-span-8 flex flex-col gap-14">
        {/* Header */}
        <motion.div
          className="flex flex-col items-end text-right"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-md text-gray-700 mb-1">Featured</p>
          <h1 className="text-6xl sm:text-7xl font-bold">Projects*</h1>
        </motion.div>

        {/* Grid de cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                style={{ borderRadius: 0 }}
              />
              <div className="mt-4 flex flex-col flex-grow">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold hover:underline underline-offset-4"
                >
                  {project.title}
                </a>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 select-none"
                      style={{ borderRadius: 0 }}
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <div className="col-span-1 lg:col-span-2" />
    </section>
  );
};
