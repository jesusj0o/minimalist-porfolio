
import {
  FaFileAlt,
  FaComments,
  FaLinkedin,
  FaGithub,
  FaCoffee
} from "react-icons/fa";
import { motion } from "framer-motion";
import { ContactModal } from "./ContacModal";

const UnderlinedLink = ({ icon: Icon, text, href }) => {
  return (
    <motion.a
      href={href}
      className="relative inline-flex items-center gap-2 text-gray-800 cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <Icon className="text-base" />
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute left-0 bottom-0 h-5 w-[150px] bg-[#5cb8f5] rounded-sm z-0 opacity-70"
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          transformOrigin: "left center",
        }}
      />
    </motion.a>
  );
};

export const Hero = () => {
  return (
    <section className="relative h-screen w-full px-10 font-sans text-gray-800 grid grid-cols-12">
      <div className="col-span-1 lg:col-span-2" />

      <motion.div
        className="col-span-10 lg:col-span-8 flex flex-col justify-center items-start space-y-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Saludo */}
        <motion.p
          className="text-md text-gray-700 mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello web cowboy,
        </motion.p>

        {/* Título + imagen */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-8xl lg:text-7xl font-bold flex items-center">
            I’m Jo<sup className="text-gray-800 text-xl ml-1">*</sup>
          </h1>
          <img
            src="/Jo.jpg"
            alt="Me"
            className="h-[4.5rem] lg:h-[5.5rem] object-cover rounded-full"
          />
        </motion.div>

        {/* Descripción + redes y enlaces */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-md text-gray-600 leading-relaxed">
              I'm a Software Developer based in Mexico. Everyday I learn and
              practice code to create the best products as possible. It's
              awesome to have a passion and a work at the same time, don't you
              think?
            </p>

            {/* Redes sociales */}
            <div className="mt-4 flex gap-4 text-2xl text-gray-700 justify-center sm:justify-start">
              <a
                href="https://github.com/jesusj0o"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-gray-900 transition" />
              </a>
              <a
                href="https://www.linkedin.com/in/jesus-jo-255721210/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-gray-900 transition" />
              </a>
              <a
                href="https://buymeacoffee.com/jesusjo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCoffee className="hover:text-gray-900 transition" />
              </a>
            </div>
          </motion.div>

          {/* Columna derecha: Enlaces */}
          <motion.div
            className="flex flex-col gap-4 text-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <UnderlinedLink
              icon={FaFileAlt}
              text="Get my resume **"
              href="Joresume.pdf"
              download
            />  
            <ContactModal/>
          </motion.div>
        </div>

        {/* Footer nota */}
        <motion.div
          className="text-[12px] text-gray-500 leading-tight space-y-1"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <p>
            <sup>*</sup> A competent Developer open to work with you.
          </p>
        </motion.div>
      </motion.div>

      <div className="col-span-1 lg:col-span-2" />
    </section>
  );
};
