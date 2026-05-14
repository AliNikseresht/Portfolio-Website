import { motion } from "motion/react";
import { Send } from "lucide-react";
import { useContactSection } from "./useContactSection";
import { Label } from "../ui/label";
import { contactValidation } from "./contact.validation";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactForm = () => {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useContactSection();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Label htmlFor="name" className="my-1">
          Your Name *
        </Label>
        <Input
          id="name"
          {...register("name", contactValidation.name)}
          placeholder="John Doe"
          className={
            errors.name
              ? "border-red-500 focus-visible:ring-red-500"
              : "text-sm md:text-base"
          }
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-1"
          >
            {errors.name.message}
          </motion.p>
        )}
      </motion.div>
      {/* Email Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Label htmlFor="email" className="my-1">
          Your Email *
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email", contactValidation.email)}
          placeholder="john@example.com"
          className={
            errors.email
              ? "border-red-500 focus-visible:ring-red-500"
              : "text-sm md:text-base"
          }
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-1"
          >
            {errors.email.message}
          </motion.p>
        )}
      </motion.div>
      {/* Subject Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Label htmlFor="subject" className="my-1">
          Subject *
        </Label>
        <Input
          id="subject"
          {...register("subject", contactValidation.subject)}
          placeholder="Project Inquiry"
          className={
            errors.subject
              ? "border-red-500 focus-visible:ring-red-500"
              : "text-sm md:text-base"
          }
        />
        {errors.subject && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-1"
          >
            {errors.subject.message}
          </motion.p>
        )}
      </motion.div>
      {/* Message Field */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Label htmlFor="message" className="my-1">
          Message *
        </Label>
        <Textarea
          id="message"
          {...register("message", contactValidation.message)}
          placeholder="Tell me about your project..."
          rows={5}
          className={
            errors.message
              ? "border-red-500 focus-visible:ring-red-500"
              : "text-sm md:text-base"
          }
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-1"
          >
            {errors.message.message}
          </motion.p>
        )}
      </motion.div>
      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full group cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="mr-2"
              >
                ⏳
              </motion.div>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </motion.div>
    </form>
  );
};

export default ContactForm;
