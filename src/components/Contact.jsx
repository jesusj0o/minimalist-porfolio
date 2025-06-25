import { useState } from "react";

import { motion } from "framer-motion";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar email con EmailJS u otro servicio
    console.log("Form submitted:", form);
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
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thank-you.html"
            className="flex flex-col gap-6"
          >
            {/* CAMPO OCULTO */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="..."
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="..."
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your message"
              required
              className="..."
            />

            <button
              type="submit"
              className="border border-gray-800 px-6 py-2 font-semibold hover:bg-gray-800 hover:text-white transition-colors w-max"
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
