"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactFormType } from "@/types/ContactFormType";
import { sendContactMessage } from "./contact.service";
import { toast } from "sonner";

export function useContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormType>();

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    try {
      await sendContactMessage(data);

      setIsSubmitted(true);
      reset();

      toast.success("Message sent successfully!");
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast.error("Error sending message. Please try again.");
      console.error(error);
    }
  };

  return {
    register,
    errors,
    isSubmitting,
    isSubmitted,
    handleSubmit,
    onSubmit,
  };
}
