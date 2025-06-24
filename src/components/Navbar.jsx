import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { links } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-10 py-6 font-bold text-gray-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold"></div>

        {/* Enlaces en escritorio */}
        <div className="hidden sm:flex gap-x-8 text-sm">
          {links.map(({ href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              className="hover:underline underline-offset-4"
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              custom={i}
            >
              {label}
            </motion.a>
          ))}
        </div>

        {/* Botón de menú en móvil */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="sm:hidden mt-4 flex flex-col gap-4 text-sm link-font text-gray-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {links.map(({ href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                className="hover:underline underline-offset-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={linkVariants}
                custom={i}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </motion.a>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};
