import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "../Button";
import { Container } from "./styles";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  comments: string;
};

interface ValidationRule {
  required: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
}

const validationRules: Record<keyof Inputs, ValidationRule> = {
  name: { required: "Full Name is required" },
  email: {
    required: "Email is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Invalid email address",
    },
  },
  phone: {
    required: "Phone Number is required",
    pattern: {
      value: /^[0-9]{10}$/,
      message: "Invalid phone number (should be 10 digits)",
    },
  },
  comments: { required: "Comments are required" },
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const handleOnSubmit: SubmitHandler<Inputs> = (data) => {
    toast("Message sent successfully", {
      type: "success",
    });
    reset();
    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(handleOnSubmit)}>
      <h1>Contact Agent</h1>
      <div className="input-container">
        <input
          placeholder="Full Name *"
          {...register("name", validationRules.name)}
        />
        {errors.name && (
          <span className="error-message">{errors.name.message}</span>
        )}
        <input
          type="email"
          placeholder="Email *"
          {...register("email", validationRules.email)}
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}

        <input
          placeholder="Phone Number *"
          {...register("phone", validationRules.phone)}
        />
        {errors.phone && (
          <span className="error-message">{errors.phone.message}</span>
        )}
        <textarea
          placeholder="Comments *"
          {...register("comments", validationRules.comments)}
        />
        {errors.comments && (
          <span className="error-message">{errors.comments.message}</span>
        )}
      </div>
      <Button title="Contact Now" type="submit" />
      <ToastContainer />
    </Container>
  );
}
