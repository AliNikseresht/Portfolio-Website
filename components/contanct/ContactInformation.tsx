import { motion } from "motion/react";
import Link from "next/link";
import { contactInfo } from "@/data/contactInfo";
import contactLogo from "@/public/ContactSection-image.png";
import Image from "next/image";

const ContactInformation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-2"
    >
      <div>
        <h3 className="text-xl md:text-3xl">
          Let's talk about everything!
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg">
          Don't like forms? Send me an email directly or connect with me on
          social media. I'm always open to discussing new projects, creative
          ideas, or opportunities to be part of your visions.
        </p>
      </div>

      <div className="space-y-2">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group"
          >
            {info.href ? (
              <Link
                href={info.href}
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors border border-gray-200 dark:border-gray-700"
              >
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <info.icon className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {info.label}
                  </p>
                  <p className="text-gray-900 dark:text-gray-100">
                    {info.value}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <info.icon className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {info.label}
                  </p>
                  <p className="text-gray-900 dark:text-gray-100">
                    {info.value}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative h-64 rounded-2xl overflow-hidden"
      >
        <Image
          priority
          src={contactLogo}
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 from-blue-600/80 to-transparent flex items-end p-6">
          <p className="text-white text-sm md:text-lg">
            Let's build something amazing together! 🚀
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInformation;
