import { RegisterOptions } from "react-hook-form";
import { ContactFormType } from "@/types/ContactFormType";

export const contactValidation: Record<
  keyof ContactFormType,
  RegisterOptions<ContactFormType>
> = {
  name: {
    required: "Name is required",
    minLength: {
      value: 2,
      message: "Name must be at least 2 characters",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  subject: {
    required: "Subject is required",
    minLength: {
      value: 3,
      message: "Subject must be at least 3 characters",
    },
  },
  message: {
    required: "Message is required",
    minLength: {
      value: 10,
      message: "Message must be at least 10 characters",
    },
  },
};
