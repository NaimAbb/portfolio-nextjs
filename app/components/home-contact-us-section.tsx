"use client";

import Input from "@/components/input";
import Section from "@/components/section";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactUs } from "@/services/app";
import { showSuccessToast } from "@/util/helpers";

export type FormData = {
  name: string;
  email: string;
  message: string;
  service: string;
};

const services = [
  { value: "", label: "Select a service" },
  { value: "web-development", label: "Web Development" },
  { value: "mobile-development", label: "Mobile Development" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "consulting", label: "Consulting" },
  { value: "seo", label: "SEO Services" },
  { value: "other", label: "Other" },
];

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
      await contactUs(data);
      setSubmitStatus("success");
      reset();

      showSuccessToast(
        "Message sent successfully! We'll get back to you soon."
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
            <label
              htmlFor="service"
              className="block text-white font-bold text-lg mb-[12px]"
            >
              Service
            </label>
            <div className="relative">
              <select
                id="service"
                defaultValue=""
                className={`border border-[#D6DDED] appearance-none rounded-[10px] text-white h-[70px] outline-none w-full bg-transparent px-4 caret-white placeholder:text-[#8987A1] placeholder:font-normal placeholder:text-lg`}
                {...register("service", {
                  required: "Please select a service",
                  validate: (value) =>
                    value !== "" || "Please select a valid service",
                })}
              >
                {services.map((service) => (
                  <option
                    key={service.value}
                    value={service.value}
                    disabled={service.value === ""}
                  >
                    {service.label}
                  </option>
                ))}
              </select>
              <div className="absolute top-1/2 right-5  h-0 w-0 border-[6px] border-t-white border-l-transparent border-r-transparent border-b-transparent" />
            </div>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1">
                {errors.service.message}
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
