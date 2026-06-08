import { motion } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const constraintsRef = useRef(null);
  return (
    <motion.div
      ref={constraintsRef}
      className="bg-[#0a0a0f] py-24 relative"
      id="CONTACT"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.05)_0%,transparent_60%)]" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Contact <span className="primary-color">Me</span>
          </h2>
          <p className="text-gray-500 text-center mb-12 text-lg">
            Let&apos;s build something together
          </p>
        </motion.div>
        <div className="md:w-3/6 mx-auto">
          <motion.div
            drag
            dragConstraints={constraintsRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-orange-500/20 transition-all duration-500"
          >
            <div className="p-8">
              <form
                action="https://getform.io/f/kazRmOaJ"
                target="_blank"
                method="POST"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-neutral-800/80 w-full px-4 py-4 text-gray-400 placeholder-gray-500 border border-gray-700/50 rounded-md focus:outline-none focus:border-orange-500 focus:shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="bg-neutral-800/80 w-full px-4 py-4 text-gray-400 placeholder-gray-500 border border-gray-700/50 rounded-md focus:outline-none focus:border-orange-500 focus:shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all duration-300"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <textarea
                      name="message"
                      required
                      placeholder="Your Message"
                      className="bg-neutral-800/80 w-full px-4 py-8 text-gray-400 placeholder-gray-500 border border-gray-700/50 rounded-md focus:outline-none focus:border-orange-500 focus:shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all duration-300"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="text-lg bg-gradient-to-br from-orange-400 to-pink-600 w-full p-4 font-semibold text-white rounded-md hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-[1.02] transition-all duration-300"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}