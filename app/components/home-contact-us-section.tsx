"use client";

import Input from "@/components/input";
import Section from "@/components/section";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { showToast } from "nextjs-toast-notify";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function HomeContactUsSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "all",
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await addDoc(collection(db, "contacts"), {
        name: data.name,
        email: data.email,
        message: data.message,
        createdAt: serverTimestamp(),
      });

      setSubmitStatus("success");
      reset();
      showToast.success(
        "Message sent successfully! We'll get back to you soon.",
        {
          duration: 5000,
          progress: true,
          position: "top-right",
          transition: "bounceIn",
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',
          sound: true,
        }
      );
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      className="my-28"
      title="Get In Touch"
      subtitle="Lets work together"
    >
      <div className="w-[700px] max-w-full px-4 mx-auto mt-14">
        <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              title="Name"
              id="name"
              placeholder="full name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input
              title="Email"
              id="email"
              placeholder="example@email.com"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Input
              tag="textarea"
              title="Message"
              id="message"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {submitStatus === "error" && (
            <div className="bg-red-500 text-white p-4 rounded-[10px] text-center">
              Failed to send message. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white rounded-[10px] text-base font-bold text-black w-full inline-block py-4 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
          >
            {isSubmitting ? "Sending..." : "Get in Touch"}
          </button>
        </form>
      </div>
    </Section>
  );
}
