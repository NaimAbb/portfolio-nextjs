"use client";

import Input from "@/components/input";
import Section from "@/components/section";
import React from "react";

export default function HomeContactUsSection() {
  function handleOnSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <Section
      id="contact"
      className="my-28"
      title="Get In Touch"
      subtitle="Lets work together"
    >
      <div className="w-[700px] max-w-full px-4 mx-auto mt-14">
        <form action="" className="space-y-7" onSubmit={handleOnSubmit}>
          <Input title="Name" id="name" placeholder="full name" />
          <Input
            title="Email"
            id="email"
            placeholder="example@email.com"
            type="email"
          />
          <Input tag="textarea" title="Message" id="message" />
          <button className="bg-white rounded-[10px] text-base font-bold text-black w-full inline-block py-4">
            Get in Touch
          </button>
        </form>
      </div>
    </Section>
  );
}
