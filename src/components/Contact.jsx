import { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Contact from ${form.name} (${form.email})`
    );
    const body = encodeURIComponent(form.message);
    const mailtoLink = `mailto:jesusjho26@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="w-full px-10 py-16 font-sans text-gray-800 grid grid-cols-12"
    >
      <div className="col-span-1 lg:col-span-2" />

      <div className="col-span-10 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Formulario con animación */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-md text-gray-700 mb-1">Let's connect</p>
            <h1 className="text-6xl sm:text-7xl font-bold">Contact me</h1>
          </motion.div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            noValidate
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
              className="border-b border-gray-500 px-1 py-2 bg-transparent placeholder-gray-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={handleChange}
              className="border-b border-gray-500 px-1 py-2 bg-transparent placeholder-gray-500 focus:outline-none"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              required
              value={form.message}
              onChange={handleChange}
              className="border-b border-gray-500 px-1 py-2 bg-transparent placeholder-gray-500 focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="border border-gray-800 px-6 py-2 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors w-max"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Imagen con animación */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <img
            src="/img/jo2.png"
            alt="Contact illustration"
            className="w-full max-w-[340px] object-contain"
          />
        </motion.div>
      </div>

      <div className="col-span-1 lg:col-span-2" />
    </section>
  );
};
